const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vbwbv4w.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();
    //collections
    const categoriesCollection = client
      .db("arabic-bangla")
      .collection("categories");
      const subCategoriesCollection = client
      .db("arabic-bangla")
      .collection("sub-category");

    //apis
    //get all categories
    app.get("/categories", async (req, res) => {
      const categories = await categoriesCollection.find({}).toArray();
      res.send(categories);
    });
    //get a category
    app.get("/category/:id", async (req, res) => {
      const category = await categoriesCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(category);
    });
    app.put("/category/:id", async (req, res) => {
      const category = req.body;
      const filter = { _id: new ObjectId(req.params.id) };
      const updatedDoc = {
        $set: category,
      };
      const options = { upsert: true };
      const result = await categoriesCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
    // add sub category
    app.post('/sub-category', async (req, res) => {
      const subCategory = req.body;
      const result = await subCategoriesCollection.insertOne(subCategory);
      res.send(result);
    });

    console.log("Connected to Database");
  } finally {
  }
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Arabic-Bangla");
});
app.listen(port, () => console.log(`Listening on port ${port}`));

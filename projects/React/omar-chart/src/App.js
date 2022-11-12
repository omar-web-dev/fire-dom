import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Route/Route';

function App() {
  return (
    <div className="max-w-[375px] border">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;

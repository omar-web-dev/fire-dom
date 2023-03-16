import React, { useState } from 'react';
import ShippingProduct from './Shipping-product';

const ShippingCart = () => {

    const [quantity, setQuantity] = useState(1);

    const shippingProduct = [
        {
            id: 1,
            title: "This is a Product",
            img: 'https://static-01.daraz.com.bd/p/f7df4f693a8a8f717aca00f39c68c023.png_720x720.jpg_.webp',
            price: 234,
            color: "Red",
            size: "Small",
            quantity: 1,
        },
        {
            id: 2,
            title: "This is a Product",
            img: 'https://static-01.daraz.com.bd/p/f7df4f693a8a8f717aca00f39c68c023.png_720x720.jpg_.webp',
            price: 234,
            color: "Red",
            size: "Small",
            quantity: 1,
        }
    ]



    return (
        <div className='max-w-[912px] lg:p-0 px-4 mx-auto'>
            <h2 className='text-3xl font-bold'>Shipping Card</h2>
            <div className="md:flex  mt-8">
                <div className='md:w-3/5'>
                    {shippingProduct.map(item => (
                        <ShippingProduct key={item.id} item={item} setQuantity={setQuantity} quantity={quantity}/>
                    ))}
                </div>
                <div className='md:w-2/5 md:ml-4 bg-[#F9FAFC] md:px-4 md:mb-0 mb-4'>
                    <h4 className='font-semibold text-xl'>Order Summary</h4>
                    <div className='flex justify-between border-b-2 py-2'>
                        <p>Subtotal</p>
                        <p className='font-semibold'>$99.00</p>
                    </div>
                    <div className='flex justify-between border-b-2 py-2'>
                        <p>Shipping estimate
                            <span className='w-4 h-4 rounded-[50px] bg-gray-400 px-2 text-gray-100 hover:bg-gray-700 hover:text-white ml-2'>
                                ?</span>
                        </p>
                        <p className='font-semibold'>$5.00</p>
                    </div>
                    <div className='flex justify-between border-b-2 py-2'>
                        <p>Tax estimate
                            <span className='w-4 h-4 rounded-[50px] bg-gray-400 px-2 text-gray-100 hover:bg-gray-700 hover:text-white ml-2'>
                                ?</span>
                        </p>
                        <p className='font-semibold'>$3.12</p>
                    </div>
                    <div className='flex justify-between py-2'>
                        <p>Order Total </p>
                        <p className='font-semibold'>$112.12</p>
                    </div>
                    <div className=''>
                        <button className='w-full font-semibold py-4 rounded-md bg-[#5046E5] text-gray-100'>Checkout</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShippingCart;
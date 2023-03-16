import React, { useState } from 'react';

const ShippingProduct = ({ item, quantity, setQuantity }) => {

    const { title, img, price, color, size } = item

    const productPrice = price * quantity;

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className='sm:flex justify-between py-6 border-t'>
            <div className='flex h-60 '>
                <img className='h-full w-52' src={img} alt="amage" />
                <div className='flex flex-col justify-between ml-4 py-2'>
                    <div >
                        <h4 className='font-bold'>{title} </h4>
                        <div className='py-2 '>
                            <span className='text-[#88898C] border-r-2 pr-2'> {color} </span>
                            <span className='pl-2 text-[#88898C]'> {size} </span>
                        </div>
                        <p className='font-semibold'>${productPrice}</p>
                    </div>
                    <p>✔ in stock</p>
                </div>
            </div>

            <div className='flex sm:justify-between  md:w-1/3 sm:w-1/2'>
                <div className='flex items-start pt-2'>
                    <button className={`${'text-2xl px-2 bg-gray-100 hover:bg-gray-200 text-center text-gray-400 hover:text-gray-600'}`} disabled={quantity === 1} onClick={handleDecrease}>-</button>
                    <input type="text" className='text-gray-800 bg-white text-center p-1 w-10' value={quantity} readOnly />
                    <button className={`${'text-2xl px-2 bg-gray-100 hover:bg-gray-200 text-center text-gray-400 hover:text-gray-600'}`} onClick={handleIncrease}>+</button>
                </div>
                <div>
                    <button className='w-8 h-8 rounded-[50px] bg-gray-300 text-red-200 bg-red-50 hover:bg-red-100 hover:text-red-500 text-xl text-center item-center flex justify-center mt-2'>x</button>
                </div>
            </div>
         </div>
    );
};

export default ShippingProduct;
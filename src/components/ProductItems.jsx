import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import { assets } from '../assets/assets';

const ProductItems = ({ id, image, price, desc, title, category }) => {
    const { counters, incrementCounter, decrementCounter } = useContext(CounterContext);

    const counter = counters[id] || 0;

    return (
        <div
            key={id}
            className="border rounded-lg overflow-hidden hover:outline shadow-lg transition-shadow duration-300"
        >
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                {counter === 0 ? (
                    <img
                        onClick={() => incrementCounter(id)}
                        className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-full bg-white"
                        src={assets.add_icon_white}
                        alt="Add Icon"
                    />
                ) : (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-2 py-1 rounded-full bg-white shadow-md">
                        <img
                            onClick={() => decrementCounter(id)}
                            className="w-7 cursor-pointer"
                            src={assets.remove_icon_red}
                            alt="Remove Icon"
                        />
                        <span className="text-black font-medium">{counter}</span>
                        <img
                            onClick={() => incrementCounter(id)}
                            className="w-7 cursor-pointer"
                            src={assets.add_icon_green}
                            alt="Add Icon"
                        />
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-500">${price}</p>
            </div>
        </div>
    );
};

export default ProductItems;

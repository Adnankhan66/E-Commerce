import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counters, setCounters] = useState({}); // Object to store counters for each product by id

    const incrementCounter = (id) => {
        setCounters((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const decrementCounter = (id) => {
        setCounters((prev) => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0,
        }));
    };

    return (
        <CounterContext.Provider value={{ counters, incrementCounter, decrementCounter }}>
            {children}
        </CounterContext.Provider>
    );
};

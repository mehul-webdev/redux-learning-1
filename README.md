Setting Up Redux Toolkit in a React Application

This guide walks you through setting up Redux Toolkit in a React project.

📌 1. Install Dependencies

First, install the required packages:

npm install @reduxjs/toolkit react-redux

📌 2. Create the Store

Create a store folder inside your project and add an index.js file inside it.

📂 store/index.js

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
reducer: {},
});

The reducer object is where we add all slices (reducers) for our application.

📌 3. Create a Redux Slice

Now, create a counterSlice.js file inside the store folder.

📂 store/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
name: 'counter',
initialState: {
counter: 0
},
reducers: {
increment(state) {
state.counter += 1; // Redux Toolkit uses Immer to allow state mutation.
},
decrement(state) {
state.counter -= 1;
}
}
});

// Export actions for use in components
export const { increment, decrement } = counterSlice.actions;

// Export reducer to add it to the store
export default counterSlice.reducer;

📌 4. Add the Counter Reducer to the Store

Modify store/index.js to include the counter reducer:

📂 Updated store/index.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
reducer: {
counter: counterReducer, // State name : Reducer function
},
});

📌 5. Provide the Store to the Application

Wrap your application with Provider from react-redux in index.js or main.js.

📂 index.js (or main.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
<App />
</Provider>
);

📌 6. Using Redux State and Actions in Components

✅ Access State using useSelector

import { useSelector } from 'react-redux';

const Counter = () => {
const counter = useSelector(state => state.counter.counter);

    return <h1>Counter: {counter}</h1>;

};

✅ Dispatch Actions using useDispatch

import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

const CounterControls = () => {
const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );

};

🎉 Redux Toolkit is Now Set Up!

You can now use useSelector to get state and useDispatch to trigger actions in your components. 🚀

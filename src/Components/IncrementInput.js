import React from 'react';
import '../Css/Style.css';
const IncrementInput = ({ onFormSubmit }) => {
    const addAction = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.num.value;
        const numericValue = parseInt(inputValue, 10);
        onFormSubmit(numericValue);
    };

    return (
        <form onSubmit={addAction}>
            <input id='inputBox' type="number" name="num" defaultValue={0} />
            <button id='submitBtn' type="submit">Add</button>
        </form>
    );
};
export default IncrementInput;
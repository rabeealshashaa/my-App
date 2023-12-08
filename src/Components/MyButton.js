import React, { useState } from 'react';
import IncrementInput from './IncrementInput';
import '../Css/Style.css';
import logo from '../images/logo.jpg';
function MyButton() {
    const [i, setI] = useState(0);

    const clickAction = () => {
        setI(i + 1);
    };

    const handleFormSubmit = (numericValue) => {
        setI(i + numericValue);
    };

    return (
        <div >
            <img id='logoIcon' src={logo} alt='logo' />
            <div className='title'>
                <h1>Welcome to Onpassive</h1>
                <p>Live Interview</p>
            </div>

            <div className='container'>
                <div className='formContent'>

                    <button id="btn1" onClick={clickAction}>
                        Click {i} times
                    </button>

                    <button id="btn2" onClick={clickAction}>
                        Click {i} times
                    </button>

                </div>

                <div className='form'>
                    <IncrementInput onFormSubmit={handleFormSubmit} />
                </div>

            </div>

        </div>

    );
}

export default MyButton;
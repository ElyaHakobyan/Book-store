import React, { useState } from 'react';
import Card from '../Card/Card';
import data from '../books.json';
import './Header.css';

function Header() {

    const [inputValue, setInputValue] = useState("");
    const [cardCount, setCardCount] = useState(0);

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleClick() {
        setCardCount(inputValue);
    }

    return (
        <>
            <div className="header">
                <input className="header-input" type="number" min="1" max="16" onChange={handleChange} value={inputValue}></input>
                <button className="header-button" onClick={handleClick}>OK</button>
            </div>
            <div className="parent">
                {data.map((el, i) => {
                    return i < cardCount && <Card key={i} author={data[i].author} title={data[i].title} imgPath={data[i].path} />
                })}
            </div>
        </>
    )
}

export default Header;
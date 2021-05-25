import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <p className="author">{props.author}</p>
            <p className="book-name">{props.title}</p>
            <img className="book-img" src={props.imgPath} />
        </div>
    )
}

export default Card
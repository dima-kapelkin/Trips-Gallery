import React from "react"
import './card.css';
import card1img from '../../assets/gallery1.png'

function GalleryCard (props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.city} />
                <div className="yellow">
                    <div className="badge">{props.type}</div>
                    {props.places > 0 && ( 
                        <div className="people">{props.places} 👥</div>
                    )}
                </div>
            <div className="overlay">
            <span>
                {props.city}, {props.month} — {props.price}
            </span>
            </div>
    </div>
    )
}

export default GalleryCard
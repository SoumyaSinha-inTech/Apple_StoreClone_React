import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.js'

export default function ProductCard(props) {
    return (
        <div className="card" style={{ width: "350px", maxHeight: "600px", minHeight: "500px" }}>
            <img src={props.products.image} style={{ maxHeight: "300px", minHeight: "300px" }} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.products.name}</h5>
                <h5 className="card-title">₹{props.products.price}/-</h5>
                <p className="card-text">{props.products.description}</p>
                <Link style={{
                    width: "120px",
                    height: "40px",
                    backgroundColor: "rgb(10, 100, 255)",
                    borderRadius: "20px",
                    color: "white",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    textDecoration: "none",
                }} className="nav-link" to={`/products/${props.products.id}`}>Learn More</Link>
            </div>
        </div>
    )
}

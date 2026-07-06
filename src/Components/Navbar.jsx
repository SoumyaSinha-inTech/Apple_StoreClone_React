import React from 'react'
import { useState } from "react";
import bag from './bag.png'
import { Link, useNavigate } from 'react-router-dom'
import products from '../data/products';

export default function Navbar(props) {
  let navigate = useNavigate();
  let searchedProduct = products.find((product) => product.name.toLowerCase().includes(props.searchText))
  const [showSearch, setShowSearch] = useState(false);
  const search = (e) => {
    e.preventDefault();
    if (searchedProduct) {
      navigate(`/products/${searchedProduct.category}`)
    } else {
      alert("No Product Found !")
    }
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontSize: '12px' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: '22px', marginLeft: '15vw' }}>
              <li className="nav-item">
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" width="15" height="15" style={{ marginTop: '8px' }} />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/mac">Mac</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/ipad">iPad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/iphone">iPhone</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/watch">Watch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/airpods">AirPods</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">TV & Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/accessories">Accessories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => setShowSearch(!showSearch)}> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z" /></svg></Link>
              </li>
              <li className="nav-item">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <Link className="nav-link" to="/cart">
                    <img
                      src={bag}
                      width="15"
                      height="15"
                      style={{ marginTop: "-1px" }}
                    />
                  </Link>

                  <span
                    style={{
                      position: "absolute",
                      top: "-1px",
                      right: "-1px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      width: "18px",
                      height: "18px",
                      fontSize: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {totalItems}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.alertCart === true &&
        <div class="alert alert-success" role="alert">
          Added to Cart!
        </div>
      }

      {showSearch && (
        <div style={{ textAlign: "center", padding: "15px" }}>
          <form onSubmit={(e) => search(e)} >
            <input
              onChange={(e) => props.setSearchtext(e.target.value)}
              type="text"
              placeholder="Search products..."
              style={{
                width: "350px",
                height: "40px",
                borderRadius: "20px",
                border: "1px solid gray",
                padding: "0 15px",
                outline: "none",
              }}
            />
          </form>
        </div>
      )}
    </>
  )
}

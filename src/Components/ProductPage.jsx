import React from 'react'
import products from '../data/products';
import { Link, useParams } from 'react-router-dom'

export default function ProductPage(props) {
    const param=useParams();
    const id=Number(param.id);
    const product = products.find((product)=>Number(product.id)===id)

    const addItem=()=>{
        let updatedCart=[...props.cartItem]
        let foundItem=props.cartItem.find((item)=>item.id===product.id)
        if(foundItem){
            foundItem.quantity++
        } else {
        updatedCart.push( {...product,quantity:1})
        }
        let newTotal=props.total+product.price;
        props.setTotal(newTotal)
        localStorage.setItem("totalAmt",newTotal)
        props.setCartitem(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        props.setAlert(true)
         setTimeout(() => {
        props.setAlert(false);
    }, 2000); // disappears after 2 seconds
    }
    // const product = products[id-1];
    return (
        <div
    style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgb(246, 246, 246)",
        padding: "30px 15px"
    }}
>

    <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            maxWidth: "1300px",
            margin: "0 auto"
        }}
    >

        {/* Product Image */}
        <div
            style={{
                backgroundImage: `url(${product.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",

                width: "100%",
                maxWidth: "450px",
                height: "400px",
                flex: "1 1 350px"
            }}
        ></div>

        {/* Product Details */}
        <div
            style={{
                backgroundColor: "white",
                textAlign: "left",

                width: "100%",
                maxWidth: "700px",

                borderRadius: "15px",
                padding: "40px",

                flex: "1 1 450px"
            }}
        >

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            {product.specifications ? (
                <>
                    <p style={{ color: "gray" }}>
                        SPECIFICATIONS
                    </p>

                    <ul
                        style={{
                            color: "gray",
                            listStyle: "none",
                            paddingLeft: 0
                        }}
                    >
                        <li>{product.specifications.chip}</li>
                        <li>{product.specifications.ram}</li>
                        <li>{product.specifications.storage}</li>
                        <li>{product.specifications.display}</li>
                        <li>{product.specifications.battery}</li>
                    </ul>
                </>
            ) : (
                <p></p>
            )}

            <br />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "15px"
                }}
            >

                <h3 style={{ margin: 0 }}>
                    ₹{product.price}/-
                </h3>

                <Link
                    className="nav-link"
                    to="/cart"
                    onClick={addItem}
                    style={{
                        width: "120px",
                        height: "42px",

                        backgroundColor: "rgb(10,100,255)",
                        color: "white",

                        borderRadius: "22px",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        textDecoration: "none"
                    }}
                >
                    Buy Now
                </Link>

            </div>

            <br />

            <p style={{ color: "gray" }}>
                Rating: {product.rating} ⭐️
            </p>

        </div>

    </div>

</div>
    )
}

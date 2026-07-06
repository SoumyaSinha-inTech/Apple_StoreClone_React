import React, { useState } from 'react'

export default function Cart(props) {


    let cartList = JSON.parse(localStorage.getItem("cart")) || [];
    const decrease = (id) => {
        let newArray = JSON.parse(localStorage.getItem('cart'));
        let prod = newArray.find((elem) => elem.id === id)
        if (!prod) { return; }
        console.log(prod.quantity)
        if (prod.quantity === 1) {
            newArray = JSON.parse(localStorage.getItem('cart')).filter((item) => item.id != id);
            let newTotal = props.total - prod.price;
            props.setTotal(newTotal)
            localStorage.setItem("totalAmt", newTotal)
        } else if (prod.quantity < 0) {
            return;
        }
        else {
            prod.quantity--;
            let newTotal = props.total - prod.price;
            props.setTotal(newTotal)
            localStorage.setItem("totalAmt", newTotal)
        }
        props.setCartitem(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));

        if (newArray.length === 0) {
            props.setTotal(0);
            localStorage.setItem("totalAmt", 0);
        }
    }
    const increase = (id) => {
        let newArray = JSON.parse(localStorage.getItem('cart'));
        let prod = newArray.find((elem) => elem.id === id)
        if (!prod) { return; }
        prod.quantity++;
        let newTotal = props.total + prod.price
        props.setTotal(newTotal)
        localStorage.setItem("totalAmt", newTotal)
        props.setCartitem(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));
    }

    const deleteItem = (id) => {
        let newArray = JSON.parse(localStorage.getItem('cart')).filter((item) => item.id != id);
        let prod = JSON.parse(localStorage.getItem('cart')).find((elem) => elem.id === id)
        let newTotal = props.total - prod.price;
        props.setTotal(newTotal)
        localStorage.setItem("totalAmt", newTotal)
        props.setCartitem(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));

        if (newArray.length === 0) {
            props.setTotal(0);
            localStorage.setItem("totalAmt", 0);
        }
    }


    return (
        <>
            <div style={{ backgroundColor: 'rgb(246, 246, 246)', minHeight: '86vh' }}>

                <div className="container">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "20px",
                            paddingTop: "80px",
                            paddingBottom: "30px"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "clamp(40px,8vw,80px)"
                            }}
                        >
                            My Cart
                        </h1>
                        <div>
                            <br />
                            <h4 style={{ textAlign: 'right' }}>Total amount : {"₹ " + props.total + " /-"}</h4>
                        </div>
                    </div>
                </div>
                {cartList.length === 0 &&
                    <>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "50vh"
                            }}
                        >
                            <p style={{ color: 'gray' }}>Cart is Empty!</p>
                        </div>
                    </>
                }
                {cartList.length > 0 && cartList.map((item) => (
                    <div key={item.id}>

                        <div
                            className="container"
                            style={{
                                backgroundColor: 'white',
                                width: "100%",
                                maxWidth: "1200px",
                                margin: "0 auto",
                                minHeight: '180px',
                                marginBottom: '20px',
                                borderRadius: '15px'
                            }}
                        >

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "20px 30px",
                                    gap: "25px",
                                    flexWrap: "wrap"
                                }}
                            >


                                {/* Product Image */}
                                <div
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        width: "100%",
                                        height: "170px",
                                        maxWidth: "170px",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        flexShrink: 0
                                    }}
                                ></div>

                                {/* Product Details */}
                                <div
                                    className="cart-price"
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        paddingLeft: "20px",
                                        minWidth: "250px"
                                    }}
                                >
                                    <h5>{item.name}</h5>
                                    <p style={{ color: 'gray', maxWidth: "500px" }}>
                                        {item.description}
                                    </p>
                                </div>

                                {/* Price & Quantity */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        gap: '15px',
                                        minWidth: '180px'
                                    }}
                                >
                                    <h5>₹ {(item.price) * (item.quantity)} /-</h5>

                                    <div
                                        className="cart-item"
                                        style={{
                                            display: 'flex',
                                            gap: '14px',
                                            width: "100%",
                                            maxWidth: '120px',
                                            height: '40px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#f5f5f7',
                                            color: 'black',
                                            border: '1px solid #d2d2d7',
                                            borderRadius: '20px'
                                        }}
                                    >
                                        <div onClick={() => decrease(item.id)} style={{ cursor: 'pointer' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                            </svg>
                                        </div>

                                        <span style={{ fontSize: '22px' }}>{item.quantity}</span>

                                        <div onClick={() => increase(item.id)} style={{ cursor: 'pointer' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div onClick={() => deleteItem(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                ))}


            </div>
        </>
    )
}

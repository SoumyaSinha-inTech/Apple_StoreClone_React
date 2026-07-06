import React from 'react'
import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function Product(props) {
    let searchingProd=props.searchText.toLowerCase()
    let updatedProduct;
    if(searchingProd!==''){updatedProduct = products.filter((product)=>{return product.name.toLowerCase().includes(searchingProd)})}
     updatedProduct = products.filter((product)=>{return props.category===product.category})
    
  return (
    <>
     <div
            className="container"
            style={{
                paddingTop: "40px",
                paddingBottom: "40px"
            }}
        >
            <div className="row g-4 justify-content-center">

                {updatedProduct.map((product) => (

                    <div
                        key={product.id}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                    >
                        <ProductCard products={product} />
                    </div>

                ))}

            </div>
        </div>
    </>
  )
}

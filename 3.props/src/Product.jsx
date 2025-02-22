import React from 'react'

function Product({ productName, price }) {

    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>
            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {price}</div>
            </div>
        </div>
    )
}

export default Product

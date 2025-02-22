import React from 'react'

function Course({ course }) {
    const { id, title, description, price, image } = course;
    return (
        <div className='course'>
            <div>
                <img src={image} width={210} height={110} />
                <h4 className='course-title'>{title}</h4>
                <h5 className='course-desc'>{description}</h5>
                <h3 className='course-price'>{price} ₺</h3>
            </div>
        </div>
    )
}

export default Course

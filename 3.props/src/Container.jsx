import React from 'react'

function Container({ children }) {
    return (
        <div>
            <div>
                container
                {children}
            </div>
        </div>
    )
}

export default Container

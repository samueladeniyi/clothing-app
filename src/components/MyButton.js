import React from 'react'
import './my-button.scss'

function MyButton({children, isGoogleSignIn, ...otherProps}) {
    return (
        <div>
            <button className= {`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`} {...otherProps}>{children}</button>
        </div>
    )
}

export default MyButton

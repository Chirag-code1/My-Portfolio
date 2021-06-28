import React from 'react'
import "./footer.style.css"

const Footer = () => {
    return (
        <div>
            <div>
      <div className="py-2 text-center footer-style">© CHIRAG &nbsp; {new Date().getFullYear()}</div>
    </div>
        </div>
    )
}

export default Footer

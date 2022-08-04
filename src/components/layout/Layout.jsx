import React from "react"
// import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import NavbarPrincipal from "./navbar/Navbar"

class Layout extends React.Component{
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <NavbarPrincipal/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </>
        )
    }
}

export default Layout
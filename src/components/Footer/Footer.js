import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="container">
                      
            <span className="text-muted">
                <p>&copy; {(new Date().getFullYear())} FiKa Delicatessen. </p>
            </span>
            </footer>
        )
    }
}
export default Footer;

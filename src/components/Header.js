import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="image avatar" /></a>
                    <h1><strong>I am gitpalin, freelance<br />
                    web developer from Tku.</strong><br />
                    <a href="https://github.com/GitPalin" target="blank">Projects @ GitHub</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

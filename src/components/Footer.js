import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; GitPalin 2019</li><li>Design: <a href="https://github.com/GitPalin" target="blank">GitPalin</a>, based on <a href="https://html5up.net/strata">html5up</a> template.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

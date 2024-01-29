import React from 'react'
import './Footer.css'
import { scrollToSection } from '../../utilities/scrollToSection'
function Footer() {
    return (
        <footer className="footer" data-testid="footer">
            <div className="container">
                <p className="copyright">&copy; 2024 All Rights Reserved by <p  onClick={()=>scrollToSection("home")} className="copyright-link">Valeria Jiménez Bedoya</p></p>
            </div>
        </footer>
    )
}

export default Footer
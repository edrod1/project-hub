import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div>
            <div className="footer">
                <a href="https://github.com/edrod1"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/edgarrodriguezdev"><LinkedInIcon /></a>

            </div>
            <div className="footer-c">
                <p>Copyright {currentYear} Edgar Rodriguez</p>
            </div>
        </div>
    )
}

export default Footer
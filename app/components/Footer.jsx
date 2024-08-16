

// components/Header.js
import { BrandGithub, BrandLinkedin, Mail, Phone } from 'tabler-icons-react';

const Footer = () => (
    <footer className="bg-black">
        <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div class="social-contact d-flex justify-content-center">
                    <div className='mx-2'>
                        <a href="https://github.com/MrPK4699" target="_blank" className="btn m-2 m-sm-1" id="contact-github">
                            <BrandGithub class="bx bxl-github"/>
                            <br/>
                            GitHub Profile
                        </a>
                    </div>
                    <div className='mx-2'>
                        <a href="https://www.linkedin.com/in/4699pankajkhatri" target="_blank" className="btn m-2 m-sm-1" id="contact-linkedin">
                            <BrandLinkedin/>
                            <br/>
                            LinkedIn
                        </a>
                    </div>
                    <div className='mx-2'>
                        <a href="mailto:4699pankajkhatri@gmail.com" target="_blank" className="btn m-2 m-sm-1" id="contact-email">
                            <Mail />
                            <br/>
                            E-mail
                        </a>
                    </div>
                    <div className='mx-2'>
                        <a href="tel:+91 7617434304" target="_blank" className="btn m-2 m-sm-1" id="contact-phone">
                            <Phone />
                            <br/>
                            Phone
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

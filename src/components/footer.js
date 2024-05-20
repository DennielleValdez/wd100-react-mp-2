const Footer = () => {
    return ( 
        <>
        
        <footer className="footer">
        <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-md-4 aboutFooter">
                        <h3>About Us</h3>
                        <br></br>
                        <p>CryptoNews is your go-to source for the latest updates in the world of cryptocurrencies. We provide timely and reliable news, insightful analysis, and comprehensive guides to help you navigate the rapidly evolving landscape of digital currencies.</p>
                    </div>

                    <div className="col-md-4 contactFooter">
                        <h3>Contact Us</h3>
                        <br></br>
                        <p>123 Street Name<br></br><br></br>City, State, 12345<br></br><br></br>Email: cryptonews@gmail.com</p>
                    </div>

                    <div class="col-md-4 iconsFooter">
                        <h3>Connect with us:</h3>
                        <br></br>
                        <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <br></br>
                        <br></br>
                        <h3>Stay Updated!</h3>
                        <p>Sign up now for latest updates</p>
                        <form className="d-flex">
                            <input
                            className="form-control me-2"
                            type="email"
                            placeholder="Enter your email address"
                            aria-label="Email"
                            required
                            />
                            <button className="btn btn-outline-light" type="submit">
                            Sign up
                            </button>
                        </form>
                    </div>
                    <hr></hr>
                    <div class="copy">
                        &copy; 2024 CryptoNews. All rights reserved.
                    </div>

                </div>
            </div>
            </footer>
       
        </>
     );
}
 
export default Footer;


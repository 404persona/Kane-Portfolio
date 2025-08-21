import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer class="main-footer">
            <div class="footer-bottom pt-50 pb-40">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="copyright-text">
                                <p>
                                    Copyright @{currentYear}, <a href="#">Anas </a> All
                                    Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Column 1</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Column 2</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Column 3</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <a className="text-dark" href="#">Developed by Dion Shalaku</a>
            </div>
        </footer>
    );
}

export default Footer;

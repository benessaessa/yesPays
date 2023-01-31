import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row ,Col, CardText, InputGroup, InputGroupText, Input,NavLink } from 'reactstrap';
import imgLogo from "../images/brand-logo-yellow.svg";
import sendImage from "../images/send.svg";
import "./style.css";
const Footer = () => {
    return ( 
        <div className='bg-secondary py-3 footer'>
            <Container>
                <Row className='border-bottom pb-3 border-opacity-25 border-secondary'>
                    <Col lg="6" className='pt-4 border-end border-opacity-25 border-secondary'>
                        <img src={imgLogo} />
                        <CardText className='text-light pt-3' tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet laudantium doloremque, illo quo magni? Assumenda ratione explicabo similique dolores minima aut perspiciatis qui.</CardText>
                        <CardText className='text-light pt-1' tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet laudantium doloremque, illo quo magni? Assumenda ratione explicabo similique dolores minima aut perspiciatis qui, nihil vitae distinctio vel dignissimos nam!</CardText>
                        <CardText className='text-light pt-1' tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet laudantium doloremque, illo quo magni? Assumenda ratione explicabo similique dolores minima aut perspiciatis qui.</CardText>
                    </Col>
                    <Col lg="6" className='ps-lg-4 pt-3'>
                        <CardText tag="h5" className='text-center text-md-start'>Subscribe to our newsletter</CardText>
                        <form className='formSubscribe pb-3'>
                            <InputGroup>
                                <Input type="email" className='border-0 shadow-none rounded-top-left-5' required placeholder="Enter Your Email" />
                                <InputGroupText className='bg-white border-0'>
                                    <button className='btn bg-primary rounded-5'>Subscribe <img src={sendImage} /></button>
                                </InputGroupText>
                            </InputGroup>
                        </form>
                        <div className='pt-3 d-flex justify-content-between'>
                            <div>
                                <Link to='/about' className='nav-link'>About US</Link>
                                <Link to='/about' className='nav-link'>Contact US</Link>
                                <Link to='/about' className='nav-link'>Track Order</Link>
                                <Link to='/about' className='nav-link'>Terms & Conditions </Link>
                                <Link to='/about' className='nav-link'>Privacy Policy </Link>
                                <Link to='/about' className='nav-link'> Sell with Us</Link>
                                <Link to='/about' className='nav-link'> Shipping and Returns</Link>
                            </div>
                            <div className='social_images'>
                                <CardText tag="p">
                                    <a href="https://www.facebook.com/yeshtery/" target="_blank"><img src="https://www.yeshtery.com/yeshtery/images/social/facebook@2x.png" alt="" /> facebook</a>
                                </CardText>
                                <CardText tag="p">
                                    <a href="https://www.facebook.com/yeshtery/" target="_blank"><img src="https://www.yeshtery.com/yeshtery/images/social/instagram@2x.png" alt="" /> Instagram</a>
                                </CardText>
                                <CardText tag="p">
                                    <a href="https://www.facebook.com/yeshtery/" target="_blank"><img src="https://www.yeshtery.com/yeshtery/images/social/facebook@2x.png" alt="" /> Youtube</a>
                                </CardText>
                                <CardText tag="p">
                                    <a href="https://www.facebook.com/yeshtery/" target="_blank"><img src="https://www.yeshtery.com/yeshtery/images/social/linkedin@2x.png" alt="" /> Linkedin</a>
                                </CardText>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col md="4">
                        <CardText className='pt-2 text-center text-md-start' tag="p">© 2023 yeshtery, all rights reserved.</CardText>
                    </Col>
                    <Col md="4" className='text-center py-3 py-md-0'>
                        <img src="https://www.yeshtery.com/yeshtery/images/cash.png" className='img-fluid me-2' alt="" />
                        <img src="https://www.yeshtery.com/yeshtery/images/visa.png" className='img-fluid me-2' alt="" />
                        <img src="https://www.yeshtery.com/yeshtery/images/matercard.png" className='img-fluid me-2' alt="" />
                    </Col>
                    <Col md="4" className='text-md-end text-center pt-2'>
                        <CardText tag="p" className='fw-bold'>
                            Powered By
                            <img src="https://www.yeshtery.com/yeshtery/images/nas_nav.svg" className='img-fluid' alt="" />
                        </CardText>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Footer;
import React from 'react'
import { Card, CardBody, CardImg, CardText, NavLink } from 'reactstrap';
// import productImage from "../images/product1.png"
import logoImage from "../images/adidas.png"
const CardItem = ({product_image,name,first_price,second_price,offer,owner}) => {
    return ( 
        <NavLink href='/product'>
            <Card className='cardProduct'>
                <CardImg src={product_image} className="imgProduct px-2 pt-2" />
                <CardBody>
                    <CardText tag="p" className='fw-bold mb-2'>{name}</CardText>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <CardText tag="h4" className='mb-1 text-price fw-bold'>
                                {first_price} <span className='font-size-14'>LE</span>
                            </CardText>
                            <div className='d-flex'>
                                <CardText className='mb-0 text-muted' tag="del">{second_price} LE</CardText>
                                <CardText tag="p" className='badge bgStar mb-0 ms-2'>{offer}%</CardText>
                            </div>
                        </div>
                        <div>
                            <img src={logoImage} className="logoProduct"/>
                        </div>
                    </div>
                    <CardText tag="p" className='text-center mb-1 pt-2 font-size-14'>
                        <i className='fas fa-star textStar'></i>
                        <i className='fas fa-star textStar'></i>
                        <i className='fas fa-star textStar'></i>
                        <i className='fas fa-star textStar'></i>
                        <i className='fas fa-star-half-alt textStar'></i> 
                        <span>4.5 of 5</span>
                    </CardText>
                    <CardText tag="p" className='text-center font-size-14'>Pickup From : <span className='fw-bold'>{owner}</span></CardText>
                </CardBody>
            </Card>
        </NavLink>
     );
}
 
export default CardItem;
import React from "react";
import "./style.css";
import { Col, Container, Nav, NavItem, Row } from "reactstrap";
import imgLogo from "../images/brand-logo-black.svg";
import cartImage from "../images/cart.png";
import mapImage from "../images/map.png";
import phoneImage from "../images/phone.png";
import adidasImage from "../images/adidas.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="bg-primary py-2">
        <Container>
          <Row>
            <Col lg="7" md="4">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <button className="btn me-2">
                    <i className="fa fa-bars fa-lg"></i>
                  </button>
                  <Link to="/home" className="pt-1">
                    <img src={imgLogo} />
                  </Link>
                </div>
                <p className="pt-1 mb-1 mt-1 d-none d-lg-block">
                  <i className="fa fa-angle-left"></i>
                  <span className="px-1 font-size-14">
                    Valentine's Day offers! Buy Two get one free
                    <b className="ps-2 text-decoration-underline">Shop Now </b>
                  </span>
                  <i className="fa fa-angle-right"></i>
                </p>
              </div>
            </Col>
            <Col lg="5" md="8">
              <Nav className="navMenu pt-3 pt-md-0 justify-content-lg-end">
                <NavItem>
                  <Link className="nav-link" to="/contact">
                    <img src={phoneImage} alt="" />
                    Contct Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/order">
                    <img src={cartImage} alt="" />
                    Track Order
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/store">
                    <img src={mapImage} alt="" />
                    Find A Store
                  </Link>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="py-1 justify-content-between">
            <Col lg="3" md="3" className="inputSearch pt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </Col>
            <Col lg="3" md="3">
              <img src={adidasImage} className="img-fluid mx-auto d-block" />
            </Col>
            <Col lg="5" md="6">
              <Nav className="navMenu pt-2 justify-content-lg-end">
                <NavItem>
                  <Link className="nav-link position-relative" to="/cart">
                    <span className="badge bg-primary rounded-5 position-absolute top-0 text-black">3</span>
                    <i className="fa fa-shopping-cart pe-2"></i>
                    Cart
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/wishlist">
                    <i className="far fa-heart fa-lg pe-2"></i>
                    Wishlist
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/login">
                    <i className="far fa-user pe-2"></i>
                    Login
                  </Link>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-dark">
        <Container className="pt-0">
          <Nav className="navCollections justify-content-between">
            <NavItem>
              <Link className="nav-link" to="#"> Men</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="#">Women</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="#">Unisex</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="#">Kids</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="#">Best Sellers</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="#">New Arrivals</Link>
            </NavItem>
            <NavItem>
              <Link active className="nav-link" to="#">Offers</Link>
            </NavItem>
          </Nav>
        </Container>
      </div>
    </div>
  );
};

export default Header;

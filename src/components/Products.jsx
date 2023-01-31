import React, { useState } from "react";
import { Button, ButtonGroup, CardText, Col, Container, Row } from "reactstrap";
import data from "../services/Data.json";
import "./style.css";
import CardItem from "./CardItem";
import imageProduct from "../images/product5.png";
import logoImage from "../images/adidas.png";
import imgColor from "../images/product5.png";
import imgColorSecond from "../images/shirt.jpg";
const Products = () => {
  const [items, setItems] = useState(data);
  const [rSelected, setRSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);

  // console.log(setItems);
  return (
    <div>
      <Container>
        <Row className="pt-3 pb-5">
          <Col lg="6">
            <img src={imageProduct} className="img-fluid rounded-3 pb-3" />
          </Col>
          <Col lg="6" className="text-center text-md-start">
            <img src={logoImage} className="img-fluid rounded-3" />
            <CardText tag="h6" className="pt-2 fw-bold">
              Adidas black t-shirt lorem ipsum dolor sit <br />
              amet,consectetuer adipiscing elit.
            </CardText>
            <CardText className="mb-0 text-muted" tag="p">
              Men
            </CardText>
            <CardText tag="p" className="mb-1 pt-2 font-size-14">
              <i className="fas fa-star textStar"></i>
              <i className="fas fa-star textStar"></i>
              <i className="fas fa-star textStar"></i>
              <i className="fas fa-star textStar"></i>
              <i className="fas fa-star-half-alt textStar"></i>
              <span className="px-3">4.5 of 5</span>
              <span className="text-muted fw-bold">22 Rates</span>
            </CardText>
            <CardText tag="p" className="pt-2 border-bottom pb-3">
              <span className="mb-0 text-price pe-3 display-6 fw-bolder">
                9,999 <span className="font-size-14">LE</span>
              </span>
              <del className="mb-0 text-muted">150 LE</del>
              <span tag="p" className="badge bgStar mb-0 ms-2">
                50% off
              </span>
            </CardText>
            <CardText tag="h5" className="fw-bold">
              Size
            </CardText>
            <div className="overflow-auto">
                <ButtonGroup className="btnGroup pb-3">
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected(1)}
                    active={rSelected === 1}
                >
                    Small
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected(2)}
                    active={rSelected === 2}
                >
                    Medium
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected(3)}
                    active={rSelected === 3}
                >
                    Large
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected(4)}
                    active={rSelected === 4}
                >
                    X Large
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected(5)}
                    active={rSelected === 5}
                >
                    XX Large
                </Button>
                </ButtonGroup>
            </div>
            <CardText tag="h5" className="fw-bold pt-3 border-top">
              Color
            </CardText>
            <ButtonGroup className="btnGroup">
              <Button
                color="primary"
                outline
                onClick={() => setColorSelected(1)}
                active={colorSelected === 1}
              >
                <img src={imgColor} className=""/>
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => setColorSelected(2)}
                active={colorSelected === 2}
              >
                <img src={imgColorSecond} className=""/>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <CardText tag="h4" className="text-price fw-bolder mb-1">
          Similar Products
        </CardText>
        <CardText tag="p" className="text-muted fw-bold">
          You may like these products also
        </CardText>
        <div className="d-flex overflow-auto mb-4">
          {items.map((item) => {
            return <CardItem key={item.id} {...item} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Products;

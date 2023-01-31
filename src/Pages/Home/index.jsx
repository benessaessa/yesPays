import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Products from './../../components/Products';
const Home = () => {
  return (
    <div>
      <div className="container pt-3">
        <Breadcrumb className="breadCrumb border-bottom mb-3">
          <BreadcrumbItem>
            <a className="text-black font-size-14" href="#">
              Men
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a className="text-black font-size-14" href="#">
              Clothing
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a className="text-black font-size-14" href="#">
              Tops
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a className="text-black font-size-14" href="#">
              Adidas
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem active>T-Shirt</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Products />
    </div>
  );
};

export default Home;

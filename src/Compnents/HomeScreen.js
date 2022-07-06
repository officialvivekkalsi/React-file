import React, {useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../product";
// import axios from 'axios'
import "../home.css";
import { useDispatch, useSelector } from "react-redux";
// import Products from '../Compnents/products'
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  // const [Products,setProducts]= useState([])
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  console.log('success',productList)
  const { loading, Products } = productList;
  console.log(Products)
  useEffect(() => {
    dispatch(listProducts());
    console.log('useeffect')
    //  async function Fetchdata() {
    //    const {data} = await axios.get('/api/products/')
    //    setProducts(data)
    //  }
    //  Fetchdata()
  }, []);
  

  return (
    <div className="latestpro">
      <div>Latest Products</div>
      <Row>
        {Products.map((products) => (
          <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
            {/* {products.name} */}
            <Product products={products} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;

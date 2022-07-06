import React, { useEffect, useState } from "react";
import { ListGroup, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import Products from "./products";
import Rating from "./Rating";
import axios from "axios";
import "../home.css";

function ProductScreen(history) {
  const { id } = useParams();
  // const Product = Products.find((p) => p._id === Number(id));
  const [Product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
        async function Fetchdata() {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    }
    Fetchdata();
  }, []);

  const Addtocarthandler = () => {
    // console.log('addtohandleclicked',`${id}`)
    history.push(`/cart/${id}?qty=${qty}`);
  };

  return (
    <div className="Prostructure ">
      <Button variant="outline-info">
        <Link className="my-5 mx-5" to="/">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>Go Back
        </Link>
      </Button>
      <Row className="my-5 ">
        <Col md={6}>
          <img src={Product.image} alt={Product.image} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{Product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>
                <Rating
                  value={Product.rating}
                  text={`${Product.numReviews} reviews`}
                  color={"#fcb900"}
                />
              </h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>
                  <h3>Price:</h3>
                </Col>
                <Col>
                  <h3>{Product.price}$</h3>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>DISCRIPTION:{Product.discription}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{Product.brand}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Col>
                <h4>Status:</h4>
              </Col>
              <Col>
                <h2>
                  {Product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </h2>
              </Col>
            </ListGroup.Item>

            {Product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h3>Qty</h3>
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(Product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}

            <ListGroup variant="flush">
              <Button
                onClick={Addtocarthandler}
                type="button"
                disabled={Product.countInStock === 0}
                variant="dark"
              >
                Add to Cart
              </Button>
            </ListGroup>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;

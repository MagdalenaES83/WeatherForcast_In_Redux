import { Component } from "react";
import React from "react";
import { Col, Form, Row, Container, Table, ListGroup } from "react-bootstrap";
import uniqid from "uniqid";
import { useState, useEffect } from "react";
import dotenv from "dotenv";
import { connect } from "react-redux";
dotenv.config();

const mapStateToProps = (state) => ({
  city: state.city,
});

const Head = ({ city }) => {
  //  console.log(city.name);
  return (
    <>
    <div className="search-list">
      <ListGroup>
        <ListGroup.Item className="search-li">{}</ListGroup.Item>
      </ListGroup>
    </div>
  

  
    <Container>
      <Form
      //   onSubmit={this.handleSubmit}
      >
        <Form.Control
          id="search"
          type="search"
          placeholder="Search "
          className="mr-2"
          aria-label="Search"
          //   value={this.state.query}
          //   onChange={this.handleChange}
        />
      </Form>
    </Container>

    {/* ///display cards from query */}
    <Container>
      <Row className="mt-5">
        <Table bordered hover>
          <thead>
            <tr>
              <th>1</th>
              <th>City</th>
              <th>{city.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Base</td>
              <td>{city.base}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Visibility</td>
              <td>{city.visibility}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>yyyyyy</td>
              {/* <td>{city.clouds.map((e) => console.log(e))}</td> */}
            </tr>
            
          </tbody>
        </Table>
        {/* {this.state.jobs                           .map((work) => (// randomAnnonse(1,20)
              <Col xs={6} md={3}>
                <SingleCardQ key={uniqid()} data={work}></SingleCardQ>{" "}
              </Col>
            ))} */}
      </Row>
    </Container>

    <Container>
      <Row className="mt-5">
        {/* {this.state.cards.map((work) => (
              <Col xs={6} md={3}>
                <SingleCard key={uniqid()} data={work}></SingleCard>{" "}
              </Col>
            ))} */}
      </Row>
    </Container>
  </>
  
  )
};

export default connect(mapStateToProps)(Head);

import React, { Component } from "react";
import { Row, Col, Button } from "antd";




export class HomeSec1 extends Component {


    render() {
        return (
            <Row style={{ backgroundColor: 'white' }}>
                <Col
                    className="h-s1"
                    sm={{ span: 6, offset: 3 }}
                    mg={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                    xl={{ span: 6, offset: 3 }}
                >
                    <div className="h-logo"></div>
                </Col>
                <Col
                    className="h-s1"
                    sm={{ span: 10, offset: 1 }}
                    mg={{ span: 10, offset: 1 }}
                    lg={{ span: 10, offset: 1 }}
                    xl={{ span: 10, offset: 1 }}
                >
                    <h1>Explore the world of <span style={{ color: '#F65301' }}>fractals</span> at light speed</h1>
                    <span><Button size='large' className="bt1-btn" >What is FV?</Button ></span><span><Button size='large' className="bt2-btn">Visit Github</Button></span>
                </Col>
                <Col
                    sm={{ span: 16, offset: 4 }}
                    mg={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <h2 style={{textAlign : 'center', marginTop : "5%"}}>Fractal Valley is an open-source Fractal project and a development vehicle for emerging technologies.</h2>
                </Col>
            </Row>
        )
    }
}
import React, { Component } from "react";
import { Row, Col, Button } from "antd";




export class HomeSec3 extends Component {


    render() {
        return (
            <Row className="h-s3-bg" >
                <div className="h-s3">
                    <Col
                    className="h-s3-content"
                        sm={{ span: 12, offset: 2 }}
                        mg={{ span: 12, offset: 2 }}
                        lg={{ span: 12, offset: 2 }}
                        xl={{ span: 12, offset: 2 }}
                    >
                            <h1>Mandelbrot Explorer</h1>
                            <p>A fun little demo of some game-changing technologies</p>
                            <Button size='large' className="bt2-btn"> Explore Now</Button>
                    </Col>
                </div>
            </Row>
        )
    }
}
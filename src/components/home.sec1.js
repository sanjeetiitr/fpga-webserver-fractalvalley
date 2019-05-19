import React, { Component } from "react";
import { Row, Col } from "antd";




export class HomeSec1 extends Component {


    render() {
        return (
            <Row >
                <Col
                    className="h-s1"
                    sm={{ span: 6, offset: 3 }}
                    mg={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                    xl={{ span: 6, offset: 3 }}
                >
                    <div className="h-logo"></div>
                </Col>
            </Row>
        )
    }
}
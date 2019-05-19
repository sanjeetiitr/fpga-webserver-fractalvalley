import React, { Component } from "react";
import { Row, Col, Button } from "antd";




export class HomeSec2 extends Component {


    render() {
        return (
            <Row style={{ backgroundColor: 'white' }} >
                <div className="h-s2">
                    <Col
                        className="blue-crd"
                        sm={{ span: 4, offset: 3 }}
                        mg={{ span: 4, offset: 3 }}
                        lg={{ span: 4, offset: 3 }}
                        xl={{ span: 4, offset: 3 }}
                    >
                        <div>
                            <h2>Cloud FPGAs</h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="blue-crd"
                        sm={{ span: 4, offset: 3 }}
                        mg={{ span: 4, offset: 3 }}
                        lg={{ span: 4, offset: 3 }}
                        xl={{ span: 4, offset: 3 }}
                    >
                        <div>
                            <h2>Hardware accelerated web application</h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="blue-crd"
                        sm={{ span: 4, offset: 3 }}
                        mg={{ span: 4, offset: 3 }}
                        lg={{ span: 4, offset: 3 }}
                        xl={{ span: 4, offset: 3 }}
                    >
                        <div>
                            <h2>Advance hardwared modeling in Transaction-Level Verilog</h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                </div>
            </Row>
        )
    }
}
import React, { Component } from "react";
import { Row, Col, Button, Icon } from "antd";




export class HomeSec4 extends Component {


    render() {
        return (
            <Row style={{ backgroundColor: 'white' }} >
                <div className="h-s4">
                    <Col 
                        sm={{ span: 22, offset: 2 }}
                        mg={{ span: 22, offset: 2 }}
                        lg={{ span: 22, offset: 2 }}
                        xl={{ span: 22, offset: 2 }}
                    >
                        <h1 style={{fontSize : '2.5rem'}} >Browse <span style={{color : "#F65301"}} >Gallery</span></h1>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 2 }}
                        mg={{ span: 4, offset: 2 }}
                        lg={{ span: 4, offset: 2 }}
                        xl={{ span: 4, offset: 2 }}
                    >
                        <div>
                            <h2> Fractal 1 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 1 }}
                        mg={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 4, offset: 1 }}
                    >
                        <div>
                            <h2> Fractal 2 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 1 }}
                        mg={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 4, offset: 1 }}
                    >
                        <div>
                            <h2> Fractal 3 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 1 }}
                        mg={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 4, offset: 1 }}
                    >
                        <div>
                            <h2> Fractal 4 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        style={{height : '60%', position : "relative", marginTop: '3%'}}
                        sm={{ span: 1, offset: 1 }}
                        mg={{ span: 1, offset: 1 }}
                        lg={{ span: 1, offset: 1 }}
                        xl={{ span: 1, offset: 1 }}
                    >
                        <div>
                            <Icon style={{position: 'absolute', margin : 0 , fontSize: '2rem' ,top: '40%'}} type="right-circle"/>
                        </div>
                    </Col>
                </div>
            </Row>
        )
    }
}
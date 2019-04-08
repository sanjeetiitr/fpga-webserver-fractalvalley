import React, {Component} from  "react";
import {Row, Col, Divider } from 'antd';


export class PreviewComp extends Component {
    render(){
        return(
            <Row >
                <Col sm={{ span: 20, offset: 2 }} mg={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }} xl={{ span: 20, offset: 2 }} className="scanner-mp">
                    <h3 className='scanner-heading-mp'>Fractal Preview</h3>
                    <Divider/>
                    <Col sm={{ span: 24, offset: 0 }} mg={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }}id='test'>
                    </Col>
                    <Divider/>
                </Col>
            </Row>
        )
    }
}

import React, {Component} from 'react';
import {Col, Row, Tag, Divider} from 'antd';

export class SlideInfoComp extends Component {
    render() {
        return(
            <div>
            <Row>
                <Col sm={{ span: 20, offset: 2 }} mg={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }} xl={{ span: 20, offset: 2 }} className="scanner-mp" style={{paddingBottom : "5%"}}>
                <h3 className='' style={{textAlign : 'center'}}>Fractal Details</h3>
                <Divider/>
                    <div><Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 24, offset: 0 }}>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Name</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>Mandelbrot001</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Plot Type</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>Plot_23</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Details</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>This is the demo image preview for GSOC 19</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Tags</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>
                    <Tag> sanjeet</Tag>
                    <Tag> roorkee</Tag>
                    <Tag> GSoC 19</Tag>
                    <Tag> Demo</Tag>
                    </Col>                    
                    </Col></div>
                    </Col>
            </Row>
            </div>
        )
    }
}

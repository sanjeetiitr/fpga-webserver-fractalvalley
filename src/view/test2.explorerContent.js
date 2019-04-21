import React,{Component} from 'react';
import {Row , Col, Affix} from 'antd';
import { SlideInfoComp } from '../components/slide.info';
import { Test2PublicMap } from '../components/test2.explorer';

export class Test2ExplorerContent extends Component {
    render() {
        return(
            <div>
                <Row className="content-mp" >
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 17, offset: 1 }} lg={{ span: 17, offset: 1 }} xl={{ span: 17, offset: 1 }} style={{marginTop : "15px"}} className="content-1-mp">
                        <Test2PublicMap/>
                    </Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }} className="content-2-mp">
                        <Affix offsetTop={15}>
                            {/* <PreviewComp/> not required here for testing */}
                            <SlideInfoComp/>
                        </Affix>
                    </Col>
                </Row>
            </div>
        )
    }
}

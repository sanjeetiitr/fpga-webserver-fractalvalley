import React, { Component } from 'react';
import { Col, Row, Button , Icon} from 'antd';
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ.js';
import { Zoom, OverviewMap, ScaleLine } from 'ol/control.js';
import { FullScreen } from "ol/control";
import { Slider } from "antd";
import {fabric} from 'fabric';


const marks = {
    0: '0°',
    90: '90°',
    180: '180°',
    270: '270°',
    360: {
        style: {
            color: '#f50',
        },
        label: <strong>360°</strong>,
    },
};


export class TestPublicMap extends Component {
    constructor(props) {
        super(props);
        this.desired_image_properties = {
            x: 0,
            y: 0,
            pix_x: 0,
            pix_y: 0,
            width: 0,
            height: 0,
            max_depth: 0,
            renderer: 0,
            darken: 0
        }

        this.state = {
            center: [0, 0],
            zoom: 1,
        };
        this.slider = this.slider.bind(this)

        this.viewer = new Map({
            controls: [],
            target: null,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'http://fractalvalley.net:/tile/1225/{z}/{x}/{y}?json={"test_flags":0,"darken":true,"brighten":0,"modes":2,"colors":2,"texture":0,"edge":0,"var1":0,"var2":0,"renderer":"cpp","theme":0,"test_vars":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}',
                        minZoom: 0,
                        wrapX: false
                    })
                })
            ],
            view: new View({
                minZoom: 0,
            })
        });
        // this.goFullScreen = this.goFullScreen.bind(this)
    }

    updateMap() {
        this.viewer.getView().setCenter(this.state.center);
        this.viewer.getView().setZoom(this.state.zoom);
        this.viewer.getView().getMaxZoom()
    }

    componentWillMount(){

    }

    componentDidMount() {
        var canvas = new fabric.Canvas('canvas');
        var width = document.getElementById("map2").clientWidth;
        var height = document.getElementById("map2").clientHeight;


        // var background = new Image();
        var background = `http://fractalvalley.net/img?json={%22x%22:0,%22y%22:0,%22pix_x%22:0.015625,%22pix_y%22:0.015625,%22width%22:${width},%22height%22:${height},%22max_depth%22:1225,%22test_flags%22:0,%22darken%22:true,%22brighten%22:0,%22modes%22:66,%22colors%22:2,%22texture%22:0,%22edge%22:0,%22var1%22:0,%22var2%22:0,%22renderer%22:%22cpp%22,%22theme%22:0,%22test_vars%22:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],%22three_d%22:false,%22offset_w%22:0,%22offset_h%22:0,%22eye_sep%22:0,%22eye_adjust%22:0}`;
        canvas.setBackgroundImage(background, canvas.renderAll.bind(canvas));
        canvas.setDimensions({width:width, height:height});
        // var canvas = document.getElementById("canvas"),
        //     ctx = canvas.getContext("2d");

        canvas.on('mouse:dblclick', (e)=>{
            console.log(e , 'mousedblclick')
        })
        canvas.on('dragenter', (e)=>{
            console.log(e , 'drag')
        })
        
        // background.onload = function(){  
        //     ctx.drawImage(background,0,0);   
            
        // }

        this.viewer.setTarget("map");
        this.viewer.addControl(new FullScreen({
            target: 'fs-mp',
        }));
        this.viewer.addControl(new Zoom({
            target: 'zoom-mp'
        }));
        this.viewer.addControl(new OverviewMap({
            target: 'test',
            className: 'nav-mp',
            collapsible: false,
        }));
        this.viewer.addControl(new ScaleLine({
            units: 'metric'
        }));
    }


    shouldComponentUpdate(nextState) {
        let center = this.viewer.getView().getCenter();
        let zoom = this.viewer.getView().getZoom();
        if (center === nextState.center && zoom === nextState.zoom) return false;
    }

    userAction() {
        this.setState({ center: [546000, 6868000], zoom: 5 });
    }

    slider(value) {
        this.viewer.getView().setRotation(value * Math.PI / 180)
    }

    goFullScreen(){
        var canvas = document.getElementById("canvas");
        if(canvas.requestFullScreen)
            canvas.requestFullScreen();
        else if(canvas.webkitRequestFullScreen)
            canvas.webkitRequestFullScreen();
        else if(canvas.mozRequestFullScreen)
            canvas.mozRequestFullScreen();
    }

    render() {
        this.updateMap();
        return (
            <Row>
                <Col sm={{ span: 1, offset: 0 }} mg={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 0 }} xl={{ span: 1, offset: 0 }} className="content-view-controls-mp">
                    <div id="zoom-mp"></div>
                    {/* <div  id="fs-mp"></div> */}
                    <Button onClick={()=> this.goFullScreen()} className="btn-fs-mp"><Icon type="fullscreen" /></Button>
                    <Slider defaultValue={0} vertical marks={marks} onChange={this.slider} min={0} max={360} style={{ height: '54%', marginTop: "25% !important" }} />
                </Col>
                <Col id="map2" sm={{ span: 23, offset: 0 }} mg={{ span: 23, offset: 0 }} lg={{ span: 23, offset: 0 }} xl={{ span: 23, offset: 0 }} style={{ height: "85vh" }} className="content-view-main-mp">
                    <canvas id="canvas"></canvas>
                </Col>
            </Row>
        );
    }
}

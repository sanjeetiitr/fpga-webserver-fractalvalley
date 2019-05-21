import React ,{Component} from 'react';
import {HeaderComp} from '../components/header';
import { HomeSec1 } from '../components/home.sec1';
import { HomeSec2 } from '../components/home.sec2';
import { HomeSec3 } from '../components/home.sec3';
import { HomeSec4 } from '../components/home.sec4';


export class HomePage extends Component {


    render(){
        return(
            <div>
                <HeaderComp/>
                <HomeSec1/>
                <HomeSec2/>
                <HomeSec3/>
                <HomeSec4/>
            </div>
        )
    }
}
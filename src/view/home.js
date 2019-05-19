import React ,{Component} from 'react';
import {HeaderComp} from '../components/header';
import { HomeSec1 } from '../components/home.sec1';


export class HomePage extends Component {


    render(){
        return(
            <div>
                <HeaderComp/>
                <HomeSec1/>
            </div>
        )
    }
}
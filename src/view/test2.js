import React, {Component} from 'react';
import { HeaderComp } from '../components/header';
import { Test2ExplorerContent } from './test2.explorerContent';


export class Test2View extends Component {

    render(){
        return(
            <div>
                <HeaderComp/>
                <Test2ExplorerContent/>
            </div>
        )
    }
}
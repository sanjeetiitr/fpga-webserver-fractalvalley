import React, {Component} from 'react';
import { HeaderComp } from '../components/header';
import { ExplorerContent } from './exolorerContainer.view';
import { TestExplorerContent } from './test.explorerContent';
import { Button } from 'antd';
import {Link} from 'react-router-dom';


export class SelectOptionsView extends Component {

    render(){
        return(
            <div>
                <Link to="/explorer">
                <Button>Explorer</Button>
                </Link>
                <Link to="/test">
                <Button>Test 1 : Using Canvas</Button>
                </Link>
                <Link to="/test2">
                <Button>Test 2 : Using Meet's Fractal Image Web Component</Button>
                </Link>
            </div>
        )
    }
}
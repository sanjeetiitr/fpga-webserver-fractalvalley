import React, {Component} from 'react';
import { HeaderComp } from '../components/header';
import { ExplorerContent } from './exolorerContainer.view';


export class TestView extends Component {

    render(){
        return(
            <div>
                <p>Fractal valley image</p>
                <fractal-image></fractal-image>
            </div>
        )
    }
}
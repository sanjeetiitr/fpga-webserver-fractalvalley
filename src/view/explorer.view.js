import React, {Component} from 'react';
import { HeaderComp } from '../components/header';
import { ExplorerContent } from './exolorerContainer.view';


export class ExplorerView extends Component {

    render(){
        return(
            <div>
                <HeaderComp/>
                <ExplorerContent/>
            </div>
        )
    }
}
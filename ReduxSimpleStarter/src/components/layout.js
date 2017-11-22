import React,{Component} from 'react';

import { NavBar } from './navBar';
import { Home } from './home';




export class Layout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <NavBar sum={this.props.children.sum}/>
                    </div>
                </div>
                <hr/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
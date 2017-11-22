import React from 'react';
import ListFood from './listFood';
import {browserHistory} from 'react-router';

export class Home extends React.Component{
    onNavigateVego(){
        browserHistory.push("/vego");
    }
    onNavigateMeat(){
        browserHistory.push("/meat");
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <div className="panel panel-default">
                            <div className="panel-body text-center">
                                <h3><b>Vegetariska rätter</b></h3>
                                <img className="img-circle" height="300" width="320" src="http://alltommat.se/wp-content/uploads/import/images/2011-11-09/couscous-med-gronsaker-och-halloumi.jpg"></img>
                                <br/>
                                <hr/>
                                <div>
                                    <button className="btn btn-success" onClick={this.onNavigateVego} >Bläddra</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-xs-6">
                        <div className="panel panel-default">
                            <div className="panel-body text-center">
                                <h3><b>Köttiga rätter</b></h3>
                                <img className="img-circle" height="300" width="320" src="http://www.briggen.nu/images/uploads/Bilder/Bildspel/slide1.jpg"></img>
                                <br/>
                                <hr/>
                                <div>
                                    <button className="btn btn-success" onClick={this.onNavigateMeat}>Bläddra</button>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}
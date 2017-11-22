import React, { Component } from 'react';
import {Food} from './food';
import {Link,browserHistory} from 'react-router';

export class ListFood extends Component{
    onNavigateHome(){
        browserHistory.push("/home");
    }
    constructor(props){
        super(props);
    }
    render(){
        let foodItems;
        if(this.props.vego !=null){
            foodItems = this.props.vego.map((foodItem,i)=>{
                        //console.log(vegoItem);
                    return(
                        <div key={i}> 
                        <Food 
                        foodItem={foodItem}
                        addToCart={this.props.addToCart}
                        />
                        </div>
                        );
                        })
        }
        if(this.props.meat !=null){
            foodItems = this.props.meat.map((foodItem,i)=>{
                        //console.log(vegoItem);
                    return(
                        <div key={i}> 
                        <Food 
                        foodItem={foodItem}
                        />
                        </div>
                        );
                        })
        }
        return(
            <div>
                <div className="row">
                   <div>
                       <div className="row-eq-height">
                       {foodItems}
                       </div>
                   </div>
                </div>
                <hr/>
                <div className="row text-center">
                <div className="col-md-4 col-xs-4 text-center">
                <button className="btn btn-success" onClick={this.onNavigateHome}><span className="glyphicon glyphicon-chevron-left"> Tillbaka</span></button>                </div>
                </div>
            </div>
        );
    }
}
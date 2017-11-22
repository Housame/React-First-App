import React, { Component } from 'react';

export class Food extends Component{
    constructor(props){
        super(props);
    }
    handlerClick(){
        let price = this.props.foodItem.price;
        this.props.addToCart(price);
         }
    render(){
        return(
                <div className="col-md-3 col-xs-3 ">
                 <div className="panel panel-default food-container">
                    <div className="panel-body text-center">
                    <h5>{this.props.foodItem.name}</h5>
                        <div>
                            <img src={this.props.foodItem.imgUrl} height="150" width="160" />
                        </div>
                       <div> 
                            <p className="description-area text-center">
                            {this.props.foodItem.description}
                            </p>
                        </div>
                        <hr/>
                        <div>
                            <button className="btn btn-success" onClick={this.handlerClick.bind(this)}> 
                               <span className="glyphicon glyphicon-eur"> {this.props.foodItem.price} SEK</span> 
                            </button>
                        </div>
                        
                    </div>
                 </div>
                </div>
        );
    }
}
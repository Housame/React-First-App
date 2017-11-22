import React,{Component} from 'react';
import {Link,browserHistory} from 'react-router';

export class NavShoppingCart extends Component{
    onNavigateShoppingCart(){
        browserHistory.push("/shoppingCart");
    }
    render(){
        return(
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span className="glyphicon glyphicon-shopping-cart"></span> 7 - Varukorg<span className="caret"></span></a>
              <ul className="dropdown-menu dropdown-cart" role="menu">
                  <li>
                      <span className="item">
                        <span className="item-left">
                            <img src="https://www.gastronomie.lu/templates/images/picto_food.png" alt="" />
                            <span className="item-info">
                                <span>{this.props.cartItem.name}</span>
                                <span>{this.props.cartItem.price} SEK</span>
                            </span>
                        </span>
                        <span className="item-right">
                            <button className="btn btn-xs btn-danger pull-right">x</button>
                        </span>
                    </span>
                  </li>
                  <li className="divider"></li>
                  <li><button className="btn btn-succes" onClick={this.onNavigateShoppingCart}>View Cart</button></li>
              </ul>
            </li>
        );
    }
}
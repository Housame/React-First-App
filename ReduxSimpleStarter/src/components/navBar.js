import React from 'react';
import {Link,browserHistory} from 'react-router';

import NavShoppingCart from './navShoppingCart';

export class NavBar extends React.Component{
    onNavigateShoppingCart(){
        browserHistory.push("/shoppingCart");
    }
    render(){
        console.log(this.props.sum);
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/home"} activeClassName={"active"}>Hem</Link></li>   
                            <li><Link to={"/vego"} activeClassName={"active"}>Vegetariska rätter</Link></li>   
                            <li><Link to={"/meat"} activeClassName={"active"}>Köttiga rätter</Link></li>   
                        </ul> 
                    </div>
                        <ul className="nav navbar-nav navbar-right">
                        <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="glyphicon glyphicon-shopping-cart" onClick={this.onNavigateShoppingCart}> Varukorg</span> <span class="caret"></span></a>
                        </li>
                        </ul>
                </div>
            </nav>
        );
    }
}
import React from 'react';
import {render} from 'react-dom';
import {Route, Router, browserHistory, IndexRoute}from 'react-router';

import {Layout} from './components/layout';
import { ListFood } from './components/listFood';
import { Home } from './components/home';
import { ShoppingCart } from './components/shoppingCart';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      // food:[]
     vego:[],
     meat:[],
     sum : 0,
     cartItems:[]
     })
     
     fetch('../src/food.json')
     .then((res) => res.json())
     .then((data) => {
       this.setState({
         vego:data.vego,
         meat:data.meat
       });
       
     });
    
};
componentWillMount(){
   this.setState({cartItems:[{name:"test",price:"100"}]})
}

addToCart(price,name) {
  let amount = this.state.sum;
  let cart = this.state.cartItems;
  amount+=price;
  // cart+={name:name,price:price};
  this.setState({sum:amount})
  // this.setState({cartItems:cart})
  } 
  removeFromCart(){
  
    this.setState({sum:0})
  }
  render(){
      return(
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path={"home"} component={Home}/>
            <Route path={"vego"} component={() => <ListFood vego={this.state.vego} addToCart={this.addToCart.bind(this)} sum={this.state.sum} />}/>            
            <Route path={"meat"} component={() => <ListFood vego={this.state.meat} addToCart={this.addToCart.bind(this)} sum={this.state.sum} />}/>            
            <Route path={"shoppingCart"} component={()=><ShoppingCart sum={this.state.sum} cartItems={this.state.cartItems} removeFromCart={this.removeFromCart.bind(this)}/>}/>
          </Route>
          
        </Router>
      );
  }
}

const root = document.querySelector('.root');
render(
    <App />
  , root );

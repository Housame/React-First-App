import React,{Component} from 'react';

export class ShoppingCart extends Component{
    onNavigateHome(){
        browserHistory.push("/home");
    }
    resetOnClick(){
        console.log(this.props.sum);
        this.props.removeFromCart();
         }
    render(){
        let cartItems ;
        if(this.props.cartItems !=null){
            cartItems = this.props.cartItems.map((cartItem,i)=>{
                        //console.log(vegoItem);
                    return(
                        <li key={i}> 
                        <div>
                        Mat : {cartItem.name}, Pris : {cartItem.price}
                        </div>
                        </li>
                        );
                        })
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <div className="panel panel-default">
                            <div className="panel-body text-center">
                            <h3>Varukorg</h3>
                            <ul>
                                {cartItems}
                            </ul>
                            <div>
                                <p> Total summan är: {this.props.sum}</p>
                            <button className="btn btn-success"> Betala</button>
                            <button className="btn btn-danger" onClick={this.resetOnClick.bind(this)}> Töm varukorg</button>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

function Cart() {
const {userAuth,addmorequnatity,removequnatity}=useContext(AuthContext);
const [total,setTotal]=useState(0);

    return (
        <div>
            <h1>Cart</h1>
            {userAuth.cart.length?<>         
          {  userAuth.cart.map((el,i)=>{
               return<> <img src={el.image} alt={i}/><br/>

                <button onClick={()=>addmorequnatity(i)}>add</button>
                <p>{el.quantity}</p>
                <button disabled={el.quantity===1?true:false} onClick={()=>removequnatity(i)}>Sub</button>

                <p>Price: {el.quantity*el.price}</p>
               </>
            })}
            <h1>Total price {userAuth.total}</h1>
            <Link to="/order">Place Order</Link>
          </>       
            :<Loader />}           
        </div>
    );
}
export default Cart;
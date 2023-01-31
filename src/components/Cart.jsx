import React from 'react';
import { CardText } from 'reactstrap';
import { useState } from 'react';
const Cart = () => {
    const [count,setCount] = useState(0);
    return ( 
        <div>
            <CardText tag="h5" className="fw-bold pt-3 border-top">Quntity</CardText>
            <div className='d-flex pt-2 countSection justify-content-between'>
                <button disabled={count == 0 ? true : false} className='btn bg-primary font-size-14 rounded-5' onClick={()=> setCount(count-1)}>
                    <i className='fa fa-minus'></i>
                </button>
                <span className='px-3 mt-1'>{count}</span>
                <button className='btn bg-primary font-size-14 rounded-5' onClick={()=> setCount(count+1)}>
                    <i className='fa fa-plus'></i>
                </button>
            </div>
            <div className='d-flex pt-3'>
                <button className='btn w-100 me-3 btn-primary height-47 rounded-5 font-size-14'>Add to Cart</button>
                <button className='btn w-100 bg-primary height-47 rounded-5 font-size-14'>Pickup From store</button>
            </div>
        </div>
     );
}
 
export default Cart;
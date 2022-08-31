import React from 'react';

const Basket = ({ cartItem, onAdd, onRemove }) => {
    const itemPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const TotalPrice = itemPrice + taxPrice + shippingPrice;
    return (
        <aside className='block col-1'>
            <h2>Cart Item</h2>
            <div>
                {cartItem.length === 0 && <div>Cart Item Empty</div>}
                {cartItem.map((item) => (
                    <div key={item.id} className="row">
                        <div className='col-2'>{item.name}</div>
                        <div className='col-2'>
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onClick={()=>onRemove(item)} className="remove">-</button>
                        </div>
                        <div className='col-2 text-right'>
                            {item.qty} X ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
            {cartItem.length !== 0 && (
                <>
                    <hr />
                    <div className='row'>
                        <div className='col-2'>Item Price</div>
                        <div className='col-2 text-right'>${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax Price</div>
                        <div className='col-2 text-right'>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping Price</div>
                        <div className='col-2 text-right'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'> <strong>Total Price</strong> </div>
                        <div className='col-2 text-right'> <strong>${TotalPrice.toFixed(2)}</strong> </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <button onClick={()=>alert('implement Soon')}>Checkout</button>
                    </div>
                </>
            )}
        </aside>
    );
};

export default Basket;
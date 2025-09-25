
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router";
import {Minus, Plus, Trash2} from "lucide-react";
import {incrementQuantity,decrementQuantity,removeFromCart} from "../store/cartSlice.jsx";
const Cart = () => {
    const {items} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log(items);
    const total = items.reduce((acc,item) => acc + item.price * item.quantity, 0);
    if(items.length === 0) {
        return (
            <div className = "container mx-auto px-4 py-8">
              <div className = "text-center">
                  <h2>Your Cart is Empty</h2>
                  <p className = "text-gray-600 mb-4">Add Some Products To Your Cart To See Them Here</p>
                  <Link to = "/" className = "inline-block !bg-zinc-200 px-6 py-2 rounded-lg hover:!bg-zinc-300">Continue Shopping</Link>
              </div>
            </div>
        )
    }
    return (
        <div className = "container mx-auto px-4 py-8">
            <h2 className = "font-bold text-2xl mb-8">Shopping Cart</h2>
            <div className = "grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className = "lg:col-span-2 shadow-md p-4 rounded-md">
                    {items.map((item) => {
                        return (
                            <div key = {item.id} className = "flex items-center gap-4 py-4 border-b">
                               <Link to={`/product/${item.id}`}>
                                   <img src = {item.image} alt = {item.title} className = "w-24 rounded h-24 object-cover"/>
                               </Link>
                                <div className = "flex-1 ">
                                    <Link to={`/product/${item.id}`} className = "font-semibold hover:text-blue-600">
                                        {item.title}
                                    </Link>
                                    <p className = "text-gray-600">${item.price}</p>
                                    <div className = "flex items-center gap-2 mt-2">
                                        <button className = "p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                                        onClick = {() => dispatch(decrementQuantity(item.id))}>
                                            <Minus size={16}/>
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button className = "p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                                        onClick = {() => dispatch(incrementQuantity(item.id))}>
                                            <Plus size={16}/>
                                        </button>
                                        <div className = "ml-4 text-red-500 hover:text-red-700 cursor-pointer">
                                            <Trash2 size = {20} onClick = {() => dispatch(removeFromCart(item.id))}/>
                                        </div>
                                    </div>
                                </div>
                                <div className = "text-right">
                                    <p className = "font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className = "lg:col-span-1 ">
                    <div className = "bg-white shadow-md p-4 rounded-md">
                    <h3 className = "text-xl font-bold mb-4">Order Summary</h3>
                        <div className = 'space-y-2 mb-4'>
                            <div className = "flex justify-between">
                               <span>Sub Total</span>
                               <span>${total.toFixed(2)}</span>
                            </div>
                            <div className = "flex justify-between">
                               <span>Shipping </span>
                               <span>Free</span>
                            </div>
                            <div className = "border-t pt-2 font-bold flex justify-between items-center">
                                <span>Total </span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className = "w-full bg-zinc-200 px-6 rounded-lg py-4 hover:bg-zinc-300 cursor-pointer">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cart;
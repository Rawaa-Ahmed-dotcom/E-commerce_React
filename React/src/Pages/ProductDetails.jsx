import {Link, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getProductById, getProducts, showDetails} from "../store/productsSlice.jsx";
import {useEffect} from "react";
import {ShoppingCart} from "lucide-react";
import {addToCart} from "../store/cartSlice.jsx";

const ProductDetails = () => {
    const {selectedProduct} = useSelector((state) => state.products);


    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getProductById(parseInt(id)));
    },[dispatch]);
    if(!selectedProduct){
        return (
            <div className = "container mx-auto px-4 py-8">
                <div className = "text-center">
                    <h2 className = "text-2xl font-bold mb-4">Product Not Found</h2>
                    <Link to = "/" className = "mb-8 inline-block text-blue-600 hover:text-blue-800">
                        Return To Home
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className = "container mx-auto py-8 px-4">
           <div>

               <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className = "shadow-md p-4 rounded w-[600px]">
                     <img src = {selectedProduct.image} className = "w-full object-contain h-52"/>
                  </div>
                   <div>
                       <h1 className = "text-3xl font-bold mb-4">{selectedProduct.title}</h1>
                       <p className = "text-gray-600 mb-6">{selectedProduct.description}</p>
                       <div className = "mb-6">
                            <span>${selectedProduct.price}</span>
                       </div>
                       <div className = "mb-6">
                           <h3 className = "font-semibold mb-3">Category</h3>
                           <span className = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">{selectedProduct.category}</span>
                       </div>
                       <button className = "w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center
                   gap-2 hover:bg-zinc-300 cursor-pointer"
                       onClick = {() => dispatch(addToCart(selectedProduct))}><ShoppingCart/> Add To Cart</button>
                   </div>

               </div>
           </div>
        </div>
    )
}

export default ProductDetails;
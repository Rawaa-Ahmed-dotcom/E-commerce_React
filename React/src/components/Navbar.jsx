import {Link} from "react-router";
import {AArrowDown, ArrowDown, ShoppingCart, User} from "lucide-react";
import {useState} from "react";
import logo from "../assets/logo.jpg";
import {useDispatch,useSelector} from "react-redux";
import {searchProduct} from "../store/productsSlice.jsx";
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.cart);
    const totalItems = items.reduce((acc,item) => acc + item.quantity,0);
    const handleUser = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className = "bg-white shadow-md">

                <div className = "py-4 shadow-md">
                   <ul className = "container mx-auto flex flex-wrap justify-between md:flex-row
                   px-4 md:px-2 items-center relative">

                          <div className = "flex flex-row items-center gap-4">
                              <li>
                                  <Link to="/">Home</Link>
                              </li>
                              <li>
                                  <Link to="/">About</Link>
                              </li>
                              <li>
                                  <Link to="/">FAQs</Link>
                              </li>
                              <li>
                                  <Link to="/">Contact</Link>
                              </li>
                          </div>
                       <div className = {`${isOpen ?
                           "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4" :
                           "hidden"}`}>
                           <li>
                               <Link to="/">Sign </Link>

                           </li>
                           <li>
                               <Link to="/">My Account</Link>
                           </li>

                       </div>
                       <User size = {40} className = "bg-gray-200 p-2 text-black rounded cursor-pointer"
                       onClick = {handleUser}/>

                   </ul>
                </div>
            <nav className = "justify-between flex container mx-auto md:py-6 py-8 px-2 w-full">
                <div className = "flex items-center ">
                    <Link to = "/" className = " py-2 px-4 rounded !bg-gray-700 text-white">
                        <h2>audiophile</h2>
                    </Link>
                </div>
                <form className = "w-1/2 sm:block hidden">
                    <input
                        type = "text"
                        className = "bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none p-3 w-full placeholder-zinc-400"
                        placeholder = "Search Product"
                        onChange= {(e) => dispatch(searchProduct(e.target.value))}


                    />
                </form>
                <Link to="/cart" className = "relative">
                    <ShoppingCart size = {54} className = "cursor-pointer bg-gray-100 px-3 py-2 rounded-full"/>
                    {totalItems > 0 && (
                        <span className = "absolute -top-2 right-5 bg-blue-600 text-white text-xs
                        rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>
                    )}
                </Link>
            </nav>

        </div>
    )
}


export default Navbar;
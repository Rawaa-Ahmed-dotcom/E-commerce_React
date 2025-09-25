import Footer from "../components/Footer.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import {useDispatch, useSelector} from "react-redux";
import {filterItems} from "../store/productsSlice.jsx";
import {useEffect} from "react";
const Home = () => {
    const categories = ["All","Electronics","Sportswear","Accessories","Home Appliances","Clothing","Furniture","Beauty","Music"];
    const {filter,searchTerm} = useSelector(state => state.products);
    const dispatch = useDispatch();

    return (
        <div>
            <div className = "bg"></div>
            <div className = "container mx-auto my-10 !px-14">
                <div className = "flex gap-4 justify-center">
                    {categories.map((category,index) => (<button key = {index} className = "bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 cursor-pointer
                    hover:bg-zinc-400 transition-all duration-300 ease-in"
                    onClick = {() => dispatch(filterItems(category))}>{category}</button>))}
                </div>
                <ProductsGrid searchTerm = {searchTerm}/>
            </div>
            <Footer categories = {categories}/>
        </div>
    )
}

export default Home;
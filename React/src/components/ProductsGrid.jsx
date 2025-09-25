import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../store/productsSlice.jsx";
import ProductCard from "./ProductCard.jsx";

const ProductsGrid = ({searchTerm}) => {
    const {products,filter} = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    let filteredItems = [];
    if(filter === "All") {
        filteredItems = products;
    }else {
        filteredItems = products.filter(item => item.category === filter);
    }
    let searchProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">

            {searchTerm ?
                searchProducts.map((product,index) => {
                    return <ProductCard product = {product} key = {index}/>
                })
                :
                filteredItems.map((product,index) => {
                    return <ProductCard product = {product} key = {index}/>
                })}
        </div>
    )
}

export default ProductsGrid;
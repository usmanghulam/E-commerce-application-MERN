import Categories from "../components/categories";
import Slider from "../components/Slider"
import Products from '../components/products';
import Newsletter from "../../newsletter/containers/newsletter";

export const Home = () => {
    return <>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
    </>
}
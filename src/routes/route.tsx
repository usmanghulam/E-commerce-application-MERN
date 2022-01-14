import react from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from '../layout/layout';
import { Home } from '../components/Home/containers/home';
import ProductsList from '../components/productList/containers/ProductList';
import Product from '../components/product/containers/product';
import UserAuth from '../components/auth/containers/user';
import Cart from '../components/cart/containers/cart';
import Register from '../components/register/containers/register';

export const Router = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Layout children={Home()} />} />
            <Route path="/product-list" render={() => <Layout children={ProductsList()} />} />
            <Route path="/product" render={() => <Layout children={Product()} />} />
            <Route path="/user" render={() => <Layout children={UserAuth()} />} />
            <Route path="/cart" render={() => <Layout children={Cart()} />} />
            <Route path="/register" render={() => <Layout children={Register()} />} />
        </Switch>
    );
};
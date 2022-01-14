import react from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from '../layout/layout';
import { Home } from '../components/Home/containers/home';



export const Router = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Layout children={Home()} />} />
        </Switch>
    );
};
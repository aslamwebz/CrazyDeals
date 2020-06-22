import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom'

import { AuthProvider } from "../../admin/Auth/Auth"

import CrazyDeal from './CrazyDeal'
import Item from './Item/Item'
import ItemList from './ItemList/ItemList'
import General from './ItemList/General'

import Cart from '../Cart/Cart'
import admin from '../../admin/admin'
import Admin from '../../admin/admin'
import Login from '../../admin/Auth/Login'
import Register from '../../admin/Auth/Register'
import PrivateRoute from '../../admin/Auth/PrivateRoute'
import NotFoundPage from './NotFoundPage'



import Search from './Search'

import { useLocation } from 'react-router-dom';


function HeaderView() {
    let location = useLocation();
    console.log(location.pathname);
    return <span>Path : {location.pathname}</span>
}

const App = () => {
    return (
        //? Enclose children in parent auth component
        <AuthProvider>
            <Router >
                <Switch>
                    <Route path="/" exact component={CrazyDeal} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/item/:category/:id" component={Item} />
                    <Route path="/itemlist" exact component={ItemList} />

                    <Route path="/allitems" exact component={General} />

                    <Route path="/cart" exact component={Cart} />
                    <Route path="/search/:query" exact component={Search} />

                    <PrivateRoute path="/admin" exact component={admin} />
                    {/* <Route path="/admin" exact component={admin} /> */}

                    <PrivateRoute path="/admin/electronics" exact component={admin} />
                    <PrivateRoute path="/admin/electronics/createElectronics" component={admin} />
                    <PrivateRoute path="/admin/electronics/:operation/:id" component={admin} />


                    <PrivateRoute path="/admin/fashion" exact component={admin} />
                    <PrivateRoute path="/admin/fashion/createFashion" component={admin} />
                    <PrivateRoute path="/admin/fashion/:operation/:id" component={admin} />


                    <PrivateRoute path="/admin/mobile" exact component={admin} />
                    <PrivateRoute path="/admin/mobile/createMobile" component={admin} />
                    <PrivateRoute path="/admin/mobile/:operation/:id" component={admin} />


                    <PrivateRoute path="/admin/profile" exact component={admin} />
                    <PrivateRoute path="/admin/featured" exact component={admin} />


                    {/* <Route path="/admin/electronics/:operation/:id" component={AdminRoute} /> */}

                    {/* <Route path="/admin/electronics/:operation/:id" component={ElectronicsForm} /> */}
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
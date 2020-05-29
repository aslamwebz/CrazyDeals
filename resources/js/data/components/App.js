import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CrazyDeal from './CrazyDeal'
import { Navbar } from './Header/Navbar'
import Login from './Login'
import Register from './Register'
import Item from './Item/Item'
import ItemList from './ItemList/ItemList'

import Cart from '../Cart/Cart'


const App = () => {


    return (
        <Router >
            <Navbar />
            <Switch>
                <Route path="/" exact component={CrazyDeal} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/item/:id" component={Item} />
                <Route path="/itemlist" exact component={ItemList} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </Router>
    )
}

export default App
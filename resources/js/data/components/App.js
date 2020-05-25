import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CrazyDeal from './CrazyDeal'
import { Navbar } from './Header/Navbar'
import Login from './Login'
import Register from './Register'
import Item from './Item/Item'
import ItemList from './ItemList/ItemList'


const App = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={CrazyDeal} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/item" exact component={Item} />
            <Route path="/itemlist" exact component={ItemList} />
        </Router>
    )
}

export default App
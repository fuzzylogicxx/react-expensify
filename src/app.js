import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        The dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        Add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        Help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404 – <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
        <li><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></li> 
        <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))

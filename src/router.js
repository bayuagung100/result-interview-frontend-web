import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from './components/index';
import IndexRC from './components/table/react-table/index';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/question-1" exact component={Index} />
                <Route path="/question-2" exact component={Index} />

                {/* testing react-table */}
                <Route path="/test-react-table" exact component={IndexRC} /> 
            </Switch>
        </BrowserRouter>

    )
}

export default Router;
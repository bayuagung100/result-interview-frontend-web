import React, { Component } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state ? this.props.state : null
    }
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} name={route.name} />
                                    )} />
                            )
                        })}
                    </Switch>
                </div>
            </>
        )
    }
}
export default Content;
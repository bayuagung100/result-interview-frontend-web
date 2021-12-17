import React, { useState } from "react";
import { Link, Switch, Route, } from "react-router-dom";
import { IcQ1, IcQ2, Logo } from "../assets";
import '../assets/style.scss';
import Footer from "./footer";
import Question1 from "./question/question1";
import Question2 from "./question/question2";

const Index = (props) => {
    const [path, setPath] = useState('/')

    const activeClick = (e) => {
        setPath(`/${e.target.id}`);
    }
    // console.log('path', path)
    return (
        <>
            <div className="row">
                <div className="col-lg-2">
                    <sidebar className="border-10">
                        <Link to="/">
                            <div className="logo text-center">
                                <Logo />
                            </div>
                        </Link>
                        <nav>
                            <Link to="/question-1" onClick={(e) => activeClick(e)}>
                                <div id="question-1" className={`item ${(path === "/" || path === "/question-1") ? 'active' : ''}`}>
                                    <IcQ1 className="ic" /> Question 1
                                </div>
                            </Link>
                            <Link to="/question-2" onClick={(e) => activeClick(e)}>
                                <div id="question-2" className={`item ${path === "/question-2" ? 'active' : ''}`}>
                                    <IcQ2 className="ic" /> Question 2
                                </div>
                            </Link>
                        </nav>
                    </sidebar>
                </div>
                <div className="col-lg-10">
                    <content>
                        <Switch>
                            <Route path="/" exact component={Question1} />
                            <Route path="/question-1" exact component={Question1} />
                            <Route path="/question-2" exact component={Question2} />
                        </Switch>
                        <Footer />
                    </content>

                </div>


            </div>
        </>
    )
}

export default Index
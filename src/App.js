import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* CSS imports */
import "./css/App.css";
/* Parts imports */
import Template from "./parts/Template";

import Mapa from "./views/Mapa";

import { Route, HashRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <HashRouter>
                    <div>
                        <Template/>
                        <div id="content" className="content">
                            <Route exact path="/" component={Mapa}/>
                        </div>
                    </div>
                </HashRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;

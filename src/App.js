import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path='/'>
                        Hello, world!
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Alphabet } from './components/alphabet/Alphabet';
import { ScattergoriesBoard } from './components/scattergoriesBoard/ScattergoriesBoard';
import { Flex } from 'rebass';

function App() {

  return (
    <Router>
      <div className="App">
        <section className="App-main">
          <Flex
              flexDirection="column"
              width="100%"
            >
            <Switch>
              <Route path="/picture-picture/card">
                <Alphabet />
              </Route>
              <Route path="/">
                <ScattergoriesBoard />
              </Route>

            </Switch>
          </Flex>
        </section>
      </div>
    </Router>
   
  );
}

export default App;

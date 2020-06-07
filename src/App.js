import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Alphabet } from './components/picturePicture/alphabet/Alphabet';
import { ScattergoriesBoard } from './components/scattergoriesBoard/ScattergoriesBoard';
import { PicturePictureGame } from './components/picturePicture/picturePictureGame/PicturePictureGame';
import { Flex } from 'rebass';
// import { HowToPlayModal } from './components/howToPlayModal/HowToPlayModal';
// import { useModal } from './hooks/useModal';


function App() {
  // const [Modal, open, close] = useModal('root', {
  //   preventScroll: true
  // });
 
  return (
    <Router>
        <section className="App-main">
          {/* <button onClick={open}>How to use</button> */}
          <Flex
              flexDirection="column"
              width="100%"
            >
            {/* <Modal>
              <HowToPlayModal 
                onClose={close}
              />
            </Modal> */}
            <Switch>
            <Route path="/picture-picture/">
                <PicturePictureGame />
              </Route>
              <Route path="/picture-picture/card">
                <Alphabet />
              </Route>
              <Route path="/">
                <ScattergoriesBoard />
              </Route>

            </Switch>
          </Flex>
        </section>
    </Router>
   
  );
}

export default App;

import React from 'react';
import './App.css';

// import { Alphabet } from './components/alphabet/Alphabet';
// import { GameSelector } from './components/gameSelector/gameSelector';
import { ScattergoriesBoard } from './components/scattergoriesBoard/ScattergoriesBoard';
import { Flex } from 'rebass';

function App() {
  // const [game, setGame] = useState('scattergories');

  return (
    <div className="App">
      <section className="App-main">
        <Flex
          flexDirection="column"
          width="100%"
        >
          <ScattergoriesBoard />
        </Flex>
      </section>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import {
	Flex,
  Text,
} from 'rebass';
import {
	Input,
} from '@rebass/forms';
import { ScattergoriesInput } from './components/scattergoriesInput/ScattergoriesInput';

export const ScattergoriesCard = (props) => {
  const { onScoreUpdate, roundNumber } = props;
  const [roundScore, setRoundScore] = useState(0);
  const [roundScoreArray, setRoundScoreArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

  const handleScore = () => {
    setRoundScore(roundScoreArray.reduce((a, b) => a + b, 0));
  }

  useEffect(() => {
    onScoreUpdate(roundScore);
  })

  return (
    <Flex
      m="10px"
      flexDirection="column"
      alignItems="center"
      maxWidth={["80%", "80%", "50%"]}
      alignSelf="center"
      p="20px"
      sx={{
        border: "1px solid white",
      }}
    >
    <Text>              
      Round {roundNumber}
    </Text>
      <Flex
        flexDirection="column"
        p="20px"
        border="1px white solid"
      >
        {[...Array(12)].map((e, i) => (
          <Flex
            flexDirection="column"
            key={i}
          >
            <Flex
              alignItems="flex-end"
            >
              <Text
                minWidth="40px"
              >
                {i + 1}.
              </Text>
              <ScattergoriesInput 
                onSetRoundScore={handleScore}
                roundScoreArray={roundScoreArray}
                setRoundScoreArray={setRoundScoreArray}
                index={i}
              />

            </Flex>
          </Flex>
        ))}
        <Flex
          mt="20px"
          alignItems="center"
        >
          <Text
            minWidth="50%"
          >Round Total: {roundScore}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
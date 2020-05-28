import React, { useState, useEffect } from'react'
import { ScattergoriesCard } from '../scattergoriesCard/ScattergoriesCard';
import { Flex, Text } from 'rebass';
import Sticky from 'react-stickynode';


export const ScattergoriesBoard = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [roundOneScore, setRoundOneScore] = useState(0);
  const [roundTwoScore, setRoundTwoScore] = useState(0);
  const [roundThreeScore, setRoundThreeScore] = useState(0);

  const handleScore = () => {
    setTotalScore((roundOneScore || 0)+ (roundTwoScore || 0) + (roundThreeScore || 0));
  }

  useEffect(() => {
    handleScore();
  });

  return(
    <Flex
      flexDirection="column"
    >
      <Sticky innerClass="sticky-header">
        <Flex
          p="15px"
          width="100%"
        >
          <Text>Total Score: {parseInt(totalScore)}</Text>
        </Flex>
      </Sticky>
      <Flex
          width="100%"
          flexDirection={["column", "column", "row"]}
          pt="10px"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
          >
            <Text>
              Round 1
            </Text>
            <ScattergoriesCard 
              onScoreUpdate={setRoundOneScore}
            />
          </Flex>
          
          <Flex
            flexDirection="column"
            alignItems="center"
          >
            <Text>
              Round 2
            </Text>
            <ScattergoriesCard 
              onScoreUpdate={setRoundTwoScore}
            />
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
          >
            <Text>              
              Round 3
            </Text>
            <ScattergoriesCard 
              onScoreUpdate={setRoundThreeScore}
            />
          </Flex>
          </Flex>
    </Flex>
   
  )
}
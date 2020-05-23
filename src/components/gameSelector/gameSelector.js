import React from 'react';
import { Flex } from 'rebass';
import { Label, Select } from '@rebass/forms';
import { gameOptions } from './gameOptions';

export const GameSelector = (props) => {
  const { handleSelect } = props;

  return (
    <Flex
      justifyContent="center"
      width="30%"
    >
      <Label 
        w="10%"
        htmlFor='gameSelect'>Game</Label>
        <Select
          id='gameSelect'
          name='gameSelect'
          defaultValue='scattergories'
          onChange={e => handleSelect(e.currentTarget.value)}
          width="450px"
          >
            {Object.entries(gameOptions).map(([ key, game ]) => (
              <option
                key={key}
                value={game.gameNameValue}
                >
                {game.gameName}
              </option>
            ))}
        </Select>
    </Flex>
  );
}
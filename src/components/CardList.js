import React from 'react';

import Card from "./card";

const CardList = ({ robots }) => {
    console.log('CardList');
    return (
      <div>
        {robots.map((user, id) => {
            return (
            <Card
                key={id}
                id={robots[id].id}
                name={robots[id].name}
                email={robots[id].email}
            />
            );
        })}
      </div>
    );
}

export default CardList;
import React from 'react'

function Test123() {

  const ids = [1,2,3];

  return (
    <div>
        {ids.map((id) => (
          <li key={id.toString()}>{id}</li>  
        ))}
    </div>
  );
}

export default Test123
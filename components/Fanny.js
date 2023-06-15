// import React from 'react';

// const handleClick = () => {
//   const randomNumber = Math.random();
//   let pressRandom = '';

//   if (randomNumber >= 0 && randomNumber < 1 / 3) {
//     pressRandom = 'Pasta';
//   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//     pressRandom = 'See food';
//   } else if (randomNumber > 2 / 3 && randomNumber < 1) {
//     pressRandom = 'Thai food';
//   }

//   console.log(pressRandom);

//   let result = '';

//   if (pressRandom === 'Pasta') {
//     result = 'You loose the game';
//   } else if (pressRandom === 'See food') {
//     result = 'Loose';
//   } else if (pressRandom === 'Thai fodod') {
//     result = 'you won the game';
//   }

//   alert(`You picked Thai Food. Computer picked ${pressRandom}. ${result}`);
// };

// const Fanny = () => {
//   return <button onClick={handleClick}>Thai food</button>;
// };

// export default Fanny;


import React, { useState } from 'react';

export default function Fanny() {
  const [pressRandom, setPressRandom] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      setPressRandom('pizza');
      setResult('You win, today is your pizza day!');
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      setPressRandom('See food');
      setResult('You lose, today is your pizza day!');
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      setPressRandom('Thai Food');
      setResult('You made a wrong choice');
    }

    // alert(`You choose : ${randomNumber} . But the computer choose ${result} `);
    alert(`You picked ${pressRandom}. Computer picked ${pressRandom}. ${result}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Pizza </button>
      <p>{result}</p>
      <button onClick={handleClick}  >See Food </button>
      <p>{result}</p>
    </div>
  );
}

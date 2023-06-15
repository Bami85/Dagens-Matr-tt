
import React, { useState } from 'react';

export default function Fanny() {
  const [pressRandom, setPressRandom] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      setPressRandom('pizza');
      setResult('You won, today is your pizza day!');
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      setPressRandom('See food');
      setResult('You lose');
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      setPressRandom('Thai Food');
      setResult('You made a wrong choice');
    }
    // console.log(randomNumber)
    // alert(`You choose : ${randomNumber} . But the computer choose ${result} `);
    alert(`You picked Pizza. Computer picked ${pressRandom}. ${result}`);

    console.log(`Yor picked Pizza. Computer picked. ${pressRandom}. ${result} `);
  };

  return (
    <div>
      <button type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>Pizza </button>
       <h1>{result}</h1>
    </div>
  );
}

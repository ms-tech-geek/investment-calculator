import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

const DEBUG = false;

const defaultUserInput = {
  initialInvestment: 15000,
  annualInvestment: 120000,
  expectedReturn: 7,
  duration: 12,
};

const App = () => {
  const [userInput, setUserInput] = useState(defaultUserInput);

  DEBUG &&
    console.log(`UserInput.defaultUserInput`, JSON.stringify(defaultUserInput));

  const handleChange = ({ inputIdentifier, newValue }) => {
    DEBUG &&
      console.log(
        `handleChange.args`,
        JSON.stringify({ inputIdentifier, newValue })
      );

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });

    DEBUG &&
      console.log(`handleChange.setUserInput`, JSON.stringify(userInput));
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
};

export default App;

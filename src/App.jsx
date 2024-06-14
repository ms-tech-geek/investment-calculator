import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import { calculateInvestmentResults, formatter } from './util/investment';

const DEBUG = false;

const defaultUserInput = {
  initialInvestment: 15000,
  annualInvestment: 120000,
  expectedReturn: 7,
  duration: 12,
};

const Results = ({ input }) => {
  const result = calculateInvestmentResults(input);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value End Of Year</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {result.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
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
        [inputIdentifier]: newValue,
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

import { useState } from 'react';

const DEBUG = false;

const defaultUserInput = {
  initialInvestment: 15000,
  annualInvestment: 120000,
  expectedReturn: 7,
  duration: 12,
};

const UserInput = () => {
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange({
                inputIdentifier: 'initialInvestment',
                newValue: event.target.value,
              })
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange({
                inputIdentifier: 'annualInvestment',
                newValue: event.target.value,
              })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange({
                inputIdentifier: 'expectedReturn',
                newValue: event.target.value,
              })
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleChange({
                inputIdentifier: 'duration',
                newValue: event.target.value,
              })
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;

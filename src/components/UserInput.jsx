const UserInput = ({ onChange, userInput }) => {
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
              onChange({
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
              onChange({
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
              onChange({
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
              onChange({
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

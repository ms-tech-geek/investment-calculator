import { calculateInvestmentResults, formatter } from '../util/investment';

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

export default Results;

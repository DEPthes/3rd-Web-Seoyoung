import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  const totalInvestment = resultsData[resultsData.length - 1].valueEndOfYear;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          <th>Investment %</th> {/* 백분율 추가 */}
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            (input.initialInvestment +
              yearData.annualInvestment * yearData.year);
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          const investmentPercentage =
            (yearData.valueEndOfYear / totalInvestment) * 100;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              <td>{investmentPercentage.toFixed(2)}%</td>{" "}
              {/* 소수점 이하 두자리까지 나타냄 */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

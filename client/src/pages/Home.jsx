// pages/Home.jsx
//import components
import "../components/D3BarChart.jsx";
import D3BarChart from "../components/D3BarChart.jsx";
export default function Home() {
  return (
    <main>
      <h2> SBL (Save Brown Lives) </h2>
      <p>
        SBL is a a centralized organization to stop/reduce wrongful arrests and
        save Brown lives.
      </p>

      <h2> The Unjust Burden on Black and Latinx Lives </h2>
      <ul className="list">
        <li>
          <strong>Arrest:</strong> In 2020, Black Americans were targeted for
          arrest at more than double the rate of white Americans.
        </li>
        <li>
          <strong>Pretrial Coercion:</strong> Once arrested, Black and Latinx
          individuals are held for ransom—facing disproportionate pretrial
          detention and higher bail amounts. This pressure is so great that
          being held pretrial significantly increases the likelihood of a
          conviction, regardless of innocence.
        </li>
        <li>
          <strong>Imprisonment:</strong> This unequal pipeline leads to African
          Americans being incarcerated in state prisons at nearly five times the
          rate of white Americans.
        </li>
        <li>
          <strong>Bias, Not Crime:</strong> The bias is clear on the streets:
          Black drivers are searched more than twice as often as white drivers
          during stops, yet these searches yield fewer results—confirming police
          profiling, not proportional criminal activity.
        </li>
      </ul>

      <h2>Wrongful Arrests Data</h2>
      {/* barchart/graph created using dynamic data */}
      <D3BarChart />
      <h2>Disparity data</h2>
      <div className="table-display">
        <table className="disparity-table">
          <thead>
            <tr>
              <th>Crime Category</th>
              <th>Disparity Ratio (Black vs. White)</th>
              <th>Key Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Drug Crimes</td>
              <td>
                <strong>19 times</strong> more likely
              </td>
              <td>
                This extreme disparity is largely driven by mass-scale police
                scandals and fabricated cases, despite similar rates of drug use
                across racial groups.
              </td>
            </tr>
            <tr>
              <td>Murder</td>
              <td>
                <strong>7.5 times</strong> more likely
              </td>
              <td>
                Innocent Black defendants convicted of murder are nearly 50%
                more likely to have had police misconduct involved in their case
                than white defendants.
              </td>
            </tr>
            <tr>
              <td>Sexual Assault</td>
              <td>
                <strong>8 times</strong> more likely
              </td>
              <td>
                Often connected to the high risk of cross-racial eyewitness
                misidentification.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

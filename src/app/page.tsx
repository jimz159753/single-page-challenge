import { data } from './data'
import { ArrtoObj } from './helpers/helper'
import { IData } from './interfaces/data.interface';
import './globals.css'

export default function Home() {
  const { riskFactors, keyTrends, keyAsks } = data;
  const formatedData = ArrtoObj(riskFactors, keyTrends, keyAsks)

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>Riskfactors</th>
            <th>Keytrends</th>
            <th>KeyAsks</th>
          </tr>
        </thead>
        <tbody>
          {
            formatedData.map((el: IData, idx: number) => <tr key={idx}>
              <td><p>{el.riskFactor}</p></td>
              <td><p>{el.keyTrend}</p></td>
              <td><p>{el.keyAsk}</p></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

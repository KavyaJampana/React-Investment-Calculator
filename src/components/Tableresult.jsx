import {calculateInvestmentResults} from "../util/investment"
import {formatter} from "../util/investment"
export default function Tableresult({userArray}){
    let resultArray=calculateInvestmentResults({initialInvestment:userArray[0],annualInvestment:userArray[1],expectedReturn:userArray[2],duration:userArray[3]})
    console.log(resultArray)
    return(
       <table id="result">
        <thead>
        <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interst</th>
        </tr>
        </thead>
        <tbody>
          {resultArray.map((row)=> 
           <tr>
                <td>{row.year}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.annualInvestment)}</td>
            </tr>
           
          )}
        </tbody>
      </table> 
    );
}
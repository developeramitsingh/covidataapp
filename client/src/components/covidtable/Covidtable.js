import React, {useState, useEffect} from 'react';

const Covidtable =(props)=>{
	const [tabledata, settableData] = useState("");

	let countryWise = tabledata!=""?tabledata.countries.map((country)=>{        
		return(
				<tr key={country.CountryCode}>
					<td>{country.Country}</td>
					<td>{country.TotalConfirmed}</td>
					<td>{country.TotalRecovered}</td>
					<td>{country.TotalDeaths}</td>
					<td>{country.TotalConfirmed-(country.TotalRecovered+country.TotalDeaths)}</td>
				</tr>
			)
	}):""

	useEffect(()=>{
		
		settableData(()=>{
			return props
		})
	},[])

	return (
		<div>
			<h3 className="center">Data According to the Countries</h3>
			<table>
				<tbody>
					<tr>
						<th>Countries</th>
						<th>Total Cases</th>
						<th>Recovered</th>
						<th>Total Deaths</th>
						<th>Active Cases</th>
					</tr>
					{tabledata!=""?countryWise:null}
				</tbody>
			</table>
			
		</div>
	)
}

export default Covidtable;
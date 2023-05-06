import React, { useEffect, useState} from 'react';
import SearchBar from '../Search/index';

const Drug = () => {
    const [data, setData] = useState({drugData: [], drugs:[]});
  const [drugDetails, setDrugDetails] = useState({});
  const getData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  };
  fetch('http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.data.drugData);
        setDrugDetails(data.data.drugData[0])
        let drugs = [];
        data.data.drugData.map((drug) =>{
          drugs.push(drug.drugName)
        })
        setData({drugData: data.data.drugData, drugs:drugs})} );
  }
  useEffect(() => {
    getData();
  }, []);

  const handleDrugSelection = (drug) =>{
    let details = data.drugData.find((element) => element.drugName === drug)
    setDrugDetails(details)
  }

  return (
    <>
    <div className="App">
    <div className="header1">
        <span className="hr1">Your one-step for</span> <span className="hr2">MEDICAL LEARNING & UPDATES</span>
    </div>
    <div className="header2">
      <div style={{marginLeft: '20%',
    marginRight: '5%',
    marginBottom: '1%',
    marginTop: '1%'
}}>
      <span className="hr1">Get knowledge of the </span> <span className="hr2">APPROVED DRUGS</span>
      </div>
        <SearchBar placeholder='Enter drug type' />
    </div>
    <div style={{display: 'flex'}}>
      <div style={{width: '60%', margin: 'auto'}}>
        <p>Daily Drug Database : The DailyMed database contains 143072 labeling submitted to the Food and Drug Administration (FDA) bycompanies. DailyMed does not contain a complete listing of labeling for FDA-regulated products(e.g. labeling that is not submitted to the FDA).</p>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', margin: '2%', gap: '3%'}}>
        <button className='btn default'>Anesthesia</button>
        <button className='btn default'>Cardiology</button>
        <button className='btn default' style={{background: '#cce5ef'}}>Critical Care</button>
        <button className='btn default'>Dentistry</button>
        <button className='btn default'>Dermatology</button>
        <button className='btn default'>Diabetology</button>
      </div>
    </div>
    {data && <div style={{marginLeft: '5%', marginRight: '5%', display: 'flex', gap: '2%', height: 'auto'}}>
      <div style={{width: '40%'}}>
        <div style={{border: '3px solid', borderBottom: '1px solid'}}>
          <h4 style={{margin:"5px"}}>Drug Data</h4>
        </div>
	      <div style={{ border: '3px solid'}}>
          <ul style={{listStyle: 'none', padding: 0, cursor: 'pointer'}}>
            { data.drugs.map((drug) => (
              <li style={{background: drug === drugDetails.drugName ? "aqua" : 'white'}} onClick={()=>{handleDrugSelection(drug)}}>{drug}</li>
            ))}
          </ul>
        </div>
      </div>
<div style={{width: '60%'}}>
        <div style={{border: '3px solid', borderBottom: '1px solid'}}>
          <h4 style={{margin:"5px"}}>Drug Detils</h4>
        </div>
	<div style={{ border: '3px solid'}}>
          <p>{drugDetails.drugDetails}</p>
        </div>
      </div>
    </div>}
    <div style={{display: 'flex', flexDirection: 'row', marginLeft: '5%', marginTop: '2%', gap: '2%'}}>
      <div style={{width: '30%', textAlign: 'left'}}>
        <p>News</p>
        <h2>Education: Diabets and tooth loss together cause cognitive impairment.</h2>
        <p>Diabetes and tooth loss both contribute to cognitive impairment and cognitive decline in older adults, according to new research published in a special issue of the Journal of dental Research.</p>
        <p style={{fontSize: '12px'}}>Posted on 15 Mar 2023</p>
      </div>
      <div style={{width: '30%', textAlign: 'left'}}>
      <p>CRITICAL CARE : 10 Mar 2023</p>
        <h4>Discovering Arthrogryposis: Understanding The Causes, Symptoms and Diagnosis</h4>
        <p>Arthrogryposis, also known as Curvature of the Joints, is a rare condition that affects the joints in the body.</p>
      </div>
      <div style={{width: '30%', textAlign: 'left'}}>
        <p>CRITICAL CARE : 28 Mar 2023</p>
        <h4>The Science Behind Crest Disease: Exploring the underlying mechanisms</h4>
        <hr/>
        <p>CRITICAL CARE : 22 Feb 2023</p>
        <h4>A Comprehensive Guide To Apache Scoring: How It Works And Why You Should Use It</h4>
      </div>
    </div>
    </div>
    </>
  );
}

export default Drug;
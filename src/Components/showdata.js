import React,{useEffect, useState} from "react";
import "./showdata.css";


const Showdata = () => {
 
  const [coviddata,setCoviddata] = useState([]);

  const fetchdata = () => {
  
    fetch('https://data.covid19india.org/data.json').then(
      response => {
        return response.json();
      }
    ).then(
       data => {
        console.log(data.statewise[0]);
        setCoviddata(data.statewise[0]);
      }
    )
  }

    useEffect(()=>{
      fetchdata();
    },[]);
    
    return(
    
      <>
        <div className="bodycss">
          <div className="livecss">
           <h3>Live</h3>
           <h3>COVID-19 CORONAVIRUS TRACKER</h3>
          </div>


           <div className="boxes">
              <div className="box color1">
                 <p>our <span className="title">COUNTRY</span></p>
                 <h1 className="record">INDIA</h1>
              </div>


              <div className="box color2">
                 <p>our <span className="title">RECOVERED</span></p>
                 <h1 className="record">{coviddata.recovered}</h1>
              </div>

              <div className="box color3">
                 <p>our <span className="title">CONFIRMED</span></p>
                 <h1 className="record">{coviddata.confirmed}</h1>
              </div>

              <div className="box color4">
                 <p>our <span className="title">DEATH</span></p>
                 <h1 className="record">{coviddata.deaths}</h1>
              </div>

              <div className="box color5">
                 <p>our <span className="title">ACTIVE</span></p>
                 <h1 className="record">{coviddata.active}</h1>
              </div>

              <div className="box color6">
                 <p>our <span className="title">UPDATED</span></p>
                 <h1 className="record">{coviddata.lastupdatedtime}</h1>
              </div>
           </div>

         </div>
      </>
    );
}

export default Showdata;
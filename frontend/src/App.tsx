import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [picked_date, setDate] = useState("");
  const [dataHist, getHistorical] = useState<undefined | any>(undefined);
  const [dataToda, getToday] = useState<undefined | any>(undefined);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id = "title">Gold Prices</h1>
      </header>

      <div>
        <label>Date</label><br/>
        <input type="date" id="date" name="date" onChange={e => setDate(e.target.value)}/> <br />
        <button onClick={search} id = "go-button">
        GO
        </button>
      </div>



      <p>
        The gold price on {picked_date} was ... 
      </p>

      {dataToda === undefined ? (
        <p>Nothing entered yet!</p>
      ) : (
        <div id="result">
          <p>{parseFloat(dataHist.rates.XAG).toFixed(2)}</p>
          <p>Gold price Today {parseFloat(dataToda.rates.XAG).toFixed(2)}</p>
          
        </div>
      )}

    </div>
  );

    function search() {
      
      let today ={
        base: "NZD",
        date: "2022-07-23",
        rates: {XAG: 29.72905401000014},
        success: true,
        timestamp: 1658361300,
        unit: "per ounce"
      }
      console.log("faked -->"+get_date());
      console.log(today);
      getToday(today);

      let historical ={
        base: "NZD",
        date: "2022-07-10",
        rates: {XAG: 34.87276006669757},
        success: true,
        timestamp: 1658361300,
        unit: "per ounce"
      }
      console.log("faked -->",picked_date);
      console.log(historical);
      getHistorical(historical);


        //  ENABLE BELOW WHEN YOU WANT TO USE UP API 
        // only goes to 2019, can fix that later...

      // console.log("==========================")
      // axios.get("https://metals-api.com/api/" + picked_date, { params: {access_key : "kth7y2mc5gd1z9xrc200xv86w7u227y7f6fiqlfgsijwf1i9558xr3dn08v2", base : "NZD",  symbols : "XAG"} }).then((res) => {
      // console.log(res.data)
      // getHistorical(res.data)
      // ; });

      // axios.get("https://metals-api.com/api/" + get_date(), { params: {access_key : "kth7y2mc5gd1z9xrc200xv86w7u227y7f6fiqlfgsijwf1i9558xr3dn08v2", base : "NZD",  symbols : "XAG"} }).then((res) => {
      // console.log(res.data)
      // getToday(res.data)
      // ; });

      
    }

    function get_date(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      return yyyy + '-' +mm + '-' + dd;
    }

  }

export default App;

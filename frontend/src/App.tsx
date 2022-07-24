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
        <p id = "header-intro">Input a historical date and see how much your gold has risen 🤞🏼 in price</p>
      </header>

      <div>
        <br />

        <input type="date" id="date-input" name="date" onChange={e => setDate(e.target.value)}/> 
        <button onClick={search} id = "go-button">
        GO
        </button>
      </div>



      <p>
        {picked_date} to {get_date()}
      </p>


      {dataToda === undefined ? (
        <p>Nothing entered yet!</p>
      ) : (

        <div id="result">
          <span id = "left-result">
            <p>Historical</p>
            {/* <p>{picked_date}</p> */}
          <p id = "data_string">{parseFloat(dataHist.rates.XAG).toFixed(2)}</p>
          </span>
          
          <span id = "center">
            {getArrow(dataHist.rates.XAG,dataToda.rates.XAG)}
          </span>

          <span id = "right-result">
            <p>Today</p>
            {/* <p>{get_date()}</p> */}
          <p id = "data_string">{parseFloat(dataToda.rates.XAG).toFixed(2)}</p>
          </span>




          <div id = "remark">
          <p>{getDiffrence(dataHist.rates.XAG,dataToda.rates.XAG)}</p>
          </div>
        </div>
      )}

    </div>
  );

  function getDiffrence(historical: number,today: number) {
    if (today>historical) {
      var str = "🎉 Congrats you made $"+(today-historical).toFixed(2)+" per Ounce 🎉";
      return str;
    }else{
      var str = "Ohh no you lost $"+(historical-today).toFixed(2)+" per Ounce";
      return str;
    }
  }

    function getArrow(historical:Date,today:Date) {
      if (today>historical) {
        return "✅";
      }else{
        return "❌";
      }
    }

    function search() {
      
      let today ={
        base: "NZD",
        date: "2022-07-23",
        rates: {XAG: 39.72905401000014},
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

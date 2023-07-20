import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://www.superheroapi.com/api.php/10226261791523661/search/ironman"
      );
      const result = await res.json();
      setData(result.results[0]);
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="page-container">
      <div className="info">
        <h2>Name : {data.biography["full-name"]}</h2>
      </div>
      <img src={data.image.url} alt="" className="avatar" />
      <div className="stat"></div>
    </div>
  );
}

export default App;

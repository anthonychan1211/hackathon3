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
    Object.keys(data).length && (
      <div className="page-container">
        <div className="info">
          <table>
            <tr>
              <td>Hero Name:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Original Name:</td>
              <td>{data.biography["full-name"]}</td>
            </tr>
          </table>
        </div>
        <img src={data.image.url} alt="" className="avatar" />
        <div className="stat"></div>
      </div>
    )
  );
}

export default App;

import { useEffect, useState } from "react";

export default function Home() {
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
    <>
      {Object.keys(data).length > 0 && ( // Check if data is not empty before rendering
        <div className="page-container">
          <div className="info">
            <table>
              <tbody>
                <tr>
                  <td>Hero Name:</td>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <td>Original Name:</td>
                  <td>{data.biography["full-name"]}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>{data.appearance["gender"]}</td>
                </tr>
                <tr>
                  <td>Height:</td>
                  <td>{data.appearance.height[0]}</td>
                </tr>
                <tr>
                  <td>Race:</td>
                  <td>{data.appearance.race}</td>
                </tr>
                <tr>
                  <td>Place of Birth:</td>
                  <td>{data.biography["place-of-birth"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <img src={data.image.url} alt="" className="avatar" />
          <div className="stat">
            <table>
              <tbody>
                <tr>
                  <td>Intelligence:</td>
                  <td>{data.powerstats.intelligence}</td>
                </tr>
                <tr>
                  <td>Durability:</td>
                  <td>{data.powerstats.durability}</td>
                </tr>
                <tr>
                  <td>Power:</td>
                  <td>{data.powerstats.power}</td>
                </tr>
                <tr>
                  <td>Speed:</td>
                  <td>{data.powerstats.speed}</td>
                </tr>
                <tr>
                  <td>Strength:</td>
                  <td>{data.powerstats.strength}</td>
                </tr>
                <tr>
                  <td>Combat:</td>
                  <td>{data.powerstats.combat}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

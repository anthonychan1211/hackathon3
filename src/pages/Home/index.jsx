import React from "react";
import { useAuth } from "../../contexts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();
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

  return (
    <>
      <h1>Hello {user}!</h1>
      <div>
        <Link to="/message">Message me</Link>
      </div>
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
              </tbody>
            </table>
          </div>
          <img src={data.image.url} alt="" className="avatar" />
          <div className="stat"></div>
        </div>
      )}
    </>
  );
}

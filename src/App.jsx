import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://www.superheroapi.com/api.php/10226261791523661/search/ironman"
      );
      const result = await res.json();
      setData(result);
    }
    fetchData();
  });
  console.log(data);
  return <></>;
}

export default App;

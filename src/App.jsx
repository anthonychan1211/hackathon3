import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./routes";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import { AuthProvider } from "./contexts";
// import "./App.css";

// function App() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(
//         "https://www.superheroapi.com/api.php/10226261791523661/search/ironman"
//       );
//       const result = await res.json();
//       setData(result.results[0]);
//     }
//     fetchData();
//   }, []);
//   console.log(data);
//   return (
//     Object.keys(data).length && (
//       <div className="page-container">
//         <div className="info">
//           <table>
//             <tbody>
//               <tr>
//                 <td>Hero Name:</td>
//                 <td>{data.name}</td>
//               </tr>
//               <tr>
//                 <td>Original Name:</td>
//                 <td>{data.biography["full-name"]}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <img src={data.image.url} alt="" className="avatar" />
//         <div className="stat"></div>
//       </div>
//     )
//   );
// }

// export default App;

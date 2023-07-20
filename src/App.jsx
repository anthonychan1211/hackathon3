import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Message from "./pages/Message";
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
        <Route path="/message" element={<Message />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

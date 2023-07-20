import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function Login() {
  const goTo = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { setUser } = useAuth();
  const inputRef = useRef();

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setUser(inputValue);
    goTo("/");
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="log-in-form" onSubmit={handleSubmit}>
      <h1 className="log-in-title">Sign up to message Iron Man</h1>
      <input
        type="text"
        onChange={handleInput}
        value={inputValue}
        placeholder="username"
        autoComplete="off"
        ref={inputRef}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

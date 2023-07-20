import { useState } from "react";
import { Outlet } from "react-router-dom";
const Message = () => {
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSendMessage = () => {
    setResponseMessage("I'll be with you soon my friend!");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Outlet />
      <div className="message-page">
        {!responseMessage ? (
          <>
            <h1>Message to Iron Man:</h1>
            <textarea
              value={message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="message-box"
              required
            />
            <button onClick={handleSendMessage} className="send">
              Send it
            </button>
          </>
        ) : (
          <div className="response">{responseMessage}</div>
        )}
      </div>
    </>
  );
};

export default Message;

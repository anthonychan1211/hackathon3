import React, { useState } from "react";

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
    <div className="message-page">
      <h1>Message to Iron Man:</h1>
      {!responseMessage ? (
        <>
          <textarea
            value={message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="message-box"
            required
          />
          <button onClick={handleSendMessage}>Send it</button>
        </>
      ) : (
        <div className="response">{responseMessage}</div>
      )}
    </div>
  );
};

export default Message;

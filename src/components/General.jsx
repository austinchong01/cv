import { useState } from "react";

function Content(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // const [components, setComponents] = useState([<Content key={crypto.randomUUID()}/>]);

  return (
    <>
      <div>
        <label>
          Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </label>
      </div>
      <div>
        <label>
          Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </label>
      </div>
      <div>
        <label>
          Phone Number:{" "}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
        </label>
      </div>
    </>
  );
}

export default function General({ status }) {
  console.log(status);

  return (
    <>
      <h2>General Information</h2>
      <Content/>
    </>
  );
}

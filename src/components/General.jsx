import { useState } from "react";

function Content({ status }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div>
        <label>
          Name:{" "}
          {!status ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <>{name}</>
          )}
        </label>
      </div>
      <div>
        <label>
          Email:{" "}
          {!status ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <>{email}</>
          )}
        </label>
      </div>
      <div>
        <label>
          Phone Number:{" "}
          {!status ? (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <>{phone}</>
          )}
        </label>
      </div>
    </>
  );
}

export default function General({ status }) {
  const [components, setComponents] = useState([<Content key={crypto.randomUUID()}/>]);

  const add = (event) => {
    event.preventDefault();
    setComponents([...components, <Content key={crypto.randomUUID()}/>]);
  };

  const remove = (event) => {
    event.preventDefault();
  };

  console.log(components)

  return (
    <>
      <h2>General Information</h2>

      {components.map((component) => component)}

      <button onClick={add} className="add">
        Add
      </button>
      <button onClick={remove} className="remove">
        Remove
      </button>
    </>
  );
}

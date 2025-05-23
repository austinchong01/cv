import { useState } from "react";

function Field(props) {
  const [val, setVal] = useState("");

  return (
    <div>
      {!props.status ? (
        <label>
          {props.text}: <span> </span>
          <input
            type={props.type}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </label>
      ) : (
        <>
          <h4>
            {props.text}: {val}
          </h4>{" "}
        </>
      )}
    </div>
  );
}

function Content({ status }) {
  return (
    <>
      <Field text="School" type="text" status={status} />
      <Field text="Study" type="text" status={status} />
      <Field text="Date" type="date" status={status} />
    </>
  );
}

export default function Education({ status }) {
  const [components, setComponents] = useState([{ key: crypto.randomUUID()}]);

  const add = (event) => {
    event.preventDefault();
    console.log("add");

    setComponents([...components, { key: crypto.randomUUID()}])
  };

  const remove = (key) => {
    event.preventDefault();
    setComponents(components.filter(component => component.key != key));
  };

  return (
    <>
      <h2>Education</h2>
      {components.map((component) => {
        return (
          <div key={component.key}>
            <Content status={status} />
            {!status && <button className="remove" onClick={() => remove(component.key)}>
              REMOVE
            </button>}
          </div>
        );
      })}
      {!status && <div>
        <button className="add" onClick={add}>
          ADD
        </button>
      </div>}
    </>
  );
}

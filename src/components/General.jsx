import { useState } from "react";

function Field(props) {
  const [val, setVal] = useState("");

  return (
    <div>
      {!props.status ? 
      <label>
        {props.text}: <span> </span>
        <input
          type={props.type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </label> : <><h4>{props.text}: {val}</h4> </>}
    </div>
  );
}

function Content({status}) {

  return (
    <>
      <Field text="Name" type="text" status={status}/>
      <Field text="Email" type="email" status={status}/>
      <Field text="Phone Number" type="tel" status={status}/>
    </>
  );
}

export default function General({ status }) {

  return (
    <>
      <h2>General Information</h2>
      <Content status={status} />
    </>
  );
}

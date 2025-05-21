import { useState } from "react";

export default function Education(props) {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");

  const [submit, setSubmit] = useState(true);
  const toggle = (event) => {
    event.preventDefault();
    setSubmit(!submit);
  };

//   console.log(props)

  return (
    <>
      <h2>Education</h2>
      <div>
        <label>
          School:{" "}
          {submit ? (
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          ) : (
            <>{school}</>
          )}
        </label>
      </div>
      <div>
        <label>
          Study:{" "}
          {submit ? (
            <input
              type="text"
              value={study}
              onChange={(e) => setStudy(e.target.value)}
            />
          ) : (
            <>{study}</>
          )}
        </label>
      </div>
      <div>
        <label>
          Date:{" "}
          {submit ? (
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          ) : (
            <>{date}</>
          )}
        </label>
      </div>
      <button onClick={toggle}>{submit ? "Submit" : "Edit"}</button>
    </>
  );
}
import { useState } from "react";

export default function Experience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const [submit, setSubmit] = useState(true);
  const toggle = (event) => {
    event.preventDefault();
    setSubmit(!submit);
  };

  return (
    <>
      <h2>Experience</h2>
      <div>
        <label>
          Company:{" "}
          {submit ? (
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          ) : (
            <>{company}</>
          )}
        </label>
      </div>
      <div>
        <label>
          Position:{" "}
          {submit ? (
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          ) : (
            <>{position}</>
          )}
        </label>
      </div>
      <div>
        <label>
          Description:{" "}
          {submit ? (
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <>{desc}</>
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
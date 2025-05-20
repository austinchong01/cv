import { useState } from "react";

function General() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [submit, setSubmit] = useState(true);

  const toggle = (event) => {
    event.preventDefault();
    setSubmit(!submit);
  };

  return (
    <>
      <h2>General Information</h2>
      <div>
        <label>
          Name:{" "}
          {submit ? (
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
          {submit ? (
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
          {submit ? (
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
      <button onClick={toggle}>{submit ? "Submit" : "Edit"}</button>
    </>
  );
}

function Education() {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");

  const [submit, setSubmit] = useState(true);
  const toggle = (event) => {
    event.preventDefault();
    setSubmit(!submit);
  };

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

function Experience() {
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

function Form() {
  return (
    <form>
      <General />
      <Education />
      <Experience />
    </form>
  );
}

export { Form };

import { useState } from "react";

function General() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <h2>General Information</h2>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone Number:{" "}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
    </>
  );
}

function Education() {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <h2>Education</h2>
      <label>
        School:{" "}
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </label>
      <label>
        Study:{" "}
        <input
          type="text"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
        />
      </label>
      <label>
        Date:{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
    </>
  );
}

function Experience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <h2>Experience</h2>
      <label>
        Company: {" "}
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label>
        Position:{" "}
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label>
        Description:{" "}
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <label>
        Date:{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
    </>
  );
}

function Form() {
  return (
    <>
      <General />
      <Education />
      <Experience />
    </>
  );
}

export { General, Form };

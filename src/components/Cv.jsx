import { useState } from "react";

import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

function Form() {
  const [submit, setSubmit] = useState(false);

  const toggle = (event) => {
    event.preventDefault();
    setSubmit(!submit);
    // console.log(submit)
  };

  return (
    <div>
      <form>
        <General status={submit} />
        <Education status={submit} />
        <Experience status={submit}/>
        <div>
          <button className="submit" onClick={toggle}>
            {submit ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export { Form };

import { useState } from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== '';
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;
  let isFormValid = false;

  if (isEnteredNameValid) {
    isFormValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = (event) => {
    setWasNameInputTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setWasNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    wasNameInputTouched(false);
  };

  const nameInputClasses = !isNameInputInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}
        />
        {isNameInputInvalid && <p className="error-text">Enter Your Name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;

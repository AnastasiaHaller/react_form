import { useState } from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== '';
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const isEnteredEmailValid = enteredEmail.includes('@');
  const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched;

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputLostFocusHandler = (event) => {
    setWasNameInputTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputLostFocusHandler = (event) => {
    setWasEmailInputTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setWasNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    wasNameInputTouched(false);

    setEnteredEmail('');
    wasEmailInputTouched(false);
  };

  const nameInputClasses = !isNameInputInvalid ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !isEmailInputInvalid ? 'form-control' : 'form-control invalid';

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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}
        />
        {isEmailInputInvalid && <p className="error-text">Enter Your Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;

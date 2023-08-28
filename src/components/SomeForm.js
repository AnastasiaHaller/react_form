import useInput from "../hooks/use-input";

const SomeForm = (props) => {

  const isInputEmpty = (val) => val.trim() !== '';
  const isEmailValid = (val) => val.includes('@');

  const {
    value: enteredFirstNameValue,
    hasError: isFirstNameInputInvalid,
    isValid: isFirstNameValueValid,
    inputChangeHandler: firstNameInputChangeHandler,
    inputLostFocusHandler: firstNameInputLostFocusHandler,
    resetValues: firstNameResetValues
  } = useInput(isInputEmpty);

  const {
    value: enteredLastNameValue,
    hasError: isLastNameInputInvalid,
    isValid: isLastNameValueValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputLostFocusHandler: lastNameInputLostFocusHandler,
    resetValues: lastNameResetValues
  } = useInput(isInputEmpty);

  const {
    value: enteredEmailValue,
    hasError: isEmailInputInvalid,
    isValid: isEmailValueValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: emailResetValues
  } = useInput(isEmailValid);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log(enteredFirstNameValue, enteredLastNameValue, enteredEmailValue);

    firstNameResetValues();
    lastNameResetValues();
    emailResetValues();
  };

  const firstNameInputClasses =isFirstNameInputInvalid ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses =isLastNameInputInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses =isEmailInputInvalid ? 'form-control invalid' : 'form-control';

  let isFormValid = false;

  if (isFirstNameValueValid && isLastNameValueValid && isEmailValueValid) {
    isFormValid = true;
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="first-name">Your Name</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstNameValue}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputLostFocusHandler}
          />
        {isFirstNameInputInvalid && <p className="error-text">Enter Your First Name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Your Surname</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastNameValue}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputLostFocusHandler}
          />
        {isLastNameInputInvalid && <p className="error-text">Enter Your Last Name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmailValue}
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
        />
      {isEmailInputInvalid && <p className="error-text">Enter Your Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid} >Send</button>
      </div>
    </form>
  );
};

export default SomeForm;

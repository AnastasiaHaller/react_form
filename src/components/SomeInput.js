import useInput from '../hooks/use-input';

const SomeInput = (props) => {

  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput((val) => val.trim() !== '');

  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler:emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput((val) => val.includes('@'));

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInputValues();
    resetEmailInputValues();
  };

  const nameInputClasses = !hasNameInputError ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !hasEmailInputError ? 'form-control' : 'form-control invalid';

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
        {hasNameInputError && <p className="error-text">Enter Your Name</p>}
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
        {hasEmailInputError && <p className="error-text">Enter Your Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;

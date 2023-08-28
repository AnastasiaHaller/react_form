const SomeInput = (props) => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;

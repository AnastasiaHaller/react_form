const SomeForm = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Your Surname</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">Your E-Mail</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Send</button>
      </div>
    </form>
  );
};

export default SomeForm;

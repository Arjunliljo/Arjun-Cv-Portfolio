function RadioButtons() {
  return (
    <fieldset
      className="form__fieldset"
      style={{ border: "none", marginBottom: "3rem" }}
    >
      <legend className="form__legend"></legend>
      <div className="form__radio-group">
        <input
          type="radio"
          name="reason"
          className="form__radio-input"
          id="hire"
          value="hire"
        />
        <label htmlFor="hire" className="form__radio-label">
          <span className="form__radio-button"></span>
          Hire
        </label>
      </div>
      <div className="form__radio-group">
        <input
          type="radio"
          name="reason"
          className="form__radio-input"
          id="sayHi"
          value="sayHi"
        />
        <label htmlFor="sayHi" className="form__radio-label">
          <span className="form__radio-button"></span>
          Say Hi
        </label>
      </div>
    </fieldset>
  );
}

export default RadioButtons;

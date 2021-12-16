import React from "react";

const Form = (props) => {
  const { values } = props;

  return (
    <form className="container form">
      <div className="form_users input">
        <h3>General Information</h3>
        <label>
          Name
          <input name="name" type="text" value={values.name} />
        </label>
        <label>
          email
          <input name="email" type="email" value={values.email} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={values.password} />
        </label>
      </div>
      <div className="form_users checkbox">
        <h3>Click Agree to submit</h3>
        <label>
          I agree with Terms of Services
          <input name="terms" type="checkbox" value={values.terms} />
        </label>
      </div>
      <div className="submit-form">
        <h3>Add User</h3>
        <button>Submit</button>
      </div>
    </form>
  );
};
export default Form;

import React from "react";
import { connect } from "react-redux";

import "./FormError.scss";

function FormError(props) {
  return (
    <span className="form-error">
      {props.isValid ? "" : "Please, enter worklog name"}
    </span>
  );
}

const mapStateToProps = (state) => {
  return {
    isValid: state.validation,
  };
};

// const mapDispachToProps = {
//   validateField,
// };

export default connect(mapStateToProps, null)(FormError);

import React from "react";
import F from "./filter.module.css";
import { connect } from "react-redux";
// import * as contactsAction from '../../redux/contacts/contacts-actions';
import { getFilter, changeFilter } from "../../redux/contacts";

const Filter = ({ filter, onChange }) => (
  <label className={F.label}>
    Find contacts by name
    <input
      className={F.input}
      type="text"
      value={filter}
      onChange={onChange}
    ></input>
  </label>
);

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

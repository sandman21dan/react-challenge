import * as React from 'react';
import { AppState, inputFieldChange, addToNumbers } from '../../state';
import { connect } from 'react-redux';

interface EntryFieldProps {
  inputValue: number;
  handleItemAdd: (value: number) => any;
  handleSubmit: (value: number) => any;
}

const EntryField: React.StatelessComponent<EntryFieldProps> = ({
  inputValue,
  handleItemAdd,
  handleSubmit,
}) => {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    handleItemAdd(parseInt(event.target.value, 10));
  }

  function handleButtonClick(event: React.SyntheticEvent) {
    handleSubmit(inputValue);
  }

  return (
    <>
      <label>Name:
      <input type="text" onChange={handleInputChange} value={inputValue} />
      </label>
      <button onClick={handleButtonClick}>Enter</button>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  inputValue: state.inputField,
});

const mapDispatchToProps = {
  handleItemAdd: inputFieldChange,
  handleSubmit: addToNumbers,
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryField);

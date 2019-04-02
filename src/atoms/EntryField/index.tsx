import * as React from 'react';
import { AppState, inputFieldChange, addToNumbers, resetNumberList } from '../../state';
import { connect } from 'react-redux';

interface EntryFieldProps {
  inputValue: number;
  handleItemAdd: (value: number) => any;
  handleSubmit: (value: number) => any;
  handleResetButtonClick: () => any;
}

const EntryField: React.StatelessComponent<EntryFieldProps> = ({
  inputValue,
  handleItemAdd,
  handleSubmit,
  handleResetButtonClick,
}) => {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10);
    if (value !== 0 && value !== inputValue) {
      handleItemAdd(value);
    }
  }

  function handleButtonClick(event: React.SyntheticEvent) {
    handleSubmit(inputValue);
    handleItemAdd(0);
  }

  function handleKeyUp(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSubmit(inputValue);
      handleItemAdd(0);
    }
  }
  return (
    <>
      <label>Name:
      <input type="text" onChange={handleInputChange} onKeyUp={handleKeyUp} value={inputValue} />
      </label>
      <button onClick={handleButtonClick}>Enter</button>
      <button onClick={handleResetButtonClick}>Reset</button>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  inputValue: state.inputField,
});

const mapDispatchToProps = {
  handleItemAdd: inputFieldChange,
  handleSubmit: addToNumbers,
  handleResetButtonClick: resetNumberList,
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryField);

import * as React from 'react';
import { AppState, inputFieldChange, addToNumbers, resetNumberList, sort, meanAverage, AppAverages, medianAverage, modeAverage } from '../../state';
import { connect } from 'react-redux';

interface EntryFieldProps {
  inputValue: number;
  numbers: number[];
  averageValue: AppAverages,
  onInputChange: (value: number) => any;
  onNumberAdd: (value: number) => any;
  onResetButtonClick: () => any;
  onSortButtonClick: () => any;
  onMeanButtonClick: (value: number[]) => any;
  onMedianButtonClick: (value: number[]) => any;
  onModeButtonClick: (value: number[]) => any;
}

const EntryField: React.StatelessComponent<EntryFieldProps> = ({
  inputValue,
  numbers,
  averageValue,
  onInputChange,
  onNumberAdd,
  onResetButtonClick,
  onSortButtonClick,
  onMeanButtonClick,
  onMedianButtonClick,
  onModeButtonClick

}) => {

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10);
    if (value !== 0 && value !== inputValue) {
      onInputChange(value);
    }
  }

  function handleButtonClick(event: React.SyntheticEvent) {
    onNumberAdd(inputValue);
    onInputChange(0);
  }

  function handleKeyUp(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      onNumberAdd(inputValue);
      onInputChange(0);
    }
  }

  function handleMeanButtonClick(event: React.SyntheticEvent) {
    onMeanButtonClick(numbers);
  }

  function handleMedianButtonClick(event: React.SyntheticEvent) {
    onMedianButtonClick(numbers);
  }

  function handleModeButtonClick(event: React.SyntheticEvent) {
    onModeButtonClick(numbers);
  }

  return (
    <>
      <label>Name:
      <input type="text" onChange={handleInputChange} onKeyUp={handleKeyUp} value={inputValue} />
      </label>
      <button onClick={handleButtonClick}>Enter</button>
      <button onClick={onResetButtonClick}>Reset</button>
      <button onClick={onSortButtonClick}>Sort</button>
      <div>
        <p />
        <button onClick={handleMeanButtonClick}>Mean</button>
        <label>{averageValue.mean}</label>
      </div>
      <div>
        <p />
        <button onClick={handleMedianButtonClick}>Median</button>
        <label>{averageValue.median}</label>
      </div>
      <div>
        <p />
        <button onClick={handleModeButtonClick}>Mode</button>
        {averageValue.mode.map((item, i) => <label key={i}>{item} ,</label>)}
      </div>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  inputValue: state.inputField,
  numbers: state.numbers,
  averageValue: state.averages
});

const mapDispatchToProps = {
  onInputChange: inputFieldChange,
  onNumberAdd: addToNumbers,
  onResetButtonClick: resetNumberList,
  onSortButtonClick: sort,
  onMeanButtonClick: meanAverage,
  onMedianButtonClick: medianAverage,
  onModeButtonClick: modeAverage,
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryField);

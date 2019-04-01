import * as React from 'react';
import { AppState, addToNumbers} from '../../state';
import { connect } from 'react-redux';

interface EntryFieldProps {
    onSubmit?: () => void;
}

const handleClick = () => (true)

const EntryField: React.StatelessComponent<EntryFieldProps> = ({
}) => (
    <>
        <label>Name:
            <input type="text" value='4' onChange={handleClick}/>
        </label>
        <button onClick={handleClick}>Enter</button>
    </>
);

const mapStateToProps = (state: AppState) => ({
    count: state.counter,
  });
  
  const mapDispatchToProps = {
    handleClick: addToNumbers,
  }

export default connect(mapStateToProps, mapDispatchToProps)(EntryField);

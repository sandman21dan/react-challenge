import * as React from 'react';

interface EntryFieldProps {
    onSubmit?: () => void;
}

const handleClick = () => (true)

const EntryField: React.StatelessComponent<EntryFieldProps> = ({
}) => (
    <>
        <label>Name:
            <input type="text" value='4'/>
        </label>
        <button onClick={handleClick}>Enter</button>
    </>
);

export default EntryField; 

import * as React from 'react';

interface ListItemProps {
  value: number;
}

const ListItem: React.StatelessComponent<ListItemProps> = ({
  value,

}) => (
    <p>{value}</p>
);

export default ListItem; 

import * as React from 'react';
import ListItem from '../../atoms/ListItem';
import { connect } from 'react-redux';
import { AppState } from 'src/state';


interface Props {
    // size: number;
  numbers: number[];
}

const List: React.FunctionComponent<Props> = ({
  numbers,
}) => {
  // const list: number[] = [];

  // for (let i = 0; i < 30; i++){
  //   list.push((Math.floor(Math.random() * 100) +1));
  // }

  const listItems = numbers.map((item, index) => <ListItem key={index} value={item} />);

  return (
    <div>
      {listItems}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  numbers: state.numbers,
});

export default connect(mapStateToProps)(List);

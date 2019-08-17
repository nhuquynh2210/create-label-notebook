import React, { Component } from 'react';
import NhanVo from './NhanVo';
import Page from './Page';

const getList2D = () => {
  const list = new Array(800).fill(0);
  var newArr = [];
  while (list.length) newArr.push(list.splice(0, 12));
  return newArr;
};

class App extends Component {
  render() {
    const newList = getList2D();
    console.log('newList', newList);

    return (
      <div>
        <Page danhSachNhanVo={new Array(12).fill(0)} />
      </div>
    );
  }
}

export default App;

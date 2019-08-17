import React, { Component } from 'react';
import NhanVo from './NhanVo';
// import './page.css';

class Page extends Component {
  render() {
    const { danhSachNhanVo, school } = this.props;
    return (
      <div
        style={{
          width: '21.0cm',
          height: '29.7cm',
          // borderWidth: '1px',
          borderColor: 'black',
          // border: 'solid',
          overflow: 'hidden',
          marginTop: '2cm',
          paddingTop: '3cm',
          // marginBottom: '2cm',
          paddingBottom: '0.7cm',

          paddingLeft: '2cm',
          paddingRight: '2cm'
        }}
      >
        {danhSachNhanVo.map((nhanvo, index) => {
          
          return (
            <div style={{ float: index % 2 === 0 ? 'left' : 'right' }}>
              <NhanVo nhanvo={nhanvo} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Page;

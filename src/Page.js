import React, { Component } from 'react';
import NhanVo from './NhanVo';
// import './page.css';

class Page extends Component {
  render() {
    const { danhSachNhanVo } = this.props;
    return (
      <div
        style={{
          width: '21.0cm',
          height: '29.7cm',
          // borderWidth: '1px',
          borderColor: 'black',
          border: 'solid',
          overflow: 'hidden',
          marginBottom: '2cm',
          paddingRight: '40px',
          paddingLeft: '40px'
        }}
      >
        {danhSachNhanVo.map((nhanvo, index) => (
          <div style={{ float: index % 2 === 0 ? 'left' : 'right' }}>
            <NhanVo />
          </div>
        ))}
      </div>
    );
  }
}

export default Page;

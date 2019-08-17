import React, { Component } from 'react';
import Field from './Field';
import Schools from './Schools';
import NhanVoImg from './vien-nhan.png';
import LineImg from './line.png';
export default class NhanVo extends Component {
  render() {
    return (
      <div
        style={{
          width: '8cm',
          height: '4cm',
          // borderWidth: '1px',
          borderColor: 'black',
          border: 'solid',
          marginTop: '0.2cm',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <img src={NhanVoImg} style={{ width: '8cm', height: '4cm' }} />
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '30px',
            right: '30px',
            // border: '3px solid #73AD21',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Schools />
          <img
            src={LineImg}
            style={{
              width: '4cm',
              height: '0.3cm',
              marginTop: '5px'
            }}
          />
          <div style={{}}>
            <Field text="Vở chính tả" />
            <Field text="Lớp 1/2" />
            <Field text="Họ Và Tên: Lê Viết Tâm Phúc" />
            <Field text="Năm học: 2018 - 2019" />
          </div>
        </div>
      </div>
    );
  }
}

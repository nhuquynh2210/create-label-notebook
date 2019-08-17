import React, { Component } from 'react';
import Field from './Field';
import Schools from './Schools';
import NhanVoImg from './vien-nhan.png';
import LineImg from './line.png';
export default class NhanVo extends Component {
  render() {
    const { nhanvo } = this.props;
    return (
      <div
        style={{
          width: '9cm',
          height: '4cm',
          // borderWidth: '1px',
          borderColor: 'black',
          border: 'solid',
          marginTop: '0.2cm',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <img src={NhanVoImg} style={{ width: '9cm', height: '4cm' }} />
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
          <Schools school={nhanvo.school} />
          <img
            src={LineImg}
            style={{
              width: '4cm',
              height: '0.3cm',
              marginTop: '5px'
            }}
          />
          <div style={{}}>
            <Field text={nhanvo.subject} />
            <Field text={nhanvo.classOfSchool} />
            <Field text={`Họ Và Tên: ${nhanvo.name}`} />
            <Field text={`Năm học: ${nhanvo.year}`} />
          </div>
        </div>
      </div>
    );
  }
}

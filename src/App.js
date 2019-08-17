import React, { Component } from 'react';
import NhanVo from './NhanVo';
import Page from './Page';
import './App.css';
const getList2D = list => {
  var newArr = [];
  while (list.length) newArr.push(list.splice(0, 12));
  return newArr;
};

class App extends Component {
  state = {
    showPage: false,
    school: '',
    classOfSchool: '',
    subjects: '',
    studens: '',
    year: ''
  };

  createList = () => {
    const { school, subjects, studens, year, classOfSchool } = this.state;
    const subjectList = subjects.replace(', ', ',').split(',');
    const studentList = studens.replace(', ', ',').split(',');
    let arr = [];
    for (let i = 0; i < subjectList.length; i++) {
      for (let j = 0; j < studentList.length; j++) {
        arr.push({
          subject: subjectList[i],
          name: studentList[j],
          school,
          year,
          classOfSchool
        });
      }
    }
    return arr;
  };

  render() {
    const { showPage } = this.state;
    return <div>{showPage ? this.renderPage() : this.renderForm()}</div>;
  }

  renderPage = () => {
    const list = this.createList();
    const splitList = getList2D(list);

    const { school, subjects, studens, year, classOfSchool } = this.state;
    return (
      <React.Fragment>
        {splitList.map((el, index) => (
          <Page danhSachNhanVo={el} key={index} />
        ))}
      </React.Fragment>
    );
  };
  renderForm = () => {
    return (
      <div id="form">
        <label>Trường</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Tên trường"
          value={this.state.school}
          onChange={event => {
            this.setState({ school: event.target.value });
          }}
        />

        <label>Lớp</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Tên lớp"
          value={this.state.classOfSchool}
          onChange={event => {
            this.setState({ classOfSchool: event.target.value });
          }}
        />
        <label>Danh sách học sinh</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Học sinh 1, Học sinh 2"
          value={this.state.studens}
          onChange={event => {
            this.setState({ studens: event.target.value });
          }}
        />
        <label>Danh sách môn học</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Môn Học 1, Môn học 2,..."
          value={this.state.subjects}
          onChange={event => {
            this.setState({ subjects: event.target.value });
          }}
        />
        <label>Năm học</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Năm học"
          value={this.state.year}
          onChange={event => {
            this.setState({ year: event.target.value });
          }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            this.setState({ showPage: true });
          }}
        />
      </div>
    );
  };
}

export default App;

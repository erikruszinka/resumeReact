import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Resume from "./Components/Resume";
import Loading from "./Components/Loading";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     resumeData: {}
  //   }
  // }
  state = { resumeData: null };

  getResumeData() {
    fetch("http://localhost:3000/resumeData.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ resumeData: data });
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    // const { main, resume, portfolio, testimonials } = this.state.resumeData;
    return this.state.resumeData ? (
      <div>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    ) : (
      <Loading />
    );
  }
}

export default App;

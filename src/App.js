import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Nav from "./components/Nav/Nav";

class App extends Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
    sort: "descending",
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=30&nat=us`).then((res) => {
      console.log(res);
      this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results,
      });
    });
  }

  handleInputChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    let search = e.target.value;
    const filteredList = this.state.employees.filter((employee) => {
      let values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(search.toLowerCase()) !== -1;
    });

    this.setState({
      filteredEmployees: filteredList,
    });
  };

  handleSortChange = (e) => {
    if (this.state.sort === "descending") {
      this.setState({
        sort: "ascending",
      });
      let filteredEmployees = this.state.filteredEmployees.sort((a, b) => {
        let name1 = a.name.first.toLowerCase(),
          name2 = b.name.first.toLowerCase();
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
        return 0;
      });
      let sortedList = [...filteredEmployees].sort();
      console.log("ASCENDING");
      this.setState({
        filteredEmployees: sortedList,
      });
    } else if (this.state.sort === "ascending") {
      this.setState({
        sort: "descending",
      });
      let filteredEmployees = this.state.filteredEmployees.sort((a, b) => {
        let name1 = a.name.first.toLowerCase(),
          name2 = b.name.first.toLowerCase();
        if (name1 < name2) {
          return 1;
        }
        if (name1 > name2) {
          return 1;
        }
        return 0;
      });
      console.log("DESCENDING");
      let sortedList = [...filteredEmployees].sort().reverse();
      this.setState({
        filteredEmployees: sortedList,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Nav handleInputChange={this.handleInputChange} />
        <Body
          employeeInfo={this.state.filteredEmployees}
          handleSortChange={this.handleSortChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

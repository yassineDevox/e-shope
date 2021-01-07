import React from "react";
import Sidebar from "../../../components/side-bar/side-bar";
import CrudTable from "../../../components/crud-table/crud-table";
import axios from "./../../../utils/axios";

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: {
        name: "",
        img: "",
        desc: "",
      },
    };
  }

  render() {
    return (
      <div class="page-wrapper chiller-theme toggled">
        <Sidebar />
        <main className="page-content">
          <h1> Categories Management !! </h1>
          <CrudTable
            handleNewRecord={this.handleNewCategory}
            handleChange={this.handleChangeInput}
          />
        </main>
      </div>
    );
  }

  handleChangeInput = (e) => {
    this.setState((prevState) => {
      prevState.category[e.target.name] = e.target.value;
      return prevState;
    });
  };

  handleNewCategory = (e) => {
    e.preventDefault();
    let Data = {
      ...this.state.category,
    };
    axios.post("/categories.json", Data).then((response) => {
      let newCatList = this.state.categories.push({
        ...response.data,
        id: response.name,
      });

      this.setState({
        categories: newCatList,
        category: { name: "", img: "", desc: "" },
      });
    });
  };

  componentDidMount = () => {
    axios.get("/categories.json").then((response) => console.log(response));
  };
}

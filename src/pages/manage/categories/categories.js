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
        id: "",
        name: "",
        thumbnail: "",
        description: "",
      },
      deletedCategoryId: "",
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
            records={this.state.categories}
            title='Categories'
            recordName='Category'
            propertiesNames={this.state.category}

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
        category: {name: "", thumbnail: "", description: "" },
      });
    });
  };

  componentDidMount = () => {
    
    axios.get("/categories.json").then((response) => {

      if(response.data!=null){
        let fetchedData = [];
        Object.keys(response.data).map(key=>fetchedData.push({...response.data[key],id:key}))
        this.setState({categories:fetchedData})
      }
    });

  };



}

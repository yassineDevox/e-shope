import React from "react";
import CrudTable from "../../../components/crud-table/crud-table";
import axios from "./../../../utils/axios";

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: {
        name: "",
        thumbnail: "",
        description: "",
      },
      deletedCategoryId: "",
    };
  }

  render() {

    return (
          
          <CrudTable
            handleNewRecord={this.handleNewCategory}
            handleChange={this.handleChangeInput}
            records={this.state.categories}
            title='Categories'
            recordName='Category'
            propertiesNames={this.state.category}
          />
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
    axios.post("/cats.json", Data).then((response) => {
      let newCatList = this.state.categories;
      newCatList.push({
        ...Data,
        id: response.name,
      });

      this.setState({
        categories: newCatList,
        category: {name: "", thumbnail: "", description: "" },
      });
    });
  };

  componentDidMount = () => {
    
    this._getAllCategories()

  };

  _getAllCategories = ()=>{
    axios.get("/cats.json").then((response) => {

      if(response.data!=null){
        let fetchedData = [];
        Object.keys(response.data).map(key=>fetchedData.push({...response.data[key],id:key}))
        this.setState({categories:fetchedData})
      }
    });
  }


}

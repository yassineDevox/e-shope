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
      updatedCategoryId: "",
    };
  }

  render() {
    return (
      <CrudTable
        handleNewRecord={this.handleNewCategory}
        handleEditRecord={this.handleEditCategory}
        handleSubmitForEditRecord={this.handleSubmitForEditCategory}
        handleDeleteRecord={this.handleDeleteCategory}
        handleSubmitForDeleteRecord={this.handleSubmitForDeleteCategory}
        handleChange={this.handleChangeInput}
        records={this.state.categories}
        title="Categories"
        recordName="Category"
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

  handleDeleteCategory = (catID) => {
    this.setState({ deletedCategoryId: catID });
  };
  handleEditCategory = (cat) => {
    console.log(cat);
    let catt = {
      name: cat.name,
      thumbnail: cat.thumbnail,
      description: cat.description,
    };
    this.setState({ category: catt, updatedCategoryId: cat.id });
  };

  handleSubmitForDeleteCategory = (e) => {
    e.preventDefault();
    axios
      .delete("/cats/" + this.state.deletedCategoryId + ".json")
      .then((_) => this._getAllCategories());
  };
  handleSubmitForEditCategory = (e) => {
    e.preventDefault();
    axios
      .put(
        "/cats/" + this.state.updatedCategoryId + ".json",
        this.state.category
      )
      .then((_) => {
        this._getAllCategories();
      })
      .catch((error) => {
        console.log(error);
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
        category: { name: "", thumbnail: "", description: "" },
      });
    });
  };

  componentDidMount = () => {
    this._getAllCategories();
  };

  _getAllCategories = () => {
    axios.get("/cats.json").then((response) => {
      if (response.data != null) {
        console.log(response);
        let fetchedData = [];
        Object.keys(response.data).map((key) =>
          fetchedData.push({ ...response.data[key], id: key })
        );
        this.setState({ categories: fetchedData });
      }
    });
  };
}

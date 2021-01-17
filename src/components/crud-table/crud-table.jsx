import React, { useEffect } from "react";
import "./crud-table.css";
import $ from "jquery";

export default function CrudTable(props) {
  const jQueryFunction = () => {
    $(document).ready(function () {
      // Select/Deselect checkboxes
      var checkbox = $('table tbody input[type="checkbox"]');
      $("#selectAll").click(function () {
        if (this.checked) {
          checkbox.each(function () {
            this.checked = true;
          });
        } else {
          checkbox.each(function () {
            this.checked = false;
          });
        }
      });
      checkbox.click(function () {
        if (!this.checked) {
          $("#selectAll").prop("checked", false);
        }
      });
    });
  };
  useEffect(() => {
    jQueryFunction();
  }, []);

  const getNumberOfPages = () => {
    let content = [];
    for (let i = 0; i < props.records.length/props.nbRecordsShown; i++) {
      content.push(
        
        <li onClick={props.handleGetTheSelectedPage} 
        className={i==0 ? 'page-item active':"page-item"}>
          <a href="javascript:void(0)" className="page-link">
            {i+1}
          </a>
        </li>
      );
    }
    return content;
  };

  return (
    <section>
      <div>
        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-xs-6">
                    <h2>
                      Manage <b>{props.title}</b>
                    </h2>
                  </div>
                  <div className="col-xs-6">
                    <a
                      href="#addCategoryModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i class="material-icons">&#xE147;</i>
                      <span>Add New {props.recordName}</span>
                    </a>
                    <a
                      href="#deleteCategoryModal"
                      className="btn btn-danger"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i> <span>Delete</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll" />
                      </span>
                    </th>
                    <th>#</th>
                    {Object.keys(props.propertiesNames).map((nameProperty) => (
                      <th className="text-capitalize">{nameProperty}</th>
                    ))}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.records.length == 0 ? (
                    <tr>
                      <td className="text-center" colSpan={6}>
                        List Of Categories Empty 🙄 !!
                      </td>
                    </tr>
                  ) : (
                    props.records.map((r) => {
                      return (
                        <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input
                                type="checkbox"
                                id="checkbox1"
                                name="options[]"
                                defaultValue={1}
                              />
                              <label htmlFor="checkbox1" />
                            </span>
                          </td>
                          <td>{r.id}</td>
                          {Object.keys(props.propertiesNames).map((k) => {
                            return (
                              <td>
                                {k == "thumbnail" ? (
                                  <img height="100" src={r[k]} alt="" />
                                ) : (
                                  r[k]
                                )}
                              </td>
                            );
                          })}
                          <td>
                            <a
                              href="#editCategoryModal"
                              className="edit"
                              data-toggle="modal"
                              onClick={() => props.handleEditRecord(r)}
                            >
                              <i
                                className="material-icons"
                                data-toggle="tooltip"
                                title="Edit"
                              >
                                
                              </i>
                            </a>
                            <a
                              href="#deleteCategoryModal"
                              className="delete"
                              data-toggle="modal"
                              onClick={() => props.handleDeleteRecord(r.id)}
                            >
                              <i
                                className="material-icons"
                                data-toggle="tooltip"
                                title="Delete"
                              >
                                
                              </i>
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
              <div className="clearfix">
                <div className="hint-text">
                  Showing <b>{props.nbRecordsShown}</b> out of{" "}
                  <b>{props.records.length}</b> entries
                </div>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a href="#">Previous</a>
                  </li>
                  {getNumberOfPages()}

                  <li className="page-item">
                    <a href="#" className="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="addCategoryModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Add {props.recordName}</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  {Object.keys(props.propertiesNames).map((k) => {
                    return (
                      <div className="form-group">
                        <label className="text-capitalize">{k}</label>
                        <input
                          name={k}
                          onChange={props.handleChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Add"
                    data-dismiss="modal"
                    onClick={props.handleNewRecord}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="editCategoryModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit {props.recordName}</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  {Object.keys(props.propertiesNames).map((k) => {
                    if (k != "id")
                      return (
                        <div className="form-group">
                          <label className="text-capitalize">{k}</label>
                          <input
                            onChange={props.handleChange}
                            className="form-control"
                            value={props.propertiesNames[k]}
                            type="text"
                            name={k}
                            required
                          />
                        </div>
                      );
                  })}
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-info"
                    defaultValue="Edit"
                    data-dismiss="modal"
                    onClick={props.handleSubmitForEditRecord}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
        <div id="deleteCategoryModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete {props.recordName}</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete these Category Row?</p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    data-dismiss="modal"
                    className="btn btn-danger"
                    defaultValue="Delete"
                    onClick={props.handleSubmitForDeleteRecord}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

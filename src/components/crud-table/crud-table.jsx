import React ,{useEffect} from "react";
import './crud-table.css'
import $ from 'jquery';

export default function CrudTable() {

    const jQueryFunction = ()=>{

            $(document).ready(function(){
                // Select/Deselect checkboxes
                var checkbox = $('table tbody input[type="checkbox"]');
                $("#selectAll").click(function(){
                    if(this.checked){
                        checkbox.each(function(){
                            this.checked = true;                        
                        });
                    } else{
                        checkbox.each(function(){
                            this.checked = false;                        
                        });
                    } 
                });
                checkbox.click(function(){
                    if(!this.checked){
                        $("#selectAll").prop("checked", false);
                    }
                });
            })
    }
    useEffect(() => {
       
        jQueryFunction()
        
    }, [])

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
                      Manage <b>Categories</b>
                    </h2>
                  </div>
                  <div className="col-xs-6">
                    <a
                      href="#addCategoryModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                     <i class="material-icons">&#xE147;</i>
                      <span>Add New Category</span>
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
                    <th>Id</th>
                    <th>Thumbnail</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
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
                    <td>Thomas Hardy</td>
                    <td>thomashardy@mail.com</td>
                    <td>89 Chiaroscuro Rd, Portland, USA</td>
                    <td>(171) 555-2222</td>
                    <td>
                      <a
                        href="#editCategoryModal"
                        className="edit"
                        data-toggle="modal"
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
                 
                </tbody>
              </table>
              <div className="clearfix">
                <div className="hint-text">
                  Showing <b>5</b> out of <b>25</b> entries
                </div>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a href="#">Previous</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>
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
                  <h4 className="modal-title">Add Category</h4>
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
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Url Image</label>
                    <input type="text" className="form-control" required />
                  </div>
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
                  <h4 className="modal-title">Edit Category</h4>
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
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Url Image</label>
                    <input type="text" className="form-control" required />
                  </div>
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
                    defaultValue="Save"
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
                  <h4 className="modal-title">Delete Category</h4>
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
                    className="btn btn-danger"
                    defaultValue="Delete"
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

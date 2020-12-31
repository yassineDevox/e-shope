export default function Modal(props) {
  return (
    <section>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit : {props.p.title} Product
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={props.onUpdateProduct} className="flex-grow-1">
                  <div className="mb-3 text-center">
                    <label htmlFor="t" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="t"
                      onChange={props.onChangeInput}
                      name="title"
                      value={props.p.title}
                    />
                  </div>

                  <div className="mb-3 text-center">
                    <label htmlFor="d" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="d"
                      onChange={props.onChangeInput}
                      name="desc"
                      value={props.p.desc}
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <label htmlFor="i" className="form-label">
                      Image
                    </label>
                    <div className="input-group ">
                      <span className="input-group-text">URL:/</span>
                      <input
                        type="text"
                        className="form-control"
                        id="i"
                        onChange={props.onChangeInput}
                        name="img"
                        value={props.p.img}
                      />
                    </div>
                   
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success mt-3 text-uppercase"
                      data-dismiss="modal"
                    >
                      Edit <i className="fa fa-edit"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

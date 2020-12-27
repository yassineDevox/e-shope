
export default function AddProductUI(props){
    return (
        <form onSubmit={props.onAddProduct} className='flex-grow-1'>
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
          />
          {/* etape deux  render la className dynamique en se basant sur la valeur du variable error */}
          <small
            className={
              props.errorTitle == true ? "text-danger d-block" : "d-none"
            }
          >
            Title is required !!
          </small>
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
          ></textarea>

          <small
            className={
              props.errorDesc == true ? "text-danger d-block" : "d-none"
            }
          >
            Description is required !!
          </small>
        </div>

        <div className='text-center'>
          <label htmlFor="i" className="form-label">
            Image
          </label>
          <div className="input-group ">
            <span className="input-group-text">
              URL:/
            </span>
            <input
              type="text"
              className="form-control"
              id="i"
              onChange={props.onChangeInput}
              name="img"
            />
          </div>
          <small
            className={
              props.errorImg == true ? "text-danger d-block" : "d-none"
            }
          >
            Image is required !!
          </small>
        </div>

       <div className="text-center">
       <button
          type="submit"
          className="btn btn-success mt-3 text-uppercase"
        >
          add product <i className="fa fa-plus"></i>
        </button>
       </div>
          
      </form>
    )
}
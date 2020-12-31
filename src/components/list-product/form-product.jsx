export default function FormProduct (props){

    return (    
      <form onSubmit={props.handleSubmit} className="flex-grow-1">
        <div className="mb-3 text-center">
          <label htmlFor="t" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="t"
            onChange={props.handleInputChange}
            name="title"
            value={props.title}
          />
          {/* etape deux  render la className dynamique en se basant sur la valeur du variable error */}
          <small
            className={
              props.errorTitle == true
                ? "text-danger d-block"
                : "d-none"
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
            onChange={props.handleInputChange}
            name="desc"
            value={props.desc}
          ></textarea>

          <small
            className={
              props.errorDesc == true
                ? "text-danger d-block"
                : "d-none"
            }
          >
            Description is required !!
          </small>
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
              onChange={props.handleInputChange}
              name="img"
              value={props.img}
            />
          </div>
          <small
            className={
              props.errorImg == true
                ? "text-danger d-block"
                : "d-none"
            }
          >
            Image is required !!
          </small>
        </div>
      </form>
  
    )
}
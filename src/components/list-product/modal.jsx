import PropTypes from 'prop-types';

export default function Modal(props){
    return (
        <div
        className="modal fade"
        id={props.id}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
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
            {/* jibliya l html li kin wast lcomponent Modal */}
            {props.children}
            </div>
            <div className="modal-footer">
              
              <button
                data-dismiss="modal"
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Edit <i className="fa fa-edit"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

Modal.propTypes = {
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}
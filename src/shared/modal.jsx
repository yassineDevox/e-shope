import PropTypes from "prop-types";

export default function Modal(props) {
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
            {/* hna jibliya lfunction li ran taba9 mani ran clicker 3la botona
              et aussi smia et licon dyale button */}
            <button
              data-dismiss="modal"
              type="button"
              className="btn btn-warning"
              onClick={props.handleSubmit}
            >
              {props.submitBtn} <i className={`fa fa-${props.submitIcon}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  submitBtn:PropTypes.string.isRequired,
  submitIcon:PropTypes.string.isRequired
};

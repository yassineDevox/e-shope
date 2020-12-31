export default function Login() {
  return (
    <div className="card">
      <article className="card-body">
        <a href className="float-right btn btn-outline-primary">
          Sign up
        </a>
        <h4 className="card-title mb-4 mt-1">Sign in</h4>

        <hr />
        <form>
          <div className="form-group">
            <input
              name
              className="form-control"
              placeholder="Email or login"
              type="email"
            />
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <input
              className="form-control"
              placeholder="******"
              type="password"
            />
          </div>{" "}
          {/* form-group// */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Login
                </button>
              </div>{" "}
              {/* form-group// */}
            </div>
            <div className="col-md-6 text-right">
              <a className="small" href="#">
                Forgot password?
              </a>
            </div>
          </div>{" "}
          {/* .row// */}
        </form>
      </article>
    </div>
  );
}

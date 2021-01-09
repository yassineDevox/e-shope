import React from "react";

export default function AuthUI(props) {
  return (
    <div className="container-fluid">
      <div className="container p-5">
        <h2 className="text-center" id="title">
          E-shope Admin Panel 🔥
        </h2>
        <p className="text-center">
          <small id="passwordHelpInline" className="text-muted">
            {" "}
            This is the admin panel app for this website{" "}
            <a href="https://www.facebook.com/JheanYu">e-shop.com</a>
          </small>
        </p>
        <hr />
        <div className="row">
          <div className="col-md-5">
            <form role="form" onSubmit={props.handleSignup}>
              <fieldset>
                <p className="text-uppercase pull-center"> SIGN UP</p>
                {/* <div className="form-group">
                  <input
                    onChange={props.handleChangeInput}
                    type="text"
                    name="nom"
                    id="nom"
                    className="form-control input-lg"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={props.handleChange}
                    type="text"
                    name="pren"
                    id="nom"
                    className="form-control input-lg"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label htmlFor="basic-url">Your Image URL</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon3">Avatar : </span>
                    </div>
                    <input onChange={props.handleChange} name='avatar' type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                  </div>
                </div> */}
                <div className="form-group">
                  <input
                    onChange={props.handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input-lg"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={props.handleChange}
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-lg"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn btn-lg btn-primary text-uppercase"
                    value=" register"
                    style={{zoom:'.7'}} 
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="col-md-2">{/*-----null----*/}</div>
          <div className="col-md-5">
            <form role="form" onSubmit={props.handleSignin}>
              <fieldset>
                <p className="text-uppercase"> Login using your account: </p>
                

                <div className="form-group">
                  <input
                    onChange={props.handleChange}
                    type="email"
                    name="email"
                    id="username"
                    className="form-control input-lg"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={props.handleChange}
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-lg"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input style={{zoom:'.8'}} type="submit" className="btn btn-md btn-primary text-uppercase" Value="Sign In" />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center">
        <small id="passwordHelpInline" className="text-muted">
          {" "}
          Developer:<a href="http://www.psau.edu.ph/"> Yassine Devox </a> BS.
          Information and technology students @2017 Credits:{" "}
          <a href="https://v4-alpha.getbootstrap.com/">boostrap v4.</a>
        </small>
      </p>
      <p
        className={
          props.errorMSG == "" ? "d-none" : "text-center alert-danger p-3"
        }
        style={{ fontSize: "20px" }}
      >
        {props.errorMSG} 😐 !!
      </p>
      <p
        className={
          props.successMSG == "" ? "d-none" : "text-center alert-success p-3"
        }
        style={{ fontSize: "20px" }}
      >
        {props.successMSG} 🥰 !!
      </p>
    </div>
  );
}

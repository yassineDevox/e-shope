import React from 'react'

export default function Auth() {
    return (
        <div className="container-fluid">
  <div className="container p-5">
    <h2 className="text-center" id="title">Eshope Admin Panel 🔥</h2>
    <p className="text-center">
      <small id="passwordHelpInline" className="text-muted"> This is the admin panel app for this website  <a href="https://www.facebook.com/JheanYu">e-shop.com</a> </small>
    </p>
    <hr />
    <div className="row">
      <div className="col-md-5">
        <form role="form" method="post" action="register.php">
          <fieldset>							
            <p className="text-uppercase pull-center"> SIGN UP</p>	
            <div className="form-group">
              <input type="text" name="username" id="username" className="form-control input-lg" placeholder="username" />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="password" name="password2" id="password2" className="form-control input-lg" placeholder="Password2" />
            </div>
           
            <div>
              <input type="submit" className="btn btn-lg btn-primary"   value=" register" />
            </div>
          </fieldset>
        </form>
      </div>
      <div className="col-md-2">
        {/*-----null----*/}
      </div>
      <div className="col-md-5">
        <form role="form">
          <fieldset>							
            <p className="text-uppercase"> Login using your account: </p>	
            <div className="form-group">
              <input type="email" name="username" id="username" className="form-control input-lg" placeholder="username" />
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" />
            </div>
            <div>
              <input type="submit" className="btn btn-md" defaultValue="Sign In" />
            </div>
          </fieldset>
        </form>	
      </div>
    </div>
  </div>
  <p className="text-center">
    <small id="passwordHelpInline" className="text-muted"> Developer:<a href="http://www.psau.edu.ph/"> Yassine Devox </a> BS. Information and technology students @2017 Credits: <a href="https://v4-alpha.getbootstrap.com/">boostrap v4.</a></small>
  </p>
</div>
    )
}

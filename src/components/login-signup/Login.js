import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";


const SignUp = () => {
  return (
    <section className="signup ">
      <div className="mask" id="gradient-custom-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-uppercase text-center m-5 opacity-75">
                    Create an account
                  </h2>
                  <form>
                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="form3Example1cg"></label>
                    </div>
                    <div className="form-outline mb-3">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="form3Example3cg"></label>
                    </div>
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        required
                      />
                      <label htmlFor="form3Example4cg"></label>
                    </div>
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        placeholder="Repeat your password"
                        required
                      />
                      <label htmlFor="form3Example4cdg"></label>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-3">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3g"
                      >
                        I agree all statements in{" "}
                        <Link to="/" className="text-body">
                          <u>Terms of service</u>
                        </Link>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to={"/"}>
                        <button
                          type="button"
                          className="btn btn-success btn-lg w-full text-body"
                          id="gradient-custom-4"
                        >
                          Register
                        </button>
                      </Link>
                    </div>
                    <div>
                      <p class="text-center text-muted mt-3 mb-3">
                        Have already an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
    </section>
  );
};

export default SignUp;
import { FunctionComponent } from "react";

export const UserProfile: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div
                  className="user-profile pb-1 text-center"
                  style={{ margin: "0 0 1rem 0" }}
                >
                  <div className="user-avatar" style={{ margin: "0 0 1rem 0" }}>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                  <h5 className="user-name" style={{ margin: "0 0 0.5rem 0" }}>
                    User Name
                  </h5>
                  <h6
                    className="user-email"
                    style={{
                      margin: "0",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      color: "#9fa8b9",
                    }}
                  >
                    User email
                  </h6>
                </div>
                <div
                  className="about text-center"
                  style={{ margin: "2rem 0 0 0" }}
                >
                  <h5 style={{ margin: "0 0 15px 0", color: "#007ae1" }}>
                    About
                  </h5>
                  <p style={{ fontSize: "0.825rem" }}>
                    I'm Yuki. Full Stack Designer I enjoy creating user-centric,
                    delightful and human experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div
            className="card h-100"
            style={{
              background: "white",
              borderRadius: "5px",
              border: "0",
              marginBottom: "1rem",
            }}
          >
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter full name"
                      style={{
                        border: "1px solid #cfd1d8",
                        borderRadius: "2px",
                        fontSize: "0.825rem",
                        background: "white",
                        color: "#2e323c",
                      }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="website">Age</label>
                    <input
                      type="url"
                      className="form-control"
                      id="website"
                      placeholder="User age"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-secondary m-3"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary m-3"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

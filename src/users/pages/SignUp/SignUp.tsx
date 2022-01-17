import { FunctionComponent } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Container, Row } from "react-bootstrap";
import { signUpUser } from "users/api/users";
import { useLocation, useNavigate } from "react-router-dom";
import { registrationValidation } from "../../../utils/validation";
import { toast } from "react-toastify";

interface ISignUpProps {
  modelRole?: string;
  studioId?: string;
}

export const SignUp: FunctionComponent<ISignUpProps> = ({
  modelRole,
  studioId,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location?.state?.role ? location.state.role : modelRole;
  console.log(studioId);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {/* <div className="col-md-4 col-sm-3"></div> */}
        {/* <div
          className={studioId ? "col-lg-3 col-md-0" : "col-md-4 col-sm-3"}
        ></div> */}
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
            role: role,
            studioId: studioId || "",
          }}
          validationSchema={registrationValidation}
          onSubmit={async (values) => {
            await signUpUser(values).then((response) => {
              if (response?.data?.message) {
                navigate("/logInPage");
                toast(response.data.message);
              }
            });
          }}
        >
          {({ errors, touched }) => (
            <>
              {/* <Form className="d-grid col-md-4 col-sm-6 pt-5"> */}
              <Form
                className={
                  studioId
                    ? "d-grid col-lg-6 col-md-12 pt-5"
                    : "d-grid col-md-4 col-sm-6 pt-5 col-xl-4"
                }
              >
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="mt-5"
                />
                {touched.name && errors.name && (
                  <h6 className="text-danger">{errors.name}</h6>
                )}
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="mt-4"
                />
                {touched.password && errors.password && (
                  <h6 className="text-danger">{errors.password}</h6>
                )}
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="mt-4"
                />
                {touched.email && errors.email && (
                  <h6 className="text-danger">{errors.email}</h6>
                )}
                <Row className="justify-content-center">
                  <Button
                    type="submit"
                    variant="secondary"
                    // className="col-4 mt-3 mb-5"
                    className={
                      studioId
                        ? "col-md-6 col-8 mt-3 mb-5"
                        : "col-8 col-md-8 col-xl-5 mt-3 mb-5"
                    }
                  >
                    Sign Up {role}
                  </Button>
                </Row>
              </Form>
            </>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

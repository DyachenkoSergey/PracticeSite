import { FunctionComponent } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Container, Row } from "react-bootstrap";
import { signUpUser } from "users/api/users";
import { useLocation, useNavigate } from "react-router";
import { registrationValidation } from "../../../utils/validation";
import { toast } from "react-toastify";

export const SignUp: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state.role;

  return (
    <Container fluid>
      <Row>
        <div className="col-md-4 col-sm-3"></div>
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
            role: role,
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
              <Form className="d-grid col-md-4 col-sm-6 pt-5">
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
                <Button
                  type="submit"
                  variant="secondary"
                  className="col-4 offset-4 mt-3 mb-5"
                >
                  Sign Up {role}
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

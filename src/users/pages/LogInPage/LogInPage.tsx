import { FunctionComponent } from "react";
import { Field, Formik, Form } from "formik";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { login } from "../../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { userIdSelector, roleSelector } from "store/selectors/auth";
import { loginValidation } from "utils/validation";

export const LogInPage: FunctionComponent = () => {
  const userId = useSelector(userIdSelector);
  const userRole = useSelector(roleSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row>
        <div className="col-md-4 col-sm-3"></div>
        <Formik
          initialValues={{
            name: "",
            password: "",
          }}
          validationSchema={loginValidation}
          onSubmit={(values) => {
            dispatch(login(values));
            if (userRole === "MODEL") {
              navigate(`/modelRoom/${userId}`);
            } else {
              navigate("/");
            }
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
                <Button
                  type="submit"
                  variant="secondary"
                  className="col-4 offset-4 mt-3 mb-5"
                >
                  Log In
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

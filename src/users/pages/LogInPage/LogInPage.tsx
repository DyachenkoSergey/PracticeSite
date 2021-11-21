import { FunctionComponent } from "react";
import { useFormik } from "formik";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { login } from "../../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { userIdSelector } from "store/selectors/auth";

export const LogInPage: FunctionComponent = () => {
  const isLogin = useSelector(userIdSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLogin) {
    navigate("/");
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return (
    <Container fluid>
      <Row>
        <div className="col-md-4 col-sm-3"></div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-grid col-md-4 col-sm-6 pt-5"
        >
          <label htmlFor="name" />
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
            className="mt-5"
          />
          <label htmlFor="password" />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="mt-4"
          />

          <Button
            type="submit"
            variant="secondary"
            className="col-md-4 offset-4 mt-3 mb-5"
          >
            Submit
          </Button>
        </form>
      </Row>
    </Container>
  );
};

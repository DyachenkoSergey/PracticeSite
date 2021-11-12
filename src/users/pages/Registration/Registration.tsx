import { FunctionComponent } from "react";
import { useFormik } from "formik";
import { Button, Container, Row } from "react-bootstrap";
import { signUpUsersFromApi } from "users/api/signUp";

export const Registration: FunctionComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      signUpUsersFromApi(values).then((data) => console.log(data));
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
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="mt-4"
          />
          <label htmlFor="email" />
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email Address"
            className="mt-4"
          />
          <Button
            type="submit"
            variant="secondary"
            className="col-md-4 offset-4 mt-3 mb-5"
          >
            Registration
          </Button>
        </form>
      </Row>
    </Container>
  );
};

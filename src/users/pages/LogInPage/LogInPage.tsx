import { FunctionComponent, useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { getUsersFromApi } from "users/api/logIn";
import { useNavigate } from "react-router";

interface IUsers {
  name: string;
  age?: string;
  role?: string;
  password: string;
}

export const LogInPage: FunctionComponent = () => {
  const [user, setUser] = useState<IUsers | undefined | null>(null);
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  const goToSignUpPage = () => {
    navigate("/registration");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      getUsersFromApi(values).then((data) => {
        setUser(data);
      });
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
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement={"bottom"}
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                {user ? (
                  <>
                    <Popover.Header as="h4">{`Now you are logged in, ${user?.name}`}</Popover.Header>
                    <Popover.Body className="text-center">
                      <Button
                        className="p-3"
                        onClick={goToMainPage}
                        variant="secondary"
                      >
                        OK
                      </Button>
                    </Popover.Body>{" "}
                  </>
                ) : (
                  <>
                    <Popover.Header as="h4">{`You are not logged in. Please`}</Popover.Header>
                    <Popover.Body className="text-center d-flex justify-content-between">
                      <h5 className="p-2">Try again or</h5>
                      <Button className="p-2" onClick={goToSignUpPage}>
                        Sign up
                      </Button>
                    </Popover.Body>
                  </>
                )}
              </Popover>
            }
          >
            <Button
              type="submit"
              variant="secondary"
              className="col-md-4 offset-4 mt-3 mb-5"
            >
              Submit
            </Button>
          </OverlayTrigger>
        </form>
      </Row>
    </Container>
  );
};

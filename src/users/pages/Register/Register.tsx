import { FunctionComponent, useState } from "react";
import { useFormik } from "formik";
import { Button, Container, Row } from "react-bootstrap";
import { registerUser } from "users/api/users";
import { useNavigate } from "react-router";
import { ModalWindow } from "sharedComponents/Layout/modal";

export const Register: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState("");
  const navigate = useNavigate();

  const openModal = (): void => {
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      registerUser(values).then((data) => {
        if (data === "created") {
          navigate("/logInPage");
        } else {
          setMessages(data);
          openModal();
        }
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
            Register
          </Button>
        </form>
        <ModalWindow
          messages={messages}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      </Row>
    </Container>
  );
};

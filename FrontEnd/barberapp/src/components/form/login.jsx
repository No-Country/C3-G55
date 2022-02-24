import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { StyledButton, StyledContainerForm, StyledForm } from "./formStyled";

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{ nombre: "", apellido: "", email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ errors }) => (
          <StyledContainerForm>
            <Form
              action=""
              style={{
                width: "30%",
                height: "300px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                margin: "auto",
                backgroundColor: "steelblue",
                position: "relative",
              }}
            >
              <h2
                style={{
                  paddingTop: "1rem",
                  color: "black",
                  letterSpacing: "3px",
                }}
              >
                LOGIN
              </h2>

              <StyledForm>
                <label htmlFor="email"> Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jhondoe@email.com"
                />
              </StyledForm>
              <StyledForm>
                <label htmlFor="password"> Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </StyledForm>
              <StyledButton type="submit">Enviar</StyledButton>
            </Form>
          </StyledContainerForm>
        )}
      </Formik>
    </>
  );
};
export default Login;

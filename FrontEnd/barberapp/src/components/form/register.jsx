import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { StyledButton, StyledContainerForm, StyledForm } from "./formStyled";

const Register = () => {
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
                height: "450px",
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
                REGISTRO
              </h2>
              <StyledForm>
                <label htmlFor="nombre">Nombre</label>
                <Field
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Jhon"
                />
              </StyledForm>

              <StyledForm>
                <label htmlFor="apellido">Apellido</label>
                <Field
                  type="text"
                  name="apellido"
                  id="apellido"
                  placeholder="Doe"
                />
              </StyledForm>
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
export default Register;

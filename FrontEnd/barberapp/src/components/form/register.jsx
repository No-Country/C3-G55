import React from "react";
import { useFormik } from "formik";
import { StyledButton, StyledContainerForm, StyledForm } from "./formStyled";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { register } from "../../reducers/authReducer";

const Register = () => {
  const dispatch = useDispatch();

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es Obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
      number: Yup.string().required("El número es Obligatorio"),
      password: Yup.string()
        .required("Ingrese su contraseña")
        .min(6, "El password debe contener al menos 6 caracteres"),
    }),
    onSubmit: (valores) => {
      dispatch(register(valores));
    },
  });

  return (
    <StyledContainerForm>
      <form
        onSubmit={formik.handleSubmit}
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
        {formik.touched.name && formik.errors.name ? (
          <div>
            <h4>Error! {formik.errors.name} </h4>
          </div>
        ) : null}
        <StyledForm>
          <label htmlFor="name">Name</label>

          <input
            type="name"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Nombre y Apellido"
            autoComplete="off"
          />
        </StyledForm>
        {formik.touched.email && formik.errors.email ? (
          <div>
            <h4>Error!{formik.errors.email} </h4>
          </div>
        ) : null}
        <StyledForm>
          <label htmlFor="email"> Email</label>

          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="jhondoe@email.com"
            autoComplete="off"
          />
        </StyledForm>

        {formik.touched.number && formik.errors.number ? (
          <div>
            <h4>Error!{formik.errors.number}</h4>
          </div>
        ) : null}
        <StyledForm>
          <label htmlFor="number"> telefono</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
        </StyledForm>

        {formik.touched.password && formik.errors.password ? (
          <div>
            <h4>Error!{formik.errors.password}</h4>
          </div>
        ) : null}
        <StyledForm>
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
        </StyledForm>
        <StyledButton type="submit">Enviar</StyledButton>
      </form>
    </StyledContainerForm>
  );
};
export default Register;

/*
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
*/

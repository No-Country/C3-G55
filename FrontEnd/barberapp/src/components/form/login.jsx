import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  StyledButton,
  StyledContainerForm,
  StyledErrors,
  StyledForm,
} from "./formStyled";

import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const isAuthe = useSelector((state) => state.Auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthe) {
      navigate("/Date");
    }
  }, [isAuthe]);

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
      password: Yup.string()
        .required("Ingrese su contraseña")
        .min(6, "El password debe contener al menos 6 caracteres"),
    }),
    onSubmit: (valores) => {
      dispatch(login(valores));
    },
  });

  return (
    <StyledContainerForm>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "400px",
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
        {formik.touched.email && formik.errors.email ? (
          <StyledErrors>
            <h4>Error!</h4>
            <p>{formik.errors.email} </p>
          </StyledErrors>
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

        {formik.touched.password && formik.errors.password ? (
          <StyledErrors>
            <span>Error!</span>
            <span>{formik.errors.password} </span>
          </StyledErrors>
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
export default Login;

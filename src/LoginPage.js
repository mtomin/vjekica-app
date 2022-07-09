import React from "react";
import { Form, Field, Formik } from "formik";
import Container from "react-bootstrap/esm/Container";
import * as Yup from "yup";

function LoginPage(props) {
  return (
    <Container className="d-flex justify-content-center login-form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          props.onSubmit(values);
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              {errors.email && touched.email ? (
                <div className="alert-danger">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              {errors.password && touched.password ? (
                <div className="alert-danger">{errors.password}</div>
              ) : null}
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!(isValid && dirty)}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default LoginPage;

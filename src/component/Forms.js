import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Forms = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema,
  });

  //   console.log('forms vallue',formik.values);
  //   console.log("forms errors", formik.errors);
  console.log("forms visited", formik.touched);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        ></input>
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <br></br>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <br></br>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <br></br>
        <button>submit</button>
      </form>
    </>
  );
};

export default Forms;

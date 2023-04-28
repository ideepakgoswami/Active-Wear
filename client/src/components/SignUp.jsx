import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(4).max(20).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
const SignUp = () => {
  const navigate = useNavigate()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,

    onSubmit: (values, action) => {
      axios.post('http://localhost:5000/api/auth/signup', values)
        .then(response => {
          alert(response.data.message);
          action.resetForm();
          navigate("/signin")
        })
        .catch(error => {
          console.log(error.response.data);
          alert(error.response.data.error); // Display the error message on the UI
        });
    }
  })

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className=" px-6 py-8 rounded  text-black w-full">
          <h1 className="font-bold text-center tracking-wider text-3xl mb-8 w-full text-navy">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block bg-gray-200 border-2 focus:outline-none border-gray-400 w-full p-3 rounded mb-3"
              name="name"
              placeholder="Name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && touched.name ?
              <div className="text-sm text-red-500">{errors.name}</div> : null
            }
            <input
              type="email"
              className="block bg-gray-200 border-2 focus:outline-none border-gray-400 w-full p-3 rounded mb-3"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && touched.email ?
              <div className="text-sm text-red-500">{errors.email}</div> : null
            }
            <input
              type="password"
              className="block bg-gray-200 border-2 focus:outline-none border-gray-400 w-full p-3 rounded mb-3"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && touched.password ?
              <div className="text-sm text-red-500">{errors.password}</div> : null
            }
            <input
              type="password"
              className="block bg-gray-200 border-2 focus:outline-none border-gray-400 w-full p-3 rounded mb-3"
              name="confirm_password"
              value={values.confirm_password}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            {errors.confirm_password && touched.confirm_password ?
              <div className="text-sm text-red-500">{errors.confirm_password}</div> : null
            }
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-navy text-white hover:bg-green-dark focus:outline-none my-1"
            > Create Account
            </button>
          </form>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?&nbsp;
          <a
            className="no-underline border-b border-blue text-blue"
            href="/signin"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
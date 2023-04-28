import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const initialValues = {
  email: "",
  password: ""
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required")
});

const SignIn = () => {

  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,

    onSubmit: (values, action) => {
      axios.post('http://localhost:5000/api/auth/signin', values)
        .then(response => {
          alert(response.data.message);
          action.resetForm();
          navigate("/home")
        })
        .catch(error => {
          console.log(error.response.data);
          alert(error.response.data.error);
        });
    }
  })
  return (
    <>
      {/* <!-- component --> */}
      <section className="min-h-screen bg-gray-300 flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form onSubmit={handleSubmit} className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-navy">
                Sign In
              </h1>
              <div className="py-2 text-left">
                <input
                  type="email"
                  className="bg-gray-200 border-2 border-gray-400 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email ?
                  <div className="text-sm text-red-500">{errors.email}</div> : null
                }
              </div>
              <div className="py-2 text-left">
                <input
                  type="password"
                  className="bg-gray-200 border-2 border-gray-400 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.password && touched.password ?
                  <div className="text-sm text-red-500">{errors.password}</div> : null
                }
              </div>
              <div className="py-2">
                <button
                  type="submit"
                  className="border-2 border-gray-100 focus:outline-none bg-navy text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center">
              <a href="/" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-12">
              <span>Don't have an account?&nbsp;</span>
              <Link
                to="/signup"
                className="font-light text-md text-indigo-600 underline hover:text-indigo-800"
              >
                Create One
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

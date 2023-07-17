import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { API_ENDPOINT } from "../../config/constants";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const SigninForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Sign-in failed");
      }

      console.log("Sign-in successful");

      // extract the response body as JSON data
      const data = await response.json();

      // After successful signin, first we will save the token in localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));

      // Then we will redirect the user to the dashboard
      navigate("/account");
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className='block text-gray-700 font-semibold mb-2'>Email:</label>
        <input
          type='email'
          id='email'
          autoFocus
          {...register("email", { required: true })}
          className={`w-full border rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label className='block text-gray-700 font-semibold mb-2'>
          Password:
        </label>
        <input
          type='password'
          id='password'
          {...register("password", { required: true })}
          className={`w-full border rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && <span>This field is required</span>}
      </div>

      <button
        type='submit'
        className='w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4'
      >
        Sign In
      </button>
    </form>
  );
};

export default SigninForm;

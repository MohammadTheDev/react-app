import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Form/Button";
import Input from "../../Components/Form/Input";
import NavBar from "../../Components/NavBar/NavBar";
import TopBar from "../../Components/TopBar/TopBar";
import { useForm } from "../../hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";

export default function Register() {
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerNewUser = (event) => {
    event.preventDefault();
    console.log("User Register");
    // Perform registration logic here
  };

  return (
    <>
      <TopBar />
      <NavBar />

      <section className="login-register">
        <div className="flex flex-col items-center my-16 mx-0 pt-10 pb-20 px-8 bg-white shadow-lg shadow-[#a8acb94d] rounded-xl w-[50rem] border-b-1.5 border-solid !border-[#2bce56]">
          <span className="block text-[#7b868a] text-4xl">
            Create a user account
          </span>
          <span className="block text-[#7b868a] text-2xl">
            We are happy that you are going to join us
          </span>
          <div className="bg-[#f0f2f7] my-6 mx-0 rounded-md w-full flex justify-center items-center py-6 px-0">
            <span className="text-[#7b868a] text-2xl">Already registered?</span>
            <Link
              className="bg-[#a8aaaf] text-white text-lg ml-3 rounded-lg py-2 px-3.5 hover:!text-text"
              to="/login"
            >
              Login
            </Link>
          </div>
          <form action="#" className="w-full">
            <div className="relative">
              <Input
                element="input"
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="User Name"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
            </div>
            <div className="relative">
              <Input
                element="input"
                className="login-form__username-input"
                id="email"
                type="text"
                placeholder="Email Address"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(19),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
              />
            </div>
            <div className="relative">
              <Input
                element="input"
                className="login-form__password-input"
                id="password"
                type="password"
                placeholder="Password"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
            </div>
            <Button
              className={`w-full border-none rounded py-4 pr-0 pl-0 mt-3.5 flex items-center relative ${
                formState.isFormValid ? "!bg-primary" : "bg-red-600"
              }`}
              type="submit"
              onClick={registerNewUser}
              disabled={!formState.isFormValid}
            >
              <i className="fa fa-user-plus text-white text-3xl absolute right-4"></i>
              <span className="text-white my-0 mx-auto">Register</span>
            </Button>
          </form>
          <div className="mt-12 text-[#7b868a] text-xl w-full">
            <span className="login__des-title">Hello dear user:</span>
            <ul className="list-disc mr-8 mt-4">
              <li className="login__des-item">
                Please use reliable and up-to-date browsers such as Google
                Chrome and Firefox use.
              </li>
              <li className="login__des-item">
                We never ask for your confidential information via email.
              </li>
              <li className="login__des-item">
                Please change your password at short intervals.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
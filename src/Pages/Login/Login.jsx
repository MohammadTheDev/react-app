import React from "react";
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
} from "../../validators/rules";
import "./Login.css";

export default function Login() {
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

  console.log(formState);

  const userLogin = (event) => {
    event.preventDefault();
    console.log("User Login");
  };

  return (
    <>
      <TopBar />
      <NavBar />

      <section className="login-register">
        <div className="flex flex-col items-center my-16 mx-0 pt-10 pb-20 px-8 bg-white shadow-lg shadow-[#a8acb94d] rounded-xl w-[50rem] border-b-1.5 border-solid !border-[#2bce56]">
          <span className="block text-[#7b868] text-4xl">Login to account</span>
          <span className="block text-[#7b868] text-2xl">
            We are happy to see you again dear friend :)
          </span>
          <div className="bg-[#f0f2f7] my-6 mx-0 rounded-3xl w-full flex justify-center items-center py-6 px-0">
            <span className="text-[#7b868a] rounded-3xl">
              Are you a new user?
            </span>
            <Link
              className="bg-[#a8aaaf] text-white text-lg ml-2.5 rounded-lg py-2 px-3.5 hover:!text-text"
              to="/register"
            >
              Register
            </Link>
          </div>
          <form action="#" className="w-full">
            <div className="relative">
              <Input
                element="input"
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="username or email address"
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
                className="login-form__password-input"
                id="password"
                type="password"
                placeholder="password"
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
              onClick={userLogin}
              disabled={!formState.isFormValid}
            >
              <i className="fas fa-sign-out-alt text-white text-3xl absolute right-4"></i>
              <span className="text-white my-0 mx-auto">Login</span>
            </Button>
            <div className="flex justify-between items-center my-4 mx-0">
              <label className="flex items-center">
                <input className="mr-4" type="checkbox" />
                <span className="login-form__password-text">remember me</span>
              </label>
              <label className="login-form__password-forget">
                <a className="text-[#6c757d] text-2xl" href="#">
                  Forgot your password?
                </a>
              </label>
            </div>
          </form>
          <div className="mt-12 text-text text-lg w-full">
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

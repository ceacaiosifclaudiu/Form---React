import { useDispatch } from "react-redux";
import Terms from "../../../../component/inputs/Terms";
import { goToLogin } from "../../../../redux/userHaveAccountSlice";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../../schema/formSchema";
import GoogleConnect from "../../../../component/GoogleConnect";
import Input from "../../../../component/inputs/Input";
import Optionalinfo from "./components/Optionalinfo";
import PersonalDetails from "./components/PersonalDetails";
import Security from "./components/Security";

const SignupComponent = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container flex--center">
      <div className="container-form ">
        <h2 className="form-title">
          Welcome to our form,
          <br />
          Sign up to Continue.
        </h2>
        <p className="form-description font--size--medium">
          Already have an account?{" "}
          <span onClick={() => dispatch(goToLogin())}>Go to login</span>
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex--column--center form--inputs--gap">
            <PersonalDetails register={register} errors={errors} />

            <Input
              formObject={register("email")}
              message={errors?.email?.message?.toString()}
              type="email"
              placeholder="Email"
            />

            <Security register={register} errors={errors} />

            <Optionalinfo register={register} />

            <Terms register={register} errors={errors} />
          </div>
          <input type="submit" value="Create Account" />
        </form>
        <GoogleConnect />
      </div>
    </div>
  );
};

export default SignupComponent;

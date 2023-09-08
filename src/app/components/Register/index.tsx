import Form from "../Form";
import "./register.css";

export default function Register() {
  return (
    <>
      <div id="register" className="w-full register-bg pt-10">
        <div className="flex flex-col justify-between items-center w-full md:max-w-screen-xl mx-auto px-32 py-16">
          <Form />
        </div>
      </div>
    </>
  );
}

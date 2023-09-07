import Form from "../Form";
import "./register.css";

export default function Register() {
  return (
    <>
      <div className="w-full register-bg">
        <div className="flex flex-col justify-between items-center w-full md:max-w-screen-xl mx-auto px-32 py-16">
          <Form />
        </div>
      </div>
    </>
  );
}

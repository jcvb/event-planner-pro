import Form from "../Form";
import "./contact.css";
import ladaList from "../../data/lada";

export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full register-bg pt-10">
        <div className="flex flex-col justify-between items-center w-full md:max-w-screen-xl mx-auto px-32 py-16">
        <div className="w-full">
        <h3 className="text-white text-center font-medium text-2xl mb-2">
          Contact
        </h3>
        <form action="" className="flex flex-col w-full">
          <div className="flex w-full">
            
              <label className="w-full" htmlFor="fullName">
                <span className="text-white">Full Name:</span>
                <input
                  aria-label="Full name contact"
                  className="w-full"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Write your name"
                  required
                />
              </label>
            </div>
          
          <div className="flex flex-row mt-5">
            <label className="w-full" htmlFor="email">
              <span className="text-white">Email:</span>
              <input
                  aria-label="Email contact"
                className="w-full"
                type="text"
                id="email"
                name="email"
                placeholder="Write your email"
                required
              />
            </label>
          </div>
          <div className="flex w-full mt-5">
            <div className="flex flex-row w-2/12 mr-5">
              <label className="w-full" htmlFor="lada">
                <span className="text-white">Lada:</span>
                <select className="w-full" id="lada" name="lada" aria-label="Lada contact" required>
                  <option value="">Select one</option>
                  {ladaList.map((item) => (
                    <option value={item.dial_code} key={item.dial_code}>
                      ({item.dial_code}) {item.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex flex-row w-10/12 ml-5">
              <label className="w-full" htmlFor="telephoneNumber">
                <span className="text-white">Telephone number:</span>
                <input
                aria-label="Telephone number contact"
                  className="w-full"
                  type="tel"
                  id="telephoneNumber"
                  name="telephoneNumber"
                  placeholder="Write your telephone number"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row mt-5">
            <label className="w-full flex flex-col" htmlFor="message">
              <span className="text-white">
                Message
              </span>
              <textarea
              aria-label="Message contact"
                name="message"
                rows={5}
                id="message"
                placeholder="Write your message"
                required
              ></textarea>
            </label>
          </div>
          <div className="flex justify-center mt-5">
            <button className="epp-btn-default">Submit</button>
          </div>
        </form>
      </div>
        </div>
      </div>
    </>
  );
}

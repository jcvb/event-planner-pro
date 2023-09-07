import "./form.css";
import ladaList from "./lada";

export default function Form() {
  return (
    <>
      <div className="w-full">
        <h3 className="text-white text-center font-medium text-2xl mb-2">
          Discuss a tailored solution
        </h3>
        <form action="" className="flex flex-col w-full">
          <div className="flex w-full">
            <div className="flex flex-row w-1/2 mr-5">
              <label className="w-full" htmlFor="fullName">
                <span className="text-white">Full Name:</span>
                <input
                  className="w-full"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Write your name"
                  required
                />
              </label>
            </div>
            <div className="flex flex-row w-1/2 ml-5">
              <label className="w-full" htmlFor="CompanyName">
                <span className="text-white">Company Name:</span>
                <input
                  className="w-full"
                  type="text"
                  id="CompanyName"
                  name="CompanyName"
                  placeholder="Write your company name"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row mt-5">
            <label className="w-full" htmlFor="email">
              <span className="text-white">Email:</span>
              <input
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
                <select className="w-full" id="lada" name="lada" required>
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
            <label className="w-full" htmlFor="ticket">
              <span className="text-white">
                Number of tickets sold per year:
              </span>
              <select className="w-full" id="ticket" name="ticket" required>
                  <option value="">Select one</option>
                  <option value="1000">500</option>
                  <option value="10000">1,000</option>
                  <option value="10000">10,000</option>
                  <option value="10000">+1,000,000</option>
                </select>
            </label>
          </div>
          <div className="flex flex-row mt-5">
            <label className="w-full flex flex-col" htmlFor="message">
              <span className="text-white">
              Please tell us more about your requirements
              </span>
              <textarea name="message" rows={5} id="message" placeholder="Write your message" required></textarea>
            </label>
          </div>
          <div className="flex justify-center mt-5">
            <button className="epp-btn-default">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

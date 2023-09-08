import ladaList from "../../data/lada";

export default function RegisterForm() {
  return (
    <>
      <div className="w-full">
        <h3 className="text-white text-center font-medium text-2xl mb-2">
          Discuss a tailored solution
        </h3>
        <form action="" className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-row w-full md:w-1/2 md:mr-5">
              <label className="w-full" htmlFor="fullNameContact">
                <span className="text-white">Full Name:</span>
                <input
                  aria-label="Full name register"
                  className="w-full"
                  type="text"
                  id="fullNameContact"
                  name="fullNameContact"
                  placeholder="Write your name"
                  required
                />
              </label>
            </div>
            <div className="flex flex-row w-full md:w-1/2 md:ml-5 mt-5 md:mt-0">
              <label className="w-full" htmlFor="CompanyName">
                <span className="text-white">Company Name:</span>
                <input
                  aria-label="Company Name register"
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
            <label className="w-full" htmlFor="emailContact">
              <span className="text-white">emailContact:</span>
              <input
                aria-label="emailContact register"
                className="w-full"
                type="email"
                id="emailContact"
                name="emailContact"
                placeholder="Write your email"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row w-full mt-5">
            <div className="flex md:flex-row w-full md:w-2/12 md:mr-5">
              <label className="w-full" htmlFor="ladaContact">
                <span className="text-white">Lada:</span>
                <select
                  className="w-full"
                  id="ladaContact"
                  name="ladaContact"
                  aria-label="Lada register"
                  required
                >
                  <option value="">Select one</option>
                  {ladaList.map((item) => (
                    <option value={item.dial_code} key={item.dial_code}>
                      ({item.dial_code}) {item.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex flex-row w-full md:w-10/12 md:ml-5 mt-5 md:mt-0">
              <label className="w-full" htmlFor="telephoneNumberContact">
                <span className="text-white">Telephone number:</span>
                <input
                  aria-label="Telephone number register"
                  className="w-full"
                  type="tel"
                  id="telephoneNumberContact"
                  name="telephoneNumberContact"
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
              <select
                className="w-full"
                id="ticket"
                name="ticket"
                aria-label="Ticket register"
                required
              >
                <option value="">Select one</option>
                <option value="1000">500</option>
                <option value="10000">1,000</option>
                <option value="10000">10,000</option>
                <option value="10000">+1,000,000</option>
              </select>
            </label>
          </div>
          <div className="flex flex-row mt-5">
            <label className="w-full flex flex-col" htmlFor="messageContact">
              <span className="text-white">
                Please tell us more about your requirements
              </span>
              <textarea
                aria-label="message register"
                name="messageContact"
                rows={5}
                id="messageContact"
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
    </>
  );
}

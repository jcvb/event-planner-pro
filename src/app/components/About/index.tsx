import Image from "next/image";
import about from "./about.png";

export default function About() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-between items-center w-full md:max-w-screen-xl mx-auto px-32 py-16 z-50">
          <h2 className="text-4xl font-light">About Our Journey</h2>
          <p className="mt-5 mb-2 font-light">
            Founded in 2015, EventPlanner Pro emerged from a passion to simplify
            event planning. Our mission? Make every event a masterpiece with
            innovative tools. Today, we&apos;re trusted globally, blending
            tradition with cutting-edge technology. Explore our journey.
          </p>
          <div className="flex items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-light">
                Take full control of your venue
              </h3>
              <p className="mt-2 font-light">
                Tailored access management ensures efficient, effective
                oversight. Set up varied entry points for attendees, from VIP to
                restricted zones, based on ticket type, capacity, and time.
              </p>
            </div>
            <div className="w-1/2">
              <Image src={about} className="w-auto" alt="About image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

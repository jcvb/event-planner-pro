import about from "./about.png";
import TextImageBlock from "../common/TextImageBlock";

export default function About() {
  return (
    <>
      <div id="about" className="w-full pt-10">
        <div className="flex flex-col justify-between items-center w-full md:max-w-screen-xl mx-auto px-5 md:px-32 py-16">
          <h2 className="text-2xl md:text-4xl font-light">About Our Journey</h2>
          <p className="mt-5 mb-2 font-light text-justify">
            Founded in 2015, EventPlanner Pro emerged from a passion to simplify
            event planning. Our mission? Make every event a masterpiece with
            innovative tools. Today, we&apos;re trusted globally, blending
            tradition with cutting-edge technology. Explore our journey.
          </p>
          <TextImageBlock
            title="Take full control of your venue"
            paragraph="Tailored access management ensures efficient, effective
                oversight. Set up varied entry points for attendees, from VIP to
                restricted zones, based on ticket type, capacity, and time."
            image={about}
            text="About image"
          />
        </div>
      </div>
    </>
  );
}

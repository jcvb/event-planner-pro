import analysis from "./analysis.png";
import TextImageBlock from "../common/TextImageBlock";

export default function Analysis() {
  return (
    <>
      <div id="analysis" className="w-full pt-10">
        <div className="flex flex-col justify-between items-center w-full md:max-w-screen-xl mx-auto px-5 md:px-32 py-16">
          <h2 className="text-2xl md:text-4xl text-center md:text-left font-light">
            After the Applause: An Analysis
          </h2>
          <p className="mt-5 mb-2 font-light text-justify">
            After the final curtain call and the applause dies down, our
            commitment to excellence continues. At EventPlanner Pro, we believe
            in learning from every experience. Our post-event analysis delves
            deep into the metrics, gauging attendee engagement, feedback, and
            overall event impact.
          </p>
          <TextImageBlock
            title="Analyzing the Impact"
            paragraph="We meticulously review each facet, from ticket sales to attendee sentiment, ensuring we continually refine and elevate future events. Explore the data-driven insights that set our events apart."
            image={analysis}
            text="Analysis image"
            reverse={true}
          />
        </div>
      </div>
    </>
  );
}

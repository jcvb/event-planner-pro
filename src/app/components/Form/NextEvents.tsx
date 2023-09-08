import "./nextEvents.css";
import Image from "next/image";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

export default function NextEvents() {
  return (
    <>
      <div id="tickets" className="mt-24 bg-next-events p-5 pt-24 pb-10 w-full shadow">
        <h3 className="text-center text-white text-2xl mb-3">Next events</h3>
        <div className="grid gap-3 grid-cols-5 text-white">
          <div>
            <Image src={image1} className="w-auto" alt="Mike Towers" />
            <h4>Mike Towers</h4>
          </div>
          <div>
            <Image src={image2} className="w-auto" alt="Karol G" />
            <h4>Karol G</h4>
          </div>
          <div>
            <Image src={image3} className="w-auto" alt="Black Pink" />
            <h4>Black Pink</h4>
          </div>
          <div>
            <Image src={image4} className="w-auto" alt="Carin León" />
            <h4>Carín León</h4>
          </div>
          <div>
            <Image src={image5} className="w-auto" alt="Image 5" />
            <h4>Grupo Frontera</h4>
          </div>
        </div>
      </div>
    </>
  );
}

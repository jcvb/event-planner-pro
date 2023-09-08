import Image from "next/image";

export default function SliderItem({
  image,
  title,
  message,
}: {
  image: any;
  title: string;
  message: string;
}) {
  return (
    <>
      <div className="flex w-full flex-col-reverse md:flex-row pb-8 md:h-128 mx-auto">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
          <h3 className="text-xl md:text-5xl">{title}</h3>
          <p className=" font-light mt-4 text-sm md:text-lg">{message}</p>
          <div className="pt-3">
          <button className="epp-btn-default">Read more</button>
          </div>
          
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center py-0 px-20 md:p-20">
          <Image src={image} className="w-auto" alt={title} />
        </div>
      </div>
    </>
  );
}

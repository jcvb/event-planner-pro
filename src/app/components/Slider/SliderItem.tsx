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
      <div className="flex w-full h-128 mx-auto">
        <div className="w-1/2 flex flex-col justify-center items-center px-8">
          <h3 className=" text-5xl">{title}</h3>
          <p className=" font-light mt-4 text-lg">{message}</p>
        </div>
        <div className="w-1/2 flex justify-center items-center p-20">
          <Image src={image} className="w-auto" alt={title} />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";

export default function TextImageBlock({
  title,
  paragraph,
  image,
  text,
  reverse = false,
}: {
  title: string;
  paragraph: string;
  image: any;
  text: string;
  reverse?: boolean;
}) {
  const classContainer = `flex flex-col-reverse mt-5 md:mt-0 md:flex-row items-center ${
    reverse ? "flex-row-reverse" : "flex-row"
  }`;
  return (
    <>
      <div className={classContainer}>
        <div className="w-full md:w-1/2">
          <h3 className="text-xl text-center md:text-left md:text-2xl font-light">{title}</h3>
          <p className="mt-2 text-sm md:text-base text-justify font-light">{paragraph}</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={image} className="w-auto" alt={text} />
        </div>
      </div>
    </>
  );
}

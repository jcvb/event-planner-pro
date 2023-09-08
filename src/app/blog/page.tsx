import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import BlogItem from "./BlogItem";

export default function Blog() {
  return (
    <>
      <Header />
      <div className="w-full md:filter-none  backdrop-filter backdrop-blur-md shadow glassmorphism z-50">
        <div className="flex justify-center w-full md:max-w-screen-xl mx-auto p-3">
          <h2 className="text-3xl pt-3">Blog</h2>
        </div>
        <div className="w-full md:max-w-screen-xl mx-auto p-3 pb-10">
          <div className="grid grid-cols-3 gap-3 mt-5">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

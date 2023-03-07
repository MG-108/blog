import Image from "next/image";
import LoaderIMG from "../public/L.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <Image src={LoaderIMG} alt="Loading" />
    </div>
  );
};
export default Loader;

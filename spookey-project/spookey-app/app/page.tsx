import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (

    <div className="min-h-screen bg-sky-800">
      <Navbar/>
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <text className="text-xl text-white">
      Hello welcome to SpooKey, click to continue!
      </text>
    </div>
    </div>
  );
}

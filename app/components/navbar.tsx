import Image from "next/image";
import Link from "next/link";

import { FiDownloadCloud } from "react-icons/fi";

export default function Navbar() {
  return (
    <div id="navbar" className="z-50 sticky top-0">
      <header className="bg-gradient-to-r from-yellow-200 to-yellow-500 text-customBlue body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
       <div className="transition-transform duration-300 hover:scale-110 mt-0 ml-8">
       {/* <Link href={"#"} target="_blank" className="flex title-font font-medium items-center text-pink-500 ml-4 mb-4 md:mb-0 hover:text-purple-600 transition-colors duration-200 cursor-pointer"> */}
  {/* <Image src={require("../../images/FullLogo_Transparent.png")} alt="Tech Tune" width={100} height={75} />
   */}
   <Image 
  src="/images/FullLogo_Transparent.png" 
  alt="Tech Tune" 
  width={100} 
  height={75} 
/>
{/* </Link> */}

</div>
<span className="mx-auto text-gray-600 text-2xl font-semibold">Tech Tune IT solution</span>
<nav className="md:ml-8  flex flex-wrap items-center font-semibold text-base justify-center">
  <Link href={"#hero"} className="mr-5 text-white hover:border-b-2 border-white transition-colors duration-200 cursor-pointer" >Home</Link>
  <Link href={"#about"} className="mr-5 text-white hover:border-b-2 border-white transition-colors duration-200 cursor-pointer" >About</Link>
  <Link href={"#skills"} className="mr-5 text-white hover:border-b-2 border-white transition-colors duration-200 cursor-pointer" >My Skills</Link>
  <Link href={"#projects"} className="mr-5 text-white hover:border-b-2 border-white transition-colors duration-200 cursor-pointer" >My Projects</Link>
  <Link href={"#contact"} className="mr-16 text-white hover:border-b-2 border-white transition-colors duration-200 cursor-pointer" >Contact </Link>
  
</nav>

<Link href="/images/Resume.png" target="_blank" >
{/* <Image src={"../../images/Resume.png"} alt="My picture" width={500} height={500} /> */}

          <button className="inline-flex items-center mx-auto border-2 text-white border-white bg-yellow-500 py-1 px-3 
          focus:outline-none hover:bg-gray-200 hover:border-gray-200 hover:text-gray-600  rounded text-base mt-4 md:mt-0">
          Resume
          <FiDownloadCloud className="text-xl ml-2" />
          </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

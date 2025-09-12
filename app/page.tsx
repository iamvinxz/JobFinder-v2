import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { SiFacebook } from "react-icons/si"
import { MdAccountCircle } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaFile } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { MdOutlineDesignServices } from 'react-icons/md';
import { IoIosStats } from 'react-icons/io';
import { BsMegaphoneFill } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { BsBuildings } from 'react-icons/bs';
import Image from "next/image"

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="w-screen my-10">
          <section className="max-w-7xl mx-auto flex justify-between items-center">

            <section className="w-[800px] flex flex-col items-center">
                <h1 className="text-5xl text-gray-600 border-b-1 border-gray-300 pb-10 mt-10">Connecting you with your professional community</h1>

                <section className="flex flex-col items-center gap-3 mt-7 mx-auto">
                  <button className="bg-blue-500 p-1.5 text-white font-medium w-sm rounded-4xl cursor-pointer hover:bg-blue-400 transition"><FcGoogle className="text-4xl p-1 mr-2 bg-white rounded-3xl inline-block"/>Continue with Google</button>
                  <button className="border p-1.5 border-gray-500 font-medium w-sm rounded-4xl cursor-pointer hover:bg-gray-200 transition"><SiFacebook className="inline-block text-blue-500 text-4xl p-1 mx-1"/>Continue with Facebook</button>
                  <button className="border p-1.5 border-gray-500 font-medium w-sm rounded-4xl cursor-pointer hover:bg-gray-200 transition"><FaGithub className="inline-block text-4xl p-1 mx-1"/>Continue with Github</button>
                </section>

                <section className="w-[80%] text-center mt-5">
                  <p className="text-sm text-gray-500">By clicking Continue to join or sign in, you agree to JobFinder’s <span className="text-blue-600 cursor-pointer hover:underline hover:text-blue-800">User Agreement</span>, <span className="text-blue-600 cursor-pointer hover:underline hover:text-blue-800">Privacy Policy</span>, and <span className="text-blue-600 cursor-pointer hover:underline hover:text-blue-800">Cookie Policy.</span></p>
                </section>
            </section>
            <Image src='/home.png' width={700} height={700} alt="image" className="relative pl-9"/>
          </section>

          <section className="text-center my-10 py-15">
              <p className="text-2xl w-4xl mx-auto leading-loose text-gray-500 font-light">From your first job to your <span className="text-blue-700">dream role,</span> JobFinder connects you with the right <span className="text-blue-700">opportunities,</span> guiding you every step of the way toward a <span className="text-blue-700">brighter future.</span></p>
          </section>

      </section>
      
      <section className="bg-stone-100 my-20 p-20 flex flex-col items-center">
        <section className="text-center">
          <h2 className="text-5xl font-bold text-[#202020]">Get Hired in 4 <span className="text-blue-800">Quick Easy Steps</span></h2>
          <p className="text-gray-500 text-lg w-xl mx-auto pt-5">Follow our simple, step-by-step guide to quickly land you dream job and start you new career journey.</p>
        </section>

        <section className="relative py-5 w-screen flex flex-col items-center"> 
          <Image src='/airplain-2.png' width={2000} height={200} alt="image" className="pb-20"/>

          <section className="flex gap-10 absolute top-55">

            <div className="shadow-[0_0_20px_0_#C0C0C0] p-7 w-80 rounded-lg bg-white relative top-[-40] transition-transform hover:-translate-y-8">
              <MdAccountCircle className="text-orange-400 text-[2.5rem]"/>
              <h2 className="text-xl font-semibold text-[#202020] py-3">Create an Account</h2>
              <p className="text-gray-600 text-lg font-sans">Sign up with just a few clicks to unlock exclusive access to a world of job opportunities and landing your dream job. It's quick, easy, and completely free.</p>
            </div>

            <div className="shadow-[0_0_20px_0_#C0C0C0] p-7 w-80 rounded-lg bg-white relative top-10 transition-transform hover:-translate-y-8">
              <BiSearchAlt2 className="bg-purple-200 text-purple-700 text-[2.5rem] p-2 rounded-3xl"/>
              <h2 className="text-xl font-semibold text-[#202020] py-3">Search Job</h2>
              <p className="text-gray-600 text-lg font-sans">Dive into our job database tailored to match your skills and preferences. With our advanced search filters, finding the perfect job has never been easier.</p>
            </div>

            <div className="shadow-[0_0_20px_0_#C0C0C0] p-7 w-80 rounded-lg bg-white relative top-[-40] transition-transform hover:-translate-y-8">
              <FaFile className="bg-emerald-100 text-emerald-400 text-[2.5rem] p-2 rounded-3xl"/>
              <h2 className="text-xl font-semibold text-[#202020] py-3">Upload CV/Resume</h2>
              <p className="text-gray-600 text-lg font-sans">Showcase your experience by uploading your CV or resume. Let employers know why you're the perfect candidate for their job openings.</p>
            </div>

             <div className="shadow-[0_0_20px_0_#C0C0C0] p-7 w-80 rounded-lg bg-white relative top-8 transition-transform hover:-translate-y-8">
              <MdWork className="bg-yellow-100 text-yellow-400 text-[2.5rem] p-2 rounded-3xl"/>
              <h2 className="text-xl font-semibold text-[#202020] py-3">Get Job</h2>
              <p className="text-gray-600 text-lg font-sans">Take the final step towards your new career. Get ready to embark on your professional journey and secure the job you've been dreaming of.</p>
            </div>
          </section>
        </section>
      </section>

      <section>
        <section className="text-center">
          <h2 className="w-2xl mx-auto text-5xl font-bold text-[#202020] leading-13"><span className="text-blue-800">Countless career options</span> are waiting for you to explore</h2>
          <p className="text-gray-500 text-lg w-xl mx-auto pt-5">Discover a world of exciting opportunities and endless possibilities, and find the perfect career path to shape you future.</p>
        </section>

        <section className="grid grid-cols-4 justify-center gap-y-5 gap-x-15 max-w-7xl mx-auto py-20">

          <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 hover:text-white hover:-translate-y-2">
            <MdOutlineDesignServices className="bg-orange-100 text-orange-500 text-[2.5rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Design</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">200+ jobs opening</p>
          </div>

          <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 hover:text-white hover:-translate-y-2">
            <IoIosStats className="bg-violet-200 text-violet-600 text-[2.5rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Sales</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">350+ jobs opening</p>
          </div>

          <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 hover:text-white hover:-translate-y-2">
            <BsMegaphoneFill className="bg-red-100 text-red-600 text-[2.5rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Marketing</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">500+ jobs opening</p>
          </div>

          <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 hover:text-white hover:-translate-y-2">
            <FaWallet className="bg-yellow-100 text-yellow-500 text-[2.4rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Finance</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">200+ jobs opening</p>
          </div>

          <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 hover:text-white hover:-translate-y-2">
            <FaCar className="bg-sky-100 text-sky-500 text-[2.5rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Automobile</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">250+ jobs opening</p>
          </div>

           <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 text-white hover:-translate-y-2">
            <FaTruck className="bg-green-100 text-green-600 text-[2.5rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Logistics / Delivery</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">1k+ jobs opening</p>
          </div>

          <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 hover:text-white hover:-translate-y-2">
            <HiMiniComputerDesktop className="bg-blue-100 text-blue-600 text-[2.5rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Admin</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">100+ jobs opening</p>
          </div>

          <div className="group shadow-[0_0_15px_1px_#C0C0C0] w-80 p-7 rounded-lg bg-white transition hover:bg-blue-500 hover:text-white hover:-translate-y-2">
            <BsBuildings className="bg-teal-100  text-teal-700 text-[2.5rem] p-2 group-hover:text-blue-500"/>
            <h2 className="text-xl font-semibold text-[#202020] py-1 group-hover:text-white">Construction</h2>
            <p className="text-gray-600 text-lg font-sans group-hover:text-white">500+ jobs opening</p>
          </div>

        </section>
      </section>
    </main>
  )
}
export default Home


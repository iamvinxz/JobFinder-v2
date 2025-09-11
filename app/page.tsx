import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { SiFacebook } from "react-icons/si"
import Image from "next/image"

const Home = () => {
  return (
    <main>
      <section className="w-screen my-10">
          <section className="w-7xl mx-auto flex justify-between items-center">

            <section className="w-200 flex flex-col items-center">
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
            <Image src='/home.png' width={700} height={700} alt="image" className="relative left-30"/>
          </section>

          <section className="text-center my-10 py-15">
              <p className="text-2xl w-4xl mx-auto leading-loose text-gray-500 font-light">From your first job to your <span className="text-blue-700">dream role,</span> JobFinder connects you with the right <span className="text-blue-700">opportunities,</span> guiding you every step of the way toward a <span className="text-blue-700">brighter future.</span></p>
          </section>

      </section>
      <section className="h-screen bg-stone-100 mt-15 p-20">
        <section className="text-center">
          <h2 className="text-5xl font-bold text-[#202020]">Get Hired in 4 <span className="text-blue-800">Quick Easy Steps</span></h2>
          <p className="text-gray-500 text-lg w-xl mx-auto pt-5">Follow our simple, step-by-step guide to quickly land you dream job and start you new career journey.</p>
        </section>
      </section>
    </main>
  )
}
export default Home


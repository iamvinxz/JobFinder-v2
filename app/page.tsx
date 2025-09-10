import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { SiFacebook } from "react-icons/si"
import Image from "next/image"

const Home = () => {
  return (
    <main>
      <section className="w-screen mt-10">
          <section className="w-7xl mx-auto flex justify-between items-center">
            <section className="w-200">
              <h1 className="text-5xl text-gray-600">Connecting you with your professional community</h1>
              <section className="flex flex-col gap-2 mt-7 border-t-1 border-gray-300 w-140 pt-5">
                <button className="bg-blue-500 p-1 text-white font-medium w-lg rounded-4xl cursor-pointer"><FcGoogle className="text-4xl p-1 mr-2 bg-white rounded-3xl inline-block"/>Continue with Google</button>
                <button className="border border-gray-500 font-medium w-lg rounded-4xl cursor-pointer"><SiFacebook className="inline-block text-blue-500 text-4xl p-1 mx-1"/>Continue with Facebook</button>
                <button className="border border-gray-500 font-medium w-lg rounded-4xl cursor-pointer"><FaGithub className="inline-block text-4xl p-1 mx-1"/>Continue with Github</button>
              </section>

              <section className="w-[70%] text-center mt-3 ml-3">
                <p className="text-sm text-gray-500">By clicking Continue to join or sign in, you agree to JobFinder’s <span className="text-blue-600 cursor-pointer hover:underline hover:text-blue-800">User Agreement</span>, <span className="text-blue-600 cursor-pointer hover:underline hover:text-blue-800">Privacy Policy</span>, and <span className="text-blue-600 cursor-pointer hover:underline hover:text-blue-800">Cookie Policy.</span></p>
              </section>
            </section>
            <Image src='/home.png' width={600} height={600} alt="image"/>
          </section>
      </section>
  
    </main>
  )
}

export default Home


import Image from "next/image"

const Profile = () => {
  return (
    <div className="flex justify-center">
        <section className="bg-[#1D2760] text-white rounded-2xl flex items-center gap-10 p-7 mt-5">
            <section className="m-5 max-w-120">
                <h1 className="font-semibold text-3xl mb-3">Your profile, your opportunity</h1>
                <p className="">Your JobFinder profile delivers relevant opportunities and a job search that fits your career goals — so finding your next job is easier than ever.</p>
                <button className="bg-blue-600 p-3 rounded-xl mt-7 font-bold">Create Profile</button>
            </section>
            <Image src='/profile.png' width={350} height={300} alt="image"/>
        </section>
        <section>
            
        </section>
    </div>
  )
}

export default Profile

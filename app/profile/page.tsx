import Image from "next/image"

const Profile = () => {
  return (
    <div>
        <section className="flex justify-center">
            <section className="w-300 bg-[#1D2760] text-white rounded-2xl flex justify-between items-center gap-10 p-7 px-10 mt-5">
                <section className="m-5 max-w-120">
                    <h1 className="font-semibold text-3xl mb-3">Your profile, your opportunity</h1>
                    <p className="">Your JobFinder profile delivers relevant opportunities and a job search that fits your career goals — so finding your next job is easier than ever.</p>
                    <button className="bg-blue-600 p-3 rounded-xl mt-7 font-bold">Create Profile</button>
                </section>
                <Image src='/profile.png' width={350} height={300} alt="image"/>
            </section>
        </section>
        <section className="w-full max-w-5xl mx-auto text-center my-15">
            <h2 className="text-3xl text-gray-800 font-semibold mb-8">
                The career profile to land your next great job
            </h2>
            <section className="flex flex-row gap-8 justify-center items-start my-5 border-b-1 border-gray-300 pb-20">

                <section>
                    <section className="flex justify-center my-5">
                        <Image src='/target_1.png' width={120} height={120} alt="image"/>
                    </section>
                    <h2 className="font-semibold mb-5 text-gray-700 text-2xl">Recommendations just for your career.</h2>
                    <p className="text-lg w-120 text-[#303030]">
                        Discover job recommendations tailored to your expertise and career history, matched to your industry and salary goals.
                    </p>
                </section>

                <section>
                    <section className="flex justify-center my-5">
                        <Image src='/magnet.png' width={120} height={120} alt="image"/>
                    </section>
                    <h2 className="font-semibold mb-5 text-gray-700 text-2xl">Let top opportunities find you.</h2>
                    <p className="text-lg w-120 text-[#303030]">
                        Recruiters and employers can access your profile and reach out with new roles —
                        even when you’re not actively searching.
                    </p>
                </section>
            </section>
            <section className="pb-20">
                <h2 className="text-3xl text-gray-800 font-semibold my-10">Stand out to future employers</h2>
                <section className="flex flex-row gap-8 justify-center items-start">
                    <section>
                        <section className="flex justify-center my-5">
                            <Image src='/profile-setup.png' width={120} height={120} alt="image"/>
                        </section>
                        <h2 className="font-semibold mb-5 text-gray-700 text-2xl">Setup your profile</h2>
                        <p  className="text-lg w-120 text-[#303030]">Manage how employers see you with three customizable profile visibility settings.</p>
                    </section>
                    <section>
                        <section className="flex justify-center my-5">
                            <Image src='/shine.png' width={120} height={120} alt="image"/>
                        </section>
                        <h2 className="font-semibold mb-5 text-gray-700 text-2xl">Showcase your verified credentials</h2>
                        <p className="text-lg w-120 text-[#303030]">Add trusted work credentials to your profile to stand out, gain visibility, and boost your chances of selection.</p>
                    </section>
                </section>
            </section>
        </section>
    </div>
  )
}
export default Profile

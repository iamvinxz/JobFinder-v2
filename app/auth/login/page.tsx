import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <section>
        <section className='shadow-[0_0_10px_0_#C0C0C0] my-20 rounded-2xl flex items-center justify-center gap-50 max-w-fit mx-auto'>

            <form className='p-20 w-2xl bg-blue-100 rounded-r-[100px]'>
                <section className='text-center leading-loose'>
                    <h1 className='mx-5 text-3xl font-bold text-blue-800'>Sign in</h1>
                    <p className='text-gray-700'>Let's start looking for the best opportunity!</p>
                </section>

                <section className='mt-7 leading-loose'>
                        <label className='text-gray-700 text-lg font-medium'>Email</label>
                        <input type='email' className='w-full border-1 border-gray-400 p-2 pl-5 rounded-lg outline-none text-gray-600 font-sans' placeholder='Enter your email'/>
                </section>

                <section className='mt-7 mb-10 leading-loose'>
                        <label className='text-gray-700 text-lg font-medium'>Password</label>
                        <input type='password' className='w-full border-1 border-gray-400 p-2 pl-5 rounded-lg outline-none text-gray-600 font-sans' placeholder='Enter your password'/>
                </section>
                
                <button type='submit' className='w-full bg-blue-600 py-3 px-5 rounded-lg text-white font-medium cursor-pointer hover:bg-blue-500'>Submit</button>
            </form>

            <section className='inline-block relative right-20'>
                <Image src='/login.png' width={400} height={500} alt='image'/>
            </section>
        </section>
    </section>
  )
}
export default LoginPage

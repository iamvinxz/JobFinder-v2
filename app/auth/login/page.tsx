import { LoginForm } from '@/components/auth/login-form'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <section className='bg-blue-200 p-20'>
        <section className='h-full'>
            <LoginForm/>
        </section>
    </section>
  )
}
export default LoginPage

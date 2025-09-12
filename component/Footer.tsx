import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="py-15">
      <section className='flex justify-evenly'>

        <section>
          <h2 className='text-2xl font-bold text-blue-800'>JobFinder</h2>
          <p className='text-gray-500 w-100 mt-5'>Our platform is designed to help you find the perfect job and achieve your professional dreams.</p>
        </section>

        <section>
          <h2 className='text-xl text-[#303030] font-medium'>Quick Links</h2>
          <ul className='text-gray-500 pt-4 text-lg space-y-4'>
            <li>Home</li>
            <li>Profile</li>
            <li>Jobs</li>
            <li>Testimonials</li>
            <li>Contacts</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl text-[#303030] font-medium'>Follow Us</h2>
          <ul className='text-gray-500 pt-4 text-lg space-y-4'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl text-[#303030] font-medium'>Contact Us</h2>
          <ul className='text-gray-500 pt-4 text-lg space-y-4'>
            <li>
              <BsFillTelephoneFill className='inline-block'/> +91 234 56788
            </li>
            <li>
              <FaLocationDot className='inline-block'/> 123 Main Street, Anytown, Philippines
            </li>
          </ul>
        </section>
      </section>

      <section className='text-center pt-20'>
        <p className='text-gray-500 text-sm'>&copy; 2025 JobFinder. All rights reserved.</p>
      </section>

    </footer>
  )
}
export default Footer

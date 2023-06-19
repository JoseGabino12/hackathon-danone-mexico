import ImageHome from '../../assets/home.png'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <main className="flex flex-col gap-10 min-h-screen justify-center items-center bg-[#e8f3ff]">
      <h1 className='text-2xl md:text-5xl font-semibold text-[#324baa]'>
        Keep track of your daily calorie limit!
      </h1>
    
      <section className="flex-wrap flex gap-5 items-center justify-center">
        <img
          src={ImageHome}
          alt="Persona con un telefono"
          className='w-80 h-80'
        />

        <div className="flex flex-col flex-initial md:w-1/2 text-center p-10 gap-10 justify-center items-center text-[#324baa]">
          <p className="text-xl">
            Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!
          </p>
          <Link
            to={'/diary'}
            className='p-3 border-2 border-[#324baa] rounded-md hover:bg-[#324baa] hover:text-white animate-bounce'
          >
            Start now
          </Link>
        </div>
      </section>
    </main>
  )
}
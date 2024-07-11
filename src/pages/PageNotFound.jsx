import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <section className='h-96 text-center flex flex-col justify-center items-center'>

        <FaExclamationTriangle className='text-red-500 text-6xl mb-4' />
        <h1 className='mb-4 text-6xl font-bold'>404 Not Found</h1>
        <p className='mb-5 text-xl'>Sorry, the page you are looking for does not exist</p>
        <Link to='/' className='bg-black hover:bg-gray-900 text-white py-2 px-3 mt-4 rounded-lg'>Go Back</Link>
        
        </section>
  )
}

export default PageNotFound
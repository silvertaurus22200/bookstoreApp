import { Link } from 'react-router-dom';
import list from '../list.json';
import Cards from './Cards';

function Courses() {
  return (
        <>
            <div className='max-w-screen-2xl container dark:bg-slate-900 dark:text-white mx-auto md:px-20 px-4 '>
                <div className='pt-28 items-center justify-center text-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>
                    We're delighted to have you{" "}
                    <span className='text-pink-500'>Here! :)</span>
                </h1>
                <p className='mt-8'>Enjoy the wide range of books that are picked mindfully for our subscribers. We bring to you premium and
                existing books that you cannot put down. Download the e-book of your choosing by clicking on the books given below.</p>
                <button className='mt-6 bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-700 duration-300'><Link to='/'>Back</Link></button>
                </div>
                <div className='mt-6 grid grid-cols-1 md:grid-cols-4'>
                    {list.map((item)=>{
                        return <Cards key = {item.id} item = {item}  />
                    })}
                </div>
            </div>
        </>
  )
}

export default Courses
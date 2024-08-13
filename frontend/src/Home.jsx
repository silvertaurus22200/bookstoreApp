import Banner from './components/Banner'
import Freebooks from './components/Freebooks'

function Home() {
  return (
    <>
      <div className='dark:bg-slate-900'>
      <Banner />
      <Freebooks />
      </div>
       
    </>
  )
}

export default Home
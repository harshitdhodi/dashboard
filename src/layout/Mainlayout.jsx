import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const Mainlayout = () => {
  return (
    <>
      <Header />
      <div className='flex'>
      <Sidebar />
<Outlet/>
      </div>

    </>
  )
}

export default Mainlayout

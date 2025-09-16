import Card from '../shared/Card'
import Avatar from '../shared/Avatar'
import { Link } from 'react-router-dom'
import { menus } from '../../constants'

const Layout = () => {
  const sidebarStyle = {
    backgroundImage: 'linear-gradient( 89.7deg,  rgba(0,0,0,1) -10.7%, rgba(53,92,125,1) 88.8% )'
  }
  return (
    <div className="bg-zinc-200 min-h-screen grid grid-cols-[340px_1fr_380px]">
      <aside className="bg-white  overflow-auto">
        <div className="h-full py-8" style={sidebarStyle}>
          <div>
            <Avatar title='Muhammad Arsh' subtitle='Software Engineer' image='/images/nodp.jpg' />
          </div>
          <div className='border-t border-t-zinc-500 mt-5 mb-4' />
          <div className='px-3'>
            {
              menus?.map((item, index) => (
                <Link key={index.toString()} to={item?.href} className='flex items-center gap-2 py-3 text-zinc-300 px-1 hover:text-cyan-300'>
                  <i className={`${item?.icon} text-xl`}></i>
                  <label className='capitalize'>{item?.label}</label>
                </Link>
              ))
            }
            <button className='flex items-center gap-2 py-2 text-zinc-300  px-1 hover:text-cyan-300 w-full'>
              <i className="ri-logout-box-fill text-xl"></i>
              <label>Logout</label>
            </button>
          </div>
        </div>
      </aside>

      <section className="rounded px-1">
        <Card />
      </section>

      <aside className="bg-zinc-200  overflow-auto">
        <Card titleIcon="ri-group-fill" title='My Friends' devider>
          <div>
            {
              Array(20).fill(1)?.map((item, index) => (
                <Avatar dpSize="md" key={index.toString()} image='/images/nodp.jpg' title='Arsil Khan'
                  subtitle={
                    <div className='flex items-center gap-x-1'>
                      <div className='w-2 h-2 rounded-full bg-green-500' />
                      <label>Online</label>
                    </div>
                  }
                  titleColor='#000' />
              ))
            }
          </div>
        </Card>

      </aside>
    </div>

  )
}

export default Layout
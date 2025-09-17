import Card from '../shared/Card'
import Avatar from '../shared/Avatar'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { menus } from '../../constants'
import { useState } from 'react'

const Layout = () => {

  const [open, setOpen] = useState<boolean>(true)
  const dmWidth = 50
  const { pathname } = useLocation()

  const sidebarStyle = {
    backgroundImage: 'linear-gradient( 89.7deg,  rgba(0,0,0,1) -10.7%, rgba(53,92,125,1) 88.8% )'
  }

  return (
    <div
      className={`bg-zinc-200 min-h-screen grid`}
      style={{ gridTemplateColumns: `${open ? 340 : dmWidth}px 1fr 380px`, transition: '0.2s' }}
    >

      <aside className="bg-white  overflow-auto">
        <div className="h-full py-8" style={sidebarStyle}>
          <div title='Profile' className={`${open ? ' animate__animated animate__fadeIn' : 'animate__animated animate__pulse'}`}>
            <Avatar dpSize={!open ? 'sm' : 'lg'} title={!open ? null : 'Muhammad Arsh'} subtitle='Software Engineer' image='/images/nodp.jpg' />
          </div>
          <div className='border-t border-t-zinc-500 mt-5 mb-4' />
          <div className='px-3'>
            {
              menus?.map((item, index) => (
                <Link key={index.toString()} to={item?.href} className='flex items-center gap-2 py-3 text-zinc-300 px-1 hover:text-cyan-300'>
                  <i className={`${item?.icon} text-xl`} title={item?.label}></i>
                  <label className={`capitalize ${!open ? 'hidden' : null} `}>{item?.label}</label>
                </Link>
              ))
            }
            <button title='Logout' className='flex items-center gap-2 py-2 text-zinc-300  px-1 hover:text-cyan-300 w-full'>
              <i className="ri-logout-box-fill text-xl"></i>
              <label className={`capitalize ${!open ? 'hidden' : null} `}>Logout</label>
            </button>
          </div>
        </div>
      </aside>

      <section className="rounded px-1 ">
        <Card
          title={
            <div className='flex items-center gap-x-3'>
              <button className='bg-gray-100 w-8 h-8 rounded hover:bg-slate-200' onClick={() => setOpen(!open)}>
                {
                  !open ? <i className='ri-arrow-right-line'></i> : <i className='ri-arrow-left-line'></i>
                }

              </button>
              <h1>{pathname?.split("/").pop()?.replace("-", " ")}</h1>
            </div>
          }
          devider>
          <Outlet />
        </Card>
      </section>

      <aside className="bg-zinc-200  overflow-auto">
        <Card titleIcon="ri-group-fill" title='My Friends' devider>
          <div>
            {
              Array(20).fill(1)?.map((item, index) => (
                <div className='flex items-center justify-between pr-5 bg-neutral-100 my-2 rounded'>
                  <Avatar dpSize="md" key={index.toString()} image='/images/nodp.jpg' title='Arsil Khan'
                    subtitle={
                      <div className='flex items-center gap-x-1'>
                        <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-rose-600'}`} />
                        <label>{index % 2 === 0 ? 'Online' : 'Offline'}</label>
                      </div>
                    }
                    titleColor='#000' />

                  <div className='space-x-3'>
                    <i className="ri-message-2-line text-blue-500 text-xl"></i>
                    <i className="ri-phone-line text-green-500 text-xl"></i>

                    <Link to={'/app/video-chat'}>
                      <i className="ri-vidicon-line text-orange-400 text-xl"></i>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </Card>

      </aside>
    </div>

  )
}

export default Layout
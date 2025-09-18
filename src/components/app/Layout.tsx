import Card from '../shared/Card'
import Avatar from '../shared/Avatar'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { menus, suggested } from '../../constants'
import { useState } from 'react'
import Dashboard from './Dashboard'

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
      style={{ gridTemplateColumns: `${open ? 280 : dmWidth}px 1fr 320px`, transition: '0.2s' }}
    >

      <aside className="bg-white  overflow-auto scrollbar-hide">
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
          {
            pathname === '/app' ? <Dashboard /> : <Outlet />
          }

        </Card>
      </section>

      <aside className="bg-zinc-200 fixed top-0 right-0 h-full overflow-auto scrollbar-hide space-y-1">
        <div className='w-[320px] overflow-auto scrollbar-hide'>
          <Card titleIcon='ri-user-add-fill' title="Suggested" devider>
            <div className='flex gap-6'>
              {
                suggested?.map((item, index) => (
                  <div key={index?.toString()} className='grid flex justify-center items-center'>
                    <div className='text-center relative'>
                      <i className='ri-user-fill border border-gray-200 h-8 w-8 rounded-full text-4xl'></i>
                      <i className='ri-add-fill absolute bottom-0 bg-blue-400 text-white rounded-full h-4 w-4 text-xs -right-1'></i>
                    </div>
                    <label className='text-xs flex text-center items-center justify-center'>{item?.user}</label>
                  </div>
                ))
              }


            </div>
          </Card>
        </div>
        <Card titleIcon="ri-group-fill" title='Friends' devider>
          <div>
            {
              Array(20).fill(1)?.map((item, index) => (
                <div key={index?.toString()} className='flex items-center justify-between pr-5 bg-neutral-100 my-2 rounded'>
                  <Avatar dpSize="md" image='/images/nodp.jpg' title='Arsil Khan'
                    subtitle={
                      <div className='flex items-center gap-x-1'>
                        <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-rose-600'}`} />
                        <label>{index % 2 === 0 ? 'Online' : 'Offline'}</label>
                      </div>
                    }
                    titleColor='#000' />

                  <div className='space-x-3'>
                    <Link to={'/app/chat'}>
                      <i className="ri-message-2-line text-blue-500 text-xl"></i>
                    </Link>
                    <Link to={'/app/audio-chat'}>
                      <i className="ri-phone-line text-green-500 text-xl"></i>
                    </Link>
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
import Card from '../shared/Card'
import Avatar from '../shared/Avatar'

const Layout = () => {
  const sidebarStyle = {
    backgroundImage: 'linear-gradient( 89.7deg,  rgba(0,0,0,1) -10.7%, rgba(53,92,125,1) 88.8% )'
  }
  return (
    <div className="bg-zinc-200 min-h-screen grid grid-cols-[380px_1fr_280px]">
      <aside className="bg-white  overflow-auto">
        <div className="h-full" style={sidebarStyle}>
          <Avatar title='Muhammad Arsh' subtitle='Software Engineer' image='/images/nodp.jpg' />
        </div>
      </aside>

      <section className="rounded px-3">
        <Card />
      </section>

      <aside className="bg-zinc-200  overflow-auto"> <Card /></aside>
    </div>

  )
}

export default Layout
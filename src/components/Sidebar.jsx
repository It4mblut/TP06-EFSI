import './Sidebar.css'

function Sidebar({ setVistaActual }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-perfil" onClick={() => setVistaActual('usuario')}>
        <img src="https://st2.depositphotos.com/4196725/6217/i/450/depositphotos_62170405-stock-photo-young-cool-black-man-proud.jpg" alt="perfil" className="sidebar-fotoPerfil" />
        <div>
          <p className="sidebar-nombre">Juan López</p>
          <p className="sidebar-arroba">@juancito.loPz</p>
        </div>
      </div>

      <div className="sidebar-seguido">
        <span>👤 1300 seguidores</span>
        <span>♡ 430 seguidos</span>
      </div>

      <nav className="sidebar-opciones">
        <button onClick={() => setVistaActual('feed')}>Home</button>
        <button>Explore</button>
        <button>Reels</button>
        <button>IGTV</button>
        <button>Notificaciones</button>
      </nav>
    </aside>
  )
}

export default Sidebar
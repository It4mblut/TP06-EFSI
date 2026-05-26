import './Sidebar.css'

function Sidebar({ setVistaActual }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-perfil" onClick={() => setVistaActual('usuario')}>
        <img src="https://tn.com.ar/show/television/2024/02/04/dr-house-el-medico-cinico-y-antipatico-que-se-convirtio-en-el-sherlock-holmes-de-las-enfermedades/" alt="perfil" className="sidebar-fotoPerfil" />
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
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span>Catstagram</span>
      </div>

      <div className="header-search">
        <input type="text" placeholder="Buscar" />
      </div>

      <div className="header-icons">
        <button>⚙️</button>
        <button>📷</button>
        <button>➢</button>
        <button className="header-newpost">+ New Post</button>
      </div>
    </header>
  )
}
export default Header
import './Usuario.css'
function Usuario() {
    const usuario = {
        nombre: 'Juan López',
        username: '@juancito.loPz',
        bio: 'Solo alguien que ama a los gatos',
        publicaciones: 24,
        seguidores: 1300,
        seguidos: 430,
        foto: 'https://fotografias-atreseries.atresmedia.com/clipping/cmsimages02/2018/06/06/54229044-BF06-42B7-A62E-AC06B1348713/70.jpg?crop=1574,885,x0,y42&width=480&height=270&optimize=high&format=webply'
    }
    return (
        <div className="usuario">
            <img src={usuario.foto} alt="perfil" />
            <p>{usuario.nombre}</p>
            <p>{usuario.username}</p>
            <div className="usuario-info">
                <span>{usuario.publicaciones} publicaciones</span>
                <span>{usuario.seguidores} seguidores</span>
                <span>{usuario.seguidos} seguidos</span>
            </div>
            <p>{usuario.bio}</p>
            <button>Editar perfil</button>
        </div>
    )
}
export default Usuario
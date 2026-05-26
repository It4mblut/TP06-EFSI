import './Usuario.css'
function Usuario() {
    const usuario = {
        nombre: 'Juan',
        username: '@67Cat',
        bio: 'Solo alguien que ama a los gatos',
        publicaciones: 24,
        seguidores: 300,
        seguidos: 273,
        foto: 'https://st2.depositphotos.com/4196725/6217/i/450/depositphotos_62170405-stock-photo-young-cool-black-man-proud.jpg'
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
import './Usuario.css'
function Usuario() {
    const usuario = {
        nombre: 'Juan López',
        username: '@juancito.loPz',
        bio: 'Solo alguien que ama a los gatos',
        publicaciones: 24,
        seguidores: 300,
        seguidos: 273,
        foto: 'https://tn.com.ar/show/television/2024/02/04/dr-house-el-medico-cinico-y-antipatico-que-se-convirtio-en-el-sherlock-holmes-de-las-enfermedades/'
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
import './icones.css'
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'


const icones = [perfil, sacola]

function Icones() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone-img'><img src={icone}></img></li>
            ))}
        </ul>
    )
}

export default Icones;
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const IconeSrc = styled.li`
     margin-right: 40px;
     width: 25px;
`

const IconesDiv = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function Icones() {
    return (
        <IconesDiv>
            {icones.map((icone) => (
                <IconeSrc><img src={icone}></img></IconeSrc>
            ))}
        </IconesDiv>
    )
}

export default Icones;
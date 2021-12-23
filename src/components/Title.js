import styled from "styled-components";
import PokemonLogo from "../assets/pokemon.svg"


const ContainerImg = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Img = styled.img`
    width: 200px;
    display:flex;
    align-items:center;
    justify-content:center;

`
const Title = () => {
    return (
        <ContainerImg>
            <Img src={PokemonLogo} />  
        </ContainerImg>
    )
}

export default Title;

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    padding:20px;
    justify-content: center;
    align-items:center;
    position:relative;
`
const Cards = styled.div`
    width:60%;
    background-color: #222;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 15px;
    box-shadow: 2px 4px 3px rgb(256,256,256,0.5);
`
const ContainerEl = styled.div`
    height: 100%;
    background-color:#fff;
    padding:25px;
    margin:15px;
    border: 3px solid gray;
    border-radius:8px;
    box-shadow: 1px 3px 1px rgb(0,0,0,0.2);
`

const Title = styled.h1`
    height: 20%:
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#333;
    background-color:#bbb;
    font-size:1.5rem;
    padding:2px ;
    margin:10px;
    border-radius:8px;
    border-bottom: 1px solid #888;
`
const ContainerImg = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const Img = styled.img`
    width:50%;
    margin: 10px;
    padding: 15px;
    background-color:#bbb;
    box-shadow: 3px 3px 3px rgb(0,0,0,0.8);
    border-radius:50%;
    
`

const Card = ({props}) => {
    return (
        <Container>
            <Cards>
                <ContainerEl>
                    <Title>{props.name}</Title>
                    <ContainerImg>
                        <Img src={props.sprites.other.dream_world.front_default} alt={props.name} />
                    </ContainerImg>
                    <h1>{props.types.map(e => <Title>type: {e.type.name}</Title>)}</h1>
                </ContainerEl>
            </Cards>
        </Container>
    )
}

export default Card;
import styled from "styled-components";

const Container = styled.div`
    height: 5vh;
    width: 100%;
    background-color:#000;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size:1.5rem;
    position: fixed;
    bottom:0;
`

const Text = styled.p`
    color: #FAD02C;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0000FF;
    font-size:1.5rem;
`

const Footer = ({children}) => {
    return (
        <Container>
            <Text>
                { children }
            </Text>
        </Container>
    )
}

export default Footer;
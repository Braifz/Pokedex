import styled from 'styled-components';

const Control = styled.div`
    height: 15vh;
    width:100%;
    background-color: #100;
    display: flex;
    justify-content: center;
    align-items:center;
`

const Header = ({children}) => {
    return (
        <Control>
            {children}
        </Control>
    )
    
}

export default Header;
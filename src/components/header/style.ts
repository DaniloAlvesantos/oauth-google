import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin:1rem;
`

export const HeaderComponent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height:4.5rem;

    background: #222222;
`

export const ContainerAvatar = styled(Container)`
    color: #f1f1f1;

    font-family: "Poppins",sans-serif;
`

export const AvatarPicture = styled.img`
    width:3rem;
    height:3rem;
    
    margin:0.5rem;
    padding:5px;

    background: #303030;

    object-fit: contain;

    border-radius: 100%;
`
 
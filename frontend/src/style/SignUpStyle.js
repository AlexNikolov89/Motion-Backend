import styled from "styled-components";

export const FirtsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
padding-top: 70px;
height: 100%;

h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px; 
    text-align: center;
    margin-top: 180px;
    margin-bottom: 64px
}
`;


export const SecondContainer = styled.div `
p {
    color: rgba(0, 0, 0, .5);
    font-size: 1.6rem;
    text-align: center;
}

`

export const EmailSignUpContainer = styled.form `
align-items: flex-start;
flex-direction: column;
width: 340px;
p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    opacity: 0.5;
    margin-left: 70px;
    margin-bottom: 5px;
}
    hr {
        height: 2px;
        width: 340px;
        margin-top: 13px;
        background-color: #000000;
        opacity: 0.16;
    }
`

export const Button = styled.div `
display: flex;
justify-content: center;
align-items: center;
align-self: center;
margin-top: 167px;
justify-items: center;
align-content: center;
background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
color: #ffff;
border-radius: 30px;
width: 280px;
height: 60px;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
margin-top: 20%;
`


import styled, { css } from 'styled-components';
export const Navbar = styled.h1`
 margin:10px auto;
 font-weight:bolder;
 font-size: 20px;
 padding:10px;
`;



export const LinkStyle = styled.button`
background-color: #fff;
text-decoration: underline;
color: #085FB1;
padding:10px;
font-size:14px;
`;

export const Wrapper=styled.div`
width:38%;
height:auto;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  `;


  export const ButtonStyle=styled.div`
  border: 2px solid blue;
    border-radius: 3px;
    background-color: black;
    width: 23%;
    color: white;
  text-align: center;
    font-size: 20px;
    padding: 10px;
    margin-left: 12%;
}
`;


export const CardStyle=styled.div`
@media (max-width: 714px) {
 display:block
}
}
`;
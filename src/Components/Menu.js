
import React from "react";
import styled from "styled-components";
import {mobile ,tab} from "../responsive";
const MenuC=styled.div`
width: 100%;
margin: 0;
padding: 0;
border-bottom: 0.5px solid rgb(197, 193, 193);
${mobile({ display: "none" })}
${tab({ display: "none" })}
`;
const MenuList=styled.div`
box-sizing: border-box;
width: 100%;

overflow-x: hidden;
padding: 0 ;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-around;
min-height: 50px;
gap: 5px;
`;
const Item=styled.div`
height: 100%;
font-size: 16px;
font-weight:demi;

text-transform: capitalize;
letter-spacing: 0.5px;
:hover{
    color:rgb(244, 51, 151);
                cursor: pointer; 
                
}
`;

export const Menu = ()=>{

    const menuItems = ["women ethnic",
                        "women western",
                        "jewellery & accessories",
                        "men",
                        "beauty & health",
                        "Bags & foorwear",
                        "home & kitchen",
                        "Kids",
                        "electronics"]
                     
    return (
        <>
            <MenuC>
                <MenuList>
                    {menuItems.map((item,idx)=><Item key={idx}><span>{item}</span></Item>)}
                </MenuList>
            </MenuC>
        </>
    )
}
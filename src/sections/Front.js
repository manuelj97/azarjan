import React from 'react'
import styled from 'styled-components'
import Game from "../game/game"

export default function FrontPage() {
    return (
        <>
            <FrontBody>
                <Box>
                    <Game />
                </Box>
                <TextArea>
                    <BottomSide>
                        <Title>Manvel Azarjan</Title>
                        <SubTitle>Junior React Developer</SubTitle>
                    </BottomSide>
                </TextArea>
            </FrontBody>
        </>
    )
}

const Box = styled.div`
    height: 250px;
    width: 700px;
    border: 1px solid #C4C4C4;
    margin-top: 70px;
`

const Title = styled.h1`
    font-size: clamp(2rem,3vw,3rem);
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 600;
    margin-bottom: 0px;
`

const SubTitle = styled.h2`
    font-size: clamp(1.2rem,1.5vw,2rem);
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 7px;
    margin-top: 20px;
`

const BottomSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    @media (max-width: 1116px){
        margin-left: 50px;
    }
`

const TextArea = styled.div`
    display: flex;
    align-items: center;
`


const FrontBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`

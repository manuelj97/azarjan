import React from 'react'
import styled from "styled-components"
import textData from "../fixtures/texts"


export default function TextBlockContainer(props) {
    return (
        <>
            {textData.map((item) => (
                <TextBlockBody key={item.id}>
                    <Heading>{item.heading}</Heading>
                    <Title>{item.title}</Title>
                    <SubTitle>{item.subtitle}</SubTitle>
                </TextBlockBody>
            ))}
        </>
    )
}

const Heading = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 20px;
`

const Title = styled.div`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 10px;
    letter-spacing: 2px;
`

const SubTitle = styled.div`
    font-size: 1rem;
    letter-spacing: 2px;
`

const TextBlockBody = styled.div`
    margin-bottom: 50px;
`


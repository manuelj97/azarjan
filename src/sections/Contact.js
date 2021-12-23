import React from 'react'
import styled from "styled-components"

export default function Contact() {
    return (
        <ContactBody>
            <ContactInfoBody>
                <Title>Get in touch with me</Title>
                <ContactInfo>manvelj18@gmail.com</ContactInfo>
                <ContactInfo>725 988 250</ContactInfo>
                <ContactInfo><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manvel-azarjan-347ab6198/">LinkedIn</a></ContactInfo>
            </ContactInfoBody>
        </ContactBody>
    )
}

const ContactInfoBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1.7rem;
`

const ContactBody = styled.div`
    margin-bottom: 50px;
`

const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
`

const ContactInfo = styled.p`

    a{
        color: #2c2e2e;
        text-decoration: none;
    }   
    a:hover{
        text-decoration: underline;
    }
`

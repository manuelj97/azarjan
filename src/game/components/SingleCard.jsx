import styled, {css} from "styled-components"

export default function SingleCard({ card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if(!disabled){ 
            handleChoice(card)
        }
        
    }

    return (
        <Card flipped={flipped}>
            <img src={card.src} alt="Card Front" />
            <img src="/img/back.svg" alt="Card Back" onClick={handleClick}/>
        </Card>
    )
}

const Card = styled.div`
    width: 80px;
    position: relative;

    img{
        width: 80px;
        transition: all .5s ease;
    }
    img:first-child{
        transform: rotateY(90deg);
        position: absolute;
    }

    ${props =>
    props.flipped &&
    css`
      & img:first-child{
        transform: rotateY(0deg);
      }
    `};
`


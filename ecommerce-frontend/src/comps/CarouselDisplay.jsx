import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { carouselItems } from '../data'
import {mobile} from '../responsive'

const CarouselContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}

`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.dir === "left" && "10px"};
    right: ${props => props.dir === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const CarouselWrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.currentIndex * -100}vw);
`
const Current = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const CurrentImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

`
const CurrentImage = styled.img`
    height: 80%;
`
const CurrentInfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const InfoTitle = styled.h1`
    font-size: 70px;
`

const InfoDescription = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const InfoButton = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`



const CarouselDisplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (dir) => {
        if (dir === "left") {
            setCurrentIndex(currentIndex > 0 ? currentIndex-1 : 2)
        } else {
            setCurrentIndex(currentIndex <2 ? currentIndex+1 : 0)
        }
    };

    return (
        <CarouselContainer>
            <Arrow dir="left" onClick={()=>handleClick("left")}>
                <KeyboardArrowLeftOutlined />
            </Arrow>

            <CarouselWrapper currentIndex={currentIndex}>
                {carouselItems.map(item => (
                    <Current bg={item.bg} key={item.id}>
                        <CurrentImageContainer>
                            <CurrentImage src={item.img} />
                        </CurrentImageContainer>
                        <CurrentInfoContainer>
                            <InfoTitle>{item.title}</InfoTitle>
                            <InfoDescription>{item.desc}</InfoDescription>
                            <InfoButton>SHOP NOW</InfoButton>
                        </CurrentInfoContainer>
                    </Current>
                ))}

            </CarouselWrapper>

            <Arrow dir="right" onClick={()=>handleClick("right")}>
                <KeyboardArrowRightOutlined/>
            </Arrow>
        </CarouselContainer>
    )
}

export default CarouselDisplay
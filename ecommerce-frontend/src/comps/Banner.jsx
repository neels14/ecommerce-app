import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
    height: 30px;
    background-color: #8c4ae9;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 300;
`

const Banner = () => {
    return (
        <BannerContainer>
            Welcome to ArtByKhushi! Order Your Custom Art Now!
        </BannerContainer>
    )
}

export default Banner
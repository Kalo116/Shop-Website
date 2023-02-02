import styled from "styled-components";


export const QuantitySpan = styled.span`
    display: flex;
    width: 23%;

    .arrow {
        cursor: pointer;
    }

    .value {
        margin: 0 10px;
    }
`

export const NameSpan = styled.span`
    width: 23%; 
`

export const PriceSpan = styled.span`
    width: 23%; 
`

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const RemoveButton = styled.button`
    padding-left: 12px;
    cursor: pointer;
    border: none;
    font-size: 20px;
`

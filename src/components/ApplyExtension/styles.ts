import styled from 'styled-components';

export const ApplyExtensionWrapper = styled.div`
    display: flex;
    height: calc(100% - 5.8125rem);
    justify-content: space-between;
    padding: 4.375rem 7.8175rem 10rem; 
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
`

export const ApplyExtensionHeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ApplyExtensionLeftSideWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 19.375rem;
    align-items: center;
`

export const ApplyExtensionRightSideWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 14.6875rem;
    align-items: center;
    padding: 0 0.25rem;
    background-color: #f8f8f8;
    height: 2.875rem;
    border-radius: 0.625rem;
`

export const ApplyExtension11TimeSelector = styled.div`
    width: 6.9375rem;
    height: 2.375rem;
    border-radius: 0.625rem;
    font-family: 'Noto Sans Kr';
    color: #59545d;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.4s;

    ${props => props.selectedTime === 11 ?
        `background-color: #ffffff;`
        :
        `background-color: #f8f8f8;`
    }
`

export const ApplyExtension12TimeSelector = styled.div`
    width: 6.9375rem;
    height: 2.375rem;
    border-radius: 0.625rem;
    font-family: 'Noto Sans Kr';
    color: #59545d;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.4s;

    ${props => props.selectedTime === 12 ?
        `background-color: #ffffff;`
        :
        `background-color: #f8f8f8;`
    }
`

export const ApplyExtensionTitle = styled.h1`
    font-family: 'Noto Sans Kr';
    font-size: 2.1875rem;
    color: #59545d;
`

export const ApplyExtensionStateWrapper = styled.div`
    width: 8.875rem;
    background-color: #00be91;
    height: 2rem;
    border-radius: 0.625rem;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & span {
        font-family: "Noto Sans Kr";
        font-size: 0.8125rem;
        color: #ffffff;
    }
`

export const ApplyExtensionContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ApplyExtensionClassWrapper = styled.div`
    width: 19.875rem;
    height: 40.625rem;
    border-radius: 1rem;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.08);
`
import styled from 'styled-components'

export const ApplyExtensionClassButtonWrapper = styled.div`
  width: 100%;
  height: 3.125rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  box-sizing: border-box;
  background-color: #fefffe;
  cursor: pointer;
  user-select: none;

  &:nth-child(n+2) {
    margin-top: 1.25rem;
  }

  &,& .initial,.name {
    transition: all 0.4s;
  }

  & .initial {
    font-weight: 1000;
  }

  & .name {
    font-size: 0.825rem;
  }

  & .initial {
    ${props => props.isLong ? 
    `
      font-size: 1.125rem;
      margin-right: 1.3125rem;
    `
    :
    `
      font-size: 1.5rem;
      margin-right: 1.5rem;
    `
    }
  }

  ${props => props.isSelect ?
    `
      border: solid 0.0625rem #00be91;

      & .initial,.name {
        color: #00be91;
      }
    `
    :
    `
      border: solid 0.0625rem #e9eff4;

      & .initial,.name {
        color: #233559;
      }
    `
  }

  &:hover {
    & .initial,.name {
      color: #00be91;
    }

    border: solid 0.0625rem #00be91;
  }
`
import styled from 'styled-components';

export const ApplyMorningHr = styled.hr`
  margin: 0;
  width: 100%;
  border: solid 0.03125rem #bfbfbf;
`

export const ApplyMorningMusicWrapper = styled.div`
    display: flex;
    height: calc(100% - 5.8125rem);
    padding: 4.375rem 7.8175rem 10rem; 
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
`

export const ApplyMorningDayWrapper = styled.div`
  & .d_title,.d_state {
    font-size: 1.25rem;
  } 

  & .d_state {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    background-color: #00be91;
    border-radius: 1.25rem;
    margin-bottom: 0.6875rem;
    color: #ffffff;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const ApplyMorningDayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 3.1875rem;
`

export const ApplyMorningMusicSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6.1875rem;
  width: 100%;
  margin-bottom: 2.4375rem;

  & .submit {
    display: flex;
    align-items: flex-end;
  }
`

export const ApplyMorningMusicInputWrapper = styled.div`
  display: flex;
  height: 6.1875rem;
  width: 35.625rem;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  & .music_input {
    padding: 0 1.25rem;
    font-size: 1.125rem;
    border-radius: 1rem;
    border: solid 0.0625rem #bfbfbf;
    height: 3.75rem;
    width: 35.625rem;
    box-sizing: border-box;
  }

  & .music_input::placeholder {
    color: #bfbfbf;
  }

  & .a_title,.m_title {
    margin-left: 1.25rem;
    font-size: 1.25rem;
  }
`

export const ApplyMorningMusicSubmitButton = styled.button`
  width: 7.5625rem;
  height: 3.75rem;
  border-radius: 1rem;
  background-color: #00be91;
  font-size: 1.25rem;
  color: #ffffff;
  font-family: 'Noto Sans KR';
`
import React from 'react';
import * as S from './style'

const ApplyMorningMusic = () => {

  const onApply = React.useCallback(e => {
    e.preventDefault()
  }, [])

  return (
    <S.ApplyMorningMusicWrapper>
      <S.ApplyMorningMusicSubmitWrapper>
        <S.ApplyMorningDayWrapper>
          <span className = "d_title">요일</span>
          <span className = "d_state">월</span>
          <S.ApplyMorningDayListWrapper>
            
          </S.ApplyMorningDayListWrapper>
        </S.ApplyMorningDayWrapper>
        <S.ApplyMorningMusicInputWrapper>
          <span className = "m_title">기상음악</span>
          <input className = "music_input" placeholder = "기상음악"/>
        </S.ApplyMorningMusicInputWrapper>
        <S.ApplyMorningMusicInputWrapper>
          <span className = "a_title">아티스트</span>
          <input className = "music_input" placeholder = "아티스트를 입력해주세요." />
        </S.ApplyMorningMusicInputWrapper>
        <form className = "submit" onClick = {onApply}>
          <S.ApplyMorningMusicSubmitButton>
            신청
          </S.ApplyMorningMusicSubmitButton>
        </form>
      </S.ApplyMorningMusicSubmitWrapper>
      <S.ApplyMorningHr />
    </S.ApplyMorningMusicWrapper>
  )
}

export default ApplyMorningMusic;
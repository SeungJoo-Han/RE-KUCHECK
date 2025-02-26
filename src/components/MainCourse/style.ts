import styled, { css } from 'styled-components';

import { BLACK, LINE_GRAY, RED, WHITE, YELLOW } from '@utility/COLORS';

export const StyledMainCourseContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 32px;
  border: 2px solid ${LINE_GRAY};
  border-radius: 26px;
  margin-top: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px ${LINE_GRAY};
  }
  @media (max-width: 800px) {
    padding: 16px 18px;
    border-radius: 12px;
  }
`;

export const StyledLeader = styled.div`
  flex-basis: 75px;
  flex-shrink: 0;
  text-align: center;
  color: ${BLACK};
  margin-right: 35px;
  @media (max-width: 800px) {
    flex-basis: 55px;
    margin-right: 5px;
  }
`;

export const StyledEmojiBackground = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: ${YELLOW};
  position: relative;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
`;

export const StyledEmoji = styled.span`
  font-size: 48px;
  position: absolute;
  top: -7px;
  left: 4px;
  @media (max-width: 800px) {
    font-size: 30px;
    left: 2px;
  }
`;

export const StyledLeaderName = styled.div`
  font-size: 14px;
  font-family: 'sdSb';
  margin-top: 2px;
  @media (max-width: 800px) {
    font-size: 8px;
  }
`;

export const StyledLeaderType = styled.span`
  font-family: 'sdL';
`;

export const StyledCourseInfo = styled.div`
  width: 70%;
  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const StyledCourseTop = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
  }
`;
interface CourseTitle {
  isEllipsisPC: boolean;
  isEllipsisMobile: boolean;
}

export const StyledCourseTitle = styled.div<CourseTitle>`
  font-family: 'sdBo';
  font-size: 28px;
  color: ${BLACK};
  margin-right: 8px;
  @media (max-width: 800px) {
    font-size: 14px;
    width: 100%;
    white-space: nowrap;
    ${props =>
      props.isEllipsisPC &&
      css`
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      `}
  }
  ${props =>
    props.isEllipsisMobile &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export const StyledCourseLanguageImage = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 4px;
  @media (max-width: 800px) {
    width: 12px;
    height: 12px;
  }
`;

export const StyledCourseBottom = styled.div`
  font-size: 18px;
  @media (max-width: 800px) {
    font-size: 9px;
  }
`;

export const StyledCourseCase = styled.span`
  font-family: 'sdSb';
  color: ${BLACK};
`;

export const StyledCaseSlash = styled.span`
  margin: 0 8px;
  @media (max-width: 800px) {
    margin: 0 4px;
  }
`;
export const StyledCourseCaseValue = styled.span`
  color: ${RED};
`;

export const StyledCourseButton = styled.button<{ bgColor?: string }>`
  width: 170px;
  height: 50px;
  font-size: 16px;
  font-family: 'sdBo';
  margin-left: auto;
  border-radius: 25px;
  border: none;
  background-color: ${props => props.bgColor};
  color: white;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 9px;
    width: 90px;
    height: 24px;
    margin: auto 0 0 auto;
  }
`;

export const StyledCourseCancelButton = styled(StyledCourseButton)`
  background-color: ${WHITE};
  color: ${RED};
  border: solid 1.5px ${RED};
  @media (max-width: 800px) {
    border: solid 1px ${RED};
  }
`;

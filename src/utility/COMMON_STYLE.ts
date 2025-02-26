import styled, { css } from 'styled-components';

import { BLACK, GRAY, LINE_GRAY, RED } from './COLORS';

export const StyledMainContainer = styled.div`
  width: 1280px;
  padding-top: 128px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
    padding-top: 76px;
  }
`;

export const StyledIncludeHeaderMain = styled.main`
  min-height: 500px;
  margin-left: 136px;
  border-left: 1.5px solid ${LINE_GRAY};
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledUnIncludeHeaderMain = styled.main`
  width: 100%;
  padding-left: 76px;
  @media (max-width: 800px) {
    padding: 0 18px;
  }
`;

export const StyledCourseTab = styled.div`
  padding: 12px 0 2px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${LINE_GRAY};
  @media (max-width: 800px) {
    padding: 8px 0;
    margin-bottom: 12px;
  }
`;

export const StyledTab = styled.button`
  padding: 0 36px;
  border: none;
  position: relative;
  background-color: white;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 0 15px;
  }
`;

export const StyledTabText = styled.span<{ active?: boolean }>`
  color: ${GRAY};
  font-size: 18px;
  font-family: 'sdBo';
  padding: 14px 12px;
  ${(props: any) =>
    props.active &&
    css`
      color: ${BLACK};
    `}
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 8px 5px;
  }
`;
export const StyledOldMain = styled.div`
  padding-top: 80px;
  @media (max-width: 800px) {
    padding-top: 65px;
  }
`;
export const StyledTabLine = styled.hr`
  height: 4px;
  margin-top: 11px;
  background-color: ${BLACK};
  border: 0;
  border-radius: 3px;
  @media (max-width: 800px) {
    height: 2px;
    margin-top: 9px;
  }
`;

export const StyledTabRightLine = styled.hr`
  height: 25px;
  width: 1px;
  background-color: ${LINE_GRAY};
  position: absolute;
  border: 0;
  right: 0;
  top: 0;
  @media (max-width: 800px) {
    margin-top: 3px;
    width: 0.7px;
    height: 15px;
  }
`;

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledSideMargin = styled.div`
  margin-left: 14.21%;
  margin-right: 14.21%;
  @media (max-width: 800px) {
    margin-left: 5.64%;
    margin-right: 5.64%;
  }
`;

export const StyledSidePadding = styled.div`
  padding-left: 14.21%;
  padding-right: 14.21%;
  @media (max-width: 800px) {
    padding-left: 5.64%;
    padding-right: 5.64%;
  }
`;

export const StyledVerticalLine = styled.div<{ length?: number }>`
  border-right: 1px solid #b6b6b677;
  height: ${(props: any) => (props.length ? `${props.length}px` : '40px')};
  margin-left: 5%;
`;

export const StyledArrow = styled.i<{ thin?: number; width?: number | string }>`
  display: inline-block;
  border: solid ${BLACK};
  border-width: ${(props: any) =>
    props.thin ? `0px ${props.thin}px ${props.thin}px 0px` : '0 3px 3px 0'};
  margin-bottom: 2px;
  padding: ${(props: any) => (props.width ? `${props.width}px` : '3px')};
  @media (max-width: 800px) {
    border-width: ${(props: any) =>
      props.thin ? `0px ${props.thin / 2}px ${props.thin / 2}px 0px` : '0 1.5px 1.5px 0'};
    padding: ${(props: any) => (props.width ? `${props.width / 2}px` : '1.5px')};
  }
`;

export const StyledRightArrow = styled(StyledArrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const StyledLeftArrow = styled(StyledArrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const StyledDownArrow = styled(StyledArrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const StyledLaguageImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: contain;
`;

export const StyledCommonTitle = styled.div`
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  padding-left: 49px;
  padding-top: 50px;
`;

export const StyledCommonPcLayout = styled.div`
  padding: 0px 48px 0px;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const StyledCourseTitle = styled.div`
  font-family: 'sdBo';
  font-size: 28px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
export const StyledCourseDetail = styled.div`
  font-family: 'sdSb';
  font-size: 18px;
  @media (max-width: 800px) {
    font-size: 9px;
  }
`;

export const StyledCourseDetail2 = styled.span`
  color: ${RED};
`;

export const StyledBackArrowWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 1px ${GRAY};
  box-shadow: 0px 5px 5px ${GRAY};
  position: relative;
  cursor: pointer;
  @media (max-width: 1279px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledBackArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10.5px;
  @media (max-width: 1279px) {
    width: 7px;
  }
`;

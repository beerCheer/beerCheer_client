import styled from '@emotion/styled';

const ImageWrapper = styled.figure`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
`;

const Thumnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const RateLabel = styled.span`
  font-size: ${props => props.theme['font-xs']};
  font-weight: ${props => props.theme['font-light']};
  margin-right: 4px;
`;

const Rate = styled.span`
  font-weight: ${props => props.theme['font-bold']};
  flex-shrink: 0;
  color: #ff9900;
`;

const RateContainer = styled.div`
  flex-shrink: 0;
`;

const Name = styled.p`
  font-weight: ${props => props.theme['font-bold']};
  /* text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; */
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 4px 0;
  width: 100%;
  display: inline-block;
`;

const Article = styled.article`
  height: 100%;
  min-width: 155px;
`;

export { Article, Description, Name, Rate, RateContainer, RateLabel, Thumnail, ImageWrapper };

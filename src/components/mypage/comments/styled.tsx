import styled from '@emotion/styled';

const BoardHeader = styled.div`
  display: flex;
  font-weight: ${props => props.theme['font-bold']};
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  text-align: center;

  ${props => props.theme.mq.phone} {
    font-size: 14px;
    white-space: nowrap;
  }
`;

const NameColumn = styled.div`
  flex: 0.5;
  padding: 0 4px;
`;

const CommentColumn = styled.div`
  flex: 2;
  padding: 0 4px;
`;
const DateColumn = styled.div`
  flex: 0.3;
  padding: 0 4px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  line-height: 1.25;
`;

const Contents = styled.div`
  padding: 8px 0;

  ${props => props.theme.mq.phone} {
    font-size: 14px;
  }
`;

export { Contents, Row, DateColumn, CommentColumn, NameColumn, BoardHeader };

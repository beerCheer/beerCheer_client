import { dateFormat } from '../../../utils/dateFormat';

import { BoardHeader, CommentColumn, DateColumn, NameColumn, Row, Contents } from './styled';

const Board = ({ datas }: { datas: any[] }) => {
  return (
    <div>
      <BoardHeader>
        <NameColumn>맥주이름</NameColumn>
        <CommentColumn>한줄평</CommentColumn>
        <DateColumn>작성일</DateColumn>
      </BoardHeader>

      <Contents>
        {datas.map((data: any) => (
          <Row key={data.id}>
            <NameColumn>{data.name}</NameColumn>
            <CommentColumn>{data.comment}</CommentColumn>
            <DateColumn>{dateFormat(data.createAt)}</DateColumn>
          </Row>
        ))}
      </Contents>
    </div>
  );
};

export default Board;

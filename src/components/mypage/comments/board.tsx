import { IComment, IComments } from '../../../api/types/mypage';
import { dateFormat } from '../../../utils/dateFormat';

import { BoardHeader, CommentColumn, DateColumn, NameColumn, Row, Contents } from './styled';

const Board = ({ datas }: { datas: IComment[] }) => {
  return (
    <div>
      <BoardHeader>
        <NameColumn>맥주이름</NameColumn>
        <CommentColumn>한줄평</CommentColumn>
        <DateColumn>작성일</DateColumn>
      </BoardHeader>

      <Contents>
        {datas?.map((data: IComment, idx /* TODO: idx 바꾸기 */) => (
          <Row key={idx}>
            <NameColumn>{data.beerName}</NameColumn>
            <CommentColumn>{data.content}</CommentColumn>
            <DateColumn>{dateFormat(data.createdAt)}</DateColumn>
          </Row>
        ))}
      </Contents>
    </div>
  );
};

export default Board;

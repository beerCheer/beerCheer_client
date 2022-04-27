import { useState } from 'react';
import { IComment } from '../../../api/types/beers';
import { EmptyFallback } from '../../../styles/mypage/rates';
import { dateFormat } from '../../../utils/dateFormat';
import EmptyIcon from '../../common/@Icons/emptyIcon';
import Button from '../../common/button';
import { CommentColumn, Contents, DateColumn, NameColumn, Row } from '../../mypage/comments/styled';
import { CommentInput, Header, InputWrapper, Title } from './styled';

const DetailComments = ({ datas }: { datas: any }) => {
  const [inputOpen, setInputOpen] = useState(false);
  return (
    <div>
      <Header>
        <Title>한줄평</Title>
        <Button
          onClick={() => {
            setInputOpen(_prev => !_prev);
          }}
        >
          작성하기
        </Button>
      </Header>
      {inputOpen && (
        <InputWrapper>
          <CommentInput type="text" placeholder="한줄평을 입력해주세요" />
          <Button primary>등록하기</Button>
        </InputWrapper>
      )}

      <Contents>
        {datas.map((data: IComment) => (
          <Row key={data.id}>
            <NameColumn>{data.User.nickname}</NameColumn>
            <CommentColumn>{data.content}</CommentColumn>
            <DateColumn>{dateFormat(data.createdAt)}</DateColumn>
          </Row>
        ))}

        {datas.length === 0 && (
          <EmptyFallback>
            <EmptyIcon width={150} height={150} />
            <p>아직 한줄평이 없어요!</p>
          </EmptyFallback>
        )}
      </Contents>
    </div>
  );
};

export default DetailComments;

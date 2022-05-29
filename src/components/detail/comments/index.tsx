import { flatten } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { createComment } from '../../../api/fetcher/beers';
import { useBeerComments } from '../../../api/hook/beers';
import { IComment } from '../../../api/types/beers';
import { loginPopupState } from '../../../recoils/atoms/users';
import { loginState } from '../../../recoils/selector/users';
import { EmptyFallback } from '../../../styles/mypage/rates';
import { dateFormat } from '../../../utils/dateFormat';
import EmptyIcon from '../../common/@Icons/emptyIcon';
import Button from '../../common/button';
import { CommentColumn, Contents, DateColumn, NameColumn, Row } from '../../mypage/comments/styled';
import { CommentContainer, CommentInput, Header, InputWrapper, Title } from './styled';

interface DetailCommentsProps {
  beerId: number;
}
const DetailComments = ({ beerId }: DetailCommentsProps) => {
  const {
    data: commentsData,
    isFetched,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useBeerComments({ beerId: Number(beerId) });
  const comments = useMemo(() => flatten(commentsData?.pages?.map(page => page.result) ?? []), [commentsData]);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const isLogin = useRecoilValue(loginState);
  const setLoginPopupState = useSetRecoilState(loginPopupState);

  const handleSubmit = () => {
    async function submitComment() {
      await createComment({ beerId, content: inputValue });
      await refetch();
    }
    submitComment();
    setInputValue('');
    setInputOpen(false);
  };

  return (
    <CommentContainer>
      <Header>
        <Title>한줄평</Title>
        <Button
          onClick={() => {
            if (!!isLogin) setInputOpen(_prev => !_prev);
            else setLoginPopupState(true);
          }}
        >
          작성하기
        </Button>
      </Header>
      {inputOpen && (
        <InputWrapper>
          <CommentInput
            type="text"
            placeholder="한줄평을 입력해주세요"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
            }}
          />
          <Button primary onClick={handleSubmit}>
            등록하기
          </Button>
        </InputWrapper>
      )}

      <Contents>
        {comments.map((data: IComment) => (
          <Row key={data.id}>
            <NameColumn>{data['User.nickname']}</NameColumn>
            <CommentColumn>{data.content}</CommentColumn>
            <DateColumn>{dateFormat(data.createdAt)}</DateColumn>
          </Row>
        ))}

        {comments.length === 0 && (
          <EmptyFallback>
            <EmptyIcon width={150} height={150} />
            <p>아직 한줄평이 없어요!</p>
          </EmptyFallback>
        )}
        {isFetched && <div ref={ref} />}
      </Contents>
    </CommentContainer>
  );
};

export default DetailComments;

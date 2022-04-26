import styled from '@emotion/styled';
import React, { useState } from 'react';
import { IComment } from '../../../api/types/beers';
import { dateFormat } from '../../../utils/dateFormat';
import Button from '../../common/button';
import { BoardHeader, CommentColumn, Contents, DateColumn, NameColumn, Row } from '../../mypage/comments/styled';
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
      </Contents>
    </div>
  );
};

export default DetailComments;

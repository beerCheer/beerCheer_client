import { useMutation, useQueryClient } from 'react-query';

import { ICommnet, ICommnetList, IUser, IUserList } from '../../../api/types/admin';
import { deleteComment, deleteUser } from '../../../api/fetcher/admin';
import { dateFormat } from '../../../utils/dateFormat';

import GarbageIcon from '../../../components/common/@Icons/garbageIcon';
import { Td, Tr } from './styeld';

interface ContentTableProps {
  th_1: string;
  th_2: string;
  th_3: string;
  userList?: IUserList;
  commentList?: ICommnetList;
  page: number;
}

const DataListTable = ({ th_1, th_2, th_3, userList, commentList, page }: ContentTableProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteUserMutation } = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['USERLIST', page]);
    },
  });

  const handleUserWithdraw = (id: number) => {
    deleteUserMutation(id);
  };

  const { mutate: deleteCommentMutation } = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['COMMENTSLIST', page]);
    },
  });

  const handleCommnetDelete = (id: number) => {
    deleteCommentMutation(id);
  };

  return (
    <table>
      <thead>
        <Tr header>
          <th>{th_1}</th>
          <th>{th_2}</th>
          <th>{th_3}</th>
        </Tr>
      </thead>
      <tbody>
        {userList &&
          userList?.rows?.map((item: IUser) => (
            <tr key={item.id}>
              <Td>{item.nickname}</Td>
              <Td>{dateFormat(item.createdAt)}</Td>
              <Td>
                <GarbageIcon onClick={() => handleUserWithdraw(item.id)} />
              </Td>
            </tr>
          ))}

        {commentList &&
          commentList?.rows?.map((item: ICommnet) => (
            <tr key={item.id}>
              <Td>{item?.User?.nickname}</Td>
              <Td>{item.content}</Td>
              <Td>
                <GarbageIcon onClick={() => handleCommnetDelete(item.id)} />
              </Td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DataListTable;

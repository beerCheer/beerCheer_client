import { ICommnet, ICommnetList, IUser, IUserList } from '../../api/types/admin';
import { dateFormat } from '../../utils/dateFormat';
import { Td, Tr } from './styeld';

interface ContentTableProps {
  firstHead: string;
  lastHead: string;
  userList?: IUserList;
  commentList?: ICommnetList;
}

const ContentTable = ({ firstHead, lastHead, userList, commentList }: ContentTableProps) => {
  return (
    <table>
      <thead>
        <Tr header>
          <th>{firstHead}</th>
          <th>{lastHead}</th>
        </Tr>
      </thead>
      <tbody>
        {userList &&
          userList?.rows?.map((item: IUser) => (
            <tr key={item.id}>
              <Td>{item.nickname}</Td>
              <Td>{dateFormat(item.createdAt)}</Td>
            </tr>
          ))}

        {commentList &&
          commentList?.rows?.map((item: ICommnet) => (
            <tr key={item.id}>
              <Td>{item?.User?.nickname}</Td>
              <Td>{item.content}</Td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ContentTable;

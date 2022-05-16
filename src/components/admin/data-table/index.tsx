import { ICommnetList, IUserList } from '../../../api/types/admin';
import { dateFormat } from '../../../utils/dateFormat';

import GarbageIcon from '../../common/@Icons/garbageIcon';
import { Table, Td, Th, Thead, Tr, Tbody } from './styled';

interface DataTableProps {
  data?: IUserList | ICommnetList;
  tableHead: Array<string>;
  onClick?: (id: number) => void;
  icon?: boolean;
  user?: boolean;
  comment?: boolean;
}

const DataTable = ({ data, tableHead, onClick, icon, user, comment }: DataTableProps) => {
  return (
    <Table>
      <Thead>
        <Tr header>
          {tableHead?.map((title: string, idx: number) => (
            <Th key={idx}> {title} </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data?.rows?.map((item: any) => {
          return (
            <Tr key={item.id}>
              {user && (
                <>
                  <Td>{item.nickname}</Td>
                  <Td>{dateFormat(item.createdAt)}</Td>
                </>
              )}

              {comment && (
                <>
                  <Td>{item?.User?.nickname}</Td>
                  <Td>{item.content}</Td>
                </>
              )}

              {icon && (
                <Td>
                  <GarbageIcon onClick={onClick ? () => onClick(item.id) : () => {}} />
                </Td>
              )}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default DataTable;

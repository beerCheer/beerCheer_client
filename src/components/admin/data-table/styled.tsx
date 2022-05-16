import styled from '@emotion/styled';

const Table = styled.table``;

const Td = styled.td`
  vertical-align: center;
  text-align: center;
  padding: 10px;
`;
const Th = styled.th``;

const Thead = styled.thead``;

const Tr = styled.tr<{ header?: boolean }>`
  border-bottom: ${props => props.header && `1px solid #808080`};
  height: 24px;
`;

const Tbody = styled.tbody``;

export { Table, Td, Th, Thead, Tr, Tbody };

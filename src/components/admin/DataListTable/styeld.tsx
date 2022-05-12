import styled from '@emotion/styled';

const Td = styled.td`
  vertical-align: center;
  text-align: center;
  padding: 10px;
`;

const Tr = styled.tr<{ header?: boolean }>`
  border-bottom: ${props => props.header && `1px solid #808080`};
  height: 24px;
`;

export { Td, Tr };

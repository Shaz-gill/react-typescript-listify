import {
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
  Spinner,
  Input,
  Checkbox,
  Box,
  Button,
  useToast,
  ToastId,
} from "@chakra-ui/react";
import Pagination from "../Pagination";
import { ITodo } from "../../types/Todo";

interface Props {
  headers: { key: keyof ITodo; label: string }[];
  data: ITodo[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  sortBy: string;
  sortOrder: "ASC" | "DESC";
}

const DataTable = ({
  headers,
  data,
  loading,
  currentPage,
  totalPages,
  totalRecords,
  sortBy,
  sortOrder,
}: Props) => {
  return (
    <TableContainer
      className="tableContainer"
      maxHeight="550px"
      overflowY="auto"
      position="relative"
      border="1px solid"
      borderColor="gray.500"
      borderRadius={8}
    >
      <Table size="sm">
        <Thead position="sticky" top={0} zIndex={1} bg="gray.700" color="white">
          <Tr>
            {headers.map(({ key, label }) => (
              <Th key={key} scope="col">
                <HStack spacing={1} py={3}>
                  <Text>{label}</Text>
                  {sortBy === key && (
                    <Text>{sortOrder === "ASC" ? " ▲" : " ▼"}</Text>
                  )}
                </HStack>
              </Th>
            ))}
            <Th scope="col" width="50px">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody
          className="tableBody"
          height="calc(100% - 120px)"
          overflowY="auto"
        >
          {loading ? (
            <Tr>
              <Td colSpan={headers.length + 1} textAlign="center" py={10}>
                <Spinner size="lg" />
              </Td>
            </Tr>
          ) : data.length > 0 ? (
            data.map((item) => (
              <Tr key={item.id}>
                {headers.map(({ key }) => (
                  <Td key={key}>{item[key]}</Td>
                ))}
                <Td>
                  <HStack></HStack>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={headers.length + 1} textAlign="center" py={10}>
                No records found
              </Td>
            </Tr>
          )}
        </Tbody>
        <Tfoot position="sticky" bottom={0} bg="gray.700" color="white">
          <Tr>
            <Th colSpan={headers.length + 1}>
              <HStack justify="space-between" py={1}>
                <Text>Total Records: {totalRecords}</Text>
                <Pagination currentPage={currentPage} totalPages={totalPages} />
              </HStack>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

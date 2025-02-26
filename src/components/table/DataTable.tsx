import {
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  Spinner,
} from "@chakra-ui/react";
import { ITodo } from "../../types/Todo";
import THead from "./THead";
import TFoot from "./TFoot";

interface Props {
  headers: { key: keyof ITodo; label: string }[];
  data: ITodo[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  sortOrder: "ASC" | "DESC";
  sortBy: string;
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
      maxHeight="100%"
      overflowY="auto"
      position="relative"
      borderRadius={8}
    >
      <Table size="sm">
        <THead headers={headers} sortOrder={sortOrder} sortBy={sortBy} />
        <Tbody>
          {loading ? (
            <Tr>
              <Td colSpan={headers.length + 1} textAlign="center" py={10}>
                <Spinner size="xl" />
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
        <TFoot
          totalRecords={totalRecords}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Table>
    </TableContainer>
  );
};

export default DataTable;

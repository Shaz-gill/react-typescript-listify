import {
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  Spinner,
  Checkbox,
  VStack,
  Text,
} from "@chakra-ui/react";
import { ITodo } from "../../types/Todo";
import THead from "./THead";
import TFoot from "./TFoot";
import { useTableContainer } from "../../hooks/useThemeStyles";

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
      maxHeight={{ base: "50vh", md: "60vh", lg: "70vh" }}
      overflowY="auto"
      position="relative"
      {...useTableContainer()}
    >
      <Table size="sm">
        <THead headers={headers} sortOrder={sortOrder} sortBy={sortBy} />
        <Tbody height="calc(100% - 120px)" overflowY="auto">
          {loading ? (
            <Tr>
              <Td colSpan={headers.length + 1} textAlign="center" py={10}>
                <Spinner size="xl" />
              </Td>
            </Tr>
          ) : data.length > 0 ? (
            data.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <Checkbox />
                </Td>
                {headers.map(({ key }) => (
                  <Td key={key}>
                    {key === "title_description" ? (
                      <VStack align="start">
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                      </VStack>
                    ) : (
                      <Text>{item[key]}</Text>
                    )}
                  </Td>
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

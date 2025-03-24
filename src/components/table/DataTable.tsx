import {
  Checkbox,
  HStack,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useTableContainer } from "../../hooks/useThemeStyles";
import { ITask } from "../../types/Task";
import TaskDetail from "../TaskDetail";
import TFoot from "./TFoot";
import THead from "./THead";

interface Props {
  headers: { key: keyof ITask; label: string }[];
  data: ITask[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  sortOrder: "ASC" | "DESC";
  sortBy: string;
  onPageChange: (page: number) => void;
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
  onPageChange,
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
              <Td colSpan={headers.length + 2} textAlign="center" py={10}>
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
                      <Text>
                        {item[key] instanceof Date
                          ? (item[key] as Date).toLocaleDateString()
                          : item[key]}
                      </Text>
                    )}
                  </Td>
                ))}
                <Td>
                  <HStack>
                    <TaskDetail task={item} />
                  </HStack>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={headers.length + 2} textAlign="center" py={10}>
                No records found
              </Td>
            </Tr>
          )}
        </Tbody>
        <TFoot
          totalRecords={totalRecords}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Table>
    </TableContainer>
  );
};

export default DataTable;

import { Tfoot, Tr, Th, HStack, Text } from "@chakra-ui/react";
import { useBgColor } from "../../hooks/useThemeStyles";
import { headers } from "../../utils/todoUtils";
import Pagination from "../Pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  onPageChange: (page: number) => void;
}

const TFoot = ({
  totalRecords,
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  return (
    <Tfoot position="sticky" bottom={0} {...useBgColor()}>
      <Tr>
        <Th colSpan={headers.length + 2}>
          <HStack justify="space-between">
            <Text>Total Records: {totalRecords}</Text>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </HStack>
        </Th>
      </Tr>
    </Tfoot>
  );
};

export default TFoot;

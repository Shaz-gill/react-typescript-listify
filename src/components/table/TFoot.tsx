import { Tfoot, Tr, Th, HStack, Text } from "@chakra-ui/react";
import { headers } from "../../utils/todoUtils";
import Pagination from "../Pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
}

const TFoot = ({ totalRecords, currentPage, totalPages }: Props) => {
  return (
    <Tfoot>
      <Tr>
        <Th colSpan={headers.length + 1}>
          <HStack justify="space-between" py={2}>
            <Text>Total Records: {totalRecords}</Text>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </HStack>
        </Th>
      </Tr>
    </Tfoot>
  );
};

export default TFoot;

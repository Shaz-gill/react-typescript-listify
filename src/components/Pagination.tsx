import { HStack, IconButton, Text } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) onPageChange(currentPage + 1);
  };

  return (
    <HStack spacing={4}>
      <IconButton
        aria-label="Previous Page"
        icon={<FaChevronLeft />}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        size="sm"
      />
      <Text>
        Page {currentPage} of {totalPages}
      </Text>
      <IconButton
        aria-label="Next Page"
        icon={<FaChevronRight />}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        size="sm"
      />
    </HStack>
  );
};

export default Pagination;

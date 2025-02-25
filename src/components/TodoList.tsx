import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { headers } from "../utils/todoUtils";
import DataTable from "./table/DataTable";
import todos from "../data/data";
import { ITodo } from "../types/Todo";

const TodoList = () => {
  const [data, setData] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setData(todos);
  };

  const totalPages = Math.ceil(totalRecords / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box className="container">
      <Box className="content" py={4}>
        <DataTable
          headers={headers}
          data={data}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={totalRecords}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </Box>
    </Box>
  );
};

export default TodoList;

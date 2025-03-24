import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import tasks from "../data/data";
import { ITask } from "../types/Task";
import { headers } from "../utils/taskUtils";
import DataTable from "./table/DataTable";

const TaskList = () => {
  const [data, setData] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(15);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(tasks);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box className="container">
      <Box className="content" py={4}>
        <DataTable
          headers={headers}
          data={paginatedData}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={totalRecords}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default TaskList;

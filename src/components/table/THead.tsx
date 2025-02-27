import { Thead, Tr, Th, HStack, Text, Checkbox } from "@chakra-ui/react";
import { ITodo } from "../../types/Todo";

interface Props {
  headers: { key: keyof ITodo; label: string }[];
  sortOrder: "ASC" | "DESC";
  sortBy: string;
}

const THead = ({ headers, sortOrder, sortBy }: Props) => {
  return (
    <Thead>
      <Tr>
        <Th>
          <Checkbox />
        </Th>
        {headers.map(({ key, label }) => (
          <Th key={key}>
            <HStack spacing={1} py={4}>
              <Text>{label}</Text>
              {sortBy === key && (
                <Text>{sortOrder === "ASC" ? " ▲" : " ▼"}</Text>
              )}
            </HStack>
          </Th>
        ))}
        <Th>Actions</Th>
      </Tr>
    </Thead>
  );
};

export default THead;

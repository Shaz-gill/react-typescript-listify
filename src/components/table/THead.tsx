import { Checkbox, HStack, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useBgColor } from "../../hooks/useThemeStyles";
import { ITask } from "../../types/Task";

interface Props {
  headers: { key: keyof ITask; label: string }[];
  sortOrder: "ASC" | "DESC";
  sortBy: string;
}

const THead = ({ headers, sortOrder, sortBy }: Props) => {
  return (
    <Thead position="sticky" top={0} zIndex={1} {...useBgColor()}>
      <Tr>
        <Th>
          <Checkbox />
        </Th>
        {headers.map(({ key, label }) => (
          <Th key={key}>
            <HStack py={2}>
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

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Select,
  Stack,
  Tag,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEllipsisV, FaEdit } from "react-icons/fa";
import React, { useState } from "react";

interface Note {
  text: string;
  date: string;
}

const TodoDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef<HTMLInputElement | null>(null);

  const [todo, setTodo] = useState({
    id: 13,
    title: "Schedule car maintenance",
    description: "Book an appointment for oil change and tire check",
    status: "pending",
    dueDate: "2025-03-15",
    priority: "high",
    category: "Vehicle",
    isRecurring: true,
    tags: ["car", "maintenance", "oil change"],
    notes: [
      { text: "Look for service discounts", date: "2025-03-01 10:30 AM" },
      { text: "Call the garage by Friday", date: "2025-03-02 02:45 PM" },
    ],
    completionPercentage: 0,
    attachment: "",
  });

  const [newNote, setNewNote] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddOrUpdateNote = () => {
    const timestamp = new Date().toLocaleString();
    if (editIndex !== null) {
      // Update existing note
      const updatedNotes = [...todo.notes];
      updatedNotes[editIndex] = { text: newNote, date: timestamp };
      setTodo({ ...todo, notes: updatedNotes });
      setEditIndex(null);
    } else {
      // Add new note
      setTodo({
        ...todo,
        notes: [...todo.notes, { text: newNote, date: timestamp }],
      });
    }
    setNewNote(""); // Clear input
  };

  const handleEditNote = (index: number) => {
    setNewNote(todo.notes[index].text);
    setEditIndex(index);
  };

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<FaEllipsisV />}
        onClick={onOpen}
        size="sm"
        variant="ghost"
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Todo Details</DrawerHeader>

          <DrawerBody>
            <Tabs isFitted variant="enclosed">
              <TabList>
                <Tab>Edit Todo</Tab>
                <Tab>Notes</Tab>
              </TabList>

              <TabPanels>
                {/* Edit Todo Tab */}
                <TabPanel>
                  <Stack spacing="16px">
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input
                        name="title"
                        value={todo.title}
                        onChange={handleChange}
                        ref={firstField}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        name="description"
                        value={todo.description}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Status</FormLabel>
                      <Select
                        name="status"
                        value={todo.status}
                        onChange={handleChange}
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Due Date</FormLabel>
                      <Input
                        type="date"
                        name="dueDate"
                        value={todo.dueDate}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Priority</FormLabel>
                      <Select
                        name="priority"
                        value={todo.priority}
                        onChange={handleChange}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Category</FormLabel>
                      <Input
                        name="category"
                        value={todo.category}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl>
                      <Checkbox
                        isChecked={todo.isRecurring}
                        onChange={(e) =>
                          setTodo({ ...todo, isRecurring: e.target.checked })
                        }
                      >
                        Recurring Task
                      </Checkbox>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Tags</FormLabel>
                      <HStack>
                        {todo.tags.map((tag, index) => (
                          <Tag key={index} colorScheme="blue">
                            {tag}
                          </Tag>
                        ))}
                      </HStack>
                    </FormControl>
                  </Stack>
                  <Button colorScheme="blue" mt={4} w="full">
                    Save Changes
                  </Button>
                </TabPanel>

                {/* Notes Tab */}
                <TabPanel>
                  <Stack spacing="16px">
                    {/* Notes List */}
                    <VStack align="stretch" spacing={3}>
                      <Text fontWeight="bold">Previous Notes:</Text>
                      {todo.notes.length > 0 ? (
                        todo.notes.map((note, index) => (
                          <Box
                            key={index}
                            bg="gray.100"
                            p={3}
                            borderRadius="md"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Box>
                              <Text fontSize="sm" color="gray.600">
                                {note.date}
                              </Text>
                              <Text>{note.text}</Text>
                            </Box>
                            <IconButton
                              aria-label="Edit note"
                              icon={<FaEdit />}
                              size="sm"
                              onClick={() => handleEditNote(index)}
                            />
                          </Box>
                        ))
                      ) : (
                        <Text color="gray.500">No notes yet.</Text>
                      )}
                    </VStack>

                    <Divider />

                    {/* Add / Edit Note */}
                    <FormControl>
                      <FormLabel>
                        {editIndex !== null ? "Edit Note" : "Add New Note"}
                      </FormLabel>
                      <Textarea
                        name="newNote"
                        placeholder="Write your note here..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      mt={2}
                      onClick={handleAddOrUpdateNote}
                      isDisabled={!newNote.trim()}
                    >
                      {editIndex !== null ? "Update Note" : "Add Note"}
                    </Button>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TodoDetail;

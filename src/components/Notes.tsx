import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { z } from "zod";

const schema = z.object({
  noteText: z.string().trim().min(1, "Note cannot be empty."),
});

type Note = {
  text: string;
  date: Date;
  id: string;
};

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      text: "This is the first note.",
      date: new Date(),
      id: crypto.randomUUID(),
    },
    {
      text: "This is the second note.",
      date: new Date(),
      id: crypto.randomUUID(),
    },
    {
      text: "This is the third note.",
      date: new Date(),
      id: crypto.randomUUID(),
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const notesEndRef = useRef<HTMLDivElement | null>(null);
  const toast = useToast();

  // Theme-aware colors
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputBorder = useColorModeValue("gray.300", "gray.600");

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      noteText: "",
    },
  });

  useEffect(() => {
    scrollToBottom();
  }, [notes]);

  const scrollToBottom = () => {
    if (notesEndRef.current) {
      notesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = (data: { noteText: string }) => {
    try {
      if (editingId) {
        setNotes(
          notes.map((note) =>
            note.id === editingId
              ? { ...note, text: data.noteText, date: new Date() }
              : note
          )
        );
        toast({
          title: "Note updated",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        const newNote = {
          text: data.noteText,
          date: new Date(),
          id: crypto.randomUUID(),
        };
        setNotes([...notes, newNote]);
        toast({
          title: "Note added",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      reset();
      setEditingId(null);
    } catch (error) {
      toast({
        title: "Error saving note",
        description: "Please try again",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEditNote = (id: string) => {
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setValue("noteText", noteToEdit.text);
      setEditingId(id);
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editingId === id) {
      reset();
      setEditingId(null);
    }
    toast({
      title: "Note deleted",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCancelEdit = () => {
    reset();
    setEditingId(null);
  };

  return (
    <Flex direction="column" height="100vh" bg={bgColor}>
      <Box
        flex="1"
        overflowY="auto"
        px={{ base: 4, md: 6 }}
        py={4}
        css={{
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: useColorModeValue(
              "rgba(0, 0, 0, 0.2)",
              "rgba(255, 255, 255, 0.2)"
            ),
            borderRadius: "3px",
          },
        }}
      >
        {notes.length === 0 ? (
          <Alert status="info" borderRadius="md" bg="gray.700" color="white">
            <AlertIcon />
            No notes yet. Add your first note below!
          </Alert>
        ) : (
          <VStack align="stretch">
            {notes.map((note) => (
              <Box
                key={note.id}
                bg={cardBg}
                p={4}
                borderRadius="lg"
                boxShadow="sm"
                borderWidth="1px"
                borderColor={cardBorder}
                position="relative"
                _hover={{
                  boxShadow: "md",
                  borderColor: useColorModeValue("gray.300", "gray.500"),
                }}
                transition="all 0.2s"
              >
                <Flex justify="space-between" align="center" mb={2}>
                  <Text fontSize="sm" color={secondaryText} fontWeight="medium">
                    {new Date(note.date).toLocaleString()}
                  </Text>
                  <HStack spacing={2}>
                    <IconButton
                      aria-label="Edit note"
                      icon={<FaEdit />}
                      size="sm"
                      variant="ghost"
                      color={secondaryText}
                      _hover={{ color: "blue.400" }}
                      onClick={() => handleEditNote(note.id)}
                    />
                    <IconButton
                      aria-label="Delete note"
                      icon={<FaTrash />}
                      size="sm"
                      variant="ghost"
                      color={secondaryText}
                      _hover={{ color: "red.400" }}
                      onClick={() => handleDeleteNote(note.id)}
                    />
                  </HStack>
                </Flex>
                <Text color={textColor} whiteSpace="pre-wrap">
                  {note.text}
                </Text>
              </Box>
            ))}
            <div ref={notesEndRef} />
          </VStack>
        )}
      </Box>

      <Box
        bg={cardBg}
        py={4}
        px={{ base: 4, md: 6 }}
        borderTopWidth="1px"
        borderTopColor={cardBorder}
        position="sticky"
        bottom={0}
        zIndex={1}
        boxShadow="0 -2px 10px 0 rgba(0, 0, 0, 0.1)"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="noteText"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="Write a new note..."
                size="md"
                borderRadius="lg"
                minH="100px"
                bg={inputBg}
                borderColor={inputBorder}
                color={textColor}
                _hover={{
                  borderColor: useColorModeValue("gray.400", "gray.500"),
                }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px #3182ce",
                }}
                resize="vertical"
                _placeholder={{ color: secondaryText }}
              />
            )}
          />

          {errors.noteText && (
            <Text color="red.400" fontSize="sm" mt={1}>
              {errors.noteText.message}
            </Text>
          )}

          <Flex justify="flex-end" mt={3} gap={2}>
            {editingId ? (
              <>
                <Button
                  leftIcon={<FaTimes />}
                  variant="outline"
                  color={secondaryText}
                  _hover={{ bg: "gray.600" }}
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
                <Button leftIcon={<FaCheck />} colorScheme="blue" type="submit">
                  Save Changes
                </Button>
              </>
            ) : (
              <Button
                colorScheme="blue"
                type="submit"
                width={{ base: "full", sm: "auto" }}
              >
                Add Note
              </Button>
            )}
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Notes;

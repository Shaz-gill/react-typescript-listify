import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { ITask } from "../types/Task";
import Notes from "./Notes";

interface Props {
  task: ITask;
}

const SideDrawer = ({ task }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <IconButton
        aria-label="Open Drawer"
        size="sm"
        icon={<FaEllipsisV />}
        onClick={() => handleClick()}
        variant="iconBtn"
      />

      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Tabs>
              <TabList>
                <Tab>Details</Tab>
                <Tab>Notes</Tab>
              </TabList>

              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel>
                  <Notes />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;

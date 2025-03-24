import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NavBar from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <TaskList />
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;

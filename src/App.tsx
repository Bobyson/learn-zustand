import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import AddhabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";
// import useHabitStore from "./store/store";

function App() {
  // const store = useHabitStore();
  // console.log(store);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        {/* Form */}
        <AddhabitForm />
        <HabitList />
      </Box>
    </Container>
  );
}

export default App;

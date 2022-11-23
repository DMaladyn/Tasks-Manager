import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import { TasksList } from "./components/pages/tasksList";
import TasksCompleted from "./components/pages/tasksCompleted";
import Layout from "./components/layout/layout";
import MainPage from "./components/pages/mainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/da" element={<TasksCompleted />} />
      </Routes>
    </Layout>
  );
}

export default App;

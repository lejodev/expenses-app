import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import AddExpense from "./components/main/expense/addExpense/AddExpense";
import EditExpense from "./components/main/expense/editExpense/EditExpense";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

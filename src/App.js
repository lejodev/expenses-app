import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./components/expenses/Expenses";
import AddExpense from "./components/addExpense/AddExpense";
import EditExpense from "./components/editExpense/EditExpense";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Expenses />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

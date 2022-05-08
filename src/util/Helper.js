class Helper {
  static handleAddExpenseSubmit = (event) => {
    event.preventDefault();
    return {
      expense: event.target.expense.value,
      category: event.target.category.value,
    };
  };

  static getExpenses = () => {
    const mockURL =
      "https://dce0e558-7163-467d-b683-31518b06da43.mock.pstmn.io";
    const request = fetch(`${mockURL}/api/expenses/`).then((resp) =>
      resp.json()
    );
    return request;
  };
}

export default Helper;

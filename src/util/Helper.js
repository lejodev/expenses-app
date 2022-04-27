class Helper {
  static handleAddExpenseSubmit = (event) => {
    event.preventDefault();
    return {
      expense: event.target.expense.value,
      category: event.target.category.value,
    };
  };
}

export default Helper;

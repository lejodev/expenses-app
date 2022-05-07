const EXPENSES_HOST = "https://dce0e558-7163-467d-b683-31518b06da43.mock.pstmn.io"

const getExpenses = () => {
    return fetch(`${EXPENSES_HOST}/api/expenses`)
        .then((response) => response.json())
}

export default getExpenses
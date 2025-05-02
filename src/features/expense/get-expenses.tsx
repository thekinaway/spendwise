export const getExpenses = async () => {
    try {
        const response = await fetch("http://localhost:8000/expense?month=5&year=2025", {
            method: "GET",
            redirect: "follow" as RequestRedirect
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching expenses:", error);
    }
}
  
export const getExpensesByMonth = async (month: number, year: number) => {
  try {
    const response = await fetch(
      `http://localhost:8000/expense?month=${month}&year=${year}`,
      {
        method: "GET",
        redirect: "follow" as RequestRedirect,
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
  }
};

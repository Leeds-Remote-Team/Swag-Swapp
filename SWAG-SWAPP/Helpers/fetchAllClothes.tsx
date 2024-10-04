export const fetchAllClothes = (user_id) => {
  const url = "https://swagswapp-api.onrender.com/api/clothes/:user_id";
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data, "<-----DATA"));
};

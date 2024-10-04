export const fetchAllAccessories = (user_id) => {
  const url =
    "https://swagswapp-api.onrender.com/api/clothes/:user_id?searchText=accessories";
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data, "<-----DATA"));
};

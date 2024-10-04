export const fetchSortedClothes = (sortBy, order, user_id) => {
  const url = `https://swagswapp-api.onrender.com/api/clothes/${user_id}?sortBy=${sortBy}&order=${order}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchMostPopularClothes = (user_id) => {
  return fetchSortedClothes("wear_frequency", "desc", user_id);
};

export const fetchNeedsSomeLovingClothes = (user_id) => {
  return fetchSortedClothes("wear_frequency", "asc", user_id);
};

export const fetchNewestClothes = (user_id) => {
  console.log("hello, lokking for me")
  return fetchSortedClothes("last_date_worn", "desc", user_id);
};
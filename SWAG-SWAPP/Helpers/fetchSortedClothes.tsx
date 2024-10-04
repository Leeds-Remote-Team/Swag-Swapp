import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { ReactDOM } from "react";
export const fetchSortedClothes = (sortBy, order, user_id) => {
  console.log("here top");
  const url = `https://swagswapp-api.onrender.com/api/clothes/${user_id}?sortBy=${sortBy}&order=${order}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);

        if (!response) {
          throw new Error("Network response was not ok");
        }
        console.log("here middle");
        return response;
      })
      .then((data) => {
        console.log("here");
        return data;
      });
  }, []);
};

export const fetchMostPopularClothes = (user_id) => {
  return fetchSortedClothes(user_id, "wear_frequency", "desc");
};

export const fetchNeedsSomeLovingClothes = (user_id) => {
  return fetchSortedClothes(user_id, "wear_frequency", "asc");
};

export const fetchNewestClothes = (user_id) => {
  return fetchSortedClothes(user_id, "last_data_worn", "desc");
};

import { response } from 'express';
import './style.css';

const mealsContainer = document.querySelector('.meals-container');

const getAllMeals = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };

  await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', options)
    .then((response) => response.json())
    .then((data) => displayMeals(data.categories));
};

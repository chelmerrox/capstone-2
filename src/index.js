/* var express = require('express')
var cors = require('cors')
var app = express() */
 
import './style.css';

/* app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
})) */

const mealsContainer = document.querySelector('.meals-container');
let rowNum= [1,2];

const displayMeals = (data) => {
  const row = document.createElement('div');

  if (rowNum.length === 2){
    row.classList.add(`row-${rowNum[0]}`);
  } else {
    row.classList.add(`row-${rowNum[1]}`);
  }
  
  data.forEach((mealData, i) => {
    const mealContainer = document.createElement('div');
    mealContainer.classList.add(`meal-${mealData.idCategory}-container`);

    mealContainer.innerHTML = `
      <img src="${mealData.strCategoryThumb}" alt="Meal ${mealData.idCategory}"/>

      <div class="name-and-likes">
        <h3>Meal ${mealData.idCategory}</h3>
        
        <div>
          <i class="material-icons">favorite_border</i>
          <p class="likes"><span class="num-of-likes">5</span> likes</p>
        </div>
      </div>
  
      <button type="button" class="comments-btn">Comments</button>
      <button type="button" class="reservations-btn">Reservations</button>
    `;

    row.appendChild(mealContainer);
    mealsContainer.appendChild(row);
  });


};

const getAllMeals = async () => {
  const options = {
    method: 'GET',
    headers: { 
      'Content-type': 'application/json; charset=UTF-8; "Access-Control-Allow-Origin: *; Access-Control-Allow-Methods: POST, PUT, PATCH, GET, DELETE, OPTIONS;"' },
  };

  await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', options)
    .then((response) => response.json())
    .then((data) => displayMeals(data.categories));
};

getAllMeals();

export const mealsContainer = document.querySelector('.meals-container');

export const displayMeals = (data) => {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  
  data.forEach((mealData, i) => {
    const mealContainer = document.createElement('div');
    mealContainer.classList.add(`meal-${mealData.idCategory}-container`);

    mealContainer.innerHTML = `
      <img src="${mealData.strCategoryThumb}" alt="Meal ${i + 1}"/>

      <div class="name-and-like-icon-container">
        <h3>${mealData.strCategory}</h3>
        <i class="material-icons">favorite_border</i>
      </div>
      
      <p class="likes-text"><span class="num-of-likes">5</span>likes</p>
      
      <div class="comment-and-reservations-container">
        <button type="button" class="comments-btn">Comments</button>
        <button type="button" class="reservations-btn">Reservations</button>
      </div>
    `;

    grid.appendChild(mealContainer);
    mealsContainer.appendChild(grid);
  });
};

export const getAllMeals = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8;"' },
  };

  fetch('https://www.themealdb.com/api/json/v1/1/categories.php', options)
    .then((response) => response.json())
    .then((data) => displayMeals(data.categories));
};
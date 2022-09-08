const mealsContainer = document.querySelector('.meals-container');
//let dataModalTarget = [];
let k = 0;
let overlay;
const dataModalTarget = [
  'modal-1',
  'modal-2',
  'modal-3',
  'modal-4',
  'modal-5',
  'modal-6',
  'modal-7',
  'modal-8',
  'modal-9',
  'modal-10',
  'modal-11',
  'modal-12',
  'modal-13',
  'modal-14',
];
let numOfClicks = 0;

const involvementAPILikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/52ymOtxpjWvVDyNrJLWi/likes/';
//const involvementAPILikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nTyZtNP7uxSV8b3O2GI5/likes';

const displayLike = (data, itemID, numOfClicks) => {
  const likeIcons = Array.from(document.getElementsByClassName('like-icons'));

  likeIcons.forEach((icon, j) => {
    if (itemID.includes(`${j + 1}`) && j === (j + 1) - 1) {
      data.forEach((info, k) => {
        // <span> tag
        const likeNum = document.querySelector(`.likes-num-${k + 1}`);
        if (info.item_id === itemID && numOfClicks%2 !== 0){
          likeNum.innerHTML = `${info.likes}`
          icon.style.color = 'magenta';
        } else if (info.item_id === itemID && numOfClicks%2 === 0) {
          icon.style.color = 'black';
        }
      });
    }
  });
}

const getLike = async (itemID, numOfClicks) => {
  const options = {
    method: 'GET',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  };

  await fetch(involvementAPILikes, options)
    .then((response) => response.json())
    .then((data) => {
      //extract numeric string from ID, changing it to a number
      //then, subtracting one to get array index
      let num = (parseInt(itemID.substring(5))) - 1;

      // Update will only work if there was a PUT method in the Involvement API Docs
      if (numOfClicks%2 === 0){
        data[num].likes = data[num].likes - 1;
      }

      displayLike(data, itemID, numOfClicks)
    });
};

const addLike = async (itemID, numOfClicks) => {
  const options = {
    method: 'POST',
    headers: {'Content-type': 'application/json; charset=UTF-8'} ,
    body: JSON.stringify({
      item_id : itemID
    }),
  }

  await fetch(involvementAPILikes, options)
    .then(() => getLike(itemID, numOfClicks));
};

const displayLikes = async (data) => {
  const numOfLikes = Array.from(document.getElementsByClassName('.num-of-likes'));

  data.forEach((info) => {
    numOfLikes.forEach((likeNumText) => {
      likeNumText.innerHTML = `${info.likes}`;
    })
  });
};

export const getAllLikes = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };

  await fetch(involvementAPILikes, options)
    .then((response) => response.json())
    .then((data) => displayLikes(data));
}

const displayMeals = (data) => {
  const grid = document.createElement('div');
  grid.classList.add('grid');

  data.forEach((mealData, i) => {
    const mealContainer = document.createElement('div');
    mealContainer.classList.add(`meal-${mealData.idCategory}-container`);

    mealContainer.innerHTML = `
      <img src="${mealData.strCategoryThumb}" alt="Meal ${i + 1}"/>

      <div class="name-and-like-icon-container">
        <h3 class="dish-name">${mealData.strCategory}</h3>
        <i class="material-icons like-icons" id="like-${i+1}">favorite_border</i>
      </div>
      
      <p class="likes-text"><span class="num-of-likes likes-num-${i + 1}">0</span>likes</p>
      
      <div class="comment-and-reservations-container">
        <button type="button" class="comments-btn modal-${i + 1}"
        data-modal-target="modal-${mealData.idCategory}">Comments</button>

        <!--Popup window container for Comments Button-->
        <div class="modal popup-${i + 1}" id="modal-${i + 1}">
          <div class="modal-header">
            <span class="close-button close-button-${i + 1}
            data-close-button"><i>X</i></span>
          </div>

          <div class="modal-body">
            <img src="${mealData.strCategoryThumb}" />
            <h2>${mealData.strCategory}</h2>
            <p class="description">${mealData.strCategoryDescription}</p>
            <div>
              <br><h3 class="comments">Comments</h3>
            </div>
            <form class="comments-form">
              <input class="form-input" type="text" placeholder="Your Name" />
              <textarea class="form-input" placeholder="Your Comment"></textarea>
              <input class="comment-btn" type="button" value="Comment" />
            </form>
          </div>
        </div>

        <div id="overlay"></div>
      </div>
    `;

    grid.appendChild(mealContainer);
    mealsContainer.appendChild(grid);
  });

  dataModalTarget.forEach((id) => {
    // the open a Modal button
    const commentBtn1 = document.querySelector(`[data-modal-target='${id}']`);

    k += 1; // for the close-button-number class
    const closeModalButtons = document.querySelector(`.close-button-${k}`); // the close a Modal button

    // To open modal button
    commentBtn1.addEventListener('click', () => {
      const modal = document.getElementById(`${id}`);
      openModal(modal);
    });

    overlay = document.getElementById('overlay');

    // To close a modal by clicking on the close button
    closeModalButtons.addEventListener('click', () => {
      const modal = closeModalButtons.closest('.modal');
      closeModal(modal);
    });
  });

  // For the like icons
  const likeIcons = Array.from(document.getElementsByClassName('like-icons'));

  likeIcons.forEach((icon, j) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();

      let itemID = e.target.id;
      numOfClicks += 1;

      addLike(itemID, numOfClicks);
    });
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

function openModal(modal) {
  if (modal === null) {
    return;
  }
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) {
    return;
  }
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
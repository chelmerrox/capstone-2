const mealsContainer = document.querySelector('.meals-container');
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

const displayLike = (data, itemID, numOfClicks) => {
  const likeIcons = Array.from(document.getElementsByClassName('like-icons'));
  let num;

  likeIcons.forEach((icon, j) => {
    num = j + 1;
    if (icon.getAttribute('id') === itemID){
      data.forEach((likesData, k) => {
        if (likesData.item_id === itemID){

          //<span> tag that holds the number of likes
          const likeNum = document.querySelector(`.likes-num-${num}`);

          likeNum.innerHTML = `${likesData.likes}`
          icon.style.color = 'magenta';
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

const displayAllLikes = async (itemID, data) => {
  const numOfLikes = Array.from(document.getElementsByClassName('.num-of-likes'));

  data.forEach((info) => {
    numOfLikes.forEach((likeNumText) => {
      likeNumText.innerHTML += `${info.likes}`;
    })
  });
};

const getAllLikes = async (itemID) => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };

  await fetch(involvementAPILikes, options)
    .then((response) => response.json())
    .then((data) => displayLikes(itemID, data));
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

  // For the like icons
  const likeIcons = Array.from(document.getElementsByClassName('like-icons'));

  let itemID;

  likeIcons.forEach((icon, j) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();

      itemID = e.target.id;
      numOfClicks += 1;

      console.log(itemID);

      addLike(itemID, numOfClicks);
    });

    getAllLikes(itemID);
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
};

const getAllMeals = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8;"' },
  };

  fetch('https://www.themealdb.com/api/json/v1/1/categories.php', options)
    .then((response) => response.json())
    .then((data) => displayMeals(data.categories));
};

const openModal = (modal) => {
  if (modal === null) {
    return;
  }
  modal.classList.add('active');
  overlay.classList.add('active');
}

const closeModal = (modal) => {
  if (modal === null) {
    return;
  }
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

export default getAllMeals();
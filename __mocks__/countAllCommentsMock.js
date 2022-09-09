export const involvementAPIComments1 =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/52ymOtxpjWvVDyNrJLWi/comments';

const commentCounter = Array.from(document.getElementsByClassName('comment-counter'));
const comments = Array.from(document.querySelectorAll('ul.user-comments'));

export const getAllComments = async (id, list) => {
  await fetch(`${involvementAPIComments1}?item_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((commentsData) => {
        list.innerHTML += `<li><span>${commentsData.creation_date}</span><span>${commentsData.username}</span><span>: ${commentsData.comment}</span></li>`;
      });
    });

    countAllComments();
};

export const countAllComments = () => {
  commentCounter.forEach((counterText, j) => {
    if (j === 1){
      return `${comments[j].childElementCount}`  ;
    }
  });
};

export const getComment = async (id, list) => {
  await fetch(`${involvementAPIComments1}?item_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      let lastElement = data.length - 1;

      data.forEach((commentsData, j) => {
        if (j === lastElement) {
          const li = document.createElement('li');
          li.innerHTML = `<span>${commentsData.creation_date}</span><span>${commentsData.username}</span><span>: ${commentsData.comment}</span>`;
          list.appendChild(li);
        }
      });

      const commentCounter = Array.from(document.getElementsByClassName('comment-counter'));
      const comments = Array.from(document.querySelectorAll('ul.user-comments'));

      commentCounter.forEach((counterText, k) => {
        if (id === k + 1){
          counterText.innerHTML = ` (${comments[k].childElementCount})`;
        }
      });
    });
};

export const postComment = async (id, user, comment, list) => {
  await fetch(involvementAPIComments1, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: comment,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }).then(() => getComment(id, list));
};

export const displayMeals = (data) => {
  const grid = document.createElement('div');
  grid.classList.add('grid');

  data.forEach((mealData, i) => {
    const mealContainer = document.createElement('div');
    mealContainer.classList.add(`meal-${mealData.idCategory}-container`);
    mealContainer.setAttribute('id', 'card-item');
    mealContainer.innerHTML = `
      <img src="${mealData.strCategoryThumb}" alt="Meal ${i + 1}"/>
 
      <div class="name-and-like-icon-container">
        <h3 class="dish-name">${mealData.strCategory}</h3>
        <i class="material-icons like-icons" id="like-${
          i + 1
        }">favorite_border</i>
      </div>
      
      <p class="likes-text"><span class="num-of-likes likes-num-${
        i + 1
      }">0</span>likes</p>
      
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
              <br><h3 class="comments">Comments<span class="comment-counter"></span></h3>
            </div>
            <ul class="user-comments"></ul>
            <form class="comments-form">
              <input class="form-input user-${
                i + 1
              }" type="text" placeholder="Your Name" />
              <textarea class="form-input comment-${
                i + 1
              }" placeholder="Your Comment" rows="3"></textarea>
              <input id="submitBtn"
              class="submit-btn" type="button" value="Comment" />
            </form>
          </div>
        </div>
        <div id="overlay"></div>
      </div>
    `;

    grid.appendChild(mealContainer);
    mealsContainer.appendChild(grid);
  });
  countAllMeals();
  // For the like icons
  const likeIcons = Array.from(document.getElementsByClassName('like-icons'));
  let itemID;
  likeIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      itemID = e.target.id;
      addLike(itemID);
    });
    getAllLikes();
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

  const userComments = Array.from(
    document.querySelectorAll('ul.user-comments')
  );
  const submitBtns = Array.from(document.getElementsByClassName('submit-btn'));
  submitBtns.forEach((btn, j) => {
    btn.addEventListener('click', () => {
      const userName = document.querySelector(`.user-${j + 1}`);
      const userComment = document.querySelector(`.comment-${j + 1}`);
      if (userName.value !== '' && userComment.value !== '') {
        postComment(j + 1, userName.value, userComment.value, userComments[j]);

        userName.value = '';
        userComment.value = '';
      }
    });
    getAllComments(j + 1, userComments[j]);
  });
};

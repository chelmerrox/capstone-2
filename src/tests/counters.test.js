/**
 * @format
 * @jest-environment jsdom
 */
import countAllMeals from '../modules/getAllMeals.js';

test('counts card items', () => {
  document.body.innerHTML = `
   <span class="item-counter"></span>
   <div id="card-item></div>
   <div id="card-item></div>
   `;
  countAllMeals();
  const amount = document.querySelector('.item-counter').textContent;
  expect(amount).toBe('(2)');
});

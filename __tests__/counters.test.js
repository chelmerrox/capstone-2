/**
 * @jest-environment jsdom
 */
 import { countAllMeals } from '../modules/getAllMeals';
 import '@testing-library/jest-dom';
 
 test('counts card items', () => {
   document.body.innerHTML = `
   <span class="item-counter"></span>
   <div id="card-item"></div>
   <div id="card-item"></div>
   <div id="card-item"></div>
   `;
   countAllMeals();
   const length = document.querySelector('.item-counter').textContent;
   expect(length).toBe('(3)');
 });
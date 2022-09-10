/**
 * @jest-environment jsdom
 */

import { countAllComments } from '../src/modules/getAllMeals.js';
import '@testing-library/jest-dom';

describe('count all comment test', () => {
  test('comment counter should have length of 5', () => {
    document.body.innerHTML = `
    <span class="comment-counter"></span>
    <ul class="user-comments">
    <li class="comment-item"></li>
    <li class="comment-item"></li>
    <li class="comment-item"></li>
    <li class="comment-item"></li>
    <li class="comment-item"></li>
    </ul>`;
    countAllComments();
    const length = document.querySelector('.comment-counter').textContent;
    expect(length).toBe(' (5)');
  });
});

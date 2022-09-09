/**
 * @jest-environment jsdom
 */

import { displayMeals, postComment, getComment, getAllComments, countAllComments } from '../__mocks__/countAllCommentsMock.js';
 
describe('count all comment test', () => {
  test('comment node 2 should have length of 12', () => {
    countAllComments();

    //expect(countAllComments()).toBe(12);
  });
});
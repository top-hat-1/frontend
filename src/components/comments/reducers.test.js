import { comments, COMMENTS_LOAD, COMMENT_ADD, COMMENT_REMOVE } from './reducers';

describe('comments reducer tests', () => {

  it('defaults to empty array', () => {
    const state = comments(undefined, {});
    expect(state).toEqual([]);
  });

  const comment1 = {
    _id: 1234,
    userId: 345,
    comment: 'love this project',
    target: 3456
  };

  const comment2 = {
    _id: 2234,
    userId: 345,
    comment: 'Eh, this is fine',
    target: 3456
  };

  it('adds a comment', () => {
    const state = comments([], { type: COMMENT_ADD, payload: comment1 });
    expect(state).toEqual([comment1]);
  });

  it('loads comments from API', () => {
    const state = comments([], { type: COMMENTS_LOAD, payload: [comment1, comment2] });
    expect(state).toEqual([comment1, comment2]);
  });

  it('deletes a comment', () => {
    const state = comments([comment1, comment2], { type: COMMENT_REMOVE, payload: 2234 });
    expect(state).toEqual([comment1]);
  }); 

});
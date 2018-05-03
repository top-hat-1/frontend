import { following, FOLLOW_ADD } from './reducers';

describe('follow reducer tests', () => {

  it('defaults to empty array', () => {
    const state = following(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds id to following', () => {
      const state = following(undefined, { type: FOLLOW_ADD, payload: 123 })
      expect(state).toEqual([123])
  })

  it('adds second follower to state', () => {
      const state = following([123], { type: FOLLOW_ADD, payload: 456 })
      expect(state).toEqual([123, 456])
  })

})
import { moments, MOMENTS_LOAD, MOMENT_ADD, MOMENT_REMOVE, MOMENT_UPDATE } from './reducers';

describe('Moments reducer tests', () => {

  it('defaults to empty array', () => {
    const state = moments(undefined, {});
    expect(state).toEqual([]);
  });

  const moment1 = {
    _id: 1234,
    caption: 'this is what it looks like',
    photoUrl: 'www.photo.com',
    category: 'before'
  };
  const moment2 = {
    _id: 2234,
    caption: 'this is what it looks like',
    photoUrl: 'www.photo.com',
    category: 'during'
  };

  it('adds a moment', () => {
    const state = moments([], { type: MOMENT_ADD, payload: moment1 });
    expect(state).toEqual([moment1]);
  });

  it('loads moments from API', () => {
    const state = moments([], { type: MOMENTS_LOAD, payload: [moment1, moment2] });
    expect(state).toEqual([moment1, moment2]);
  });

  it('deletes a moment', () => {
    const state = moments([moment1, moment2], { type: MOMENT_REMOVE, payload: 2234 });
    expect(state).toEqual([moment1]);
  }); 

  it('updates a moment', () => {
    const updated = {
      _id: 1234,
      caption: 'this is what it looks like now',
      photoUrl: 'www.photo.com',
      category: 'after'
    };

    const state = moments([moment1], { type: MOMENT_UPDATE, payload: updated });
    expect(state).toEqual([{ ...moment1, ...updated }]);

  });

});
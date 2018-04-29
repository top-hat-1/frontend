import { projects } from './reducers';

describe('Projects reducer tests:', () => {

  it('defaults to empty array', () => {
    const state = projects(undefined, {});
    expect(state).toEqual([]);
  });

  
});
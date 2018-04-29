import { projects, PROJECTS_LOAD, PROJECT_ADD, PROJECT_REMOVE } from './reducers';


describe('Projects reducer tests:', () => {

  it('defaults to empty array', () => {
    const state = projects(undefined, {});
    expect(state).toEqual([]);
  });

  const project1 = {
    name: 'Back Deck',
    description: 'its wood',
    _id: 3456,
    completed: false,
  };
  const project2 = {
    name: 'Front Deck',
    description: 'its also wood',
    _id: 3457,
    completed: false,
  };

  it('adds a project', () => {
    const state = projects([], { type: PROJECT_ADD, payload: project1 });
    expect(state).toEqual([project1]);
  });

  it('loads projects from API', () => {
    const state = projects([], { type: PROJECTS_LOAD, payload: [project1, project2] });
    expect(state).toEqual([project1, project2]);
  });

  it('removes project', () => {
    const state = projects([project1, project2], { type: PROJECT_REMOVE, payload: 3457 });
    expect(state).toEqual([project1]);
  });
});
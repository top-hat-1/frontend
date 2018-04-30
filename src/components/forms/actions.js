import { IMAGE_ADD } from './reducers';

export const addImage = image => ({
    type: IMAGE_ADD,
    payload: image
});
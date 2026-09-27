import { nanoid, createSlice } from '@reduxjs/toolkit';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [createHuman('Alice'), createHuman('Bob')];

export const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    }
  }
});

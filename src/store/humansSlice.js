import { nanoid, createSlice } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';

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
  },
  // extraReducers: {
  //   [someAction]: (state, action) => {}
  // }
  extraReducers: (builder) => {
    builder.addCase(tasksSlice.actions.assignTo, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (taskId) => taskId !== action.payload.taskId
          );
        }
      }
    });
  }
});

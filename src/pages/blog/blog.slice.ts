import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface BlogState {
  postId: string
}
const initialState: BlogState = {
  postId: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    selectItemEdit: (state, action: PayloadAction<string>) => {
      state.postId = action.payload
    },
    unSelectItemEdit: (state) => {
      state.postId = ''
    }
  }
})
export const { selectItemEdit, unSelectItemEdit } = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer

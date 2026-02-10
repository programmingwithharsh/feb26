import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { loading: false, users: [], error: null },
  reducers: {
    fetchUsersRequest: (state) => { state.loading = true; },
    fetchUsersSuccess: (state, action) => { state.loading = false; state.users = action.payload; },
    fetchUsersFailure: (state, action) => { state.loading = false; state.error = action.payload; },
  }
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export default userSlice.reducer;

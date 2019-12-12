import { createSlice } from "@reduxjs/toolkit";

const team = [
  { id: "xqzhou", name: "周晓强", email: "xqzhou@hipacloud.com" },
  { id: "mchen", name: "陈金洲", email: "xqzhou@hipacloud.com" },
  { id: "yzhuang", name: "黄一钊", email: "xqzhou@hipacloud.com" },
  { id: "byliu", name: "刘丙乙", email: "xqzhou@hipacloud.com" }
];

const usersSlice = createSlice({
  name: "users",
  initialState: {
    all: team
  },

  reducers: {
    addUser: (state, action) => {
      state.all.push(action.payload);
    }
  }

})

const { actions, reducer } = usersSlice;

const {
  addUser
} = actions;

export { addUser };

export default usersSlice;
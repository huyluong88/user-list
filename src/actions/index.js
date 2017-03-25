// action creator
//make api calls here
export const selectUser = (user) => {
  console.log('user selected is ', user.first)
  return {
    type: "USER_SELECTED",
    payload: user
  }
}

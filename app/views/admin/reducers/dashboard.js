const initialState = {
  isPending: true,
  isFulfilled: false,
  isRejected: false
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

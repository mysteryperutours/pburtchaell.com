const initialState = {
  isPending: true,
  isFulfilled: false,
  isRejected: false,
  isSignedIn: false
};

export default function session(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

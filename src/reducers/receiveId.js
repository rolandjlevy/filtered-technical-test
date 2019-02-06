
function receiveId(state = '', action) {
  switch (action.type) {
    case 'RECEIVE_ID':
      return action.id;
    default:
      return state;
  }
}

export default receiveId;
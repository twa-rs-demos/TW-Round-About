export default (state = {parentUri: '', subUri: '', uriType: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_URI': {
      const path = action.uri.pathname.split('/');
      let parentUri = path[path.length - 1];
      let subUri = action.uri.hash;
      let uriType = 'withinPage';
      if (path.length > 3) {
        parentUri = path[2];
        subUri = path[3];
        uriType = 'outsidePage';
      }
      return {parentUri, subUri, uriType};
    }
  }

  return state;
}

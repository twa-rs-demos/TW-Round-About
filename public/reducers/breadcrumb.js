import navData from '../raw-data/menuData';
export default (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_URI': {
      let path = action.uri.pathname.replace('/tw-ra', '');
      const uriArray = path.split('/').map(item => `/${item}`);
      let breadcrumb = [];
      for (let uri of uriArray) {
        navData.find(item => {
          if (uri === item.uri) {
            breadcrumb.push(item);
          }
        });
      }
      // return breadcrumb;
      if(breadcrumb.length>1){
        return breadcrumb;
      }
      else {
        return [];
      }
    }
  }
  return state;
};

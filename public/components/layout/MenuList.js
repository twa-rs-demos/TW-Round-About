import React, {Component} from 'react';
import superagent from 'superagent';
import noCache from  'superagent-no-cache';
import NewNavDropdown from  './NewNavDropdown';

export default class MenuList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuList: []
    };
  }

  componentDidMount() {
    superagent
      .get('/wp-json/wp/v2/categories?slug=menulist')
      .use(noCache)
      .end((err, res)=> {
        if (err) {
          throw (err);
        } else {
          const categoryParent=res.body[0];
          superagent
            .get(`/wp-json/wp/v2/categories?parent=${categoryParent.id}`)
            .use(noCache)
            .end((err, res)=> {
              if (err) {
                throw (err)
              } else {
                this.setState({
                  menuList: res.body
                });
              }
            })
        }
      })
  }

  render() {
    const list = this.state.menuList.map((item, index)=> {
      return (
        <NewNavDropdown title={item.name} id={item.id} key={index}/>
      );
    });

    return (
      <div className="col-md-9 padding menu">
        {list}
      </div>
    )
  }
}

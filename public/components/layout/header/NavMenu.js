import {Component} from 'react';
import MenuList from './MenuList';
import SearchBox from './SearchBox';
import SecondMenu from './SecondMenu';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuList2: false
    };
  }

  changeMenuList() {
    this.setState({showMenuList2: !this.state.showMenuList2}, () => {
      if (this.state.showMenuList2) {
        $('.menu-list2').css('display', 'block');
        $('body').css('overflow', 'hidden');
      } else {
        $('.menu-list2').css('display', 'none');
        $('body').css('overflow', 'auto');
      }
    });
  }

  render() {
    console.log(this.props.layout)
    return (
      <div>
        <div className='row no-margin menu-list1'>
          <div className='col-md-10 col-xs-7'>
            <MenuList/>
          </div>
          <div className='col-md-2 col-xs-5 text-right no-padding header-search-box'>
            <SearchBox/>
          </div>
        </div>

        <button className="menu-icon" onClick={this.changeMenuList.bind(this)}>
          <i className="fa fa-bars"></i>
        </button>

        <div className='menu-list2'>
          <div className="sidebar-wrapper" onClick={this.changeMenuList.bind(this)}></div>
          <div className="nav-bar">
            <SecondMenu hideMenu={this.changeMenuList.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

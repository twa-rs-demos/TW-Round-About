import {Component} from 'react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage
    };
  }

  changePage() {
    this.props.onPageChange(this.state.currentPage);
  }

  goPage(page) {
    if (page === '...') {
      return;
    }
    this.setState({
      currentPage: page
    }, this.changePage);
  }

  goPrevious() {
    if (this.state.currentPage === 1) {
      return;
    }
    this.setState({
      currentPage: this.state.currentPage - 1
    }, this.changePage);
  }

  goNext() {
    if (this.state.currentPage === this.props.totalPage) {
      return;
    }
    this.setState({
      currentPage: this.state.currentPage + 1
    }, this.changePage);
  }

  caculatePageArray(start, end, pageArray) {
    for (let i = start; i <= end; ++i) {
      pageArray.push({page: i});
    }
  }

  render() {
    const totalPage = this.props.totalPage;
    let currentPage = this.state.currentPage;
    const pageArray = [];

    if (totalPage > 0) {
      this.caculatePageArray(1, totalPage, pageArray);
    }

    let pageIndex = pageArray.map((page, index) => {
      return (
        <li key={index} className={page.page === currentPage ? 'active' : ''}>
          <a name={page.page} onClick={this.goPage.bind(this, page.page)}> {page.page}</a>
        </li>
      );
    });

    const previousClass = currentPage === 1 ? 'disabled' : '';
    const nextClass = currentPage === this.props.totalPage ? 'disabled' : '';
    return (
      <div className='pagination-project'>
        <ul className='pagination'>
          <li className={previousClass}>
            <a onClick={this.goPrevious.bind(this)}>
              <i className='fa fa-chevron-left'></i>
            </a>
          </li>
          {pageIndex}
          <li className={nextClass}>
            <a onClick={this.goNext.bind(this)}>
              <i className='fa fa-chevron-right'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import NavMenu from '../../components/layout/header/NavMenu';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(withRouter(NavMenu));

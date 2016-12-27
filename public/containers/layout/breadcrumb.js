import Breadcrumb from '../../components/layout/Breadcrumb';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(withRouter(Breadcrumb));

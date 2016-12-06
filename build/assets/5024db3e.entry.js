webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactRouter = __webpack_require__(175);

	var _index = __webpack_require__(230);

	var _index2 = _interopRequireDefault(_index);

	var _Donate = __webpack_require__(487);

	var _Donate2 = _interopRequireDefault(_Donate);

	var _App = __webpack_require__(520);

	var _App2 = _interopRequireDefault(_App);

	var _DonateCurrentAppeal = __webpack_require__(521);

	var _DonateCurrentAppeal2 = _interopRequireDefault(_DonateCurrentAppeal);

	var _OurWork = __webpack_require__(523);

	var _OurWork2 = _interopRequireDefault(_OurWork);

	var _OurWorkAssistance = __webpack_require__(531);

	var _OurWorkAssistance2 = _interopRequireDefault(_OurWorkAssistance);

	var _GetInvolvedVolunteer = __webpack_require__(533);

	var _GetInvolvedVolunteer2 = _interopRequireDefault(_GetInvolvedVolunteer);

	var _GetInvolved = __webpack_require__(535);

	var _GetInvolved2 = _interopRequireDefault(_GetInvolved);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Home from './public/components/Home';
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/tw-ra', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _index2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'donate', component: _Donate2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'donateCurrent', component: _DonateCurrentAppeal2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'ourWorkPage', component: _OurWorkAssistance2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'ourWork', component: _OurWork2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'getInvolvedVolunteer', component: _GetInvolvedVolunteer2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'getInvolved', component: _GetInvolved2.default })
	  )
	), document.getElementById("page"));

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.RouterContext = exports.createRoutes = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(176);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes = __webpack_require__(177);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(178);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(180);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(196);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(197);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(198);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(200);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(202);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(201);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(203);

	var _Route3 = _interopRequireDefault(_Route2);

	var _RouterContext2 = __webpack_require__(192);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _match2 = __webpack_require__(204);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(217);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(218);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(219);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(227);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(206);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* utils */

	exports.RouterContext = _RouterContext3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern),
	      regexpSource = _compilePattern2.regexpSource,
	      paramNames = _compilePattern2.paramNames,
	      tokens = _compilePattern2.tokens;

	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames,
	      paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern),
	      tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0,
	      parenHistory = [];

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenHistory[parenCount] = '';
	      parenCount += 1;
	    } else if (token === ')') {
	      var parenText = parenHistory.pop();
	      parenCount -= 1;

	      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue == null) {
	        if (parenCount) {
	          parenHistory[parenCount - 1] = '';

	          var curTokenIdx = tokens.indexOf(token);
	          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
	          var nextParenIdx = -1;

	          for (var _i = 0; _i < tokensSubset.length; _i++) {
	            if (tokensSubset[_i] == ')') {
	              nextParenIdx = _i;
	              break;
	            }
	          }

	          !(nextParenIdx > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : (0, _invariant2.default)(false) : void 0;

	          // jump to ending paren
	          i = curTokenIdx + nextParenIdx - 1;
	        }
	      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
	    } else {
	      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
	    }
	  }

	  !(parenCount <= 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : (0, _invariant2.default)(false) : void 0;

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager2 = __webpack_require__(181);

	var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);

	var _InternalPropTypes = __webpack_require__(191);

	var _RouterContext = __webpack_require__(192);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(176);

	var _RouterUtils = __webpack_require__(195);

	var _routerWarning = __webpack_require__(182);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  createRouterObject: function createRouterObject(state) {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.router;
	    }

	    var history = this.props.history;

	    return (0, _RouterUtils.createRouterObject)(history, this.transitionManager, state);
	  },
	  createTransitionManager: function createTransitionManager() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.transitionManager;
	    }

	    var history = this.props.history;
	    var _props = this.props,
	        routes = _props.routes,
	        children = _props.children;


	    !history.getCurrentLocation ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v2.x or ' + 'earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please upgrade to history v3.x.') : (0, _invariant2.default)(false) : void 0;

	    return (0, _createTransitionManager3.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    this.transitionManager = this.createTransitionManager();
	    this.router = this.createRouterObject(this.state);

	    this._unlisten = this.transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        // Keep the identity of this.router because of a caveat in ContextUtils:
	        // they only work if the object identity is preserved.
	        (0, _RouterUtils.assignRouterState)(_this.router, state);
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state,
	        location = _state.location,
	        routes = _state.routes,
	        params = _state.params,
	        components = _state.components;

	    var _props2 = this.props,
	        createElement = _props2.createElement,
	        render = _props2.render,
	        props = _objectWithoutProperties(_props2, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(182);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _computeChangedRoutes2 = __webpack_require__(184);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(185);

	var _isActive2 = __webpack_require__(187);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(188);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(190);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location, indexOnly) {
	    location = history.createLocation(location);

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
	        leaveRoutes = _computeChangedRoutes.leaveRoutes,
	        changeRoutes = _computeChangedRoutes.changeRoutes,
	        enterRoutes = _computeChangedRoutes.enterRoutes;

	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.map(function (route) {
	      return RouteHooks[getRouteID(route)];
	    }).filter(function (hook) {
	      return hook;
	    });
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	    var routeID = getRouteID(route, true);

	    RouteHooks[routeID] = hook;

	    if (thereWereNoRouteHooks) {
	      // setup transition & beforeunload hooks
	      unlistenBefore = history.listenBefore(transitionHook);

	      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	    }

	    return function () {
	      removeListenBeforeHooksForRoute(route);
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    function historyListener(location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    }

	    // TODO: Only use a single history listener. Otherwise we'll end up with
	    // multiple concurrent calls to match.

	    // Set up the history listener first in case the initial match redirects.
	    var unsubscribe = history.listen(historyListener);

	    if (state.location) {
	      // Picking up on a matchContext.
	      listener(null, state);
	    } else {
	      historyListener(history.getCurrentLocation());
	    }

	    return unsubscribe;
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(178);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(186);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PendingHooks = function PendingHooks() {
	  var _this = this;

	  _classCallCheck(this, PendingHooks);

	  this.hooks = [];

	  this.add = function (hook) {
	    return _this.hooks.push(hook);
	  };

	  this.remove = function (hook) {
	    return _this.hooks = _this.hooks.filter(function (h) {
	      return h !== hook;
	    });
	  };

	  this.has = function (hook) {
	    return _this.hooks.indexOf(hook) !== -1;
	  };

	  this.clear = function () {
	    return _this.hooks = [];
	  };
	};

	var enterHooks = new PendingHooks();
	var changeHooks = new PendingHooks();

	function createTransitionHook(hook, route, asyncArity, pendingHooks) {
	  var isSync = hook.length < asyncArity;

	  var transitionHook = function transitionHook() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (isSync) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };

	  pendingHooks.add(transitionHook);

	  return transitionHook;
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location) {
	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  enterHooks.clear();
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (enterHooks.has(hooks[index])) {
	        next();
	        enterHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  changeHooks.clear();
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (changeHooks.has(hooks[index])) {
	        next();
	        changeHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](state, nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },

/***/ 186:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(178);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname,
	      query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(186);

	var _PromiseUtils = __webpack_require__(189);

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (getComponent) {
	    var componentReturn = getComponent.call(route, nextState, callback);
	    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
	      return callback(null, component);
	    }, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },

/***/ 189:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.isPromise = isPromise;
	function isPromise(obj) {
	  return obj && typeof obj.then === 'function';
	}

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(186);

	var _PromiseUtils = __webpack_require__(189);

	var _PatternUtils = __webpack_require__(178);

	var _routerWarning = __webpack_require__(182);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
	    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
	  }, callback);

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });

	    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
	      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    }, callback);
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    arrayOf = _react.PropTypes.arrayOf,
	    oneOfType = _react.PropTypes.oneOfType,
	    element = _react.PropTypes.element,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getRouteParams = __webpack_require__(193);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _ContextUtils = __webpack_require__(194);

	var _RouteUtils = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    array = _React$PropTypes.array,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  mixins: [(0, _ContextUtils.ContextProvider)('router')],

	  propTypes: {
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this.props.router
	    };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        location = _props.location,
	        routes = _props.routes,
	        params = _props.params,
	        components = _props.components,
	        router = _props.router;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          location: location,
	          params: params,
	          route: route,
	          router: router,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(178);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ContextProvider = ContextProvider;
	exports.ContextSubscriber = ContextSubscriber;

	var _react = __webpack_require__(1);

	// Works around issues with context updates failing to propagate.
	// Caveat: the context value is expected to never change its identity.
	// https://github.com/facebook/react/issues/2517
	// https://github.com/reactjs/react-router/issues/470

	var contextProviderShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  eventIndex: _react.PropTypes.number.isRequired
	});

	function makeContextName(name) {
	  return '@@contextSubscriber/' + name;
	}

	function ContextProvider(name) {
	  var _childContextTypes, _ref2;

	  var contextName = makeContextName(name);
	  var listenersKey = contextName + '/listeners';
	  var eventIndexKey = contextName + '/eventIndex';
	  var subscribeKey = contextName + '/subscribe';

	  return _ref2 = {
	    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),

	    getChildContext: function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextName] = {
	        eventIndex: this[eventIndexKey],
	        subscribe: this[subscribeKey]
	      }, _ref;
	    },
	    componentWillMount: function componentWillMount() {
	      this[listenersKey] = [];
	      this[eventIndexKey] = 0;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this[eventIndexKey]++;
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;

	      this[listenersKey].forEach(function (listener) {
	        return listener(_this[eventIndexKey]);
	      });
	    }
	  }, _ref2[subscribeKey] = function (listener) {
	    var _this2 = this;

	    // No need to immediately call listener here.
	    this[listenersKey].push(listener);

	    return function () {
	      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }, _ref2;
	}

	function ContextSubscriber(name) {
	  var _contextTypes, _ref4;

	  var contextName = makeContextName(name);
	  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
	  var handleContextUpdateKey = contextName + '/handleContextUpdate';
	  var unsubscribeKey = contextName + '/unsubscribe';

	  return _ref4 = {
	    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),

	    getInitialState: function getInitialState() {
	      var _ref3;

	      if (!this.context[contextName]) {
	        return {};
	      }

	      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
	    },
	    componentDidMount: function componentDidMount() {
	      if (!this.context[contextName]) {
	        return;
	      }

	      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      var _setState;

	      if (!this.context[contextName]) {
	        return;
	      }

	      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (!this[unsubscribeKey]) {
	        return;
	      }

	      this[unsubscribeKey]();
	      this[unsubscribeKey] = null;
	    }
	  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
	    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
	      var _setState2;

	      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
	    }
	  }, _ref4;
	}

/***/ },

/***/ 195:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.assignRouterState = assignRouterState;
	function createRouterObject(history, transitionManager, state) {
	  var router = _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });

	  return assignRouterState(router, state);
	}

	function assignRouterState(router, _ref) {
	  var location = _ref.location,
	      params = _ref.params,
	      routes = _ref.routes;

	  router.location = location;
	  router.params = params;
	  router.routes = routes;

	  return router;
	}

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(177);

	var _ContextUtils = __webpack_require__(194);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func,
	    oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function resolveToLocation(to, router) {
	  return typeof to === 'function' ? to(router.location) : to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object, func]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    var router = this.context.router;

	    !router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    router.push(resolveToLocation(this.props.to, router));
	  },
	  render: function render() {
	    var _props = this.props,
	        to = _props.to,
	        activeClassName = _props.activeClassName,
	        activeStyle = _props.activeStyle,
	        onlyActiveOnIndex = _props.onlyActiveOnIndex,
	        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Ignore if rendered outside the context of router to simplify unit testing.


	    var router = this.context.router;


	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }

	      var toLocation = resolveToLocation(to, router);
	      props.href = router.createHref(toLocation);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(toLocation, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(196);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(199);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _ContextUtils = __webpack_require__(194);

	var _PropTypes = __webpack_require__(177);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      var params = router.params,
	          location = router.location,
	          routes = router.routes;

	      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 199:
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(182);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(201);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(191);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(176);

	var _PatternUtils = __webpack_require__(178);

	var _InternalPropTypes = __webpack_require__(191);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	/* eslint-disable react/require-render-return */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location,
	            params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(182);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(176);

	var _InternalPropTypes = __webpack_require__(191);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(176);

	var _InternalPropTypes = __webpack_require__(191);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	/* eslint-disable react/require-render-return */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Actions = __webpack_require__(205);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(206);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(181);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(176);

	var _RouterUtils = __webpack_require__(195);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history,
	      routes = _ref.routes,
	      location = _ref.location,
	      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    location = history.getCurrentLocation();
	  }

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    var renderProps = void 0;

	    if (nextState) {
	      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
	      renderProps = _extends({}, nextState, {
	        router: router,
	        matchContext: { transitionManager: transitionManager, router: router }
	      });
	    }

	    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 205:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';

	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';

	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(207);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(213);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(214);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useQueries` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  return history;
	}
	module.exports = exports['default'];

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(208);

	var _runTransitionHook = __webpack_require__(210);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(211);

	var _PathUtils = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};

	var defaultParseQueryString = _queryString.parse;

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;


	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;

	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    };

	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';

	      return _extends({}, object, {
	        search: search
	      });
	    };

	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };

	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };

	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

	      return decodeQuery(newLocation);
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useQueries;

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(209);
	var objectAssign = __webpack_require__(4);

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});

		return ret;
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};

		opts = objectAssign(defaults, opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },

/***/ 209:
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};

	exports.default = runTransitionHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(212);

	var _Actions = __webpack_require__(205);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};

	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};

	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;

	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (typeofA !== typeofB) return false;

	  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }

	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }

	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);

	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;


	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};

	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);

	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;


	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};

	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);

	  var search = _parsePath3.search;

	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};

	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;

	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var path = (basename || '') + pathname;

	  if (search && search !== '?') path += search;

	  if (hash) path += hash;

	  return path;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(210);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var basename = options.basename;


	    var addBasename = function addBasename(location) {
	      if (!location) return location;

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    };

	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, object, {
	        pathname: pathname
	      });
	    };

	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };

	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };

	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useBasename;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(211);

	var _PathUtils = __webpack_require__(212);

	var _createHistory = __webpack_require__(215);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(205);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};

	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);

	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }

	    var init = (0, _PathUtils.parsePath)(path);

	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };

	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };

	  var go = function go(n) {
	    if (!n) return;

	    if (!canGo(n)) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

	      return;
	    }

	    current += n;
	    var currentLocation = getCurrentLocation();

	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };

	  var pushLocation = function pushLocation(location) {
	    current += 1;

	    if (current < entries.length) entries.splice(current);

	    entries.push(location);

	    saveState(location.key, location.state);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };

	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;


	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }

	  var storage = createStateStorage(entries);

	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };

	  var readState = function readState(key) {
	    return storage[key];
	  };

	  return _extends({}, history, {
	    canGo: canGo
	  });
	};

	exports.default = createMemoryHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(216);

	var _PathUtils = __webpack_require__(212);

	var _runTransitionHook = __webpack_require__(210);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(205);

	var _LocationUtils = __webpack_require__(211);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;


	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];

	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

	    if (currentLocation) return allKeys.indexOf(currentLocation.key);

	    return -1;
	  };

	  var updateLocation = function updateLocation(nextLocation) {
	    var currentIndex = getCurrentIndex();

	    currentLocation = nextLocation;

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }

	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };

	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);

	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var listen = function listen(listener) {
	    listeners.push(listener);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };

	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

	      pendingLocation = null;

	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);

	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };

	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };

	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };

	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };

	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };

	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};

	exports.default = createHistory;

/***/ },

/***/ 216:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    isDone = true;

	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }

	    callback.apply(undefined, args);
	  };

	  var next = function next() {
	    if (isDone) return;

	    hasNext = true;

	    if (isSync) return; // Iterate instead of recursing if possible.

	    isSync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }

	    isSync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };

	  next();
	};

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(207);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(213);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(192);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(182);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react.createElement;
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(220);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(226);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(221);

	var _BrowserProtocol = __webpack_require__(222);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(225);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(223);

	var _createHistory = __webpack_require__(215);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;


	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};

	exports.default = createBrowserHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 221:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(211);

	var _DOMUtils = __webpack_require__(223);

	var _DOMStateStorage = __webpack_require__(224);

	var _PathUtils = __webpack_require__(212);

	var _ExecutionEnvironment = __webpack_require__(221);

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;

	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };

	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }

	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
	  };
	};

	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;


	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};

	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },

/***/ 223:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};

	var SecurityErrors = {
	  SecurityError: true
	};

	var KeyPrefix = '@@History/';

	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};

	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;

	    return;
	  }

	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

	      return;
	    }

	    throw error;
	  }
	};

	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

	      return undefined;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return undefined;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(222);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _LocationUtils = __webpack_require__(211);

	var _PathUtils = __webpack_require__(212);

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(217);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(228);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(226);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(179);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(221);

	var _DOMUtils = __webpack_require__(223);

	var _HashProtocol = __webpack_require__(229);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(215);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey;
	  var hashType = options.hashType;


	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  if (hashType == null) hashType = 'slash';

	  if (!(hashType in HashPathCoders)) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

	    hashType = 'slash';
	  }

	  var pathCoder = HashPathCoders[hashType];

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
	  };

	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var go = function go(n) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

	    history.go(n);
	  };

	  var createHref = function createHref(path) {
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(222);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _warning = __webpack_require__(183);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(211);

	var _DOMUtils = __webpack_require__(223);

	var _DOMStateStorage = __webpack_require__(224);

	var _PathUtils = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }

	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;

	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};

	var prevLocation = void 0;

	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);

	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);

	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	      prevLocation = currentLocation;

	      listener(currentLocation);
	    }
	  };

	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;


	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RightTopinfo = __webpack_require__(231);

	var _RightTopinfo2 = _interopRequireDefault(_RightTopinfo);

	var _MenuList = __webpack_require__(232);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _OurWorkItems = __webpack_require__(483);

	var _OurWorkItems2 = _interopRequireDefault(_OurWorkItems);

	var _ApplyMonthly = __webpack_require__(484);

	var _ApplyMonthly2 = _interopRequireDefault(_ApplyMonthly);

	var _Footer = __webpack_require__(485);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Video = __webpack_require__(486);

	var _Video2 = _interopRequireDefault(_Video);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../style/index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	  _inherits(Home, _Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_RightTopinfo2.default, null),
	        _react2.default.createElement(_MenuList2.default, null),
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement("a", { href: "#", className: "middle-image" })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "middle-text" },
	          _react2.default.createElement(
	            "p",
	            null,
	            " \u6211\u4EEC\u662F\u4F17\u7231"
	          ),
	          _react2.default.createElement(
	            "span",
	            null,
	            " \u4F17\u7231\u662F\u8FDE\u63A5\u6350\u6B3E\u4EBA\u4E0E\u53D7\u52A9\u4EBA\u7684\u6865\u6881"
	          )
	        ),
	        _react2.default.createElement(_Video2.default, null),
	        _react2.default.createElement(
	          "div",
	          { className: "middle-text introduction" },
	          _react2.default.createElement(
	            "p",
	            null,
	            " \u6211\u4EEC\u7684\u5DE5\u4F5C"
	          ),
	          _react2.default.createElement(
	            "span",
	            null,
	            " \u4F17\u7231\u5728\u5168\u79CD\u98DF\u54C1\u8303\u56F4\u5185\u652F\u6301\u4E2A\u4EBA\u6551\u52A9\u7684\u540C\u65F6\u4E5F\u4E0E\u5176\u5B83\u6148\u5584\u673A\u6784u\u5408\u4F5C\u6551\u52A9"
	          )
	        ),
	        _react2.default.createElement(_OurWorkItems2.default, null),
	        _react2.default.createElement(_ApplyMonthly2.default, null),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainMenu = function (_Component) {
	  _inherits(MainMenu, _Component);

	  function MainMenu() {
	    _classCallCheck(this, MainMenu);

	    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
	  }

	  _createClass(MainMenu, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "top-right-items row" },
	          _react2.default.createElement("div", { className: "col-md-8" }),
	          _react2.default.createElement(
	            "div",
	            { className: "items col-md-4 row" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-sm-3" },
	              "\u6708\u62A5\u4E2D\u5FC3"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-sm-3" },
	              "\u6708\u62A5\u7533\u9886"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-sm-2" },
	              "English"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              _react2.default.createElement("i", { className: "fa fa-weixin fa-2x col-sm-1", "aria-hidden": "true" })
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              _react2.default.createElement("i", { className: "fa fa-weibo fa-2x col-sm-1", "aria-hidden": "true" })
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              _react2.default.createElement("img", { src: "./public/images/taobao-top.png", alt: "", className: "taobao" })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "row" },
	          _react2.default.createElement("a", { href: "#", className: "logo col-md-2" })
	        )
	      );
	    }
	  }]);

	  return MainMenu;
	}(_react.Component);

	exports.default = MainMenu;

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(233);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuList = function (_Component) {
	  _inherits(MenuList, _Component);

	  function MenuList() {
	    _classCallCheck(this, MenuList);

	    return _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).apply(this, arguments));
	  }

	  _createClass(MenuList, [{
	    key: 'getMenuItemList',
	    value: function getMenuItemList(item) {
	      return item.map(function (menuItem) {
	        return _react2.default.createElement(
	          _reactBootstrap.MenuItem,
	          { value: '\u6350\u8D60' },
	          menuItem
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var menuList = [{
	        text: "捐赠",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "我们的工作",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "参与我们",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "众爱商店",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "新闻与活动中心",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "关于我们",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }];

	      var list = menuList.map(function (item) {
	        return _react2.default.createElement(
	          _reactBootstrap.DropdownButton,
	          { title: item.text, className: '' },
	          _this2.getMenuItemList(item.secondClass)
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        list
	      );
	    }
	  }]);

	  return MenuList;
	}(_react.Component);

	exports.default = MenuList;

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ourWorkItems = function (_Component) {
	  _inherits(ourWorkItems, _Component);

	  function ourWorkItems() {
	    _classCallCheck(this, ourWorkItems);

	    return _possibleConstructorReturn(this, (ourWorkItems.__proto__ || Object.getPrototypeOf(ourWorkItems)).apply(this, arguments));
	  }

	  _createClass(ourWorkItems, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "jods-icons row" },
	        _react2.default.createElement("div", { className: "col-md-1" }),
	        _react2.default.createElement(
	          "a",
	          { href: "#", className: "col-md-1" },
	          _react2.default.createElement("img", { src: "./public/images/a-work-icon.png", alt: "\u767D\u8840\u75C5\u6551\u52A9" }),
	          _react2.default.createElement(
	            "span",
	            { className: "jod-text" },
	            "\u767D\u8840\u75C5\u6551\u52A9"
	          )
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", className: "col-md-1" },
	          _react2.default.createElement("img", { src: "./public/images/b-work-icon.png", alt: "\u767D\u8840\u75C5\u6551\u52A9" }),
	          _react2.default.createElement(
	            "span",
	            { className: "jod-text" },
	            "\u533B\u7597\u6551\u52A9"
	          )
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", className: "col-md-1" },
	          _react2.default.createElement("img", { src: "./public/images/c-work-icon.png", alt: "\u767D\u8840\u75C5\u6551\u52A9" }),
	          _react2.default.createElement(
	            "span",
	            { className: "jod-text" },
	            "\u6559\u80B2\u8D44\u52A9"
	          )
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", className: "col-md-1" },
	          _react2.default.createElement("img", { src: "./public/images/d-work-icon.png", alt: "\u767D\u8840\u75C5\u6551\u52A9" }),
	          _react2.default.createElement(
	            "span",
	            { className: "jod-text",
	              id: "disater-rescue-text" },
	            "\u707E\u533A\u6551\u52A9"
	          )
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", className: "col-md-1 " },
	          _react2.default.createElement("img", { src: "./public/images/e-work-icon.png", alt: "\u767D\u8840\u75C5\u6551\u52A9" }),
	          _react2.default.createElement(
	            "span",
	            { className: "jod-text",
	              id: "community-rescue-text" },
	            "\u793E\u533A\u5E2E\u6276"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "konw-more" },
	          _react2.default.createElement(
	            "span",
	            { className: "konw-more-text" },
	            "\u4E86\u89E3\u66F4\u591A >"
	          )
	        )
	      );
	    }
	  }]);

	  return ourWorkItems;
	}(_react.Component);

	exports.default = ourWorkItems;

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ApplyMonthly = function (_Component) {
	  _inherits(ApplyMonthly, _Component);

	  function ApplyMonthly() {
	    _classCallCheck(this, ApplyMonthly);

	    return _possibleConstructorReturn(this, (ApplyMonthly.__proto__ || Object.getPrototypeOf(ApplyMonthly)).apply(this, arguments));
	  }

	  _createClass(ApplyMonthly, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "apply-monthly-report" },
	        _react2.default.createElement("img", { src: "./public/images/icon_newsletter.png" }),
	        _react2.default.createElement(
	          "div",
	          { className: "apply-monthly-report-text" },
	          "\u7533\u9886\u6708\u62A5"
	        ),
	        _react2.default.createElement(
	          "form",
	          { onSubmit: this._onSubmit.bind(this) },
	          _react2.default.createElement("input", { type: "text", className: "input-email", placeholder: "\u8BF7\u8F93\u5165\u4F60\u7684\u7535\u5B50\u90AE\u7BB1" }),
	          _react2.default.createElement(
	            "button",
	            { className: "submit", type: "submit" },
	            "\u63D0\u4EA4"
	          )
	        )
	      );
	    }
	  }, {
	    key: "_onSubmit",
	    value: function _onSubmit(event) {}
	  }]);

	  return ApplyMonthly;
	}(_react.Component);

	exports.default = ApplyMonthly;
	;

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }

	  _createClass(Footer, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "footer" },
	        _react2.default.createElement(
	          "div",
	          { className: "information-tips-left" },
	          _react2.default.createElement(
	            "div",
	            { className: "footer-theme" },
	            _react2.default.createElement("img", { src: "./public/images/small-logo.png" }),
	            _react2.default.createElement(
	              "span",
	              { className: "information-theme" },
	              "Roundabout"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "introduction-text" },
	            _react2.default.createElement(
	              "span",
	              null,
	              "Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give,be that monetary or otherwise, to those in need."
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-home" },
	              " Address:Yuyang Road West, Off An Hua Road (Behind",
	              _react2.default.createElement("br", null),
	              " Yosemite Villa Compound), Shunyi District."
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-clock-o", "aria-hidden": "true" },
	              " Open Time: Mon-Sat 9.30am-5.30pm"
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-phone", "aria-hidden": "true" },
	              " Mobile Phone:137 1877 7761 (English), 137 1805 3814",
	              _react2.default.createElement("br", null),
	              "(Chinese only)"
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-envelope-square", "aria-hidden": "true" },
	              " Email: ",
	              _react2.default.createElement(
	                "span",
	                { className: "email-text" },
	                "roundaboutvolunteer@yahoo.co.uk"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "information-tips-center" },
	          _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(
	              "span",
	              null,
	              "Want to join us? "
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "news-text" },
	              "Newsletter Center"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              " Apply To Volunteer Today >"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "news-text" },
	              "News & Events"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "enquiry" },
	            _react2.default.createElement(
	              "span",
	              null,
	              "Have an enquiry?"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "break-line" },
	              "Contact Us Now >"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "information-tips-right" },
	          _react2.default.createElement("img", { src: "./public/images/taobao01.png", alt: "" }),
	          _react2.default.createElement("img", { src: "./public/images/wechat01.png", alt: "" }),
	          _react2.default.createElement("img", { src: "./public/images/Weibo01.png", alt: "" }),
	          _react2.default.createElement(
	            "div",
	            { className: "QRcode-text" },
	            _react2.default.createElement(
	              "span",
	              null,
	              "\u6DD8\u5B9D"
	            ),
	            _react2.default.createElement(
	              "span",
	              { className: "WeChat-text" },
	              "\u5FAE\u4FE1"
	            ),
	            _react2.default.createElement(
	              "span",
	              null,
	              "\u5FAE\u535A"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement("img", { src: "./public/images/footer.png", className: "foot-annotation", alt: "" })
	        )
	      );
	    }
	  }]);

	  return Footer;
	}(_react.Component);

	exports.default = Footer;

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var media = function (_Component) {
	  _inherits(media, _Component);

	  function media() {
	    _classCallCheck(this, media);

	    return _possibleConstructorReturn(this, (media.__proto__ || Object.getPrototypeOf(media)).apply(this, arguments));
	  }

	  _createClass(media, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "show-video" },
	        _react2.default.createElement("embed", { src: "http://www.iqiyi", width: "620", height: "400", className: "video", autostart: "true/false", loop: "true/false" })
	      );
	    }
	  }]);

	  return media;
	}(_react.Component);

	exports.default = media;

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RightTopinfo = __webpack_require__(488);

	var _RightTopinfo2 = _interopRequireDefault(_RightTopinfo);

	var _MenuList = __webpack_require__(489);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _ApplyMonthly = __webpack_require__(490);

	var _ApplyMonthly2 = _interopRequireDefault(_ApplyMonthly);

	var _DonateWay = __webpack_require__(491);

	var _DonateWay2 = _interopRequireDefault(_DonateWay);

	var _ItemDonate = __webpack_require__(492);

	var _ItemDonate2 = _interopRequireDefault(_ItemDonate);

	var _DonatingProjects = __webpack_require__(493);

	var _DonatingProjects2 = _interopRequireDefault(_DonatingProjects);

	var _Footer = __webpack_require__(514);

	var _Footer2 = _interopRequireDefault(_Footer);

	__webpack_require__(515);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Donate = function (_Component) {
	  _inherits(Donate, _Component);

	  function Donate() {
	    _classCallCheck(this, Donate);

	    return _possibleConstructorReturn(this, (Donate.__proto__ || Object.getPrototypeOf(Donate)).apply(this, arguments));
	  }

	  _createClass(Donate, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_RightTopinfo2.default, null),
	        _react2.default.createElement(_MenuList2.default, null),
	        _react2.default.createElement(
	          "div",
	          { className: "donate-img middle-image" },
	          _react2.default.createElement(
	            "div",
	            { className: "donate-img-text" },
	            _react2.default.createElement(
	              "h2",
	              null,
	              "\u201C\u65BD\u6BD4\u53D7\u66F4\u4E3A\u6709\u798F\u3002\u201D"
	            ),
	            _react2.default.createElement(
	              "h3",
	              null,
	              "\u2014\u2014 St Francis of Assisi"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "donate-page-index" },
	          _react2.default.createElement(_DonateWay2.default, null),
	          _react2.default.createElement(_ItemDonate2.default, null),
	          _react2.default.createElement(_DonatingProjects2.default, null),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u8FD9\u91CC\u8FD8\u9700\u8981\u4E00\u4E2A\u7FFB\u9875\u5668\u7EC4\u4EF6"
	          )
	        ),
	        _react2.default.createElement(_ApplyMonthly2.default, null),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return Donate;
	}(_react.Component);

	exports.default = Donate;

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainMenu = function (_Component) {
	  _inherits(MainMenu, _Component);

	  function MainMenu() {
	    _classCallCheck(this, MainMenu);

	    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
	  }

	  _createClass(MainMenu, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "top-right-items row" },
	          _react2.default.createElement("div", { className: "col-md-8" }),
	          _react2.default.createElement(
	            "div",
	            { className: "items col-md-4 row" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-sm-3" },
	              "\u6708\u62A5\u4E2D\u5FC3"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-sm-3" },
	              "\u6708\u62A5\u7533\u9886"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-sm-2" },
	              "English"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              _react2.default.createElement("i", { className: "fa fa-weixin fa-2x col-sm-1", "aria-hidden": "true" })
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              _react2.default.createElement("i", { className: "fa fa-weibo fa-2x col-sm-1", "aria-hidden": "true" })
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              _react2.default.createElement("img", { src: "./public/images/taobao-top.png", alt: "", className: "taobao" })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "row" },
	          _react2.default.createElement("a", { href: "#", className: "logo col-md-2" })
	        )
	      );
	    }
	  }]);

	  return MainMenu;
	}(_react.Component);

	exports.default = MainMenu;

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(233);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuList = function (_Component) {
	  _inherits(MenuList, _Component);

	  function MenuList() {
	    _classCallCheck(this, MenuList);

	    return _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).apply(this, arguments));
	  }

	  _createClass(MenuList, [{
	    key: 'getMenuItemList',
	    value: function getMenuItemList(item) {
	      return item.map(function (menuItem) {
	        return _react2.default.createElement(
	          _reactBootstrap.MenuItem,
	          { value: '\u6350\u8D60' },
	          menuItem
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var menuList = [{
	        text: "捐赠",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "我们的工作",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "参与我们",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "众爱商店",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "新闻与活动中心",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }, {
	        text: "关于我们",
	        secondClass: ["nihao", "wohao", "dajiahao"]
	      }];

	      var list = menuList.map(function (item) {
	        return _react2.default.createElement(
	          _reactBootstrap.DropdownButton,
	          { title: item.text, className: '' },
	          _this2.getMenuItemList(item.secondClass)
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        list
	      );
	    }
	  }]);

	  return MenuList;
	}(_react.Component);

	exports.default = MenuList;

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ApplyMonthly = function (_Component) {
	  _inherits(ApplyMonthly, _Component);

	  function ApplyMonthly() {
	    _classCallCheck(this, ApplyMonthly);

	    return _possibleConstructorReturn(this, (ApplyMonthly.__proto__ || Object.getPrototypeOf(ApplyMonthly)).apply(this, arguments));
	  }

	  _createClass(ApplyMonthly, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "apply-monthly-report" },
	        _react2.default.createElement("img", { src: "./public/images/icon_newsletter.png" }),
	        _react2.default.createElement(
	          "div",
	          { className: "apply-monthly-report-text" },
	          "\u7533\u9886\u6708\u62A5"
	        ),
	        _react2.default.createElement(
	          "form",
	          { onSubmit: this._onSubmit.bind(this) },
	          _react2.default.createElement("input", { type: "text", className: "input-email", placeholder: "\u8BF7\u8F93\u5165\u4F60\u7684\u7535\u5B50\u90AE\u7BB1" }),
	          _react2.default.createElement(
	            "button",
	            { className: "submit", type: "submit" },
	            "\u63D0\u4EA4"
	          )
	        )
	      );
	    }
	  }, {
	    key: "_onSubmit",
	    value: function _onSubmit(event) {}
	  }]);

	  return ApplyMonthly;
	}(_react.Component);

	exports.default = ApplyMonthly;
	;

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DonateWay = function (_Component) {
	  _inherits(DonateWay, _Component);

	  function DonateWay() {
	    _classCallCheck(this, DonateWay);

	    return _possibleConstructorReturn(this, (DonateWay.__proto__ || Object.getPrototypeOf(DonateWay)).apply(this, arguments));
	  }

	  _createClass(DonateWay, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "donate-way" },
	        _react2.default.createElement(
	          "h2",
	          { className: "donate-way-title" },
	          "\u6350\u6B3E\u65B9\u5F0F"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "container donate-way-content" },
	          _react2.default.createElement(
	            "div",
	            { className: "row donate-way-row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-md-4" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "\u7269\u54C1\u6350\u8D60"
	              ),
	              _react2.default.createElement(
	                "ul",
	                null,
	                _react2.default.createElement(
	                  "li",
	                  null,
	                  "\u6350\u8D60\u6307\u5357"
	                ),
	                _react2.default.createElement(
	                  "li",
	                  null,
	                  "\u6350\u8D60\u7269\u54C1\u4EE3\u6536\u70B9"
	                ),
	                _react2.default.createElement(
	                  "li",
	                  null,
	                  "\u4E0A\u95E8\u6536\u53D6\u6350\u8D60\u7269\u54C1\u7533\u8BF7\u8868"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col-md-4  donate-way-donation" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "\u6350\u6B3E"
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "row row-1" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col-md-6 donate-way-flag-1" },
	                  _react2.default.createElement("img", { src: "./public/images/donate/wechat01.png" }),
	                  _react2.default.createElement(
	                    "h4",
	                    null,
	                    "Wechat"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "col-md-6 donate-way-flag-2" },
	                  _react2.default.createElement("img", { src: "./public/images/donate/logo_ccafc.png" }),
	                  _react2.default.createElement(
	                    "h4",
	                    null,
	                    "CCAFC"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "row" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col-md-6 donate-way-flag-1" },
	                  _react2.default.createElement("img", { src: "./public/images/donate/logo_alipay.png" }),
	                  _react2.default.createElement(
	                    "h4",
	                    null,
	                    "Alipay"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "col-md-6 donate-way-flag-2" },
	                  _react2.default.createElement("img", { src: "./public/images/donate/logo_paypal.png" }),
	                  _react2.default.createElement(
	                    "h4",
	                    null,
	                    "Paypal"
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col-md-4  donate-way-project " },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "\u52DF\u6350\u9879\u76EE"
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                "\u76F4\u63A5\u901A\u8FC7\u4E50\u6350\u6350\u6B3E"
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("img", { src: "./public/images/donate/wechat01.png" }),
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "\u817E\u8BAF"
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "donate-way-text" },
	          _react2.default.createElement(
	            "p",
	            null,
	            "We offer assistance by either directly passing on the items you have donated or by selling them in our retail store to raise funds. Store proceeds pay for medical costs for orphans and others less fortunate, sheltered housing for the elderly, warm blankets, food and other basic needs items for distribution."
	          )
	        )
	      );
	    }
	  }]);

	  return DonateWay;
	}(_react.Component);

	exports.default = DonateWay;

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ItemDonate = function (_Component) {
	  _inherits(ItemDonate, _Component);

	  function ItemDonate() {
	    _classCallCheck(this, ItemDonate);

	    return _possibleConstructorReturn(this, (ItemDonate.__proto__ || Object.getPrototypeOf(ItemDonate)).apply(this, arguments));
	  }

	  _createClass(ItemDonate, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "item-donation" },
	        _react2.default.createElement(
	          "h2",
	          { className: "donate-way-title" },
	          "\u7269\u54C1\u6350\u8D60"
	        ),
	        _react2.default.createElement("img", { src: "./public/images/donate/Item donation.png" }),
	        _react2.default.createElement(
	          "div",
	          { className: "donate-guide" },
	          _react2.default.createElement(
	            "h3",
	            null,
	            "\u6350\u8D60\u6307\u5357"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "donate-guide-describe" },
	            _react2.default.createElement(
	              "p",
	              null,
	              "Open, prescription and out of date medicines.",
	              _react2.default.createElement("br", null),
	              "Used underwear, including socks.",
	              _react2.default.createElement("br", null),
	              "Anything previously used by an animal \u2013 such as a dog\u2019s bed Copies of magazines over 6 months old.",
	              _react2.default.createElement("br", null),
	              "Computers, monitors and printers over 4 years old."
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "donate-guide-collect container" },
	            _react2.default.createElement(
	              "h3",
	              null,
	              "\u6350\u8D60\u7269\u54C1\u4EE3\u6536\u70B9"
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "row" },
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "Roundabout Store"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Adjacent to Yosemite Villa Compound, Yuyang Road West, Off An Hua Road, SHUNYI, 101302"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "+86 137 1805 3814 ( for directions in Chinese )"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Sunday 24hours"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "CCAFC office"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "F4,Zhongfu International,No.9 Zhang hua Road,Haidian District,Beijing "
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "86 10 5166 0112"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Friday 9am - 5pm"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "Zarah Cafe"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Gulou Dongdajie No.46, Dongcheng District, 100009 Beijing P.R.China"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    " 86 10 8403 9807"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Sunday 8:30am - 12pm"
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "row" },
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "Tuan Jie Hu Community Recycle Station"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Room 101,Aprt1,Building 1, Bei Er Tiao, Tuanjiehu Zhong Lu, Chao Yang District,Beijing"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    " 86 10 139 1075 9629"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Sunday 24hours"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "OASIS Hospital"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "#9 Jiu Xian Qian Bei Lu,Chaoyang District,Beijing"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "86 10 59850405"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Friday 9am - 5pm"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "Riviera Clubhouse"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "#1 Xiang Jiang Bei Lu, Chaoyang Distict,Beijing"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "86 10 8450 6888"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Sunday 6am - 10pm"
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "row" },
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "Bo Ya School"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "#2105 Gahood Villa, Houshayu, Shunyi Distrit, Beijing"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "86 10 158 1128 6996"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Sunday 9am - 5pm"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "BIBA"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "#5 Yu Min Street,Houshayu,Shunyi District,Beijing Staff Only"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "SCOUT Real Estate"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Room 101,F1,Building 81,No.4 Workers'Stadim North Road, Chaoyang District,Beijing"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_phone_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "86 10 8596 8873"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_time_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Friday 9am - 6pm"
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "row" },
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-4 donate-guide-collect-item" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "Shine Hills"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "F3,Buliding 5, Shine Hills,An Xiang Street, Shunyi District, Beijing"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "86 10 6144 5671"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement("img", { src: "./public/images/donate/icon_address_small.png" })
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "Monday - Sunday 10am - 8:30pm"
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "container donate-guide-apply" },
	            _react2.default.createElement(
	              "h3",
	              null,
	              "\u7533\u8BF7\u4E0A\u95E8\u6536\u53D6\u6350\u8D60\u7269\u54C1"
	            ),
	            _react2.default.createElement(
	              "div",
	              null,
	              _react2.default.createElement(
	                "p",
	                null,
	                "Thank you for requesting a pick up of your donations, we will try our best to help.",
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "Please start by filling in the pick up request form. One of our staff will then contact you to make arrangements for the pick up. Please allow 2 business days for us to respond, as we have a small staff."
	                ),
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "**Due to the nature of Beijing traffic, we cannot guarantee an exact pick-up time. We will strive to arrive within a 1-hour window and call you if our driver is running late. Thank you for giving us as much notice as possible. The more notice you give us, the more likely we will be to have vans and trucks available at your preferred time.**"
	                ),
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "Large items of furniture \u2013 monetary donation not necessary"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "button",
	              null,
	              "\u4E0A\u95E8\u6536\u53D6\u6350\u8D60\u7269\u54C1\u7533\u8BF7\u8868"
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ItemDonate;
	}(_react.Component);

	exports.default = ItemDonate;

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _chunk = __webpack_require__(494);

	var _chunk2 = _interopRequireDefault(_chunk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DonatingProjects = function (_Component) {
	  _inherits(DonatingProjects, _Component);

	  function DonatingProjects() {
	    _classCallCheck(this, DonatingProjects);

	    return _possibleConstructorReturn(this, (DonatingProjects.__proto__ || Object.getPrototypeOf(DonatingProjects)).apply(this, arguments));
	  }

	  _createClass(DonatingProjects, [{
	    key: 'render',
	    value: function render() {
	      var donatingProjectList = [{ img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000' }, { img: './public/images/donate/current appeals02.png', name: '程程', age: '8', disease: '白血病', money: '20,000' }, { img: './public/images/donate/current appeals03.png', name: '程程', age: '8', disease: '白血病', money: '20,000' }, { img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000' }, { img: './public/images/donate/current appeals02.png', name: '程程', age: '8', disease: '白血病', money: '20,000' }, { img: './public/images/donate/current appeals03.png', name: '程程', age: '8', disease: '白血病', money: '20,000' }, { img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000' }];
	      return _react2.default.createElement(
	        'div',
	        { className: 'donating-projects donate-page-index' },
	        _react2.default.createElement(
	          'h2',
	          { className: 'donate-way-title' },
	          '\u6B63\u5728\u6350\u6B3E\u7684\u9879\u76EE'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          this._getDonatingProjectsRow(donatingProjectList)
	        )
	      );
	    }
	  }, {
	    key: '_getDonatingProjectsRow',
	    value: function _getDonatingProjectsRow(donatingProjectList) {
	      var _this2 = this;

	      return (0, _chunk2.default)(donatingProjectList, 4).map(function (item) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _this2._getDonatingProjectsCols(item)
	        );
	      });
	    }
	  }, {
	    key: '_getDonatingProjectsCols',
	    value: function _getDonatingProjectsCols(projectCols) {
	      return projectCols.map(function (item) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'col-md-3 donating-project' },
	          _react2.default.createElement('img', { src: item.img }),
	          _react2.default.createElement(
	            'h4',
	            null,
	            item.name,
	            '\uFF0C',
	            item.age,
	            '\u5C81'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              item.disease
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u9700\u8981\xA0\uFFE5',
	              item.money
	            )
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            '\u9605\u8BFB\u66F4\u591A >'
	          )
	        );
	      });
	    }
	  }]);

	  return DonatingProjects;
	}(_react.Component);

	exports.default = DonatingProjects;

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(495),
	    isIterateeCall = __webpack_require__(496),
	    toInteger = __webpack_require__(509);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;

	/**
	 * Creates an array of elements split into groups the length of `size`.
	 * If `array` can't be split evenly, the final chunk will be the remaining
	 * elements.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to process.
	 * @param {number} [size=1] The length of each chunk
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the new array of chunks.
	 * @example
	 *
	 * _.chunk(['a', 'b', 'c', 'd'], 2);
	 * // => [['a', 'b'], ['c', 'd']]
	 *
	 * _.chunk(['a', 'b', 'c', 'd'], 3);
	 * // => [['a', 'b', 'c'], ['d']]
	 */
	function chunk(array, size, guard) {
	  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
	    size = 1;
	  } else {
	    size = nativeMax(toInteger(size), 0);
	  }
	  var length = array == null ? 0 : array.length;
	  if (!length || size < 1) {
	    return [];
	  }
	  var index = 0,
	      resIndex = 0,
	      result = Array(nativeCeil(length / size));

	  while (index < length) {
	    result[resIndex++] = baseSlice(array, index, (index += size));
	  }
	  return result;
	}

	module.exports = chunk;


/***/ },

/***/ 495:
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(497),
	    isArrayLike = __webpack_require__(498),
	    isIndex = __webpack_require__(508),
	    isObject = __webpack_require__(506);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },

/***/ 497:
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(499),
	    isLength = __webpack_require__(507);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(500),
	    isObject = __webpack_require__(506);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(501),
	    getRawTag = __webpack_require__(504),
	    objectToString = __webpack_require__(505);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(502);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(503);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },

/***/ 503:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(501);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },

/***/ 505:
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },

/***/ 506:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },

/***/ 507:
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },

/***/ 508:
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(510);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(511);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(506),
	    isSymbol = __webpack_require__(512);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(500),
	    isObjectLike = __webpack_require__(513);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },

/***/ 513:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }

	  _createClass(Footer, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "footer" },
	        _react2.default.createElement(
	          "div",
	          { className: "information-tips-left" },
	          _react2.default.createElement(
	            "div",
	            { className: "footer-theme" },
	            _react2.default.createElement("img", { src: "./public/images/small-logo.png" }),
	            _react2.default.createElement(
	              "span",
	              { className: "information-theme" },
	              "Roundabout"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "introduction-text" },
	            _react2.default.createElement(
	              "span",
	              null,
	              "Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give,be that monetary or otherwise, to those in need."
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-home" },
	              " Address:Yuyang Road West, Off An Hua Road (Behind",
	              _react2.default.createElement("br", null),
	              " Yosemite Villa Compound), Shunyi District."
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-clock-o", "aria-hidden": "true" },
	              " Open Time: Mon-Sat 9.30am-5.30pm"
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-phone", "aria-hidden": "true" },
	              " Mobile Phone:137 1877 7761 (English), 137 1805 3814",
	              _react2.default.createElement("br", null),
	              "(Chinese only)"
	            ),
	            _react2.default.createElement(
	              "i",
	              { className: "fa fa-envelope-square", "aria-hidden": "true" },
	              " Email: ",
	              _react2.default.createElement(
	                "span",
	                { className: "email-text" },
	                "roundaboutvolunteer@yahoo.co.uk"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "information-tips-center" },
	          _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(
	              "span",
	              null,
	              "Want to join us? "
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "news-text" },
	              "Newsletter Center"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              " Apply To Volunteer Today >"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "news-text" },
	              "News & Events"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "enquiry" },
	            _react2.default.createElement(
	              "span",
	              null,
	              "Have an enquiry?"
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "break-line" },
	              "Contact Us Now >"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "information-tips-right" },
	          _react2.default.createElement("img", { src: "./public/images/taobao01.png", alt: "" }),
	          _react2.default.createElement("img", { src: "./public/images/wechat01.png", alt: "" }),
	          _react2.default.createElement("img", { src: "./public/images/Weibo01.png", alt: "" }),
	          _react2.default.createElement(
	            "div",
	            { className: "QRcode-text" },
	            _react2.default.createElement(
	              "span",
	              null,
	              "\u6DD8\u5B9D"
	            ),
	            _react2.default.createElement(
	              "span",
	              { className: "WeChat-text" },
	              "\u5FAE\u4FE1"
	            ),
	            _react2.default.createElement(
	              "span",
	              null,
	              "\u5FAE\u535A"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement("img", { src: "./public/images/footer.png", className: "foot-annotation", alt: "" })
	        )
	      );
	    }
	  }]);

	  return Footer;
	}(_react.Component);

	exports.default = Footer;

/***/ },

/***/ 515:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RightTopinfo = __webpack_require__(488);

	var _RightTopinfo2 = _interopRequireDefault(_RightTopinfo);

	var _MenuList = __webpack_require__(489);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _BreadCrumb = __webpack_require__(522);

	var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

	var _DonatingProjects = __webpack_require__(493);

	var _DonatingProjects2 = _interopRequireDefault(_DonatingProjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DonateCurrentAppeal = function (_Component) {
	  _inherits(DonateCurrentAppeal, _Component);

	  function DonateCurrentAppeal() {
	    _classCallCheck(this, DonateCurrentAppeal);

	    return _possibleConstructorReturn(this, (DonateCurrentAppeal.__proto__ || Object.getPrototypeOf(DonateCurrentAppeal)).apply(this, arguments));
	  }

	  _createClass(DonateCurrentAppeal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_RightTopinfo2.default, null),
	        _react2.default.createElement(_MenuList2.default, null),
	        _react2.default.createElement(_BreadCrumb2.default, null),
	        _react2.default.createElement(_DonatingProjects2.default, null)
	      );
	    }
	  }]);

	  return DonateCurrentAppeal;
	}(_react.Component);

	exports.default = DonateCurrentAppeal;

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BreadCrumb = function (_Component) {
	  _inherits(BreadCrumb, _Component);

	  function BreadCrumb() {
	    _classCallCheck(this, BreadCrumb);

	    return _possibleConstructorReturn(this, (BreadCrumb.__proto__ || Object.getPrototypeOf(BreadCrumb)).apply(this, arguments));
	  }

	  _createClass(BreadCrumb, [{
	    key: "render",
	    value: function render() {
	      var liList = ["第一级", "第二级"];
	      var lis = liList.map(function (item) {
	        return _react2.default.createElement(
	          "li",
	          null,
	          item
	        );
	      });
	      return _react2.default.createElement(
	        "div",
	        { className: "bread-crumb" },
	        _react2.default.createElement(
	          "ul",
	          { className: "breadcrumb" },
	          lis
	        )
	      );
	    }
	  }]);

	  return BreadCrumb;
	}(_react.Component);

	exports.default = BreadCrumb;

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RightTopinfo = __webpack_require__(488);

	var _RightTopinfo2 = _interopRequireDefault(_RightTopinfo);

	var _MenuList = __webpack_require__(489);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _Video = __webpack_require__(524);

	var _Video2 = _interopRequireDefault(_Video);

	var _ApplyMonthly = __webpack_require__(490);

	var _ApplyMonthly2 = _interopRequireDefault(_ApplyMonthly);

	var _Footer = __webpack_require__(514);

	var _Footer2 = _interopRequireDefault(_Footer);

	__webpack_require__(525);

	__webpack_require__(529);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OurWork = function (_Component) {
	  _inherits(OurWork, _Component);

	  function OurWork() {
	    _classCallCheck(this, OurWork);

	    return _possibleConstructorReturn(this, (OurWork.__proto__ || Object.getPrototypeOf(OurWork)).apply(this, arguments));
	  }

	  _createClass(OurWork, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_RightTopinfo2.default, null),
	        _react2.default.createElement(_MenuList2.default, null),
	        _react2.default.createElement(
	          "div",
	          { className: "our-work-center-text" },
	          _react2.default.createElement(
	            "h1",
	            null,
	            "\u4F17\u7231\u662F\u5E0C\u671B\u7684\u6865\u6881"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u6211\u4EEC\u4E3A\u5168\u56FD\u5404\u5730\u9700\u8981\u5E2E\u52A9\u7684\u5B69\u5B50\u52DF\u96C6\u5584\u6B3E\uFF0C\u5E76\u628A\u4ED6\u4EEC\u63A8\u8350\u7ED9\u80FD\u5E2E\u52A9\u4ED6\u4EEC\u7684\u56E2\u4F53\u6216\u8005\u4E2A\u4EBA\u3002"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "what-do" },
	          _react2.default.createElement(
	            "h1",
	            null,
	            "\u6211\u4EEC\u90FD\u505A\u4EC0\u4E48"
	          )
	        ),
	        _react2.default.createElement(_Video2.default, null),
	        _react2.default.createElement(
	          "div",
	          { className: "our-jods-icons container" },
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement("div", { className: "col-lg-1" }),
	            _react2.default.createElement(
	              "div",
	              { className: "col-lg-4" },
	              _react2.default.createElement(
	                "a",
	                { href: "#" },
	                _react2.default.createElement("img", { src: "./public/images/our-work/icon_leukemia assistance_bg.png", alt: "\u767D\u8840\u75C5\u6551\u52A9" }),
	                _react2.default.createElement(
	                  "span",
	                  {
	                    className: "jod-text" },
	                  "\u767D\u8840\u75C5\u6551\u52A9"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-lg-3" },
	              _react2.default.createElement("img", { src: "./public/images/our-work/icon_disaster relief_bg.png", alt: "\u533B\u7597\u6551\u52A9" }),
	              _react2.default.createElement(
	                "span",
	                { className: "jod-text" },
	                "\u533B\u7597\u6551\u52A9"
	              )
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-lg-3 col-lg-offset-1" },
	              _react2.default.createElement("img", { src: "./public/images/our-work/icon_education support_bg.png", alt: "\u6559\u80B2\u8D44\u52A9" }),
	              _react2.default.createElement(
	                "span",
	                { className: "jod-text" },
	                "\u6559\u80B2\u8D44\u52A9"
	              )
	            ),
	            _react2.default.createElement("div", { className: "col-lg-1" })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "row our-jobs-icons-second" },
	            _react2.default.createElement("div", { className: "col-md-3" }),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-md-3" },
	              _react2.default.createElement("img", { src: "./public/images/our-work/icon_medical assistance_bg.png", alt: "\u707E\u533A\u6551\u52A9" }),
	              _react2.default.createElement(
	                "span",
	                { className: "jod-text",
	                  id: "disater-rescue-text" },
	                "\u707E\u533A\u6551\u52A9"
	              )
	            ),
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "col-md-4 col-lg-offset-1" },
	              _react2.default.createElement("img", { src: "./public/images/our-work/icon_community assistance_bg.png", alt: "\u793E\u533A\u5E2E\u6276" }),
	              _react2.default.createElement(
	                "span",
	                {
	                  className: "jod-text", id: "community-rescue-text" },
	                "\u793E\u533A\u5E2E\u6276"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_ApplyMonthly2.default, null),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return OurWork;
	}(_react.Component);

	exports.default = OurWork;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var media = function (_Component) {
	  _inherits(media, _Component);

	  function media() {
	    _classCallCheck(this, media);

	    return _possibleConstructorReturn(this, (media.__proto__ || Object.getPrototypeOf(media)).apply(this, arguments));
	  }

	  _createClass(media, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "show-video" },
	        _react2.default.createElement("embed", { src: "http://www.iqiyi", width: "620", height: "400", className: "video", autostart: "true/false", loop: "true/false" })
	      );
	    }
	  }]);

	  return media;
	}(_react.Component);

	exports.default = media;

/***/ },

/***/ 525:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 529:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _OurWorkAssistanceHeader = __webpack_require__(532);

	var _OurWorkAssistanceHeader2 = _interopRequireDefault(_OurWorkAssistanceHeader);

	var _ApplyMonthly = __webpack_require__(490);

	var _ApplyMonthly2 = _interopRequireDefault(_ApplyMonthly);

	var _MenuList = __webpack_require__(489);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _Footer = __webpack_require__(514);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _RightTopinfo = __webpack_require__(488);

	var _RightTopinfo2 = _interopRequireDefault(_RightTopinfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ourWorkPage = function (_Component) {
	  _inherits(ourWorkPage, _Component);

	  function ourWorkPage() {
	    _classCallCheck(this, ourWorkPage);

	    return _possibleConstructorReturn(this, (ourWorkPage.__proto__ || Object.getPrototypeOf(ourWorkPage)).apply(this, arguments));
	  }

	  _createClass(ourWorkPage, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_RightTopinfo2.default, null),
	        _react2.default.createElement(_MenuList2.default, null),
	        _react2.default.createElement(_OurWorkAssistanceHeader2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'save-life-situation' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            '\u6211\u4EEC\u53C2\u4E0E\u633D\u6551\u7684\u751F\u547D'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'Rescue-situation-img' },
	            _react2.default.createElement('img', { src: './public/images/ourWork/lives helped.png' }),
	            _react2.default.createElement('img', { src: './public/images/ourWork/raised.png' })
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'participate-rescue' },
	            '\u53C2\u4E0E\u633D\u6551\u4E00\u4E2A\u751F\u547D'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'fact-situation' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            '\u4F60\u77E5\u9053\u5417\uFF1F'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u7406\u8BBA\u4E0A\uFF0C\u4E2D\u56FD\u7684\u513F\u7AE5\u767D\u8840\u75C5\u7684\u6CBB\u6108\u7387\u8D85\u8FC7',
	            _react2.default.createElement(
	              'span',
	              null,
	              '70%'
	            ),
	            '\u3002\u4F46\u662F\u53EA\u6709',
	            _react2.default.createElement(
	              'span',
	              null,
	              '20%'
	            ),
	            '\u7684\u5B69\u5B50\u80FD\u6D3B\u4E0B\u6765\u3002'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u5F71\u54CD\u6CBB\u6108\u7387\u7684\u662F\u7F3A\u4E4F\u7684',
	            _react2.default.createElement(
	              'span',
	              null,
	              '\u8D44\u91D1'
	            ),
	            '\u3002'
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            ' \u4F60\u53EF\u4EE5\u6539\u53D8\u4ED6\u4EEC\u7684\u547D\u8FD0\u3002'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'fact-situation-graph' },
	            _react2.default.createElement('img', { src: './public/images/ourWork/cure rate.png' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'want-donate' },
	              '\u6211\u8981\u6350\u8D60'
	            )
	          )
	        ),
	        _react2.default.createElement(_ApplyMonthly2.default, null),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return ourWorkPage;
	}(_react.Component);

	exports.default = ourWorkPage;

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BreadCrumb = __webpack_require__(522);

	var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OurWorkPageHeader = function (_Component) {
	  _inherits(OurWorkPageHeader, _Component);

	  function OurWorkPageHeader() {
	    _classCallCheck(this, OurWorkPageHeader);

	    return _possibleConstructorReturn(this, (OurWorkPageHeader.__proto__ || Object.getPrototypeOf(OurWorkPageHeader)).apply(this, arguments));
	  }

	  _createClass(OurWorkPageHeader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_BreadCrumb2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'Leukemia-rescue-image' },
	          _react2.default.createElement(
	            'div',
	            { className: 'patient-profile' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'Yang bin is a 9 year old boy from Xi\u2019an.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'He was diagnosed with leukemia in 2015'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'The dignity of our recipients is something'
	            )
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'child-story-btn' },
	            '\u9605\u8BFB\u6768\u658C\u7684\u6545\u4E8B'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            { className: 'more-story' },
	            _react2.default.createElement('img', { src: './public/images/ourWork/button_more stories_default.png' })
	          )
	        )
	      );
	    }
	  }]);

	  return OurWorkPageHeader;
	}(_react.Component);

	exports.default = OurWorkPageHeader;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RightTopinfo = __webpack_require__(488);

	var _RightTopinfo2 = _interopRequireDefault(_RightTopinfo);

	var _MenuList = __webpack_require__(489);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _BreadCrumb = __webpack_require__(522);

	var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

	var _VolunteerStory = __webpack_require__(534);

	var _VolunteerStory2 = _interopRequireDefault(_VolunteerStory);

	var _ApplyMonthly = __webpack_require__(490);

	var _ApplyMonthly2 = _interopRequireDefault(_ApplyMonthly);

	var _Footer = __webpack_require__(514);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GetInvolvedVolunteer = function (_Component) {
	  _inherits(GetInvolvedVolunteer, _Component);

	  function GetInvolvedVolunteer() {
	    _classCallCheck(this, GetInvolvedVolunteer);

	    return _possibleConstructorReturn(this, (GetInvolvedVolunteer.__proto__ || Object.getPrototypeOf(GetInvolvedVolunteer)).apply(this, arguments));
	  }

	  _createClass(GetInvolvedVolunteer, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_RightTopinfo2.default, null),
	        _react2.default.createElement(_MenuList2.default, null),
	        _react2.default.createElement(_BreadCrumb2.default, null),
	        _react2.default.createElement(
	          "div",
	          { className: "max-image" },
	          _react2.default.createElement(
	            "a",
	            { href: "#" },
	            _react2.default.createElement("img", { src: "./public/images/getInvolvedVolunteer/hero_volunteer.png" })
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "involved-volunteer container" },
	          _react2.default.createElement(
	            "h2",
	            { className: "donate-way-title" },
	            "\u6211\u4EEC\u662F\u4E00\u4E2A\u56FD\u9645\u5316\u7684\u793E\u533A"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that monetary or otherwise, to those in need. Started in 2008, we were the first charity store in mainland China. We now give support to 48 charitable organizations in the Beijing area and many more throughout China, Inner Mongolia and Mongolia."
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "involved-volunteer-join" },
	          _react2.default.createElement(
	            "h2",
	            { className: "donate-way-title" },
	            "\u5FEB\u6765\u52A0\u5165\u6211\u4EEC"
	          ),
	          _react2.default.createElement(
	            "button",
	            null,
	            "\u73B0\u5728\u7533\u8BF7\u6210\u4E3A\u5FD7\u613F\u8005"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "involved-volunteer-area" },
	          _react2.default.createElement(
	            "h2",
	            { className: "donate-way-title" },
	            "\u6765\u81EA",
	            _react2.default.createElement(
	              "span",
	              null,
	              "50"
	            ),
	            "\u591A\u4E2A\u56FD\u5BB6\u548C\u5730\u533A"
	          ),
	          _react2.default.createElement("img", { src: "./public/images/getInvolvedVolunteer/50 countries.png" })
	        ),
	        _react2.default.createElement(_VolunteerStory2.default, null),
	        _react2.default.createElement(_ApplyMonthly2.default, null),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return GetInvolvedVolunteer;
	}(_react.Component);

	exports.default = GetInvolvedVolunteer;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _chunk = __webpack_require__(494);

	var _chunk2 = _interopRequireDefault(_chunk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VolunteerStory = function (_Component) {
	  _inherits(VolunteerStory, _Component);

	  function VolunteerStory() {
	    _classCallCheck(this, VolunteerStory);

	    return _possibleConstructorReturn(this, (VolunteerStory.__proto__ || Object.getPrototypeOf(VolunteerStory)).apply(this, arguments));
	  }

	  _createClass(VolunteerStory, [{
	    key: 'render',
	    value: function render() {
	      var storyList = [{ name: 'Mr Raj', src: './public/images/getInvolvedVolunteer/volunteer story01.png' }, { name: 'Bettina', src: './public/images/getInvolvedVolunteer/volunteer story02.png' }, { name: 'Michael', src: './public/images/getInvolvedVolunteer/volunteer story03.png' }, { name: 'Friederike', src: './public/images/getInvolvedVolunteer/volunteer story04.png' }, { name: 'Mr Raj', src: './public/images/getInvolvedVolunteer/volunteer story01.png' }, { name: 'Bettina', src: './public/images/getInvolvedVolunteer/volunteer story02.png' }, { name: 'Michael', src: './public/images/getInvolvedVolunteer/volunteer story03.png' }, { name: 'Friederike', src: './public/images/getInvolvedVolunteer/volunteer story04.png' }];

	      return _react2.default.createElement(
	        'div',
	        { className: 'involved-volunteer-stores donate-page-index donating-projects ' },
	        _react2.default.createElement(
	          'h2',
	          { className: 'donate-way-title' },
	          '\u5FD7\u613F\u8005\u6545\u4E8B'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          this._getVolunteerStorysRow(storyList)
	        )
	      );
	    }
	  }, {
	    key: '_getVolunteerStorysRow',
	    value: function _getVolunteerStorysRow(storyList) {
	      var _this2 = this;

	      return (0, _chunk2.default)(storyList, 4).map(function (item) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _this2._getstoryCols(item)
	        );
	      });
	    }
	  }, {
	    key: '_getstoryCols',
	    value: function _getstoryCols(projectCols) {
	      return projectCols.map(function (item) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'col-md-3 donating-project' },
	          _react2.default.createElement('img', { src: item.src }),
	          _react2.default.createElement(
	            'h4',
	            null,
	            item.name,
	            '\u2018s Story'
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Read More >'
	          )
	        );
	      });
	    }
	  }]);

	  return VolunteerStory;
	}(_react.Component);

	exports.default = VolunteerStory;

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ApplyMonthly = __webpack_require__(490);

	var _ApplyMonthly2 = _interopRequireDefault(_ApplyMonthly);

	var _MenuList = __webpack_require__(489);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _Footer = __webpack_require__(514);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _RightTopinfo = __webpack_require__(488);

	var _RightTopinfo2 = _interopRequireDefault(_RightTopinfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var getInvolved = function (_Component) {
	  _inherits(getInvolved, _Component);

	  function getInvolved() {
	    _classCallCheck(this, getInvolved);

	    return _possibleConstructorReturn(this, (getInvolved.__proto__ || Object.getPrototypeOf(getInvolved)).apply(this, arguments));
	  }

	  _createClass(getInvolved, [{
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_RightTopinfo2.default, null),
	        _react2.default.createElement(_MenuList2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'container get-involved-welcome' },
	          _react2.default.createElement(
	            'h2',
	            { className: 'donate-way-title' },
	            '\u6B22\u8FCE\u6765\u5230\u4F17\u7231\u5927\u5BB6\u5EAD'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement('img', { src: './public/images/getInvolved/icon_volunteer.png' }),
	              _react2.default.createElement(
	                'h4',
	                null,
	                '\u52A0\u5165\u5FD7\u613F\u8005\u884C\u5217'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6  get-involved-second-col' },
	              _react2.default.createElement('img', { src: './public/images/getInvolved/icon_apply.png' }),
	              _react2.default.createElement(
	                'h4',
	                null,
	                '\u7533\u8BF7\u6551\u52A9\u548C\u652F\u63F4'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement('img', { src: './public/images/getInvolved/icon_support.png' }),
	              _react2.default.createElement(
	                'h4',
	                null,
	                '\u5408\u4F5C\u4E0E\u652F\u6301\u7684\u6148\u5584\u673A\u6784'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6 get-involved-second-col' },
	              _react2.default.createElement('img', { src: './public/images/getInvolved/icon_donate.png' }),
	              _react2.default.createElement(
	                'h4',
	                null,
	                '\u6350\u8D60'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row get-involved-last-row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement('img', { src: './public/images/getInvolved/icon_support.png' }),
	              _react2.default.createElement(
	                'h4',
	                null,
	                '\u60A8\u7684\u6350\u8D60\u53EF\u4EE5\u5E2E\u5230\u8C01'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6 get-involved-second-col' },
	              _react2.default.createElement('img', { src: './public/images/getInvolved/icon_community center.png' }),
	              _react2.default.createElement(
	                'h4',
	                null,
	                '\u793E\u533A\u4E2D\u5FC3'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_ApplyMonthly2.default, null),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return getInvolved;
	}(_react.Component);

	exports.default = getInvolved;

/***/ }

});
//# sourceMappingURL=5024db3e.entry.js.map
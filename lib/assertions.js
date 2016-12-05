(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.augurReactComponents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activeView = _dereq_('../test/assertions/active-view');

var _activeView2 = _interopRequireDefault(_activeView);

var _authForm = _dereq_('../test/assertions/auth-form');

var _authForm2 = _interopRequireDefault(_authForm);

var _createMarketForm = _dereq_('../test/assertions/create-market-form');

var _createMarketForm2 = _interopRequireDefault(_createMarketForm);

var _favoriteMarkets = _dereq_('../test/assertions/favorite-markets');

var _favoriteMarkets2 = _interopRequireDefault(_favoriteMarkets);

var _tags = _dereq_('../test/assertions/tags');

var _tags2 = _interopRequireDefault(_tags);

var _isTransactionsWorking = _dereq_('../test/assertions/is-transactions-working');

var _isTransactionsWorking2 = _interopRequireDefault(_isTransactionsWorking);

var _keywords = _dereq_('../test/assertions/keywords');

var _keywords2 = _interopRequireDefault(_keywords);

var _links = _dereq_('../test/assertions/links');

var _links2 = _interopRequireDefault(_links);

var _loginAccount = _dereq_('../test/assertions/login-account');

var _loginAccount2 = _interopRequireDefault(_loginAccount);

var _market = _dereq_('../test/assertions/market');

var _market2 = _interopRequireDefault(_market);

var _markets = _dereq_('../test/assertions/markets');

var _markets2 = _interopRequireDefault(_markets);

var _marketsHeader = _dereq_('../test/assertions/markets-header');

var _marketsHeader2 = _interopRequireDefault(_marketsHeader);

var _marketsTotals = _dereq_('../test/assertions/markets-totals');

var _marketsTotals2 = _interopRequireDefault(_marketsTotals);

var _pagination = _dereq_('../test/assertions/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _positionsMarkets = _dereq_('../test/assertions/positions-markets');

var _positionsMarkets2 = _interopRequireDefault(_positionsMarkets);

var _positionsSummary = _dereq_('../test/assertions/positions-summary');

var _positionsSummary2 = _interopRequireDefault(_positionsSummary);

var _searchSort = _dereq_('../test/assertions/search-sort');

var _searchSort2 = _interopRequireDefault(_searchSort);

var _selectedOutcome = _dereq_('../test/assertions/selected-outcome');

var _selectedOutcome2 = _interopRequireDefault(_selectedOutcome);

var _siteHeader = _dereq_('../test/assertions/site-header');

var _siteHeader2 = _interopRequireDefault(_siteHeader);

var _transactions = _dereq_('../test/assertions/transactions');

var _transactions2 = _interopRequireDefault(_transactions);

var _transactionsTotals = _dereq_('../test/assertions/transactions-totals');

var _transactionsTotals2 = _interopRequireDefault(_transactionsTotals);

var _url = _dereq_('../test/assertions/url');

var _url2 = _interopRequireDefault(_url);

var _selectedUserOpenOrdersGroup = _dereq_('../test/assertions/selected-user-open-orders-group');

var _selectedUserOpenOrdersGroup2 = _interopRequireDefault(_selectedUserOpenOrdersGroup);

var _orderCancellation = _dereq_('../test/assertions/order-cancellation');

var _orderCancellation2 = _interopRequireDefault(_orderCancellation);

var _portfolio = _dereq_('../test/assertions/portfolio');

var _portfolio2 = _interopRequireDefault(_portfolio);

var _portfolioNavItems = _dereq_('../test/assertions/portfolio-nav-items');

var _portfolioNavItems2 = _interopRequireDefault(_portfolioNavItems);

var _loginAccountPositions = _dereq_('../test/assertions/login-account-positions');

var _loginAccountPositions2 = _interopRequireDefault(_loginAccountPositions);

var _loginAccountMarkets = _dereq_('../test/assertions/login-account-markets');

var _loginAccountMarkets2 = _interopRequireDefault(_loginAccountMarkets);

var _myMarkets = _dereq_('../test/assertions/my-markets');

var _myMarkets2 = _interopRequireDefault(_myMarkets);

var _myMarketsSummary = _dereq_('../test/assertions/my-markets-summary');

var _myMarketsSummary2 = _interopRequireDefault(_myMarketsSummary);

var _myReports = _dereq_('../test/assertions/my-reports');

var _myReports2 = _interopRequireDefault(_myReports);

var _myReportsSummary = _dereq_('../test/assertions/my-reports-summary');

var _myReportsSummary2 = _interopRequireDefault(_myReportsSummary);

var _loginAccountReports = _dereq_('../test/assertions/login-account-reports');

var _loginAccountReports2 = _interopRequireDefault(_loginAccountReports);

var _portfolioTotals = _dereq_('../test/assertions/portfolio-totals');

var _portfolioTotals2 = _interopRequireDefault(_portfolioTotals);

var _tradeCommitLock = _dereq_('../test/assertions/trade-commit-lock');

var _tradeCommitLock2 = _interopRequireDefault(_tradeCommitLock);

var _reportableOutcomes = _dereq_('../test/assertions/reportable-outcomes');

var _reportableOutcomes2 = _interopRequireDefault(_reportableOutcomes);

var _marketDataUpdater = _dereq_('../test/assertions/market-data-updater');

var _marketDataUpdater2 = _interopRequireDefault(_marketDataUpdater);

var _marketDataAge = _dereq_('../test/assertions/market-data-age');

var _marketDataAge2 = _interopRequireDefault(_marketDataAge);

var _filterSort = _dereq_('../test/assertions/filter-sort');

var _filterSort2 = _interopRequireDefault(_filterSort);

var _coreStats = _dereq_('../test/assertions/core-stats');

var _coreStats2 = _interopRequireDefault(_coreStats);

var _marketDataNavItems = _dereq_('../test/assertions/market-data-nav-items');

var _marketDataNavItems2 = _interopRequireDefault(_marketDataNavItems);

var _settings = _dereq_('../test/assertions/settings');

var _settings2 = _interopRequireDefault(_settings);

var _chat = _dereq_('../test/assertions/chat');

var _chat2 = _interopRequireDefault(_chat);

var _marketUserDataNavItems = _dereq_('../test/assertions/market-user-data-nav-items');

var _marketUserDataNavItems2 = _interopRequireDefault(_marketUserDataNavItems);

var _scalarShareDenomination = _dereq_('../test/assertions/scalar-share-denomination');

var _scalarShareDenomination2 = _interopRequireDefault(_scalarShareDenomination);

var _marketReportingNavItems = _dereq_('../test/assertions/market-reporting-nav-items');

var _marketReportingNavItems2 = _interopRequireDefault(_marketReportingNavItems);

var _outcomeTradeNavItems = _dereq_('../test/assertions/outcome-trade-nav-items');

var _outcomeTradeNavItems2 = _interopRequireDefault(_outcomeTradeNavItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	activeView: _activeView2.default,
	authForm: _authForm2.default,
	createMarketForm: _createMarketForm2.default,
	favoriteMarkets: _favoriteMarkets2.default,
	tags: _tags2.default,
	isTransactionsWorking: _isTransactionsWorking2.default,
	keywords: _keywords2.default,
	links: _links2.default,
	loginAccount: _loginAccount2.default,
	market: _market2.default,
	markets: _markets2.default,
	marketsHeader: _marketsHeader2.default,
	marketsTotals: _marketsTotals2.default,
	pagination: _pagination2.default,
	positionsMarkets: _positionsMarkets2.default,
	positionsSummary: _positionsSummary2.default,
	searchSort: _searchSort2.default,
	selectedOutcome: _selectedOutcome2.default,
	siteHeader: _siteHeader2.default,
	transactions: _transactions2.default,
	transactionsTotals: _transactionsTotals2.default,
	url: _url2.default,
	selectedUserOpenOrdersGroup: _selectedUserOpenOrdersGroup2.default,
	orderCancellation: _orderCancellation2.default,
	portfolio: _portfolio2.default,
	portfolioNavItems: _portfolioNavItems2.default,
	portfolioTotals: _portfolioTotals2.default,
	loginAccountPositions: _loginAccountPositions2.default,
	loginAccountMarkets: _loginAccountMarkets2.default,
	myMarkets: _myMarkets2.default,
	myMarketsSummary: _myMarketsSummary2.default,
	myReports: _myReports2.default,
	myReportsSummary: _myReportsSummary2.default,
	loginAccountReports: _loginAccountReports2.default,
	tradeCommitLock: _tradeCommitLock2.default,
	reportableOutcomes: _reportableOutcomes2.default,
	marketDataUpdater: _marketDataUpdater2.default,
	marketDataAge: _marketDataAge2.default,
	filterSort: _filterSort2.default,
	coreStats: _coreStats2.default,
	marketDataNavItems: _marketDataNavItems2.default,
	settings: _settings2.default,
	chat: _chat2.default,
	marketUserDataNavItems: _marketUserDataNavItems2.default,
	scalarShareDenomination: _scalarShareDenomination2.default,
	marketReportingNavItems: _marketReportingNavItems2.default,
	outcomeTradeNavItems: _outcomeTradeNavItems2.default
};

},{"../test/assertions/active-view":2,"../test/assertions/auth-form":3,"../test/assertions/chat":4,"../test/assertions/core-stats":12,"../test/assertions/create-market-form":13,"../test/assertions/favorite-markets":14,"../test/assertions/filter-sort":15,"../test/assertions/is-transactions-working":16,"../test/assertions/keywords":17,"../test/assertions/links":18,"../test/assertions/login-account":22,"../test/assertions/login-account-markets":19,"../test/assertions/login-account-positions":20,"../test/assertions/login-account-reports":21,"../test/assertions/market":28,"../test/assertions/market-data-age":23,"../test/assertions/market-data-nav-items":24,"../test/assertions/market-data-updater":25,"../test/assertions/market-reporting-nav-items":26,"../test/assertions/market-user-data-nav-items":27,"../test/assertions/markets":31,"../test/assertions/markets-header":29,"../test/assertions/markets-totals":30,"../test/assertions/my-markets":33,"../test/assertions/my-markets-summary":32,"../test/assertions/my-reports":35,"../test/assertions/my-reports-summary":34,"../test/assertions/order-cancellation":36,"../test/assertions/outcome-trade-nav-items":37,"../test/assertions/pagination":38,"../test/assertions/portfolio":41,"../test/assertions/portfolio-nav-items":39,"../test/assertions/portfolio-totals":40,"../test/assertions/positions-markets":42,"../test/assertions/positions-summary":43,"../test/assertions/reportable-outcomes":44,"../test/assertions/scalar-share-denomination":45,"../test/assertions/search-sort":46,"../test/assertions/selected-outcome":47,"../test/assertions/selected-user-open-orders-group":48,"../test/assertions/settings":49,"../test/assertions/site-header":50,"../test/assertions/tags":51,"../test/assertions/trade-commit-lock":52,"../test/assertions/transactions":54,"../test/assertions/transactions-totals":53,"../test/assertions/url":55}],2:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (activeView) {
	_chai.assert.isDefined(activeView, 'activeView isn\'t defined');
	_chai.assert.isString(activeView, 'activeView isn\'t a string');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],3:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (authForm) {
	_chai.assert.isDefined(authForm, 'authForm isn\'t defined');
	_chai.assert.isObject(authForm, 'authForm isn\'t an object');

	_chai.assert.isDefined(authForm.closeLink, 'authFrom.closeLink isn\'t defined');
	_chai.assert.isObject(authForm.closeLink, 'authFrom.closeLink isn\'t an object');

	_chai.assert.isDefined(authForm.closeLink.href, 'authForm.closeLink.href isn\'t defined');
	_chai.assert.isString(authForm.closeLink.href, 'authForm.closeLink.href isn\'t a string');

	_chai.assert.isDefined(authForm.closeLink.onClick, 'authForm.closeLink.onClick isn\'t defined');
	_chai.assert.isFunction(authForm.closeLink.onClick, 'authForm.closeLink.onClick isn\'t a function');

	if (authForm.title !== undefined) {
		_chai.assert.isDefined(authForm.title, 'authForm.title isn\'t defined');
		_chai.assert.isString(authForm.title, 'authForm.title isn\'t a string');

		_chai.assert.isDefined(authForm.type, 'authForm.type isn\'t defined');
		_chai.assert.isString(authForm.type, 'authForm.type isn\'t a string');

		_chai.assert.isDefined(authForm.isVisibleName, 'authForm.isVisibleName isn\'t defined');
		_chai.assert.isBoolean(authForm.isVisibleName, 'authForm.isVisibleName isn\'t a boolean');

		_chai.assert.isDefined(authForm.isVisibleID, 'authForm.isVisibleID isn\'t defined');
		_chai.assert.isBoolean(authForm.isVisibleID, 'authForm.isVisibleID isn\'t a boolean');

		_chai.assert.isDefined(authForm.isVisiblePassword, 'authForm.isVisiblePassword isn\'t defined');
		_chai.assert.isBoolean(authForm.isVisiblePassword, 'authForm.isVisiblePassword isn\'t a boolean');

		_chai.assert.isDefined(authForm.isVisiblePassword2, 'authForm.isVisiblePassword2 isn\'t defined');
		_chai.assert.isBoolean(authForm.isVisiblePassword2, 'authForm.isVisiblePassword2 isn\'t a boolean');

		_chai.assert.isDefined(authForm.isVisibleRememberMe, 'authForm.isVisibleRememberMe isn\'t defined');
		_chai.assert.isBoolean(authForm.isVisibleRememberMe, 'authForm.isVisibleRememberMe isn\'t a boolean');

		_chai.assert.isDefined(authForm.instruction, 'authForm.instruction isn\'t defined');
		_chai.assert.isString(authForm.instruction, 'authForm.instruction isn\'t a string');

		_chai.assert.isDefined(authForm.msgClass, 'authForm.msgClass isn\'t defined');
		_chai.assert.isString(authForm.msgClass, 'authForm.msgClass isn\'t a string');

		_chai.assert.isDefined(authForm.topLinkText, 'authForm.topLinkText isn\'t defined');
		_chai.assert.isString(authForm.topLinkText, 'authForm.topLinkText isn\'t a string');

		_chai.assert.isDefined(authForm.topLink, 'authForm.topLink isn\'t defined');
		_chai.assert.isObject(authForm.topLink, 'authForm.topLink isn\'t an object');

		_chai.assert.isDefined(authForm.topLink.href, 'authForm.topLink.href isn\'t defined');
		_chai.assert.isString(authForm.topLink.href, 'authForm.topLink.href isn\'t a string');

		_chai.assert.isDefined(authForm.topLink.onClick, 'authForm.topLink.onClick isn\'t defined');
		_chai.assert.isFunction(authForm.topLink.onClick, 'authForm.topLink.onClick isn\'t a function');

		_chai.assert.isDefined(authForm.submitButtonText, 'authForm.submitButtonText isn\'t defined');
		_chai.assert.isString(authForm.submitButtonText, 'authForm.submitButtonText isn\'t a string');

		_chai.assert.isDefined(authForm.submitButtonClass, 'authForm.submitButtonClass isn\'t defined');
		_chai.assert.isString(authForm.submitButtonClass, 'authForm.submitButtonClass isn\'t a string');

		_chai.assert.isDefined(authForm.onSubmit, 'authForm.onSubmit isn\'t defined');
		_chai.assert.isFunction(authForm.onSubmit, 'authForm.onSubmit isn\'t a function');
	}

	if (authForm.msgClass === 'error') {
		_chai.assert.isDefined(authForm.msg, 'error was thrown but authForm.msg isn\'t defined to display');
		_chai.assert.isString(authForm.msg, 'error was thrown but authForm.msg isn\'t a string');
	}
};

var _chai = _dereq_('chai');

},{"chai":undefined}],4:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (chat) {
	_chai.assert.isDefined(chat, 'chat isn\'t defined');
	_chai.assert.isObject(chat, 'chat isn\'t an object');

	Object.keys(chat).forEach(function (room) {
		_chai.assert.isDefined(chat[room], 'chat.' + room + ' isn\'t defined');
		_chai.assert.isObject(chat[room], 'chat.' + room + ' isn\'t an object');
	});

	// TODO -- flesh these test out
};

var _chai = _dereq_('chai');

},{"chai":undefined}],5:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (nav) {
	var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Component Nav Item';

	describe(label + ' Shape', function () {
		_chai.assert.isDefined(nav);
		_chai.assert.isObject(nav);

		_chai.assert.isDefined(nav.label, label + '.label isn\'t defined');
		_chai.assert.isString(nav.label, label + '.label isn\'t a string');
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],6:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (formattedDate) {
	var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Formatted Date';

	describe('' + label, function () {
		it('should be formatted date', function () {
			_chai.assert.isDefined(formattedDate.value, 'value is not defined');
			_chai.assert.instanceOf(formattedDate.value, Date, 'value is not a date');
			_chai.assert.isDefined(formattedDate.formatted, 'formatted is not defined');
			_chai.assert.isString(formattedDate.formatted, 'formatted is not a string');
			_chai.assert.isDefined(formattedDate.full, 'full is not defined');
			_chai.assert.isString(formattedDate.full, 'full is not a string');
		});
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],7:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (actual) {
	var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Formatted Number';

	describe(label, function () {
		it('should be formatted number', function () {
			_chai.assert.isDefined(actual.value, '\'value\' isn\'t defined');
			_chai.assert.isNumber(actual.value, '\'value\' isn\'t a number');
			_chai.assert.isDefined(actual.formattedValue, '\'formattedValue\' isn\'t defined');
			_chai.assert.isNumber(actual.formattedValue, '\'formattedValue\' isn\'t a number');
			_chai.assert.isDefined(actual.formatted, '\'formatted\' isn\'t defined');
			_chai.assert.isString(actual.formatted, '\'formatted\' isn\'t a string');
			_chai.assert.isDefined(actual.roundedValue, '\'roundedValue\' isn\'t defined');
			_chai.assert.isNumber(actual.roundedValue, '\'roundedValue\' isn\'t a number');
			_chai.assert.isDefined(actual.rounded, '\'rounded\' isn\'t defined');
			_chai.assert.isString(actual.rounded, '\'rounded\' isn\'t a string');
			_chai.assert.isDefined(actual.minimized, '\'minimized\' isn\'t defined');
			_chai.assert.isString(actual.minimized, '\'minimized\' isn\'t a string');
			_chai.assert.isDefined(actual.denomination, '\'denomination\' isn\'t defined');
			_chai.assert.isString(actual.denomination, '\'denomination\' isn\'t a String');
			_chai.assert.isDefined(actual.full, '\'full\' isn\'t defined');
			_chai.assert.isString(actual.full, '\'full\' isn\'t a string');
		});
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],8:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (initialFairPrices, refObj) {
	describe(refObj + '\'s initiaiFairPrices', function () {
		describe('type', function () {
			it('should exist', function () {
				_chai.assert.isDefined(initialFairPrices.type, 'initialFairPrices.type is not defined');
			});

			it('should be a string', function () {
				_chai.assert.isString(initialFairPrices.type, 'initialFairPrices.type is not a string');
			});
		});

		describe('values', function () {
			it('should exist', function () {
				_chai.assert.isDefined(initialFairPrices.values, 'initialFairPrices.values is not defined');
			});

			it('should be an array', function () {
				_chai.assert.isArray(initialFairPrices.values, 'initialFairPrices.values is not an array');
			});
		});

		describe('raw', function () {
			it('should exist', function () {
				_chai.assert.isDefined(initialFairPrices.raw, 'initialFairPrices.raw is not defined');
			});

			it('should be an array', function () {
				_chai.assert.isArray(initialFairPrices.raw, 'initialFairPrices.raw is not an array');
			});
		});
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],9:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (link) {
	var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Link';

	describe(label + ' Shape', function () {
		_chai.assert.isDefined(link);
		_chai.assert.isObject(link);

		it('href', function () {
			_chai.assert.isDefined(link.href);
			_chai.assert.isString(link.href);
		});

		it('onClick', function () {
			_chai.assert.isDefined(link.onClick);
			_chai.assert.isFunction(link.onClick);
		});
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],10:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketLink) {
	var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'marketLink';

	describe(label, function () {
		it('should be market link', function () {
			_chai.assert.isDefined(marketLink, '\'marketLink\' is not defined');
			_chai.assert.isObject(marketLink, '\'marketLink\' is not defined');

			_chai.assert.isDefined(marketLink.text, '\'text\' is not defined');
			_chai.assert.isString(marketLink.text, '\'text\' is not a string');

			_chai.assert.isDefined(marketLink.className, '\'className\' is not defined');
			_chai.assert.isString(marketLink.className, '\'className\' is not a string');

			_chai.assert.isDefined(marketLink.onClick, '\'onClick\' is not defined');
			_chai.assert.isFunction(marketLink.onClick, '\'onClick\' is not a function');
		});
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],11:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (navItem) {
	var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Nav Item';

	describe(label + '\' Shape', function () {
		_chai.assert.isDefined(navItem);
		_chai.assert.isObject(navItem);

		it('label', function () {
			_chai.assert.isDefined(navItem.label);
			_chai.assert.isString(navItem.label);
		});

		it('link', function () {
			(0, _link2.default)(navItem.link, 'portfolio.navItem.link');
		});

		it('page', function () {
			_chai.assert.isDefined(navItem.page);
			_chai.assert.isString(navItem.page);
		});
	});
};

var _chai = _dereq_('chai');

var _link = _dereq_('../../../test/assertions/common/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../../../test/assertions/common/link":9,"chai":undefined}],12:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

exports.default = function (coreStats) {
		_chai.assert.isDefined(coreStats, '\'coreStats\' was not defined as expected');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],13:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (createMarketForm) {
	describe('createMarketForm', function () {
		describe('step ' + createMarketForm.step + ' state', function () {
			switch (createMarketForm.step) {
				case 1:
					describe('step', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.step, '\'step\' is not defined');
						});

						it('should be a number', function () {
							_chai.assert.isNumber(createMarketForm.step, '\'step\' is not a number');
						});
					});

					describe('creatingMarket', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.creatingMarket, '\'creatingMarket\' is not defined');
						});

						it('should be a boolean', function () {
							_chai.assert.isBoolean(createMarketForm.creatingMarket, '\'creatingMarket\' is not a boolean');
						});
					});

					describe('errors', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.errors, '\'errors\' is not defined');
						});

						it('should be a object', function () {
							_chai.assert.isObject(createMarketForm.errors, '\'errors\' is not an object');
						});
					});

					describe('onValuesUpdated', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.onValuesUpdated, '\'onValuesUpdated\' is not defined');
						});

						it('should be a function', function () {
							_chai.assert.isFunction(createMarketForm.onValuesUpdated, 'onValuesUpdated\' is not a function');
						});
					});

					break;
				case 2:
					describe('type', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.type, '\'type\' is not defined');
						});

						it('should be a string', function () {
							_chai.assert.isString(createMarketForm.type, '\'type\' is not a string');
						});
					});

					describe('initialFairPrices', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.initialFairPrices, '\'initialFairPrices\' is not defined');
						});

						it('should be an object', function () {
							_chai.assert.isObject(createMarketForm.initialFairPrices, '\'initialFairPrices\' is not an object');
						});

						it('should have the correct shape', function () {
							(0, _initialFairPrices2.default)(createMarketForm.initialFairPrices, 'createMarketForm');
						});
					});

					describe('descriptionPlaceholder', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.descriptionPlaceholder, '\'descriptionPlaceholder\' is not defined');
						});

						it('should be a string', function () {
							_chai.assert.isString(createMarketForm.descriptionPlaceholder, '\'descriptionPlaceholder\' is not a string');
						});
					});

					describe('descriptionMaxLength', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.descriptionMaxLength, '\'descriptionMaxLength\' is not defined');
						});

						it('should be a number', function () {
							_chai.assert.isNumber(createMarketForm.descriptionMaxLength, '\'descriptionMaxLength\' is not a number');
						});
					});

					describe('type: ' + createMarketForm.type, function () {
						switch (createMarketForm.type) {
							case 'categorical':
								describe('categoricalOutcomesMinNum', function () {
									it('should be defined', function () {
										_chai.assert.isDefined(createMarketForm.categoricalOutcomesMinNum, '\'categoricalOutcomesMinNum\' is not defined');
									});

									it('should be a number', function () {
										_chai.assert.isNumber(createMarketForm.categoricalOutcomesMinNum, '\'categoricalOutcomesMinNum\' is not a number');
									});
								});

								describe('categoricalOutcomesMaxNum', function () {
									it('should be defined', function () {
										_chai.assert.isDefined(createMarketForm.categoricalOutcomesMaxNum, '\'categoricalOutcomesMaxNum\' is not defined');
									});

									it('should be a number', function () {
										_chai.assert.isNumber(createMarketForm.categoricalOutcomesMaxNum, '\'categoricalOutcomesMaxNum\' is not a number');
									});
								});

								describe('categoricalOutcomeMaxLength', function () {
									it('should be defined', function () {
										_chai.assert.isDefined(createMarketForm.categoricalOutcomeMaxLength, '\'categoricalOutcomeMaxLength\' is not defined');
									});

									it('should be a number', function () {
										_chai.assert.isNumber(createMarketForm.categoricalOutcomeMaxLength, '\'categoricalOutcomeMaxLength\' is not a number');
									});
								});
								break;
							case 'scalar':
								describe('scalarSmallNum', function () {
									it('should be defined', function () {
										_chai.assert.isDefined(createMarketForm.scalarSmallNum, '\'scalarSmallNum\' is not defined');
									});

									it('should be a number', function () {
										_chai.assert.isNumber(createMarketForm.scalarSmallNum, '\'scalarSmallNum\' is not a number');
									});
								});

								describe('scalarBigNum', function () {
									it('should be defined', function () {
										_chai.assert.isDefined(createMarketForm.scalarBigNum, '\'scalarBigNum\' is not defined');
									});

									it('should be a number', function () {
										_chai.assert.isNumber(createMarketForm.scalarBigNum, '\'scalarBigNum\' is not a number');
									});
								});
								break;
						}
					});

					break;
				case 3:
					describe('description', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.description, '\'description\' is not defined');
						});

						it('should be a string', function () {
							_chai.assert.isString(createMarketForm.description, '\'description\' is not a string');
						});
					});

					describe('tagsMaxNum', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.tagsMaxNum, '\'tagsMaxNum\' is not defined');
						});

						it('should be a number', function () {
							_chai.assert.isNumber(createMarketForm.tagsMaxNum, '\'tagsMaxNum\' is not a number');
						});
					});

					describe('tagMaxLength', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.tagMaxLength, '\'tagsMaxLength\' is not defined');
						});

						it('should be a number', function () {
							_chai.assert.isNumber(createMarketForm.tagMaxLength, '\'tagsMaxLength\' is not a number');
						});
					});

					describe('expirySourceTypes', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.expirySourceTypes, '\'expirySourceTypes\' is not defined');
						});

						it('should be an object', function () {
							_chai.assert.isObject(createMarketForm.expirySourceTypes, '\'expirySourceTypes\' is not an object');
						});

						describe('generic', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.expirySourceTypes.generic, '\'expirySourceTypes.generic\' is not defined');
							});

							it('should be a string', function () {
								_chai.assert.isString(createMarketForm.expirySourceTypes.generic, '\'expirySourceTypes.generic\' is not a string');
							});
						});

						describe('specific', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.expirySourceTypes.specific, '\'expirySourceTypes.specific\' is not defined');
							});

							it('should be a string', function () {
								_chai.assert.isString(createMarketForm.expirySourceTypes.specific, '\'expirySourceTypes.specific\' is not a string');
							});
						});
					});

					break;
				case 4:
					describe('takerFee', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.takerFee, '\'takerFee\' is not defined');
						});

						it('should be a number', function () {
							_chai.assert.isNumber(createMarketForm.takerFee, '\'takerFee\' is not a number');
						});
					});

					describe('makerFee', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.makerFee, '\'makerFee\' is not defined');
						});

						it('should be a number', function () {
							_chai.assert.isNumber(createMarketForm.makerFee, '\'makerFee\' is not a number');
						});
					});

					if (createMarketForm.isCreatingOrderBook) {
						describe('initialLiquidity', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.initialLiquidity, '\'initialLiquidity\' is not defined');
							});

							it('should be a number', function () {
								_chai.assert.isNumber(createMarketForm.initialLiquidity, '\'initialLiquidity\' is not a number');
							});
						});

						describe('initialFairPrices', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.initialFairPrices, '\'initialFairPrices\' is not defined');
							});

							it('should be an object', function () {
								_chai.assert.isObject(createMarketForm.initialFairPrices, '\'initialFairPrices\' is not an object');
							});

							it('should have the correct shape', function () {
								(0, _initialFairPrices2.default)(createMarketForm.initialFairPrices, 'createMarketForm');
							});
						});

						describe('bestStartingQuantity', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.bestStartingQuantity, '\'bestStartingQuantity\' is not defined');
							});

							it('should be a number', function () {
								_chai.assert.isNumber(createMarketForm.bestStartingQuantity, '\'bestStartingQuantity\' is not a number');
							});
						});

						describe('startingQuantity', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.startingQuantity, '\'startingQuantity\' is not defined');
							});

							it('should be a number', function () {
								_chai.assert.isNumber(createMarketForm.startingQuantity, '\'startingQuantity\' is not a number');
							});
						});

						describe('priceWidth', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.priceWidth, '\'priceWidth\' is not defined');
							});

							it('should be a number', function () {
								_chai.assert.isNumber(createMarketForm.priceWidth, '\'priceWidth\' is not a number');
							});
						});

						describe('priceDepth', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.priceDepth, '\'priceDepth\' is not defined');
							});

							it('should be a number', function () {
								_chai.assert.isNumber(createMarketForm.priceDepth, '\'priceDepth\' is not a number');
							});
						});
					}

					break;
				default:
				case 5:
					describe('description', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.description, '\'description\' is not defined');
						});

						it('should be a string', function () {
							_chai.assert.isString(createMarketForm.description, '\'description\' is not a string');
						});
					});

					describe('outcomes', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.outcomes, '\'outcomes\' is not defined');
						});

						it('should be an array', function () {
							_chai.assert.isArray(createMarketForm.outcomes, '\'outcomes\' is not an array');
						});
					});

					describe('endDate', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.endDate, '\'endDate\' is not defined');
						});

						it('should be an object', function () {
							_chai.assert.isObject(createMarketForm.endDate, '\'endDate\' is not an object');
						});

						it('should have the correct shape', function () {
							(0, _formattedDate2.default)(createMarketForm.endDate, 'createMarketForm');
						});
					});

					describe('takerFeePercent', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.takerFeePercent, '\'takerFeePercent\' is not defined');
						});

						it('should be an object', function () {
							_chai.assert.isObject(createMarketForm.takerFeePercent, '\'takerFeePercent\' is not an object');
						});

						it('should have the correct shape', function () {
							(0, _formattedNumber2.default)(createMarketForm.takerFeePercent, 'createMarketForm.takerFeePercent');
						});
					});

					describe('makerFeePercent', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.makerFeePercent, '\'makerFeePercent\' is not defined');
						});

						it('should be an object', function () {
							_chai.assert.isObject(createMarketForm.makerFeePercent, '\'makerFeePercent\' is not an object');
						});

						it('should have the correct shape', function () {
							(0, _formattedNumber2.default)(createMarketForm.makerFeePercent, 'createMarketForm.makerFeePercent');
						});
					});

					describe('creatingMarket', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.creatingMarket, '\'creatingMarket\' is not defined');
						});

						it('should be a boolean', function () {
							_chai.assert.isBoolean(createMarketForm.creatingMarket, '\'creatingMarket\' is not a boolean');
						});
					});

					describe('volume', function () {
						it('should be defined', function () {
							_chai.assert.isDefined(createMarketForm.volume, '\'volume\' is not defined');
						});

						it('should be an object', function () {
							_chai.assert.isObject(createMarketForm.volume, '\'volume\' is not an object');
						});

						it('should have the correct shape', function () {
							(0, _formattedNumber2.default)(createMarketForm.volume, 'createMarketForm.volume');
						});
					});

					if (createMarketForm.isCreatingOrderBook) {
						describe('initialFairPrices', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.initialFairPrices, '\'initialFairPrices\' is not defined');
							});

							it('should be an object', function () {
								_chai.assert.isObject(createMarketForm.initialFairPrices, '\'initialFairPrices\' is not an object');
							});

							it('should have the correct shape', function () {
								(0, _initialFairPrices2.default)(createMarketForm.initialFairPrices, 'createMarketForm.initialFairPrices');
							});
						});

						describe('priceWidthFormatted', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.initialLiquidityFormatted, '\'initialLiquidityFormatted\' is not defined');
							});

							it('should be an object', function () {
								_chai.assert.isObject(createMarketForm.initialLiquidityFormatted, '\'initialLiquidityFormatted\' is not an object');
							});

							it('should have the correct shape', function () {
								(0, _formattedNumber2.default)(createMarketForm.initialLiquidityFormatted, 'createMarketForm.initialLiquidityFormatted');
							});
						});

						describe('priceWidthFormatted', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.priceWidthFormatted, '\'priceWidthFormatted\' is not defined');
							});

							it('should be an object', function () {
								_chai.assert.isObject(createMarketForm.priceWidthFormatted, '\'priceWidthFormatted\' is not an object');
							});

							it('should have the correct shape', function () {
								(0, _formattedNumber2.default)(createMarketForm.priceWidthFormatted, 'createMarketForm.priceWidthFormatted');
							});
						});

						describe('bestStartingQuantityFormatted', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.bestStartingQuantityFormatted, '\'bestStartingQuantityFormatted\' is not defined');
							});

							it('should be an object', function () {
								_chai.assert.isObject(createMarketForm.bestStartingQuantityFormatted, '\'bestStartingQuantityFormatted\' is not an object');
							});

							it('should have the correct shape', function () {
								(0, _formattedNumber2.default)(createMarketForm.bestStartingQuantityFormatted, 'createMarketForm.bestStartingQuantityFormatted');
							});
						});

						describe('startingQuantityFormatted', function () {
							it('should be defined', function () {
								_chai.assert.isDefined(createMarketForm.startingQuantityFormatted, '\'startingQuantityFormatted\' is not defined');
							});

							it('should be an object', function () {
								_chai.assert.isObject(createMarketForm.startingQuantityFormatted, '\'startingQuantityFormatted\' is not an object');
							});

							it('should have the correct shape', function () {
								(0, _formattedNumber2.default)(createMarketForm.startingQuantityFormatted, 'createMarketForm.startingQuantityFormatted');
							});
						});
					}
			}
		});
	});
};

var _chai = _dereq_('chai');

var _formattedDate = _dereq_('../../test/assertions/common/formatted-date');

var _formattedDate2 = _interopRequireDefault(_formattedDate);

var _initialFairPrices = _dereq_('../../test/assertions/common/initial-fair-prices');

var _initialFairPrices2 = _interopRequireDefault(_initialFairPrices);

var _formattedNumber = _dereq_('../../test/assertions/common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../../test/assertions/common/formatted-date":6,"../../test/assertions/common/formatted-number":7,"../../test/assertions/common/initial-fair-prices":8,"chai":undefined}],14:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (positionsSummary) {
	// implement me
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],15:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (fS) {
	_chai.assert.isDefined(fS, '\'filterSort\' is not defined');
	_chai.assert.isObject(fS, '\'filterSort\' is not an object');

	var sFS = fS.selectedFilterSort;

	_chai.assert.isDefined(sFS, '\'filterSort.selectedFilterSort is not defined');
	_chai.assert.isObject(sFS, '\'filterSort.selectFilterSort is not an object');

	_chai.assert.isDefined(sFS.type, '\'filterSort.selectedFilterSort.type\' is not defined');
	_chai.assert.isString(sFS.type, '\'filterSort.selectedFilterSort.type\' is not a string');

	_chai.assert.isDefined(sFS.sort, '\'filterSort.selectedFilterSort.sort\' is not defined');
	_chai.assert.isString(sFS.sort, '\'filterSort.selectedFilterSort.sort\' is not a string');

	_chai.assert.isDefined(sFS.isDesc, '\'filterSort.selectedFilterSort.isDesc\' is not defined');
	_chai.assert.isBoolean(sFS.isDesc, '\'filterSort.selectedFilterSort.isDesc\' is not a boolean');

	_chai.assert.isDefined(fS.types, '\'filterSort.types\' is not defined');
	_chai.assert.isArray(fS.types, '\'filterSort.types\' is not an array');

	fS.types.forEach(function (type, i) {
		_chai.assert.isDefined(type.label, '\'filterSort.types[' + i + '].label\' is not defined');
		_chai.assert.isString(type.label, '\'filterSort.types[' + i + '].label\' is not a string');

		_chai.assert.isDefined(type.value, '\'filterSort.types[' + i + '].value\' is not defined');
		_chai.assert.isString(type.value, '\'filterSort.types[' + i + '].value\' is not a string');
	});

	fS.sorts.forEach(function (type, i) {
		_chai.assert.isDefined(type.label, '\'filterSort.sorts[' + i + '].label\' is not defined');
		_chai.assert.isString(type.label, '\'filterSort.sorts[' + i + '].label\' is not a string');

		_chai.assert.isDefined(type.value, '\'filterSort.sorts[' + i + '].value\' is not defined');
		_chai.assert.isString(type.value, '\'filterSort.sorts[' + i + '].value\' is not a string');
	});

	_chai.assert.isDefined(fS.order, '\'filterSort.order\' is not defined');
	_chai.assert.isObject(fS.order, '\'filterSort.order\' is not an object');

	_chai.assert.isDefined(fS.order.isDesc, '\'filterSort.order.isDesc\' is not defined');
	_chai.assert.isBoolean(fS.order.isDesc, '\'filterSort.order.isDesc\' is not a boolean');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],16:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (isTransactionsWorking) {
	_chai.assert.isDefined(isTransactionsWorking, 'isTransactionsWorking isn\'t defined');
	_chai.assert.isBoolean(isTransactionsWorking, 'isTransactionsWorking isn\'t a boolean');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],17:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (keywords) {
	_chai.assert.isDefined(keywords, 'keywords isn\'t defined');
	_chai.assert.isObject(keywords, 'keywords isn\'t an object');
	_chai.assert.isDefined(keywords.value, 'keywords.value isn\'t defined');
	_chai.assert.isString(keywords.value, 'keywords.value isn\'t a string');
	_chai.assert.isDefined(keywords.onChangeKeywords, 'keywords.onChangeKeywords isn\'t defined');
	_chai.assert.isFunction(keywords.onChangeKeywords, 'keywords.onChangeKeywords isn\'t a function');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],18:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (links) {
	describe('augur-ui-react-components links state', function () {
		_chai.assert.isDefined(links, 'links isn\'t defined');
		_chai.assert.isObject(links, 'links isn\'t an object');

		it('authLink', function () {
			(0, _link2.default)(links.authLink, 'authLink');
		});

		it('marketsLink', function () {
			(0, _link2.default)(links.marketsLink, 'marketsLink');
		});

		it('transactionsLink', function () {
			(0, _link2.default)(links.transactionsLink, 'transactionsLink');
		});

		it('marketLink', function () {
			(0, _link2.default)(links.marketLink, 'marketLink');
		});

		it('previousLink', function () {
			(0, _link2.default)(links.previousLink, 'previousLink');
		});

		it('createMarketLink', function () {
			(0, _link2.default)(links.createMarketLink, 'createMarketLink');
		});

		it('loginMessageLink', function () {
			(0, _link2.default)(links.loginMessageLink, 'loginMessageLink');
		});
	});
};

var _chai = _dereq_('chai');

var _link = _dereq_('../../test/assertions/common/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

},{"../../test/assertions/common/link":9,"chai":undefined}],19:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (loginAccountMarkets) {
	describe('augur-ui-react-components loginAccountMarket\'s shape', function () {
		_chai.assert.isDefined(loginAccountMarkets);
		_chai.assert.isObject(loginAccountMarkets);
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],20:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (loginAccountPositions) {
	describe('augur-ui-react-components loginAccountPositions\' shape', function () {
		_chai.assert.isDefined(loginAccountPositions);
		_chai.assert.isObject(loginAccountPositions);

		it('markets', function () {
			_chai.assert.isDefined(loginAccountPositions.markets);
			_chai.assert.isArray(loginAccountPositions.markets);
		});

		it('summary', function () {
			_chai.assert.isDefined(loginAccountPositions.summary);
			_chai.assert.isObject(loginAccountPositions.summary);
		});
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],21:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (loginAccountReports) {
	describe('augur-ui-react-components loginAccountReports\' shape', function () {
		_chai.assert.isDefined(loginAccountReports);
		_chai.assert.isObject(loginAccountReports);

		it('reports', function () {
			_chai.assert.isDefined(loginAccountReports.reports);
			_chai.assert.isArray(loginAccountReports.reports);
		});

		it('summary', function () {
			_chai.assert.isDefined(loginAccountReports.summary);
			_chai.assert.isObject(loginAccountReports.summary);
		});
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],22:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (loginAccount) {
	_chai.assert.isDefined(loginAccount, 'loginAccount isn\'t defined');
	_chai.assert.isObject(loginAccount, 'loginAccount isn\'t an object');

	_chai.assert.isDefined(loginAccount.name, 'loginAccount.name isn\'t defined');
	_chai.assert.isString(loginAccount.name, 'loginAccount.name isn\'t a string');

	_chai.assert.isDefined(loginAccount.linkText, 'loginAccount.linkText isn\'t defined');
	_chai.assert.isString(loginAccount.linkText, 'loginAccount.linkText isn\'t a string');

	_chai.assert.isDefined(loginAccount.loginID, 'loginAccount.loginID isn\'t defined');
	_chai.assert.isString(loginAccount.loginID, 'loginAccount.loginID isn\'t a string');

	_chai.assert.isDefined(loginAccount.prettyLoginID, 'loginAccount.prettyLoginID isn\'t defined');
	_chai.assert.isString(loginAccount.prettyLoginID, 'loginAccount.prettyLoginID isn\'t a string');

	_chai.assert.isDefined(loginAccount.address, 'loginAccount.address isn\'t defined');
	_chai.assert.isString(loginAccount.address, 'loginAccount.address isn\'t a string');

	_chai.assert.isDefined(loginAccount.prettyAddress, 'loginAccount.prettyAddress isn\'t defined');
	_chai.assert.isString(loginAccount.prettyAddress, 'loginAccount.prettyAddress isn\'t a string');

	_chai.assert.isDefined(loginAccount.localNode, 'loginAccount.localNode isn\'t defined');
	_chai.assert.isBoolean(loginAccount.localNode, 'loginAccount.localNode isn\'t a boolean');

	_chai.assert.isDefined(loginAccount.downloadAccountDataString, 'loginAccount.downloadAccountDataString isn\'t defined');
	_chai.assert.isString(loginAccount.downloadAccountDataString, 'loginAccount.downloadAccountDataString isn\'t a string');

	_chai.assert.isDefined(loginAccount.downloadAccountFileName, 'loginAccount.downloadAccountFileName isn\'t defined');
	_chai.assert.isString(loginAccount.downloadAccountFileName, 'loginAccount.downloadAccountFileName isn\'t a string');

	(0, _formattedNumber2.default)(loginAccount.rep, 'loginAccount.rep');
	(0, _formattedNumber2.default)(loginAccount.ether, 'loginAccount.ether');
	(0, _formattedNumber2.default)(loginAccount.realEther, 'loginAccount.realEther');
};

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('../../test/assertions/common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../../test/assertions/common/formatted-number":7,"chai":undefined}],23:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketDataAge) {
	describe('augur-ui-react-components marketDataAge', function () {
		it('marketDataAge', function () {
			_chai.assert.isObject(marketDataAge);
		});

		it('marketDataAge.lastUpdatedBefore', function () {
			_chai.assert.isString(marketDataAge.lastUpdatedBefore);
		});

		it('marketDataAge.isMarketDataLoading', function () {
			_chai.assert.isBoolean(marketDataAge.isMarketDataLoading);
		});
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],24:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketDataNavItems) {
	_chai.assert.isDefined(marketDataNavItems, 'marketDataNavItems isn\'t defined');
	_chai.assert.isObject(marketDataNavItems, 'marketDataNavItems isn\'t an object');

	Object.keys(marketDataNavItems).forEach(function (navItem) {
		(0, _componentNav2.default)(marketDataNavItems[navItem], navItem);
	});
};

var _chai = _dereq_('chai');

var _componentNav = _dereq_('./common/component-nav');

var _componentNav2 = _interopRequireDefault(_componentNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./common/component-nav":5,"chai":undefined}],25:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketDataUpdater) {
	describe('augur-ui-react-components marketDataUpdater', function () {
		it('marketDataUpdater', function () {
			_chai.assert.isObject(marketDataUpdater);
		});

		it('marketDataUpdater.update', function () {
			_chai.assert.isFunction(marketDataUpdater.update);
		});

		it('marketDataUpdater.updateIntervalSecs', function () {
			_chai.assert.isNumber(marketDataUpdater.updateIntervalSecs);
		});
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],26:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketReportingNavItems) {
	_chai.assert.isDefined(marketReportingNavItems, 'marketReportingNavItems isn\'t defined');
	_chai.assert.isObject(marketReportingNavItems, 'marketReportingNavItems isn\'t an object');

	Object.keys(marketReportingNavItems).forEach(function (navItem) {
		(0, _componentNav2.default)(marketReportingNavItems[navItem], navItem);
	});
};

var _chai = _dereq_('chai');

var _componentNav = _dereq_('./common/component-nav');

var _componentNav2 = _interopRequireDefault(_componentNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./common/component-nav":5,"chai":undefined}],27:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketUserDataNavItems) {
	_chai.assert.isDefined(marketUserDataNavItems, 'marketUserDataNavItems isn\'t defined');
	_chai.assert.isObject(marketUserDataNavItems, 'marketUserDataNavItems isn\'t an object');

	Object.keys(marketUserDataNavItems).forEach(function (navItem) {
		(0, _componentNav2.default)(marketUserDataNavItems[navItem], navItem);
	});
};

var _chai = _dereq_('chai');

var _componentNav = _dereq_('./common/component-nav');

var _componentNav2 = _interopRequireDefault(_componentNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./common/component-nav":5,"chai":undefined}],28:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (market) {

	// market can be undefined
	if (!market.id) {
		return;
	}

	describe('augur-ui-react-components market state', function () {
		it('market', function () {
			_chai.assert.isDefined(market);
			_chai.assert.isObject(market);
		});

		it('market.id', function () {
			_chai.assert.isDefined(market.id);
			_chai.assert.isString(market.id);
		});

		it('market.author', function () {
			_chai.assert.isDefined(market.author);
			_chai.assert.isString(market.author);
		});

		it('market.type', function () {
			_chai.assert.isDefined(market.type);
			_chai.assert.isString(market.type);
		});

		it('market.description', function () {
			_chai.assert.isDefined(market.description);
			_chai.assert.isString(market.description);
		});

		it('market.resolution', function () {
			_chai.assert.isDefined(market.resolution);
			_chai.assert.isString(market.resolution);
		});

		it('market.extraInfo', function () {
			_chai.assert.isDefined(market.extraInfo);
			_chai.assert.isString(market.extraInfo);
		});

		it('market.endDate', function () {
			_chai.assert.isDefined(market.endDate);
			(0, _formattedDate2.default)(market.endDate, 'market.endDate');
		});

		it('market.creationTime', function () {
			_chai.assert.isDefined(market.creationTime);
			(0, _formattedDate2.default)(market.creationTime, 'market.creationTime');
		});

		it('market.endDateLabel', function () {
			_chai.assert.isDefined(market.endDateLabel);
			_chai.assert.isString(market.endDateLabel);
		});

		it('market.outstandingShares', function () {
			_chai.assert.isDefined(market.outstandingShares);
			(0, _formattedNumber2.default)(market.outstandingShares, 'market.outstandingShares');
		});

		it('market.takerFeePercent', function () {
			_chai.assert.isDefined(market.takerFeePercent);
			(0, _formattedNumber2.default)(market.takerFeePercent, 'market.takerFeePercent');
		});

		it('market.makerFeePercent', function () {
			_chai.assert.isDefined(market.makerFeePercent);
			(0, _formattedNumber2.default)(market.makerFeePercent, 'market.makerFeePercent');
		});

		it('market.volume', function () {
			_chai.assert.isDefined(market.volume);
			(0, _formattedNumber2.default)(market.volume, 'market.volume');
		});

		it('market.isOpen', function () {
			_chai.assert.isDefined(market.isOpen);
			_chai.assert.isBoolean(market.isOpen);
		});

		it('market.isPendingReport', function () {
			_chai.assert.isDefined(market.isPendingReport);
			_chai.assert.isBoolean(market.isPendingReport);
		});

		it('market.marketLink', function () {
			_chai.assert.isDefined(market.marketLink);
			(0, _marketLink2.default)(market.marketLink, 'market.marketLink');
		});

		var tags = market.tags;
		it('market.tags', function () {
			_chai.assert.isDefined(tags);
			_chai.assert.isArray(tags);

			tags.forEach(function (tag, i) {
				it('market.tags[' + i + '].name', function () {
					_chai.assert.isDefined(tag.name);
					_chai.assert.isString(tag.name);
				});

				it('market.tags[' + i + '].onCLick', function () {
					_chai.assert.isDefined(tag.onClick);
					_chai.assert.isFunction(tag.onClick);
				});
			});
		});

		it('market.outcomes', function () {
			_chai.assert.isDefined(market.outcomes);
			_chai.assert.isArray(market.outcomes);

			market.outcomes.forEach(function (outcome, i) {
				it('market.outcomes[' + i + ']', function () {
					_chai.assert.isDefined(outcome);
					_chai.assert.isObject(outcome);
				});

				it('market.outcomes[' + i + '].id', function () {
					_chai.assert.isDefined(outcome.id);
					_chai.assert.isString(outcome.id);
				});

				it('market.outcomes[' + i + '].name', function () {
					_chai.assert.isDefined(outcome.name);
					_chai.assert.isString(outcome.name);
				});

				it('market.outcomes[' + i + '].marketID', function () {
					_chai.assert.isDefined(outcome.marketID);
					_chai.assert.isString(outcome.marketID);
				});

				it('market.outcomes[' + i + '].lastPrice', function () {
					_chai.assert.isDefined(outcome.lastPrice);
					(0, _formattedNumber2.default)(outcome.lastPrice, 'outcome.lastPrice');
				});

				it('market.outcomes[' + i + '].lastPricePercent', function () {
					_chai.assert.isDefined(outcome.lastPricePercent);
					(0, _formattedNumber2.default)(outcome.lastPricePercent, 'outcome.lastPricePercent');
				});

				var trade = outcome.trade;
				it('market.outcomes[' + i + '].trade', function () {
					_chai.assert.isDefined(trade);
					_chai.assert.isObject(trade);
				});

				it('market.outcomes[' + i + '].trade.side', function () {
					_chai.assert.isDefined(trade.side);
					_chai.assert.isString(trade.side);
				});

				it('market.outcomes[' + i + '].trade.numShares', function () {
					_chai.assert.isDefined(trade.numShares);
					_chai.assert.isNumber(trade.numShares);
				});

				it('market.outcomes[' + i + '].trade.maxNumShares', function () {
					_chai.assert.isDefined(trade.maxNumShares);
					_chai.assert.isNumber(trade.maxNumShares);
				});

				it('market.outcomes[' + i + '].trade.limitPrice', function () {
					_chai.assert.isDefined(trade.limitPrice);
					_chai.assert.isNumber(trade.limitPrice);
				});

				it('market.outcomes[' + i + '].trade.tradeSummary', function () {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					_chai.assert.isDefined(trade.tradeSummary);
					_chai.assert.isObject(trade.tradeSummary);
				});

				it('market.outcomes[' + i + '].trade.updateTradeOrder', function () {
					_chai.assert.isDefined(trade.updateTradeOrder);
					_chai.assert.isFunction(trade.updateTradeOrder);
				});

				var orderBook = outcome.orderBook;
				it('market.outcomes[' + i + '].orderBook', function () {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					_chai.assert.isDefined(orderBook);
					_chai.assert.isObject(orderBook);
				});

				it('market.outcomes[' + i + '].orderBook.bids', function () {
					_chai.assert.isDefined(orderBook.bids);
					_chai.assert.isArray(orderBook.bids);
				});

				it('market.outcomes[' + i + '].orderBook.asks', function () {
					_chai.assert.isDefined(orderBook.asks);
					_chai.assert.isArray(orderBook.asks);
				});

				it('market.outcomes[' + i + '].orderBook.topBid', function () {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					_chai.assert.isDefined(outcome.topBid);
				});

				it('market.outcomes[' + i + '].orderBook.topAsk', function () {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					_chai.assert.isDefined(outcome.topAsk);
				});

				var userOpenOrders = outcome.userOpenOrders;
				it('market.outcomes[' + i + '].userOpenOrders', function () {
					_chai.assert.isDefined(userOpenOrders);
					_chai.assert.isArray(userOpenOrders);
				});

				it('market.outcomes[' + i + '].userOpenOrders', function () {
					_chai.assert.isDefined(userOpenOrders);
					_chai.assert.isArray(userOpenOrders);
				});

				userOpenOrders.forEach(function (openOrder, j) {
					it('market.outcomes[' + i + '].userOpenOrders[' + j + ']', function () {
						_chai.assert.isDefined(openOrder);
						_chai.assert.isObject(openOrder);
					});

					it('market.outcomes[' + i + '].userOpenOrders[' + j + '].id', function () {
						_chai.assert.isDefined(openOrder.id);
						_chai.assert.isObject(openOrder.id);
					});

					it('market.outcomes[' + i + '].userOpenOrders[' + j + '].marketID', function () {
						_chai.assert.isDefined(openOrder.marketID);
						_chai.assert.isString(openOrder.marketID);
					});

					it('market.outcomes[' + i + '].userOpenOrders[' + j + '].outcomeName', function () {
						_chai.assert.isDefined(openOrder.outcomeName);
						_chai.assert.isString(openOrder.outcomeName);
					});

					it('market.outcomes[' + i + '].userOpenOrders[' + j + '].type', function () {
						_chai.assert.isDefined(openOrder.type);
						_chai.assert.isString(openOrder.type);
					});

					it('market.outcomes[' + i + '].userOpenOrders[' + j + '].avgPrice', function () {
						_chai.assert.isDefined(openOrder.avgPrice);
						_chai.assert.isObject(openOrder.avgPrice);
						(0, _formattedNumber2.default)(openOrder.avgPrice, 'openOrder.avgPrice');
					});

					it('market.outcomes[' + i + '].userOpenOrders[' + j + '].unmatchedShares', function () {
						_chai.assert.isDefined(openOrder.unmatchedShares);
						_chai.assert.isObject(openOrder.unmatchedShares);
						(0, _formattedNumber2.default)(openOrder.unmatchedShares, 'openOrder.unmatchedShares');
					});
				});
			});
		});

		it('market.reportableOutcomes', function () {
			(0, _reportableOutcomes2.default)(market.reportableOutcomes);
		});

		var indeterminateItem = market.reportableOutcomes[market.reportableOutcomes.length - 1];
		it('market.reportableOutcomes[market.reportableOutcomes.length - 1] (indeterminateItem)', function () {
			_chai.assert.isDefined(indeterminateItem);
			_chai.assert.isObject(indeterminateItem);
		});

		it('market.reportableOutcomes[market.reportableOutcomes.length - 1] (indeterminateItem.id)', function () {
			_chai.assert.isDefined(indeterminateItem.id);
			_chai.assert.isString(indeterminateItem.id);
		});

		it('market.reportableOutcomes[market.reportableOutcomes.length - 1] (indeterminateItem.name)', function () {
			_chai.assert.isDefined(indeterminateItem.name);
			_chai.assert.isString(indeterminateItem.name);
		});

		var tradeSummary = market.tradeSummary;
		it('market.tradeSummary', function () {
			_chai.assert.isDefined(tradeSummary);
			_chai.assert.isObject(tradeSummary);
		});

		it('market.tradeSummary.totalGas', function () {
			_chai.assert.isDefined(tradeSummary.totalGas);
			(0, _formattedNumber2.default)(tradeSummary.totalGas, 'tradeSummary.totalGas');
		});

		it('market.tradeSummary.hasUserEnoughFunds', function () {
			_chai.assert.isBoolean(tradeSummary.hasUserEnoughFunds);
		});

		var tradeOrders = tradeSummary.tradeOrders;
		it('market.tradeSummary.tradeOrders', function () {
			_chai.assert.isDefined(tradeOrders);
			_chai.assert.isArray(tradeOrders);
		});

		tradeOrders.map(function (trade, i) {
			it('market.tradeSummary.tradeOrders' + i + '.shares', function () {
				_chai.assert.isDefined(trade.shares);
				_chai.assert.isObject(trade.shares);
				(0, _formattedNumber2.default)(trade.shares, 'trade.shares');
			});

			it('market.tradeSummary.tradeOrders' + i + '.limitPrice', function () {
				_chai.assert.isDefined(trade.limitPrice);
				_chai.assert.isNumber(trade.limitPrice);
			});

			it('market.tradeSummary.tradeOrders' + i + '.ether', function () {
				_chai.assert.isDefined(trade.ether);
				_chai.assert.isObject(trade.ether);
				(0, _formattedNumber2.default)(trade.ether, 'trade.ether');
			});

			it('market.tradeSummary.tradeOrders' + i + '.gas', function () {
				_chai.assert.isDefined(trade.gas);
				_chai.assert.isObject(trade.gas);
			});
			it('market.tradeSummary.tradeOrders' + i + '.gas.value', function () {
				_chai.assert.isDefined(trade.gas.value);
				_chai.assert.isNumber(trade.gas.value);
			});

			it('market.tradeSummary.tradeOrders' + i + '.data', function () {
				_chai.assert.isDefined(trade.data);
				_chai.assert.isObject(trade.data);
			});

			it('market.tradeSummary.tradeOrders' + i + '.data.marketID', function () {
				_chai.assert.isDefined(trade.data.marketID);
				_chai.assert.isString(trade.data.marketID);
			});

			it('market.tradeSummary.tradeOrders' + i + '.data.outcomeID', function () {
				_chai.assert.isDefined(trade.data.outcomeID);
				_chai.assert.isString(trade.data.outcomeID);
			});

			it('market.tradeSummary.tradeOrders' + i + '.data.marketDescription', function () {
				_chai.assert.isDefined(trade.data.marketDescription);
				_chai.assert.isString(trade.data.marketDescription);
			});

			it('market.tradeSummary.tradeOrders' + i + '.data.outcomeName', function () {
				_chai.assert.isDefined(trade.data.outcomeName);
				_chai.assert.isString(trade.data.outcomeName);
			});

			it('market.tradeSummary.tradeOrders' + i + '.data.avgPrice', function () {
				_chai.assert.isDefined(trade.data.avgPrice);
				_chai.assert.isObject(trade.data.avgPrice);
				(0, _formattedNumber2.default)(trade.data.avgPrice, 'trade.data.avgPrice');
			});
		});

		it('[TODO] flesh out the full shape');

		it('market.priceTimeSeries', function () {
			_chai.assert.isDefined(market.priceTimeSeries);
			_chai.assert.isArray(market.priceTimeSeries);
		});

		var userOpenOrdersSummary = market.userOpenOrdersSummary;
		it('market.userOpenOrdersSummary', function () {
			_chai.assert.isDefined(market.userOpenOrdersSummary);
			_chai.assert.isObject(market.userOpenOrdersSummary);
		});

		it('market.userOpenOrdersSummary.openOrdersCount', function () {
			_chai.assert.isDefined(market.userOpenOrdersSummary.openOrdersCount);
			(0, _formattedNumber2.default)(market.userOpenOrdersSummary.openOrdersCount, 'market.userOpenOrdersSummary.openOrdersCount');
		});

		var myPositionsSummary = market.myPositionsSummary;
		it('market.myPositionsSummary', function () {
			_chai.assert.isDefined(myPositionsSummary);
			_chai.assert.isObject(myPositionsSummary);
		});

		it('market.myPositionsSummary.numPositions', function () {
			_chai.assert.isDefined(myPositionsSummary.numPositions);
			(0, _formattedNumber2.default)(myPositionsSummary.numPositions, 'myPositionsSummary.numPositions');
		});

		it('market.myPositionsSummary.qtyShares', function () {
			_chai.assert.isDefined(myPositionsSummary.qtyShares);
			(0, _formattedNumber2.default)(myPositionsSummary.qtyShares, 'myPositionsSummary.qtyShares');
		});

		it('market.myPositionsSummary.purchasePrice', function () {
			_chai.assert.isDefined(myPositionsSummary.purchasePrice);
			(0, _formattedNumber2.default)(myPositionsSummary.purchasePrice, 'myPositionsSummary.purchasePrice');
		});

		it('market.myPositionsSummary.realizedNet', function () {
			_chai.assert.isDefined(myPositionsSummary.realizedNet);
			(0, _formattedNumber2.default)(myPositionsSummary.realizedNet, 'myPositionsSummary.realizedNet');
		});

		it('market.myPositionsSummary.unrealizedNet', function () {
			_chai.assert.isDefined(myPositionsSummary.unrealizedNet);
			(0, _formattedNumber2.default)(myPositionsSummary.unrealizedNet, 'myPositionsSummary.unrealizedNet');
		});

		it('market.myPositionsSummary.totalNet', function () {
			_chai.assert.isDefined(myPositionsSummary.totalNet);
			(0, _formattedNumber2.default)(myPositionsSummary.totalNet, 'myPositionsSummary.totalNet');
		});

		var myMarketSummary = market.myMarketSummary;
		it('market.myMarketSummary.endDate', function () {
			_chai.assert.isDefined(myMarketSummary.endDate);
			(0, _formattedDate2.default)(myMarketSummary.endDate, 'myMarketSummary.endDate');
		});

		it('market.myMarketSummary.fees', function () {
			_chai.assert.isDefined(myMarketSummary.fees);
			(0, _formattedNumber2.default)(myMarketSummary.fees, 'myMarketSummary.fees');
		});

		it('market.myMarketSummary.volume', function () {
			_chai.assert.isDefined(myMarketSummary.volume);
			(0, _formattedNumber2.default)(myMarketSummary.volume, 'myMarketSummary.volume');
		});

		it('market.myMarketSummary.numberOfTrades', function () {
			_chai.assert.isDefined(myMarketSummary.numberOfTrades);
			(0, _formattedNumber2.default)(myMarketSummary.numberOfTrades, 'myMarketSummary.numberOfTrades');
		});

		it('market.myMarketSummary.averageTradeSize', function () {
			_chai.assert.isDefined(myMarketSummary.averageTradeSize);
			(0, _formattedNumber2.default)(myMarketSummary.averageTradeSize, 'myMarketSummary.averageTradeSize');
		});

		it('market.myMarketSummary.openVolume', function () {
			_chai.assert.isDefined(myMarketSummary.openVolume);
			(0, _formattedNumber2.default)(myMarketSummary.openVolume, 'myMarketSummary.openVolume');
		});

		var report = market.report;
		it('market.report', function () {
			_chai.assert.isDefined(report);
			_chai.assert.isObject(report);
		});

		it('market.report.onSubmitReport', function () {
			_chai.assert.isDefined(report.onSubmitReport);
			_chai.assert.isFunction(report.onSubmitReport);
		});

		var onSubmitPlaceTrade = market.onSubmitPlaceTrade;
		it('market.onSubmitPlaceTrade', function () {
			_chai.assert.isDefined(onSubmitPlaceTrade);
			_chai.assert.isFunction(onSubmitPlaceTrade);
		});
	});
};

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('../../test/assertions/common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

var _formattedDate = _dereq_('./common/formatted-date');

var _formattedDate2 = _interopRequireDefault(_formattedDate);

var _marketLink = _dereq_('./common/market-link');

var _marketLink2 = _interopRequireDefault(_marketLink);

var _reportableOutcomes = _dereq_('../../test/assertions/reportable-outcomes');

var _reportableOutcomes2 = _interopRequireDefault(_reportableOutcomes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../../test/assertions/common/formatted-number":7,"../../test/assertions/reportable-outcomes":44,"./common/formatted-date":6,"./common/market-link":10,"chai":undefined}],29:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketsHeader) {
	_chai.assert.isDefined(marketsHeader, 'marketsHeader isn\'t defined');
	_chai.assert.isObject(marketsHeader, 'marketsHeader isn\'t an object');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],30:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketsTotals) {
	_chai.assert.isDefined(marketsTotals, 'marketsTotals isn\'t defined');
	_chai.assert.isObject(marketsTotals, 'marketsTotals isn\'t an object');

	checkDefinedAndNumber(marketsTotals.numAll, 'numAll');
	checkDefinedAndNumber(marketsTotals.numFavorites, 'numFavorites');
	checkDefinedAndNumber(marketsTotals.numFiltered, 'numFiltered');
	checkDefinedAndNumber(marketsTotals.numPendingReports, 'numPendingReports');
	checkDefinedAndNumber(marketsTotals.numUnpaginated, 'numUnpaginated');
};

var _chai = _dereq_('chai');

function checkDefinedAndNumber(obj, name) {
	_chai.assert.isDefined(obj, 'marketsTotals.' + name + ' isn\'t defined');
	_chai.assert.isNumber(obj, 'marketsTotals.' + name + ' isn\'t a number');
}

},{"chai":undefined}],31:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (markets) {
	_chai.assert.isDefined(markets, 'markets is not defined');
	_chai.assert.isArray(markets, 'markets isn\'t an array');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],32:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (myMarketsSummary) {
	describe('augur-ui-react-components myMarketsSummary\'s shape', function () {
		_chai.assert.isDefined(myMarketsSummary);
		_chai.assert.isObject(myMarketsSummary);

		assertMyMarketsSummary(myMarketsSummary);
	});
};

exports.assertMyMarketsSummary = assertMyMarketsSummary;

var _chai = _dereq_('chai');

;

function assertMyMarketsSummary(summary) {
	describe('summary\'s shape', function () {
		_chai.assert.isDefined(summary);
		_chai.assert.isObject(summary);

		it('numMarkets', function () {
			_chai.assert.isDefined(summary.numMarkets);
			_chai.assert.isNumber(summary.numMarkets);
		});
	});
};

},{"chai":undefined}],33:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (myMarkets) {
	describe('augur-ui-react-components myMarkets\' shape', function () {
		_chai.assert.isDefined(myMarkets);
		_chai.assert.isArray(myMarkets);

		myMarkets.forEach(function (market) {
			assertMyMarkets(market);
		});
	});
};

exports.assertMyMarkets = assertMyMarkets;

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('./common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

var _formattedDate = _dereq_('./common/formatted-date');

var _formattedDate2 = _interopRequireDefault(_formattedDate);

var _marketLink = _dereq_('./common/market-link');

var _marketLink2 = _interopRequireDefault(_marketLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

function assertMyMarkets(market) {
	describe('myMarket\'s shape', function () {
		it('id', function () {
			_chai.assert.isDefined(market.id);
			_chai.assert.isString(market.id);
		});

		it('marketLink', function () {
			_chai.assert.isDefined(market.marketLink);
			(0, _marketLink2.default)(market.marketLink, 'myMarkets\' marketLink');
		});

		it('description', function () {
			_chai.assert.isDefined(market.description);
			_chai.assert.isString(market.description);
		});

		it('endDate', function () {
			_chai.assert.isDefined(market.endDate);

			(0, _formattedDate2.default)(market.endDate, 'loginAccountMarkets.endDate');
		});

		it('fees', function () {
			_chai.assert.isDefined(market.fees);

			(0, _formattedNumber2.default)(market.fees, 'loginAccountMarkets.fees');
		});

		it('volume', function () {
			_chai.assert.isDefined(market.volume);

			(0, _formattedNumber2.default)(market.volume, 'loginAccountMarkets.volume');
		});

		it('numberOfTrades', function () {
			_chai.assert.isDefined(market.numberOfTrades);

			(0, _formattedNumber2.default)(market.numberOfTrades, 'loginAccountMarkets.numberOfTrades');
		});

		it('averageTradeSize', function () {
			_chai.assert.isDefined(market.averageTradeSize);

			(0, _formattedNumber2.default)(market.averageTradeSize, 'loginAccountMarkets.averageTradeSize');
		});

		it('openVolume', function () {
			_chai.assert.isDefined(market.openVolume);

			(0, _formattedNumber2.default)(market.openVolume, 'loginAccountMarkets.openVolume');
		});
	});
};

},{"./common/formatted-date":6,"./common/formatted-number":7,"./common/market-link":10,"chai":undefined}],34:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (reportsSummary) {
	_chai.assert.isDefined(reportsSummary, 'reportsSummary isn\'t defined');
	_chai.assert.isObject(reportsSummary, 'reportsSummary isn\'t an object');

	(0, _formattedNumber2.default)(reportsSummary.numReports, 'reportsSummary.numReports');
	(0, _formattedNumber2.default)(reportsSummary.netRep, 'reportsSummary.netRep');
};

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('../../test/assertions/common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

},{"../../test/assertions/common/formatted-number":7,"chai":undefined}],35:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (reports) {
	describe('augur-ui-react-components loginAccountReports.reports\' shape', function () {
		_chai.assert.isDefined(reports);
		_chai.assert.isArray(reports);

		reports.forEach(function (report) {
			assertAccountReport(report);
		});
	});
};

exports.assertAccountReport = assertAccountReport;

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('./common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

var _formattedDate = _dereq_('./common/formatted-date');

var _formattedDate2 = _interopRequireDefault(_formattedDate);

var _marketLink = _dereq_('./common/market-link');

var _marketLink2 = _interopRequireDefault(_marketLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertAccountReport(report) {
	describe('report\'s shape', function () {
		it('id', function () {
			_chai.assert.isDefined(report.id);
			_chai.assert.isString(report.id);
		});

		it('marketLink', function () {
			_chai.assert.isDefined(report.marketLink);
			(0, _marketLink2.default)(report.marketLink, 'reports\' marketLink');
		});

		it('description', function () {
			_chai.assert.isDefined(report.description);
			_chai.assert.isString(report.description);
		});

		it('outcome', function () {
			_chai.assert.isDefined(report.outcome);

			report.outcome != null && _chai.assert.isString(report.outcome);
		});

		it('outcomePercentage', function () {
			_chai.assert.isDefined(report.outcomePercentage);

			(0, _formattedNumber2.default)(report.outcomePercentage, 'report.fees');
		});

		it('reported', function () {
			_chai.assert.isDefined(report.reported);
			_chai.assert.isString(report.reported);
		});

		it('isReportEqual', function () {
			_chai.assert.isDefined(report.isReportEqual);
			_chai.assert.isBoolean(report.isReportEqual);
		});

		it('feesEarned', function () {
			_chai.assert.isDefined(report.feesEarned);

			(0, _formattedNumber2.default)(report.feesEarned, 'report.feesEarned');
		});

		it('repEarned', function () {
			_chai.assert.isDefined(report.repEarned);

			(0, _formattedNumber2.default)(report.repEarned, 'report.repEarned');
		});

		it('endDate', function () {
			_chai.assert.isDefined(report.endDate);

			(0, _formattedDate2.default)(report.endDate, 'report.endDate');
		});

		it('isChallenged', function () {
			_chai.assert.isDefined(report.isChallenged);
			_chai.assert.isBoolean(report.isChallenged);
		});

		it('isChallangeable', function () {
			_chai.assert.isDefined(report.isChallengeable);
			_chai.assert.isBoolean(report.isChallengeable);
		});
	});
};

},{"./common/formatted-date":6,"./common/formatted-number":7,"./common/market-link":10,"chai":undefined}],36:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (orderCancellation) {
	describe('augur-ui-react-components orderCancellation', function () {
		it('orderCancellation', function () {
			_chai.assert.isObject(orderCancellation);
		});

		it('orderCancellation.cancelOrder', function () {
			_chai.assert.isFunction(orderCancellation.cancelOrder);
		});

		it('orderCancellation.abortCancelOrderConfirmation', function () {
			_chai.assert.isFunction(orderCancellation.abortCancelOrderConfirmation);
		});

		it('orderCancellation.showCancelOrderConfirmation', function () {
			_chai.assert.isFunction(orderCancellation.showCancelOrderConfirmation);
		});

		it('orderCancellation.cancellationStatuses', function () {
			_chai.assert.isObject(orderCancellation.cancellationStatuses);
			_chai.assert.deepEqual(orderCancellation.cancellationStatuses, {
				CANCELLATION_CONFIRMATION: 'CANCELLATION_CONFIRMATION',
				CANCELLING: 'CANCELLING',
				CANCELLED: 'CANCELLED',
				CANCELLATION_FAILED: 'CANCELLATION_FAILED'
			});
		});
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],37:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (marketDataNavItems) {
	_chai.assert.isDefined(marketDataNavItems, 'marketDataNavItems isn\'t defined');
	_chai.assert.isObject(marketDataNavItems, 'marketDataNavItems isn\'t an object');

	Object.keys(marketDataNavItems).forEach(function (navItem) {
		(0, _componentNav2.default)(marketDataNavItems[navItem], navItem);
	});
};

var _chai = _dereq_('chai');

var _componentNav = _dereq_('./common/component-nav');

var _componentNav2 = _interopRequireDefault(_componentNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./common/component-nav":5,"chai":undefined}],38:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (pagination) {
	_chai.assert.isDefined(pagination, 'pagination isn\'t defined');
	_chai.assert.isObject(pagination, 'pagination isn\'t an object');

	_chai.assert.isDefined(pagination.numPerPage, 'pagination.numPerPage isn\'t defined');
	_chai.assert.isNumber(pagination.numPerPage, 'pagination.numPerPage isn\'t a Number');

	_chai.assert.isDefined(pagination.numPages, 'pagination.numPages isn\'t defined');
	_chai.assert.isNumber(pagination.numPages, 'pagination.numPages isn\'t a Number');

	_chai.assert.isDefined(pagination.selectedPageNum, 'pagination.selectedPageNum isn\'t defined');
	_chai.assert.isNumber(pagination.selectedPageNum, 'pagination.selectedPageNum isn\'t a Number');

	_chai.assert.isDefined(pagination.nextPageNum, 'pagination.nextPageNum isn\'t defined');
	_chai.assert.isNumber(pagination.nextPageNum, 'pagination.nextPageNum isn\'t a Number');

	_chai.assert.isDefined(pagination.startItemNum, 'pagination.startItemNum isn\'t defined');
	_chai.assert.isNumber(pagination.startItemNum, 'pagination.startItemNum isn\'t a Number');

	_chai.assert.isDefined(pagination.endItemNum, 'pagination.endItemNum isn\'t defined');
	_chai.assert.isNumber(pagination.endItemNum, 'pagination.endItemNum isn\'t a Number');

	_chai.assert.isDefined(pagination.numUnpaginated, 'pagination.numUnpaginated isn\'t defined');
	_chai.assert.isNumber(pagination.numUnpaginated, 'pagination.numUnpaginated isn\'t a Number');

	_chai.assert.isDefined(pagination.nextItemNum, 'pagination.nextItemNum isn\'t defined');
	_chai.assert.isNumber(pagination.nextItemNum, 'pagination.nextItemNum isn\'t a Number');

	_chai.assert.isDefined(pagination.onUpdateSelectedPageNum, 'pagination.onUpdateSelectedPageNum isn\'t defined');
	_chai.assert.isFunction(pagination.onUpdateSelectedPageNum, 'pagination.onUpdateSelectedPageNum isn\'t a Function');

	_chai.assert.isDefined(pagination.previousPageLink, 'pagination.previousPageLink isn\'t defined');
	_chai.assert.isObject(pagination.previousPageLink, 'pagination.previousPageLink isn\'t an object');

	_chai.assert.isDefined(pagination.nextPageLink, 'pagination.nextPageLink isn\'t defined');
	_chai.assert.isObject(pagination.nextPageLink, 'pagination.nextPageLink isn\'t an object');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],39:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (portfolioNavItems) {
	describe('augur-ui-react-components portfolio\'s navItems state', function () {
		_chai.assert.isDefined(portfolioNavItems);
		_chai.assert.isArray(portfolioNavItems);

		portfolioNavItems.forEach(function (navItem) {
			(0, _navItem2.default)(navItem, 'portfolio.navItem');
		});
	});
};

var _chai = _dereq_('chai');

var _navItem = _dereq_('./common/nav-item');

var _navItem2 = _interopRequireDefault(_navItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

},{"./common/nav-item":11,"chai":undefined}],40:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (portfolioTotals) {
	describe('augur-ui-react-components portfolioTotals\' shape', function () {
		_chai.assert.isDefined(portfolioTotals);
		_chai.assert.isObject(portfolioTotals);

		it('net', function () {
			_chai.assert.isDefined(portfolioTotals.netChange);
			(0, _formattedNumber2.default)(portfolioTotals.netChange, 'portfolio.totals.netChange');
		});
	});
};

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('../../test/assertions/common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

},{"../../test/assertions/common/formatted-number":7,"chai":undefined}],41:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (portfolio) {
	describe('augur-ui-react-components portfolio state', function () {
		_chai.assert.isDefined(portfolio);
		_chai.assert.isObject(portfolio);
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],42:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (positionsMarkets) {
	_chai.assert.isDefined(positionsMarkets, 'positionsMarkets isn\'t defined');
	_chai.assert.isArray(positionsMarkets, 'positionsMarkets isn\'t an array');

	positionsMarkets.forEach(function (positionMarket) {
		return assertPositionMarket(positionMarket);
	});
};

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('./common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

var _marketLink = _dereq_('./common/market-link');

var _marketLink2 = _interopRequireDefault(_marketLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertPositionMarket(positionMarket) {
	describe('positionMarket', function () {
		it('id', function () {
			_chai.assert.isDefined(positionMarket.id, '\'positionMarket.id\' is not defined');
			_chai.assert.isString(positionMarket.id, '\'positionMarket.id\' isn\'t a string');
		});

		it('marketLink', function () {
			_chai.assert.isDefined(positionMarket.marketLink, '\'positionMarket.marketLink\' is not defined');
			(0, _marketLink2.default)(positionMarket.marketLink, 'positionMarket.marketLink');
		});

		it('description', function () {
			_chai.assert.isDefined(positionMarket.description, '\'positionMarket.description\' is not defined');
			_chai.assert.isString(positionMarket.description, '\'positionMarket.description\' isn\'t a string');
		});

		positionMarket.myPositionOutcomes.forEach(function (positionOutcome) {
			return assertOutcome(positionOutcome);
		});

		assertPositionMarketSummary(positionMarket.myPositionsSummary);
	});
}

function assertOutcome(outcome) {
	_chai.assert.isNumber(outcome.id, 'id isn\'t a number');
	_chai.assert.isString(outcome.name, 'name isn\'t a string');
	(0, _formattedNumber2.default)(outcome.lastPrice, 'positionsMarkets.positionOutcomes[outcome].lastPrice');
	assertPosition(outcome.position);
}

function assertPosition(position) {
	(0, _formattedNumber2.default)(position.numPositions, 'position.numPositions');
	(0, _formattedNumber2.default)(position.qtyShares, 'position.qtyShares');
	(0, _formattedNumber2.default)(position.purchasePrice, 'position.purchasePrice');
	(0, _formattedNumber2.default)(position.unrealizedNet, 'position.unrealizedNet');
	(0, _formattedNumber2.default)(position.realizedNet, 'position.realizedNet');
	(0, _formattedNumber2.default)(position.totalNet, 'position.totalNet');
}

function assertPositionMarketSummary(summary) {
	(0, _formattedNumber2.default)(summary.unrealizedNet, 'myPositionsSummary.unrealizedNet');
	(0, _formattedNumber2.default)(summary.realizedNet, 'myPositionsSummary.realizedNet');
	(0, _formattedNumber2.default)(summary.totalNet, 'myPositionsSummary.totalNet');
}

},{"./common/formatted-number":7,"./common/market-link":10,"chai":undefined}],43:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (positionsSummary) {
	_chai.assert.isDefined(positionsSummary, 'positionsSummary isn\'t defined');
	_chai.assert.isObject(positionsSummary, 'positionsSummary isn\'t an object');

	(0, _formattedNumber2.default)(positionsSummary.numPositions, 'positionsSummary.numPositions');
	(0, _formattedNumber2.default)(positionsSummary.purchasePrice, 'positionsSummary.purchasePrice');
	(0, _formattedNumber2.default)(positionsSummary.qtyShares, 'positionsSummary.qtyShares');
	(0, _formattedNumber2.default)(positionsSummary.realizedNet, 'positionsSummary.realizedNet');
	(0, _formattedNumber2.default)(positionsSummary.unrealizedNet, 'positionsSummary.unrealizedNet');
	(0, _formattedNumber2.default)(positionsSummary.totalNet, 'positionsSummary.totalNet');
};

var _chai = _dereq_('chai');

var _formattedNumber = _dereq_('../../test/assertions/common/formatted-number');

var _formattedNumber2 = _interopRequireDefault(_formattedNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

},{"../../test/assertions/common/formatted-number":7,"chai":undefined}],44:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (reportableOutcomes) {
	describe('augur-ui-react-components reportableOutcomes\' shape', function () {
		_chai.assert.isDefined(reportableOutcomes, '\'reportableOutcomes\' is not defined');
		_chai.assert.isArray(reportableOutcomes, '\'reportableOutcomes\' is not an array');

		reportableOutcomes.forEach(function (outcome) {
			it('id', function () {
				_chai.assert.isDefined(outcome.id, 'reportableOutcomes\' id is not defined');
				_chai.assert.isString(outcome.id, 'reportableOutcomes\' id is not a string');
			});

			it('name', function () {
				_chai.assert.isDefined(outcome.name, 'reportableOutcomes\' name is not defined');
				_chai.assert.isString(outcome.name, 'reportableOutcomes\' name is not a string');
			});
		});
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],45:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (scalarShareDenomination) {
	_chai.assert.isDefined(scalarShareDenomination, 'scalarShareDenomination isn\'t defined');
	_chai.assert.isObject(scalarShareDenomination, 'scalarShareDenomination isn\'t an object');

	describe('scalarShareDenomination.markets', function () {
		var markets = scalarShareDenomination.markets;

		_chai.assert.isDefined(markets, 'markets isn\'t defined');
		_chai.assert.isObject(markets, 'markets isn\'t an object');

		Object.keys(markets || {}).forEach(function (market) {
			_chai.assert.isDefined(markets[market], 'markets.market isn\'t defined');
			_chai.assert.isString(markets[market], 'markets.market isn\'t a string');
		});
	});

	describe('scalarShareDenomination.denominations', function () {
		var denominations = scalarShareDenomination.denominations;

		_chai.assert.isDefined(denominations, 'denominations isn\'t defined');
		_chai.assert.isArray(denominations, 'denominations isn\'t an array');

		(denominations || []).forEach(function (denomination) {
			_chai.assert.isDefined(denomination, 'denominations.denomination isn\'t defined');
			_chai.assert.isObject(denomination, 'denominations.denomination isn\'t an object');

			_chai.assert.isDefined(denomination.label, 'denomination.label isn\'t defined');
			_chai.assert.isString(denomination.label, 'denomination.label isn\'t a string');

			_chai.assert.isDefined(denomination.value, 'denomination.value isn\'t defined');
			_chai.assert.isString(denomination.value, 'denomination.value isn\'t a string');
		});
	});

	_chai.assert.isDefined(scalarShareDenomination.updateSelectedShareDenomination, 'updateSelectedShareDenomination isn\'t defined');
	_chai.assert.isFunction(scalarShareDenomination.updateSelectedShareDenomination, 'updateSelectedShareDenomination isn\'t a function');
};

var _chai = _dereq_('chai');

},{"chai":undefined}],46:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (searchSort) {
	_chai.assert.isDefined(searchSort, 'searchSort isn\'t defined');
	_chai.assert.isObject(searchSort, 'searchSort isn\'t an object');
	_chai.assert.isDefined(searchSort.onChangeSort, 'searchSort.onChangeSort isn\'t defined');
	_chai.assert.isFunction(searchSort.onChangeSort, 'searchSort.onChangeSort isn\'t a function');
	assertionSelectedSort(searchSort.selectedSort);
	assertionSortOptions(searchSort.sortOptions);
};

var _chai = _dereq_('chai');

function assertionSelectedSort(actual) {
	_chai.assert.isDefined(actual, 'selectedSort isn\'t defined');
	_chai.assert.isObject(actual, 'selectedSort isn\'t an Object');
	_chai.assert.isDefined(actual.prop, 'selectedSort.prop isn\'t defined');
	_chai.assert.isString(actual.prop, 'selectedSort.prop isn\'t a string');
	_chai.assert.isDefined(actual.isDesc, 'selectedSort.isDesc isn\'t defined');
	_chai.assert.isBoolean(actual.isDesc, 'selectedSort.isDesc isn\'t a boolean');
}

function assertionSortOptions(actual) {
	_chai.assert.isDefined(actual, 'sortOptions isn\'t defined');
	_chai.assert.isArray(actual, 'sortOptions isn\'t an array');

	_chai.assert.isDefined(actual[0], 'sortOptions[0] doesn\'t exist');
	_chai.assert.isObject(actual[0], 'sortOptions[0] isn\'t an object');
	_chai.assert.isDefined(actual[0].label, 'sortOptions[0].label isn\'t defined');
	_chai.assert.isString(actual[0].label, 'sortOptions[0].label isn\'t a string');
	_chai.assert.isDefined(actual[0].value, 'sortOptions[0].value isn\'t defined');
	_chai.assert.isString(actual[0].value, 'sortOptions[0].value isn\'t a string');
}

},{"chai":undefined}],47:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (selectedOutcome) {
	_chai.assert.isObject(selectedOutcome, 'selectedOutcome isn\'t an object');
	_chai.assert.isDefined(selectedOutcome.selectedOutcomeID, 'selectedOutcome isn\'t defined');
	_chai.assert.isFunction(selectedOutcome.updateSelectedOutcome, 'updateSelectedOutcome isn\'t a function');
	_chai.assert.isDefined(selectedOutcome.updateSelectedOutcome, 'updateSelectedOutcome isn\'t defined');
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],48:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (selectedUserOpenOrdersGroup) {
	describe('augur-ui-react-components selectedUserOpenOrdersGroup', function () {
		it('should exist', function () {
			_chai.assert.isDefined(selectedUserOpenOrdersGroup, 'selectedUserOpenOrdersGroup is empty.');
		});

		it('should be object', function () {
			_chai.assert.isObject(selectedUserOpenOrdersGroup, 'selectedUserOpenOrdersGroup is not object.');
		});

		describe('selectedUserOpenOrdersGroupID', function () {
			it('should exist', function () {
				_chai.assert.isDefined(selectedUserOpenOrdersGroup.selectedUserOpenOrdersGroupID, 'selectedUserOpenOrdersGroupID is not defined.');
			});
		});

		describe('updateSelectedUserOpenOrdersGroup', function () {
			it('should be function', function () {
				_chai.assert.isFunction(selectedUserOpenOrdersGroup.updateSelectedUserOpenOrdersGroup, 'updateSelectedUserOpenOrdersGroup is not function.');
			});
		});
	});
};

var _chai = _dereq_('chai');

;

},{"chai":undefined}],49:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (settings) {
	_chai.assert.isDefined(settings, 'settings isn\'t defined');
	_chai.assert.isObject(settings, 'settings isn\'t an object');

	// TODO -- needs to be fleshed out
};

var _chai = _dereq_('chai');

},{"chai":undefined}],50:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (siteHeader) {
	_chai.assert.isDefined(siteHeader, 'siteHeader isn\'t defined');
	_chai.assert.isObject(siteHeader, 'siteHeader isn\'t a object');
	(0, _loginAccount2.default)(siteHeader.loginAccount);
	(0, _activeView2.default)(siteHeader.activePage);
	(0, _positionsSummary2.default)(siteHeader.positionsSummary);
	(0, _transactionsTotals2.default)(siteHeader.transactionsTotals);
	(0, _isTransactionsWorking2.default)(siteHeader.isTransactionsWorking);
};

var _chai = _dereq_('chai');

var _loginAccount = _dereq_('./login-account');

var _loginAccount2 = _interopRequireDefault(_loginAccount);

var _activeView = _dereq_('./active-view');

var _activeView2 = _interopRequireDefault(_activeView);

var _positionsSummary = _dereq_('./positions-summary');

var _positionsSummary2 = _interopRequireDefault(_positionsSummary);

var _transactionsTotals = _dereq_('./transactions-totals');

var _transactionsTotals2 = _interopRequireDefault(_transactionsTotals);

var _isTransactionsWorking = _dereq_('./is-transactions-working');

var _isTransactionsWorking2 = _interopRequireDefault(_isTransactionsWorking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./active-view":2,"./is-transactions-working":16,"./login-account":22,"./positions-summary":43,"./transactions-totals":53,"chai":undefined}],51:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (tags) {

	_chai.assert.isDefined(tags, 'filters isn\'t defined');
	_chai.assert.isArray(tags, 'filters isn\'t an array');

	tags.forEach(function (tag) {
		_chai.assert.isDefined(tag, '[0].options[0] isn\'t defined');
		_chai.assert.isObject(tag, '[0].options[0] isn\'t a object');

		_chai.assert.isDefined(tag.name, '[0].options[0].name isn\'t defined');
		_chai.assert.isString(tag.name, '[0].options[0].name isn\'t a string');

		_chai.assert.isDefined(tag.value, '[0].options[0].value isn\'t defined');
		_chai.assert.isString(tag.value, '[0].options[0].value isn\'t a string');

		_chai.assert.isDefined(tag.numMatched, '[0].options[0].numMatched isn\'t defined');
		_chai.assert.isNumber(tag.numMatched, '[0].options[0].numMatched isn\'t a number');

		_chai.assert.isDefined(tag.isSelected, '[0].options[0].isSelected isn\'t defined');
		_chai.assert.isBoolean(tag.isSelected, '[0].options[0].isSelected isn\'t a boolean');

		_chai.assert.isDefined(tag.onClick, '[0].options[0].onClick isn\'t defined');
		_chai.assert.isFunction(tag.onClick, '[0].options[0].onClick isn\'t a function');
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],52:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (tradeCommitLock) {
	_chai.assert.isDefined(tradeCommitLock, 'tradeCommitLock is not defined');
	_chai.assert.isObject(tradeCommitLock, 'tradeCommitLock is not an object');

	it('isLocked', function () {
		_chai.assert.isDefined(tradeCommitLock.isLocked, '\'tradeCommitLock.isLocked\' is not defined');
		_chai.assert.isBoolean(tradeCommitLock.isLocked, '\'tradeCommitLock.isLocked\' is not a boolean');
	});
};

var _chai = _dereq_('chai');

},{"chai":undefined}],53:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (transactionsTotals) {
	_chai.assert.isObject(transactionsTotals);

	_chai.assert.isString(transactionsTotals.title);
	_chai.assert.isString(transactionsTotals.shortTitle);

	_chai.assert.isNumber(transactionsTotals.numWorking);
	_chai.assert.isNumber(transactionsTotals.numPending);
	_chai.assert.isNumber(transactionsTotals.numComplete);
	_chai.assert.isNumber(transactionsTotals.numWorkingAndPending);
	_chai.assert.isNumber(transactionsTotals.numTotal);
};

var _chai = _dereq_('chai');

},{"chai":undefined}],54:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (transactions) {
	_chai.assert.isDefined(transactions, 'transactions isn\'t defined');
	_chai.assert.isArray(transactions, 'transactions isn\'t an array');

	transactions.forEach(function (transaction) {
		return assertTransaction(transactions[0]);
	});
};

var _chai = _dereq_('chai');

function assertTransaction(transaction) {
	_chai.assert.isString(transaction.id);
	_chai.assert.isString(transaction.type);
	_chai.assert.isString(transaction.status);
	if (transaction.data) {
		_chai.assert.isObject(transaction);
	}
}

},{"chai":undefined}],55:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (url) {
	_chai.assert.isDefined(url, 'url isn\'t defined');
	_chai.assert.isString(url, 'url isn\'t a string');
};

var _chai = _dereq_('chai');

},{"chai":undefined}]},{},[1])(1)
});
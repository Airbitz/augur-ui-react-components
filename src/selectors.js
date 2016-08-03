import activePage from './selectors/active-page';
import authForm from './selectors/auth-form';
import orderCancellation from './selectors/order-cancellation';
import createMarketForm from './selectors/create-market-form';
import filters from './selectors/filters';
import keywords from './selectors/keywords';
import links from './selectors/links';
import loginAccount from './selectors/login-account';
import market from './selectors/market';
import markets from './selectors/markets';
import marketsTotals from './selectors/markets-totals';
import positionsMarkets from './selectors/positions-markets';
import positionsSummary from './selectors/positions-summary';
import transactions from './selectors/transactions';
import transactionsTotals from './selectors/transactions-totals';
import url from './selectors/url';
import portfolio from './selectors/portfolio';
import portfolioNavItems from './selectors/portfolio-nav-items';
import loginAccountMarkets from './selectors/login-account-markets';

// all selectors should go here
const selectors = {
	activePage,
	authForm,
	orderCancellation,
	createMarketForm,
	filters,
	keywords,
	links,
	loginAccount,
	market,
	markets,
	marketsTotals,
	positionsSummary,
	positionsMarkets,
	transactions,
	transactionsTotals,
	url,
	portfolio,
	portfolioNavItems,
	loginAccountMarkets
};

// add update helper fn to selectors object
Object.defineProperty(selectors, 'update', {
	value: (newState = {}) => {
		console.log('*** update', newState);
		Object.keys(newState).forEach(key => {
			selectors[key] = newState[key];
		});
		selectors.render();
	},
	enumerable: false
});

selectors.isTransactionsWorking = false;

selectors.searchSort = {
	selectedSort: { prop: 'creationDate', isDesc: true },
	sortOptions: [{ label: 'Creation Date', value: 'creationDate' }, { label: 'End Date', value: 'endDate' }, { label: 'Highest Maker Fee', value: 'makerFeePercent' }]
};

selectors.marketsHeader = {};

selectors.selectedOutcome = {
	updateSelectedOutcome: (selectedOutcomeID) => {
		module.exports.update({
			selectedOutcome: {
				...selectors.selectedOutcome,
				selectedOutcomeID
			}
		});
	},
	selectedOutcomeID: null
};

selectors.searchSort.onChangeSort = (prop, isDesc) => {
	let isDescending = isDesc;
	if (isDesc !== false && isDesc !== true) {
		isDescending = selectors.searchSort.selectedSort.isDesc;
	}
	module.exports.update({
		searchSort: {
			...selectors.searchSort,
			selectedSort: {
				prop: prop || selectors.selectedSort.prop,
				isDesc: isDescending
			}
		}
	});
};
selectors.pagination = {
	numPerPage: 10,
	numPages: 10,
	selectedPageNum: 1,
	nextPageNum: 2,
	startItemNum: 1,
	endItemNum: 10,
	numUnpaginated: 89,
	nextItemNum: 11,
	onUpdateSelectedPageNum: (selectedPageNum) => module.exports.update({
		pagination: {
			...selectors.pagination,
			selectedPageNum,
			nextPageNum: selectedPageNum + 1,
			previousPageNum: selectedPageNum - 1,
			startItemNum: ((selectedPageNum - 1) * 10) + 1,
			endItemNum: selectedPageNum * 10,
			nextItemNum: selectedPageNum * 10 + 1,
			previousItemNum: ((selectedPageNum - 2) * 10) + 1
		}
	})
};

module.exports = selectors;

import React from 'react';
import { render } from 'react-dom';

import { ACCOUNT, MAKE, TRANSACTIONS, BALANCES, M, MY_POSITIONS, MY_MARKETS, MY_REPORTS, LOGIN_MESSAGE } from './modules/site/constants/pages';
import { REGISTER, LOGIN, LOGOUT, IMPORT } from './modules/auth/constants/auth-types';

import MarketsPage from './modules/markets/components/markets-page';
import MarketPage from './modules/market/components/market-page';
import CreateMarketPage from './modules/create-market/components/create-market-page';
import AuthPage from './modules/auth/components/auth-page';
import AccountPage from './modules/account/components/account-page';
import PortfolioPage from './modules/portfolio/components/portfolio-page';
import TransactionsPage from './modules/transactions/components/transactions-page';
import BalancesPage from './modules/balances/components/balances-page';
import LoginMessagePage from './modules/login-message/components/login-message-page';

export default function (appElement, selectors) {
	const p = selectors;
	const url = p.url;
	let node;
	let doScrollTop = false;

	if (url !== window.location.pathname + window.location.search) {
		window.history.pushState(null, null, url);
		doScrollTop = true;
	}

	p.siteHeader = {
		activePage: p.activePage,
		loginAccount: p.loginAccount,
		positionsSummary: p.positionsSummary,
		transactionsTotals: p.transactionsTotals,
		isTransactionsWorking: p.isTransactionsWorking,
		marketsLink: p.links && p.links.marketsLink || undefined,
		transactionsLink: p.links && p.links.transactionsLink || undefined,
		balancesLink: p.links && p.links.balancesLink || undefined,
		authLink: p.links && p.links.authLink || undefined,
		accountLink: p.links && p.links.accountLink || undefined,
		accountLinkText: p.loginAccount && p.loginAccount.linkText || undefined,
		myPositionsLink: p.links && p.links.myPositionsLink || undefined,
		portfolioTotals: p.portfolio && p.portfolio.totals || undefined
	};

	switch (p.activePage) {
	case REGISTER:
	case LOGIN:
	case IMPORT:
	case LOGOUT:
		node = (
			<AuthPage
				siteHeader={p.siteHeader}
				authForm={p.authForm}
			/>
		);
		break;

	case ACCOUNT:
		node = (
			<AccountPage
				loginMessageLink={p.links.loginMessageLink}
				siteHeader={p.siteHeader}
				account={p.loginAccount}
				onChangePass={p.loginAccount.onChangePass}
			/>
		);
		break;

	case MAKE:
		node = (
			<CreateMarketPage
				siteHeader={p.siteHeader}
				createMarketForm={p.createMarketForm}
			/>
		);
		break;

	case TRANSACTIONS:
		node = (
			<TransactionsPage
				siteHeader={p.siteHeader}
				transactions={p.transactions}
				transactionsTotals={p.transactionsTotals}
			/>
		);
		break;

	case BALANCES:
		node = (
			<BalancesPage
				siteHeader={p.siteHeader}
			/>
		);
		break;

	case M:
		node = (
			<MarketPage
				siteHeader={p.siteHeader}
				selectedOutcome={p.selectedOutcome}
				orderCancellation={p.orderCancellation}
				marketDataUpdater={p.marketDataUpdater}
				market={p.market}
				numPendingReports={p.marketsTotals.numPendingReports}
				isTradeCommitLocked={p.tradeCommitLock.isLocked}

			/>
		);
		break;

	case MY_POSITIONS:
	case MY_MARKETS:
	case MY_REPORTS:
		node = (
			<PortfolioPage
				siteHeader={p.siteHeader}
				{...p.portfolio}
			/>
		);
		break;

	case LOGIN_MESSAGE:
		node = (
			<LoginMessagePage
				siteHeader={p.siteHeader}
			/>
		);
		break;
	default:
		node = (
			<MarketsPage
				siteHeader={p.siteHeader}
				createMarketLink={(p.links || {}).createMarketLink}
				keywords={p.keywords && p.keywords.value}
				onChangeKeywords={p.keywords && p.keywords.onChangeKeywords}
				markets={p.markets}
				marketsHeader={p.marketsHeader}
				favoriteMarkets={p.favoriteMarkets}
				filters={p.filters}
				pagination={p.pagination}
				selectedSort={p.searchSort.selectedSort}
				sortOptions={p.searchSort.sortOptions}
				onChangeSort={p.searchSort.onChangeSort}
				loginAccount={p.loginAccount}
			/>
		);
		break;
	}

	render(
		node,
		appElement
	);

	if (doScrollTop) {
		window.scrollTo(0, 0);
		doScrollTop = false;
	}
}

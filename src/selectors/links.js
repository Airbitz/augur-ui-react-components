import { ACCOUNT, MARKETS, MAKE, TRANSACTIONS, M, MY_POSITIONS, MY_MARKETS, MY_REPORTS } from '../modules/site/constants/pages';
import { LOGIN } from '../modules/auth/constants/auth-types';

export default {
	marketsLink: { href: '/', onClick: (url) => require('../selectors').update({ activePage: MARKETS, url }) },
	transactionsLink: { href: '/transactions', onClick: (url) => require('../selectors').update({ activePage: TRANSACTIONS, url }) },
	marketLink: { href: '/market', onClick: (url) => require('../selectors').update({ activePage: M, url }) },
	previousLink: { href: '/', onClick: (url) => require('../selectors').update({ activePage: MARKETS, url }) },
	createMarketLink: { href: '/create', onClick: (url) => require('../selectors').update({ activePage: MAKE, url }) },
	accountLink: { href: '/account', onClick: (url) => require('../selectors').update({ activePage: ACCOUNT, url }) },
	myPositionsLink: { href: '/my-positions', onClick: (url) => require('../selectors').update({ activePage: MY_POSITIONS, url }) },
	myMarketsLink: { href: '/my-markets', onClick: (url) => require('../selectors').update({ activePage: MY_MARKETS, url }) },
	myReportsLink: { href: '/my-reports', onClick: (url) => require('../selectors').update({ activePage: MY_REPORTS, url }) },
	loginLink: {
    onClick: (url) => {
      require('../selectors').abc.openLoginWindow(function(result, account) {
      });
      return false;
    }
  },
	registerLink: {
    onClick: (url) => {
      require('../selectors').abc.openRegisterWindow(function(result, account) {
      });
      return false;
    }
  }
};

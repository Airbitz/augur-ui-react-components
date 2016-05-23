import React from 'react';
import classnames from 'classnames';

import { ACCOUNT, MARKETS, POSITIONS, TRANSACTIONS } from '../../site/constants/pages';
import { AUTH_TYPES } from '../../auth/constants/auth-types';

import Link from '../../link/components/link';
import ValueDenomination from '../../common/components/value-denomination';

module.exports = React.createClass({
	propTypes: {
		activePage: React.PropTypes.string,
		loginAccount: React.PropTypes.object,
		positionsSummary: React.PropTypes.object,
		transactionsTotals: React.PropTypes.object,
		isTransactionsWorking: React.PropTypes.bool,

		marketsLink: React.PropTypes.object,
		positionsLink: React.PropTypes.object,
		transactionsLink: React.PropTypes.object,
		authLink: React.PropTypes.object
	},

	render: function() {
		var p = this.props;

		return (
			<header className="site-header">
				<nav className="site-nav">
					<Link className={ classnames('site-nav-link', 'augur', { 'active': p.activePage === MARKETS }) } { ...p.marketsLink }>augur</Link>

					<span className="spacer">&nbsp;</span>

					{ !!p.loginAccount && !!p.loginAccount.id &&
						<Link className={ classnames('site-nav-link', POSITIONS, { 'active': p.activePage === POSITIONS }) } { ...p.positionsLink }>

							{ !!p.positionsSummary && !!p.positionsSummary.numPositions &&
								<ValueDenomination
									className="positions-num"
									{ ...p.positionsSummary.numPositions }
									formatted={ p.positionsSummary.numPositions.rounded }
									formattedValue={ p.positionsSummary.numPositions.roundedValue } />
							}

							 { !!p.positionsSummary && !!p.positionsSummary.gainPercent && p.positionsSummary.numPositions.roundedValue > 0 &&
								<ValueDenomination
									className="positions-gain"
									{ ...p.positionsSummary.gainPercent }
									formatted={ p.positionsSummary.gainPercent.rounded }
									formattedValue={ p.positionsSummary.gainPercent.roundedValue } />
							 }
						</Link>
					}
					{ !!p.loginAccount && !!p.loginAccount.id &&
						<Link className={ classnames('site-nav-link', TRANSACTIONS, { 'active': p.activePage === TRANSACTIONS }, { 'working': p.isTransactionsWorking }) }
							title={ p.loginAccount.realEther && 'real ether: ' + p.loginAccount.realEther.full }
							{ ...p.transactionsLink }>

								{ (!p.isTransactionsWorking || p.activePage === TRANSACTIONS) &&
									<ValueDenomination
										{ ...p.loginAccount.rep || {} }
										formatted={ p.loginAccount.rep && p.loginAccount.rep.rounded }
										formattedValue={ p.loginAccount.rep && p.loginAccount.rep.roundedValue } />
								}
								{ (!p.isTransactionsWorking || p.activePage === TRANSACTIONS) &&
									<ValueDenomination
										{ ...p.loginAccount.ether || {} }
										formatted={ p.loginAccount.ether && p.loginAccount.ether.rounded }
										formattedValue={ p.loginAccount.ether && p.loginAccount.ether.roundedValue } />
								}
								{ p.isTransactionsWorking && p.activePage !== TRANSACTIONS &&
									<span className="link-text">{ p.transactionsTotals.title }</span>
								}
						</Link>
					}

					{ p.loginAccount && p.loginAccount.id &&
						<Link className={ classnames('site-nav-link', { 'active': p.activePage === ACCOUNT }) } { ...p.accountLink }>
							Account
						</Link>
					}

					{ (p.loginAccount == null || p.loginAccount.id == null) &&
						<Link className={ classnames('site-nav-link', AUTH_TYPES[p.activePage], { 'active': !!AUTH_TYPES[p.activePage] }) } { ...p.authLink }>
							Sign Up / Login
						</Link>
					}
				</nav>
			</header>
		);
	}
});
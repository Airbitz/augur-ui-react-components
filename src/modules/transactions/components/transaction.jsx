import React from 'react';
import classnames from 'classnames';
import { CREATE_MARKET, BUY, SELL, BID, ASK, SUBMIT_REPORT, GENERATE_ORDER_BOOK } from '../../transactions/constants/types';
import { LOGIN, FUND_ACCOUNT } from '../../auth/constants/auth-types';
import ValueDenomination from '../../common/components/value-denomination';

const Transaction = (p) => {
	const nodes = {};

	switch (p.type) {
	case BUY:
	case BID:
	case SELL:
	case ASK:
		switch (p.type) {
		case BUY:
			nodes.action = 'BUY';
			break;
		case BID:
			nodes.action = 'BID';
			break;
		case SELL:
			nodes.action = 'SELL';
			break;
		case ASK:
			nodes.action = 'ASK';
			break;
		default:
			break;
		}
		nodes.description = (
			<span className="description">
				<span className="action">{nodes.action}</span>
				<ValueDenomination className="shares" {...p.data.numShares} />
				<span className="of">of</span>
				<span className="outcome-name">{p.data.outcomeName.substring(0, 35) + (p.data.outcomeName.length > 35 && '...' || '')}</span>
				<span className="at">@</span>
				<ValueDenomination className="avgPrice" {...p.data.avgPrice} />
				<br />
				<span className="market-description" title={p.data.marketDescription}>
					{p.data.marketDescription.substring(0, 100) + (p.data.marketDescription.length > 100 && '...' || '')}
				</span>
			</span>
		);
		break;
	case LOGIN:
		nodes.description = (
			<span className="description">
				Login
			</span>
		);
		break;
	case FUND_ACCOUNT:
		nodes.description = (
			<span className="description">
				Load free beta ether and rep
			</span>
		);
		break;
	case CREATE_MARKET:
		nodes.description = (
			<span className="description">
				<span>Make</span>
				<strong>{p.data.type}</strong>
				<span>market</span>
				<br />
				<span className="market-description" title={p.data.description}>{p.data.description.substring(0, 100) + (p.data.description.length > 100 && '...' || '')}</span>
			</span>
		);
		break;
	case SUBMIT_REPORT:
		nodes.description = (
			<span className="description">
				<span>Report</span>
				<strong>{p.data.outcome.name.substring(0, 35) + (p.data.outcome.name.length > 35 && '...' || '')}</strong>
				{!!p.data.isUnethical &&
					<strong className="unethical"> and Unethical</strong>
				}
				<br />
				<span className="market-description" title={p.data.market.description}>{p.data.market.description.substring(0, 100) + (p.data.market.description.length > 100 && '...' || '')}</span>
			</span>
		);
		break;
	case GENERATE_ORDER_BOOK:
		nodes.description = (
			<span className="description">
				<span>Generate Order Book</span>
				<br />
				<span className="market-description" title={p.data.description}>{p.data.description.substring(0, 100) + (p.data.description.length > 100 && '...' || '')}</span>
			</span>
		);
		break;
	default:
		nodes.description = (<span className="description">{p.type}</span>);
		break;
	}

	return (
		<article className={classnames('transaction-item', p.className, p.status)}>
			{p.index &&
				<span className="index">{`${p.index}.`}</span>
			}

			{nodes.description}

			<span className="value-changes">
				{!!p.gas && !!p.gas.value &&
					<ValueDenomination className="value-change gas" {...p.gas} prefix="gas:" />
				}
				{!!p.ether && !!p.ether.value &&
					<ValueDenomination className="value-change ether" {...p.ether} prefix="total:" />
				}
			</span>

			{p.status &&
				<div className="status-and-message">
					<span className="message">{p.message}</span>
					<br />
					<span className="status">{p.status}</span>
				</div>
			}
		</article>
	);
};

Transaction.propTypes = {
	className: React.PropTypes.string,
	index: React.PropTypes.number,
	type: React.PropTypes.string,
	status: React.PropTypes.string,
	data: React.PropTypes.object,
	shares: React.PropTypes.object,
	ether: React.PropTypes.object,
	gas: React.PropTypes.object
};

export default Transaction;

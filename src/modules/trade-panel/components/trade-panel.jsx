import React from 'react';
import TradePanelHeader from '../../../modules/trade-panel/components/trade-panel-header';
import TradePanelFooter from '../../../modules/trade-panel/components/trade-panel-footer';
import TradePanelBody from '../../../modules/trade-panel/components/trade-panel-body';

const TradePanel = (p) => (
		<div
			className="trade-panel"
			onClick={() => p.updateSelectedOutcome(null)}
		>
			<table className="trade-builder">
				<TradePanelHeader selectedOutcomeID={p.selectedOutcomeID} />
				{p.tradeOrders && !!p.tradeOrders.length &&
					<TradePanelFooter summary={p.tradeSummary} />
				}
				<TradePanelBody
					outcomes={p.outcomes}
					sideOptions={p.sideOptions}
					selectedOutcomeID={p.selectedOutcomeID}
					updateSelectedOutcome={p.updateSelectedOutcome}
				/>
			</table>
			<div className="place-trade-container">
				<button
					className="button place-trade"
					disabled={!p.tradeOrders || !!!p.tradeOrders.length}
					onClick={p.onSubmitPlaceTrade}
				>
					Place Trade{p.tradeOrders && p.tradeOrders.length > 1 ? 's' : ''}
				</button>
			</div>
		</div>
);

TradePanel.propTypes = {
	outcomes: React.PropTypes.array,
	updateSelectedOutcome: React.PropTypes.func,
	selectedOutcomeID: React.PropTypes.string,
	tradeOrders: React.PropTypes.array,
	tradeSummary: React.PropTypes.object,
	sideOptions: React.PropTypes.array,
	onSubmitPlaceTrade: React.PropTypes.func
};

export default TradePanel;
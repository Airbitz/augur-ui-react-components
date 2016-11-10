import React from 'react';

import Dropdown from 'modules/common/components/dropdown';
import MarketProperties from 'modules/market/components/market-properties';

import { SCALAR } from 'modules/markets/constants/market-types';

const MarketDataHeader = p => (
	<article className="market-header">
		<div className="market-header-info">
			<h3>{p.description}</h3>
			<MarketProperties {...p} />
		</div>
		<div className="market-header-actions">
			{p.marketType === SCALAR && !p.isPendingReport &&
				<Dropdown
					default={p.selectedShareDenomination}
					options={p.shareDenominations}
					onChange={(denomination) => { p.updateSelectedShareDenomination(p.marketID, denomination); }}
				/>
			}
		</div>
	</article>
);

export default MarketDataHeader;
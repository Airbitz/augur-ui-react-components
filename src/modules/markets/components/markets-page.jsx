import React, { Component, PropTypes } from 'react';
import shouldComponentUpdatePure from '../../../utils/should-component-update-pure';
import SiteHeader from '../../site/components/site-header';
import SiteFooter from '../../site/components/site-footer';
import SearchSort from '../../../modules/common/components/search-sort';
import Markets from '../../markets/components/markets';

export default class MarketsPage extends Component {
	static propTypes = {
		className: PropTypes.string,
		siteHeader: PropTypes.object,
		createMarketLink: PropTypes.object,
		markets: PropTypes.array,
		favoriteMarkets: PropTypes.array,
		marketsHeader: PropTypes.object,
		keywords: PropTypes.string,
		filters: PropTypes.array,
		pagination: PropTypes.object,
		selectedSort: PropTypes.object,
		sortOptions: PropTypes.array,
		onChangeKeywords: PropTypes.func,
		onChangeSort: PropTypes.func
	};
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = shouldComponentUpdatePure;
	}


	render() {
		const p = this.props;
		return (
			<div className="page markets">
				<SiteHeader {...p.siteHeader} />

				<header className="page-header">
					<div className="l-container">
						<span className="big-line">Augur lets you trade any market</span>.
						Find a market you can beat,
						and buy shares on the side that <b><i>you think</i></b> should go up.
						When you&apos;re right, you make money.
					</div>
				</header>

				<div className="page-content">
					<SearchSort
						keywords={p.keywords}
						selectedSort={p.selectedSort}
						sortOptions={p.sortOptions}
						onChangeKeywords={p.onChangeKeywords}
						onChangeSort={p.onChangeSort}
					/>
					<Markets className="page-content markets-content" {...p} />
				</div>

				<SiteFooter />
			</div>
		);
	}
}

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ValueDenomination = (p) => (
	<span
		className={classnames('value-denomination', p.className, { positive: p.formattedValue > 0, negative: p.formattedValue < 0 })}
		title={p.title && p.title || ''}
	>
		{p.prefix &&
			<span className="prefix">{p.prefix}</span>
		}
		{p.formatted &&
			<span className="value">{p.formatted}</span>
		}
		{p.denomination &&
			<span className="denomination">{p.denomination}</span>
		}
	</span>
);

ValueDenomination.propTypes = {
	className: PropTypes.string,
	value: PropTypes.number,
	formattedValue: PropTypes.number,
	formatted: PropTypes.string,
	denomination: PropTypes.string,
	prefix: PropTypes.string,
	title: PropTypes.string
};

export default ValueDenomination;

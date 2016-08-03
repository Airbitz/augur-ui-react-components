import { assert } from 'chai';
import assertFormattedNumber from '../../test/assertions/common/formatted-number';
import assertEndDate from '../../test/assertions/common/end-date';

export default function (loginAccountMarkets){
	describe(`augur-ui-react-components loginAccountMarket's shape`, () => {
		assert.isDefined(loginAccountMarkets);
		assert.isArray(loginAccountMarkets);

		loginAccountMarkets.forEach(report => { assertLoginAccountMarkets(report) });
	});
};

export function assertLoginAccountMarkets(report) {
	describe(`report's shape`, () => {
		it('description', () => {
			assert.isDefined(report.description);
			assert.isString(report.description);
		});

		it('outcome', () => {
			assert.isDefined(report.outcome);

			report.outcome != null && assert.isString(report.outcome);
		});

		it('outcomePercentage', () => {
			assert.isDefined(report.outcomePercentage);

			assertFormattedNumber(report.outcomePercentage, 'report.fees');
		});

		it('reported', () => {
			assert.isDefined(report.reported);
			assert.isString(report.reported);
		});

		it('isReportEqual', () => {
			assert.isDefined(report.isReportEqual);
			assert.isBoolean(report.isReportEqual);
		});

		it('feesEarned', () => {
			assert.isDefined(report.feesEarned);

			assertFormattedNumber(report.feesEarned, 'report.feesEarned');
		});

		it('repEarned', () => {
			assert.isDefined(report.repEarned);

			assertFormattedNumber(report.repEarned, 'report.repEarned');
		});

		it('endDate', () => {
			assert.isDefined(report.endDate);

			assertEndDate(report.endDate, 'report.endDate');
		});

		it('isChallangeable', () => {
			assert.isDefined(report.isChallengeable);
			assert.isBoolean(report.isChallengeable);
		});
	});
};

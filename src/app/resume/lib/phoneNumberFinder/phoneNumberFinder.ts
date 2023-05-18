
import { injectable } from '@leapjs/common';
@injectable()
export class MobileNumberFinder {
	public async extractMobileNumberFromText(text: string) {
		// Regular expression pattern to match mobile numbers
		const mobileNumberRegex = /(\+\d{1,3})?[ -]?(\d{3})?[ -]?(\d{3})[ -]?(\d{4})/;
		// Find the first occurrence of a mobile number in the text
		const match = text.match(mobileNumberRegex);
		// Extract the mobile number if a match is found
		const mobileNumber = match ? match[0] : null;
		return mobileNumber;
	}
}

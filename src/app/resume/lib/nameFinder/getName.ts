import {injectable} from "@leapjs/common";
@injectable()
export class NameExtract {
	extractNameFromText(text: string) {

		// Regular expression pattern to match a name
		const nameRegex = /([A-Z][a-z]+)\s+([A-Z][a-z]+)/;

		// Check if the extracted text matches the name pattern
		const match = text.match(nameRegex);
		if (match) {
			const firstName = match[1];
			const lastName = match[2];
			console.log("First Name: " + firstName);
			console.log("Last Name: " + lastName);
			return {firstName,lastName}
		} else {
			return ("No name found");
		}
	}
}

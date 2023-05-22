import {injectable} from "@leapjs/common";
@injectable()
export class NameExtract {
	extractNameFromText(text: string) {
		// const namePattern = /\b[A-Z]+\b/;
		const namePattern = /\b[A-Z][a-zA-Z\s]+/; // Pattern to match the name

		const matches = text.match(namePattern);

		if (matches && matches.length > 0) {
			const name = matches[0].trim();
			const lines = name.split("\n");
			const t: any = lines.shift();
			return t.trim();
		} else {
			return "Name not found";
		}
	}
}

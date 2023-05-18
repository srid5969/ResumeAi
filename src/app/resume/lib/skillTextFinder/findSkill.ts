import {injectable} from "@leapjs/common";

@injectable()
export class SkillFinder {
	public async extractSkillsFromText(text: string) {
		// List of skills you want to extract
		const skillKeywords = ["Java", "nodejs"]; //arrays of skills
		// Extract skills based on keyword matching
		const extractedSkills = skillKeywords.filter((keyword) => text.toLowerCase().includes(keyword.toLowerCase()));
		return extractedSkills;
	}
}

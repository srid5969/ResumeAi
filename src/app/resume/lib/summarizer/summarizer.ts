import {injectable} from "@leapjs/common";

@injectable()
export class Summarizer {
	public async summarizeUsingSkillPoints(skills: string[]) {
		return `I have experience in ${skills.toString()}`;
	}
}

import {injectable, inject} from "@leapjs/common";
import {File} from "buffer";
import pdfParse from "pdf-parse";
import {EmailFinder} from "app/resume/lib/emailFinder/emailFinder";
import {MobileNumberFinder} from "app/resume/lib/phoneNumberFinder/phoneNumberFinder";
import {AddressFinderService} from "app/resume/lib/addressFinder/addressFinderLib";
import { NameExtract } from "app/resume/lib/nameFinder/getName";
import { SkillFinder } from "app/resume/lib/skillTextFinder/findSkill";
import { Summarizer } from '../lib/summarizer/summarizer';

@injectable()
export class ResumeService {
	@inject(NameExtract)
	private readonly nameExtractLib!: NameExtract;
	@inject(EmailFinder)
	private readonly emailExtractLib!: EmailFinder;
	@inject(MobileNumberFinder)
	private readonly numberExtractLib!: MobileNumberFinder;
	@inject(AddressFinderService)
	private readonly addressExtractLib!: AddressFinderService;
	@inject(SkillFinder)
	private readonly skillExtractLib!: SkillFinder;
	@inject(Summarizer)
	private readonly skillSummarizeLib!: Summarizer;
	

	/**
	 * @param file 
	 * @returns readable text 
	 */
	public async readPDF(file: any): Promise<string> {
		const data = await pdfParse(file);
		return data.text;
	}

	/**
	 * @param pdf 
	 * @returns processed result of the pdf file
	 */
	public async getDetailsFromPdf(pdf: File): Promise<any> {
		//read pdf
		const text		 = await this.readPDF(pdf);
		//get name from text
		const name 		 = await this.nameExtractLib    .extractNameFromText(text);
		const email		 = await this.emailExtractLib   .extractEmailFromText(text);
		const number	 = await this.numberExtractLib  .extractMobileNumberFromText(text);
		const address	 = await this.addressExtractLib .extractAddressFromText(text);
		const skill		 = await this.skillExtractLib   .extractSkillsFromText(text)
		const summary    = await this.skillSummarizeLib .summarizeUsingSkillPoints(skill)
		//summarize using skill points
		return {name, email, number, address,skill,summary};
	}
}

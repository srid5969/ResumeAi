import {Controller, File, Post, Req, Res, UseBefore} from "@leapjs/router";
import {Response} from "express";
import multer from "multer";
import {ResumeService} from "../service/resumeAi";
import {inject} from "@leapjs/common";

const storage = multer.memoryStorage();
const upload = multer({storage, dest: "uploads/"});
@Controller("/resume")
export class ResumeAiController {
	@inject(ResumeService || "ResumeService") private readonly service!: ResumeService;
	@UseBefore(upload.single("resume"))
	@Post("/files")
	public async postResume(@Req() req: any, @File({}, "resume") file: any, @Res() res: Response): Promise<Response> {
		return res.send(await this.service.getDetailsFromPdf(file.buffer));
	}
}

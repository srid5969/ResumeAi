import {injectable} from "@leapjs/common";

@injectable()
export class SkillFinder {
	public async extractSkillsFromText(text: string) {
		// List of skills you want to extract
		const webDevelopmentExperience = ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue", "Node.js", "Express.js", "RESTful APIs", "MongoDB", "MySQL", "Git"];
		const mobileDevelopmentExperience = ["React Native", "Flutter", "Swift", "Java", "Kotlin", "Objective-C", "iOS", "Android", "Firebase", "RESTful APIs", "Git"];
		const dataScienceExperience = ["Python", "R", "Machine Learning", "Data Visualization", "Statistics", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Tableau"];
		const cloudComputingExperience = ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "Serverless Computing", "Infrastructure as Code", "Networking", "Security", "DevOps"];
		const uiUxDesignExperience = ["User Research", "Wireframing", "Prototyping", "Adobe XD", "Sketch", "Figma", "Usability Testing", "Information Architecture", "Interaction Design", "Visual Design"];
		const projectManagementExperience = ["Agile", "Scrum", "Kanban", "Waterfall", "Project Planning", "Risk Management", "Stakeholder Communication", "Budgeting", "Resource Allocation", "Jira"];

		const skillKeywords = [webDevelopmentExperience, mobileDevelopmentExperience, dataScienceExperience, cloudComputingExperience, uiUxDesignExperience, projectManagementExperience].flatMap((data) => data); //arrays of skills
		// Extract skills based on keyword matching
		const extractedSkills = skillKeywords.filter((keyword) => text.toLowerCase().includes(keyword.toLowerCase()));
		return extractedSkills;
	}
}

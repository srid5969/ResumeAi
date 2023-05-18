
import { injectable } from '@leapjs/common';

@injectable()
export class EmailFinder{
    public async extractEmailFromText(text:string) {
        // Regular expression pattern to match email addresses
        const emailRegex = /[\w.-]+@[\w.-]+\.[\w.-]+/;
         // Find the first occurrence of an email address in the text
        const match = text.match(emailRegex);
         // Extract the email if a match is found
        const email = match ? match[0] : null;
         return email;
      }
     
}
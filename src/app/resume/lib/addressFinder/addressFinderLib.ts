import { injectable } from '@leapjs/common';

@injectable()
export class AddressFinderService{
  public async  extractAddressFromTextWitPoneAndEmail(text:string) {
        // Regular expression pattern to match addresses
        const addressRegex = /([A-Za-z0-9\s\.,-]+)\s+([A-Za-z0-9\s\.,-]+)\s+([A-Za-z0-9\s\.,-]+)\s+([A-Za-z0-9\s\.,-]+)/;
         // Find the first occurrence of an address in the text
        const match = text.match(addressRegex);
         // Extract the address if a match is found
        const address = match ? match[0] : null;
         return address;
      }
      public async  extractAddressFromText(text:string) {
            // Regular expression pattern to match addresses
            const addressRegex = /([A-Za-z0-9\s\.,-]+)\s+([A-Za-z0-9\s\.,-]+)\s+([A-Za-z0-9\s\.,-]+)\s+([A-Za-z0-9\s\.,-]+)/;
             // Find the first occurrence of an address in the text
            const match = text.match(addressRegex);
             // Extract the address if a match is found
            const address = match ? match[0] : null;
             return address;
          }
     
}

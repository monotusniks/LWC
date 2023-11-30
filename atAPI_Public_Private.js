import { LightningElement, api } from 'lwc';

export default class AtAPI_Public_Private extends LightningElement {
    
    message = 'Public Property';
    @api recordId;

}

 
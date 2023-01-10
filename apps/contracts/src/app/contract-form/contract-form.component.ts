import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent {
  djName = '';
  djEmail = '';
  djPhone = '';
  clientName = '';
  clientEmail = '';
  clientPhone = '';
  eventDate!: Date;
  eventLocation = '';
  music = false;
  lighting = false;
  soundEquipment = false;
  fee = 0;
  paymentTerms = '';

  onSubmit() {
    // Generate the contract document using the form values
  }
}
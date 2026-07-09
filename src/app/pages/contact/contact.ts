import { Component } from '@angular/core';
import { BusinessInfo } from '../../components/contact/business-info/business-info';
import { ContactForm } from '../../components/contact/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [BusinessInfo, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}

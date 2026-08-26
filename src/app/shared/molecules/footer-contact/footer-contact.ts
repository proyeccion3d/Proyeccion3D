import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.html',
  styleUrl: './footer-contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContact {
  contactInfo = {
    title: 'Contáctanos',
    address: {
      street: 'Cra. 23 #59-70, Local 36',
      suite: 'Multicentro Estrella, primer piso',
      city: 'Manizales, Caldas, Colombia'
    },
    phone: '+57 316 5882153',
    whatsapp: '573165882153',
    email: 'proyeccion3d.admi@gmail.com'
  };
}

import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { EmbeddedMapData, EmbeddedMap } from '../../molecules/embedded-map/embedded-map';

@Component({
  selector: 'app-contact-location-section',
  imports: [EmbeddedMap],
  templateUrl: './contact-location-section.html',
  styleUrl: './contact-location-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactLocationSection {
  mapData = signal<EmbeddedMapData>({
    src: 'https://www.google.com/maps?q=Cra.%2023%20%2359-70%2C%20Local%2036%2C%20Multicentro%20Estrella%2C%20Manizales%2C%20Caldas&output=embed',
    title: 'Proyección 3D en Manizales',
    address: 'Cra. 23 #59-70, Local 36, Multicentro Estrella, Manizales, Caldas',
    description: 'Taller de impresión 3D y diseño especializado'
  });
}

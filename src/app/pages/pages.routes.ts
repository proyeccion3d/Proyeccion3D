import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Service } from './service/service';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home,
        data: {
          title: 'Ingeniería e Impresión 3D en Manizales',
          description: 'Ingeniería, impresión 3D, escaneo 3D, diseño mecánico y simulación FEA en Manizales, con atención en Colombia. Cotiza tu proyecto con Proyección 3D.',
          keywords: 'impresión 3D Manizales, ingeniería 3D Manizales, ingeniería inversa, escaneo 3D láser, diseño mecánico, simulación FEA, manufactura aditiva Colombia',
          image: 'https://proyeccion3d.com/assets/images/projects/HeaderProyeccion.webp',
          type: 'website',
        }
      },
      {
        path: 'about',
        component: About,
        data: {
          title: 'Empresa de Ingeniería 3D en Manizales',
          description: 'Conoce al equipo de Proyección 3D en Manizales: experiencia en manufactura aditiva, ingeniería inversa, simulación FEA y diseño mecánico para la industria.',
          keywords: 'empresa ingeniería Manizales, equipo ingenieros, Proyección 3D, manufactura aditiva, diseño mecánico Colombia, empresa BIC',
          image: 'https://proyeccion3d.com/assets/images/Nuestra_historia.webp',
          type: 'website',
        }
      },
      {
        path: 'service',
        component: Service,
        data: {
          title: 'Servicios de Ingeniería 3D en Manizales',
          description: 'Escaneo e ingeniería inversa, simulación FEA, diseño mecánico, impresión 3D, plantas industriales, piping, planos y fotogrametría. Solicita una cotización.',
          keywords: 'servicios ingeniería Manizales, ingeniería inversa, escaneo 3D láser, simulación FEA, diseño mecánico, impresión 3D, piping P&ID, fotogrametría dron',
          image: 'https://proyeccion3d.com/assets/images/projects/Fotogrametria/Fotogrametria.webp',
          type: 'website',
        }
      },
      {
        path: 'project',
        component: Projects,
        data: {
          title: 'Proyectos de Ingeniería y Diseño 3D',
          description: 'Explora proyectos de análisis FEA, diseño mecánico, ingeniería conceptual, planos estructurales, ingeniería inversa, impresión 3D y fotogrametría.',
          keywords: 'portafolio ingeniería, proyectos diseño mecánico, casos éxito FEA, ingeniería inversa Colombia, impresión 3D industrial, Ternium, planos estructurales, proyectos manufactura',
          image: 'https://proyeccion3d.com/assets/images/projects/Diseño_mecanico/diseno-mecanico-8.webp',
          type: 'website',
        }
      },
      {
        path: 'contact',
        component: Contact,
        data: {
          title: 'Contacto y Cotizaciones en Manizales',
          description: 'Cotiza impresión 3D, diseño mecánico o ingeniería inversa en Manizales. Visítanos en Multicentro Estrella, Local 36, o escríbenos por WhatsApp.',
          keywords: 'contacto Proyección 3D, cotización impresión 3D Manizales, cotización ingeniería, Multicentro Estrella, diseño mecánico Caldas',
          image: 'https://proyeccion3d.com/assets/images/photo-1581092160607-ee22621dd758.avif',
          type: 'website',
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];
export default pagesRoutes;

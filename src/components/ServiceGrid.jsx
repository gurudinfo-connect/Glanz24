import { ArrowRight } from 'lucide-react';
import { services } from '../data/services.js';
import { getImage } from '../utils/images.js';
import Illustration from './Illustration.jsx';

export default function ServiceGrid() {
  return (
    <div className="card-grid">
      {services.map((s) => {
        const Icon = s.icon;
        const img = getImage(s.slug);
        return (
          <a key={s.slug} href={'#' + s.slug} className="card">
            <div className="card-top">
              <div className="card-photo">
                {img ? <img src={img} alt="" loading="lazy" data-slug={s.slug} /> : <Illustration name={s.slug} label={s.title} />}
              </div>
              <div className="card-icon"><Icon size={30} strokeWidth={1.6} aria-hidden="true" /></div>
            </div>
            <div className="card-body">
              <h3>{s.title}</h3>
              <p>{s.cardText}</p>
              <span className="card-more">Mehr erfahren <ArrowRight size={15} aria-hidden="true" /></span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

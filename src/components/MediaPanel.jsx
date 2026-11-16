import { getImage } from '../utils/images.js';
import Illustration from './Illustration.jsx';

// Zeigt ein echtes Foto, falls vorhanden (src/assets/images/<name>.jpg|png|webp),
// sonst die passende Vektor-Illustration – nie ein defektes Bild.
export default function MediaPanel({ name, alt = '', className = '' }) {
  const src = getImage(name);
  return (
    <div className={'media ' + className}>
      {src ? <img src={src} alt={alt} loading="lazy" data-slug={name} /> : <Illustration name={name} label={alt} />}
    </div>
  );
}

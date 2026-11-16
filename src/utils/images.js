// Fotos optional: Lege Dateien in src/assets/images/ ab, z. B.
//   hero.jpg, gebaeudemanagement.jpg, it-services.jpg, automobile.jpg,
//   unfallfahrzeuge.jpg, personalvermittlung.jpg, import-export.jpg
// Fehlt ein Foto, zeigt die Seite automatisch ein sauberes Icon-Feld (kein defektes Bild).
const files = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function getImage(name) {
  const key = Object.keys(files).find((k) => {
    const file = k.split('/').pop();
    return file.substring(0, file.lastIndexOf('.')) === name;
  });
  return key ? files[key] : null;
}

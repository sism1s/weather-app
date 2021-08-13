export const compassSector = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
];

export function dayname(date) {
  return new Date(date * 1000)
    .toLocaleDateString('en', {
      weekday: 'long',
    })
    .substring(0, 3);
}

export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

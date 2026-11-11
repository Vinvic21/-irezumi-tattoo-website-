// Single source of truth. Keep in sync with the JSON-LD block in index.html.
export const business = {
  name: 'Irezumi Tattoo',
  phone: '+1 816-363-6396',
  phoneHref: 'tel:+18163636396',
  street: '7406 Wornall Rd',
  city: 'Kansas City',
  region: 'MO',
  postalCode: '64114',
  country: 'US',
  locatedIn: 'K9 Closet',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=7406+Wornall+Rd+Kansas+City+MO+64114',
  instagram: 'https://www.instagram.com/irezumitattoos/',
  facebook: 'https://www.facebook.com/p/Irezumi-Tattoo-100064592083545/',
  timeZone: 'America/Chicago',
  // Times are 24h. Order matches Date#getDay (0 = Sunday).
  hours: [
    { day: 'Sunday', open: 12, close: 18, label: '12 pm – 6 pm' },
    { day: 'Monday', open: 11, close: 19, label: '11 am – 7 pm' },
    { day: 'Tuesday', open: 11, close: 22, label: '11 am – 10 pm' },
    { day: 'Wednesday', open: 11, close: 22, label: '11 am – 10 pm' },
    { day: 'Thursday', open: 11, close: 22, label: '11 am – 10 pm' },
    { day: 'Friday', open: 11, close: 23, label: '11 am – 11 pm' },
    { day: 'Saturday', open: 11, close: 23, label: '11 am – 11 pm' },
  ],
}
export const services = [
  { title: 'Tattoos', text: 'Color and traditional-style tattoo work, from bold flash-inspired pieces to detailed one-offs. Browse the gallery below for examples from the shop.' },
  { title: 'Piercing', text: 'Body piercing performed in the studio. Call or message the shop to ask about a specific piercing before you visit.' },
  { title: 'Body jewelry', text: 'A glass display case in the shop holds body jewelry to choose from.' },
]

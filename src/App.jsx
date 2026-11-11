import { Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import Header from './components/Header'
import Hours from './components/Hours'
import Footer from './components/Footer'
import { business as b, services } from './data/businessInfo'
import exterior from './assets/img/exterior.webp'
import lounge from './assets/img/lounge.webp'
import stairs from './assets/img/entry-stairs.webp'
import heart from './assets/img/heart-tattoo.webp'
import sunflower from './assets/img/sunflower-tattoo.webp'
import room from './assets/img/tattoo-room.webp'
import jewelry from './assets/img/jewelry-case.webp'
import sign from './assets/img/sign.webp'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero" id="top"><div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Irezumi Tattoo</h1>
            <p className="lead">Tattoos and piercing in a bright yellow building on Wornall Road, Kansas City, Missouri.</p>
            <div className="actions">
              <a className="btn" href={b.phoneHref}><Phone size={18} aria-hidden="true" /> Call {b.phone}</a>
              <a className="btn btn-ghost" href={b.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> Get directions</a>
            </div>
          </div>
          <figure className="frame"><img src={exterior} width="683" height="737" alt="Yellow stucco building with a black awning reading Irezumi Tattoo, and a street sign for Irezumi Tattoo and K9 Closet pet boutique" fetchPriority="high" /></figure>
        </div></section>

        <section id="about" className="sec"><div className="wrap two">
          <div>
            <h2>About the shop</h2>
            <p>Irezumi Tattoo is a tattoo shop at {b.street} in Kansas City, located in the same building as {b.locatedIn}, a pet boutique. Look for the Irezumi sign by the sidewalk and the black awning over the front door.</p>
            <p>Inside, the front lounge has a pool table and framed flash and large-scale artwork on the walls. The entry hall has a staircase and a few unexpected antiques. The tattooing happens in a separate room.</p>
          </div>
          <div className="stack">
            <img src={lounge} width="683" height="737" loading="lazy" alt="Front lounge with a pool table, framed tattoo flash on the walls, and framed back-piece designs in the foreground" />
            <img src={stairs} width="683" height="737" loading="lazy" alt="Entry hall with a wooden staircase, a cuckoo clock, and a vintage pink motorbike" />
          </div>
        </div></section>

        <section id="services" className="sec alt"><div className="wrap">
          <h2>Services</h2>
          <ul className="cards">{services.map(s => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}</ul>
          <figure className="wide"><img src={jewelry} width="676" height="611" loading="lazy" alt="Glass display case of body jewelry in front of a Kansas City poster" /></figure>
        </div></section>

        <section id="gallery" className="sec"><div className="wrap">
          <h2>Gallery</h2>
          <div className="gallery">
            <figure><img src={heart} width="683" height="737" loading="lazy" alt="Color tattoo of a sacred heart with an eye, surrounded by daggers and teardrops, on an upper arm" /></figure>
            <figure><img src={sunflower} width="683" height="737" loading="lazy" alt="Color sunflower tattoo on a lower leg, below a biplane tattoo" /></figure>
            <figure><img src={room} width="1100" height="677" loading="lazy" alt="Tattoo room with a black reclining chair, instrument tray, and framed art on green walls" /></figure>
          </div>
        </div></section>

        <section id="visit" className="sec alt"><div className="wrap two">
          <div>
            <h2>Visit or get in touch</h2>
            <address>
              <p><strong>{b.name}</strong><br />{b.street}<br />{b.city}, {b.region} {b.postalCode}<br /><em>Located in {b.locatedIn}</em></p>
              <p>Phone: <a href={b.phoneHref}>{b.phone}</a></p>
            </address>
            <p>The quickest way to reach the shop is by phone. You can also message on social media.</p>
            <div className="actions">
              <a className="btn" href={b.phoneHref}><Phone size={18} aria-hidden="true" /> Call</a>
              <a className="btn btn-ghost" href={b.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> Directions</a>
              <a className="btn btn-ghost" href={b.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" /> Instagram</a>
              <a className="btn btn-ghost" href={b.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18} aria-hidden="true" /> Facebook</a>
            </div>
          </div>
          <div><h3>Hours</h3><Hours />
            <img className="sign" src={sign} width="1003" height="705" loading="lazy" alt="Roadside sign for Irezumi Tattoo and K9 Closet Pet Boutique" /></div>
        </div></section>
      </main>
      <Footer />
    </>
  )
}

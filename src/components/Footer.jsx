import { business as b } from '../data/businessInfo'
export default function Footer() {
  return (
    <footer className="site-footer"><div className="wrap foot">
      <div><strong>{b.name}</strong>
        <address>{b.street}, {b.city}, {b.region} {b.postalCode}<br /><a href={b.phoneHref}>{b.phone}</a></address></div>
      <nav aria-label="Footer"><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#visit">Visit</a>
        <a href={b.instagram} rel="noopener noreferrer" target="_blank">Instagram</a><a href={b.facebook} rel="noopener noreferrer" target="_blank">Facebook</a></nav>
      <p className="copy">© {new Date().getFullYear()} {b.name}. All rights reserved.</p>
    </div></footer>
  )
}

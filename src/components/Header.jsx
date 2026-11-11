import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { business } from '../data/businessInfo'
const links = [['About','#about'],['Services','#services'],['Gallery','#gallery'],['Visit','#visit']]
export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a href="#top" className="brand">{business.name}</a>
        <nav id="nav" className={open ? 'open' : ''} aria-label="Main">
          {links.map(([l,h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <a className="btn btn-sm" href={business.phoneHref}><Phone size={16} aria-hidden="true" /> Call</a>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

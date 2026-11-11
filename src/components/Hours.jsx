import { business } from '../data/businessInfo'
function nowInShop() {
  const p = new Intl.DateTimeFormat('en-US', { timeZone: business.timeZone, weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date())
  const g = t => p.find(x => x.type === t).value
  return { day: g('weekday'), t: Number(g('hour')) + Number(g('minute')) / 60 }
}
export default function Hours() {
  const { day, t } = nowInShop()
  const today = business.hours.find(h => h.day === day)
  const isOpen = today && t >= today.open && t < today.close
  const order = [1,2,3,4,5,6,0].map(i => business.hours[i])
  return (
    <div>
      <p className={'status ' + (isOpen ? 'on' : '')} role="status">{isOpen ? 'Open now' : 'Closed right now'} <span>(shop time, Central)</span></p>
      <table className="hours"><caption className="sr">Opening hours</caption><tbody>
        {order.map(h => <tr key={h.day} aria-current={h.day === day ? 'date' : undefined} className={h.day === day ? 'today' : ''}><th scope="row">{h.day}</th><td>{h.label}</td></tr>)}
      </tbody></table>
      <p className="note">Holiday hours may differ — call ahead.</p>
    </div>
  )
}

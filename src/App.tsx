import { useEffect, useState, type FormEvent } from 'react';
import { ArrowDownRight, ArrowRight, ChevronRight, CircleX, ExternalLink, Menu, X } from 'lucide-react';

const image = (filename: string) => `/images/${filename}`;
const awardingImage = image('awarding-monent_1786372830633.jpg');
const boardGamesImage = image('board-games_1786372830666.jpg');
const chessImage = image('chess_1786372830669.jpg');
const chessGameImage = image('chess-game_1786372830674.jpg');
const eatingImage = image('eating_1786372830679.jpg');
const foodTimeImage = image('food-time_1786372830682.jpg');
const goodTimeImage = image('Good-time_1786372830685.jpg');
const happyStudentsImage = image('happy-students_1786372830690.jpg');
const icecreamImage = image('icecream-time_1786372830693.jpg');
const meetingImage = image('meeting-time_1786372830696.jpg');
const paintingImage = image('painting_1786372830699.jpg');
const paintingActivitiesImage = image('painting-activites_1786372830701.jpg');
const resilientStudentsImage = image('resilient-students_1786372830704.jpg');
const studentsExperienceImage = image('students-experience_1786372830708.jpg');
const togethernessImage = image('togetherness_1786372830711.jpg');
const unityImage = image('Unity_1786372830713.jpg');
const volleyballImage = image('volleyball_1786372830716.jpg');

type GalleryItem = { src: string; alt: string; caption: string };
const gallery: GalleryItem[] = [
  { src: togethernessImage, alt: 'Young people sharing a creative activity together on a lawn', caption: 'Belonging looks like this' },
  { src: unityImage, alt: 'Three young people playing a word game together', caption: 'Make room for every voice' },
  { src: paintingImage, alt: 'Students painting colourful art outdoors', caption: 'Making something of an afternoon' },
  { src: volleyballImage, alt: 'Students playing volleyball on a green lawn', caption: 'Play is serious joy' },
  { src: chessGameImage, alt: 'Young people gathered around a chess board', caption: 'Think together' },
  { src: icecreamImage, alt: 'Students enjoying ice cream together outdoors', caption: 'Small celebrations matter' },
  { src: happyStudentsImage, alt: 'Three smiling young women sitting together outside', caption: 'The people make the place' },
  { src: awardingImage, alt: 'A community gathering celebrating young people in a hall', caption: 'Nurturing resilient minds' },
];

const activities = [
  { title: 'December end-of-year party', text: 'A generous day of food, games, music and the kind of laughter that carries into the new year.', image: eatingImage },
  { title: 'Tree planting & care', text: 'Young people putting roots down together, learning that a future is built one living thing at a time.', image: goodTimeImage },
  { title: 'Creative afternoons', text: 'Paint, paper, conversation and the freedom to make something with your own hands.', image: paintingActivitiesImage },
  { title: 'Board games & chess', text: 'A low-stakes place to practice strategy, patience, curiosity and friendly competition.', image: chessImage },
  { title: 'Sport & movement', text: 'Volleyball, open lawns and a little more confidence with every serve.', image: volleyballImage },
];

function scrollToSection(id: string, close?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  close?.();
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState('');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    document.title = 'Selfless CE Lira — A place to become';
    const description = 'Selfless CE Lira helps young people in northern Uganda build resilient minds, practical confidence and belonging through shared experiences.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    const onScroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const closeMenu = () => setMenuOpen(false);
  const handleDonate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const amount = donationAmount.trim();
    setToast(amount ? `Thank you for choosing to give ${amount}. We’ll help you take the next step.` : 'Thank you for choosing to stand with young people in Lira. We’ll be in touch.');
  };
  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSent(true);
    setToast('Your note is on its way. Thank you for opening a door with us.');
  };

  return (
    <div className="site-wrap">
      <div className="topline"><div className="container"><span>SELFLESS CE LIRA / NORTHERN UGANDA</span><span>Come as you are. <a href="#contact">Find your way in <ArrowRight size={12} /></a></span></div></div>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <button className="brand" onClick={() => scrollToSection('home', closeMenu)} data-testid="link-brand" aria-label="Back to home"><span className="brand-mark">s</span><span>selfless CE</span></button>
          <nav className="nav-links" aria-label="Primary navigation">
            {['about', 'centres', 'activities', 'donate', 'contact'].map((id) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }} data-testid={`link-${id}`}>{id === 'centres' ? 'Tech Centres' : id[0].toUpperCase() + id.slice(1)}</a>)}
          </nav>
          <a className="nav-cta" href="#donate" onClick={(e) => { e.preventDefault(); scrollToSection('donate'); }} data-testid="link-nav-donate">Support the work</a>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} data-testid="button-mobile-menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{['home', 'about', 'centres', 'activities', 'donate', 'contact'].map((id) => <a href={`#${id}`} key={id} onClick={(e) => { e.preventDefault(); scrollToSection(id, closeMenu); }} data-testid={`mobile-link-${id}`}>{id === 'home' ? 'Home' : id === 'centres' ? 'Tech Centres' : id[0].toUpperCase() + id.slice(1)}</a>)}</nav>}

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-copy">
              <span className="eyebrow reveal">A community in Lira</span>
              <h1 className="display reveal delay-1">A place to<br /><em>become.</em></h1>
              <p className="hero-intro reveal delay-2">Selfless CE Lira is an open door for young people in northern Uganda — a place to learn, play, make, and find your people.</p>
              <div className="hero-actions reveal delay-3"><a className="button primary" href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} data-testid="button-discover">Discover our why <ArrowDownRight size={16} /></a><a className="button outline" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} data-testid="button-visit">Come visit <ArrowRight size={16} /></a></div>
            </div>
            <span className="hero-note">NURTURING RESILIENT MINDS / 01</span>
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div className="container intro-grid">
            <div><span className="eyebrow">The short version</span><h2 id="intro-title">Confidence grows when <em>you’re not growing alone.</em></h2><p>In Lira, we create the conditions for young people to feel capable: useful learning, real play, honest conversations and the simple joy of being expected.</p><div className="signature"><span className="signature-mark">s</span><span>Selfless CE Lira<br /><strong>Learning through shared experience</strong></span></div></div>
            <div className="intro-image"><img src={resilientStudentsImage} alt="A lively room full of young people gathered for a Selfless CE Lira event" /><span className="image-tag">There is strength<br />in showing up.</span></div>
          </div>
        </section>
        <div className="ticker" aria-label="Selfless CE values"><div className="ticker-track"><span>LEARNING</span><span>PLAY</span><span>CREATIVITY</span><span>BELONGING</span><span>LEARNING</span><span>PLAY</span><span>CREATIVITY</span><span>BELONGING</span></div></div>

        <section className="section about" id="about">
          <div className="container">
            <div className="story-grid">
              <div className="story-images"><img src={awardingImage} alt="Young people celebrating at a Selfless CE gathering" /><img src={meetingImage} alt="Young people listening and participating in a community meeting" /><img src={boardGamesImage} alt="Friends gathered outside playing games on the grass" /></div>
              <div className="story-copy"><span className="eyebrow">Why this exists</span><h3>A resilient mind needs a room to breathe.</h3><p>Selfless CE Lira grew from a conviction held by Jeanie Hwang, Abraham Hwang and Audrey Hwang: young people deserve places that take their inner lives seriously, while still leaving plenty of room for joy.</p><p>That means no single formula and no lecturing from a distance. We listen, we make room, and we build experiences where young people can practice confidence with one another — a conversation, a game, a new idea, a shared meal.</p><div className="founders"><span className="founders-label">Founded with care by</span><div className="founder-names"><span className="founder">Jeanie Hwang</span><span className="founder">Abraham Hwang</span><span className="founder">Audrey Hwang</span></div></div></div>
            </div>
            <div className="values"><div className="value"><span className="value-no">01</span><h4>Belonging</h4><p>Every young person should have a place where their presence changes the room.</p></div><div className="value"><span className="value-no">02</span><h4>Possibility</h4><p>We make practical space for curiosity, skills and a future not yet fully named.</p></div><div className="value"><span className="value-no">03</span><h4>Joy</h4><p>Play and celebration are not extras. They are how a community gets its energy back.</p></div><div className="value"><span className="value-no">04</span><h4>Togetherness</h4><p>We trust what becomes possible when learning is shared instead of handed down.</p></div></div>
          </div>
        </section>

        <section className="section centres" id="centres">
          <div className="container"><div className="section-head"><div><span className="eyebrow">Where it happens</span><h2>Rooms with the door left open.</h2></div><p>Our tech centres are more than equipment and desks. They are welcoming places to learn at your own pace, meet others and try again.</p></div><div className="centre-card"><img src={foodTimeImage} alt="Young people sharing food and conversation outside a Selfless CE centre" /><div className="centre-info"><span className="number">THE LIRA CENTRE / 01</span><h3>Come curious.<br />Leave capable.</h3><p>In and around Lira, our community-centred spaces connect digital learning with the confidence to use it. Pull up a chair, ask a question, or bring one of your own.</p><div className="centre-details"><span>LEARN / MAKE</span><span>PLAY / SHARE</span></div></div></div></div>
        </section>

        <section className="section activities" id="activities">
          <div className="container activity-layout"><div className="activity-intro"><span className="eyebrow">On the calendar</span><h2>Learning can look like a lot of things.</h2><p>A tree in the ground. A chessboard on the grass. A plate passed around. Our activities make room for the whole person.</p><a className="button dark" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} data-testid="button-activities-contact">Ask about joining <ChevronRight size={16} /></a></div><div className="activity-list">{activities.map((activity, index) => <article className="activity-row" key={activity.title}><span className="activity-no">0{index + 1}</span><div><h3>{activity.title}</h3><p>{activity.text}</p></div><img src={activity.image} alt={`${activity.title} at Selfless CE Lira`} /></article>)}</div></div>
        </section>

        <section className="section voices" aria-labelledby="voices-title"><div className="container"><div className="section-head"><div><span className="eyebrow">In their words</span><h2 id="voices-title">What changes when you feel seen.</h2></div><p>These reflections belong to young people in the community. Names are kept first-name only, as shared with us.</p></div><div className="voices-grid"><article className="voice"><span className="quote">“</span><p>I found people I could talk to, and activities that made me feel free to be myself.</p><span className="voice-by">— Sarah / Lira</span></article><article className="voice"><span className="quote">“</span><p>Here I learned that trying something new does not have to be frightening.</p><span className="voice-by">— Andrew / Lira</span></article><article className="voice"><span className="quote">“</span><p>The best part is that we do things together. You never feel left out.</p><span className="voice-by">— Esther / Lira</span></article></div></div></section>

        <section className="section gallery" aria-labelledby="gallery-title"><div className="container"><div className="section-head"><div><span className="eyebrow">A living archive</span><h2 id="gallery-title">See what a good day can hold.</h2></div><p>Every image is from the community: the faces, games, colours and little rituals that make this place ours.</p></div><div className="gallery-grid">{gallery.map((item, index) => <button className="gallery-item" key={item.src} onClick={() => setLightbox(item)} aria-label={`View larger: ${item.caption}`} data-testid={`button-gallery-${index}`}><img src={item.src} alt={item.alt} /><span className="gallery-overlay">{item.caption} <ExternalLink size={12} /></span></button>)}</div><p className="gallery-hint">Select an image to linger a little longer.</p></div></section>

        <section className="section donate" id="donate"><div className="container donate-grid"><div><span className="eyebrow">An open invitation</span><h2>Help keep the door open.</h2><p>Your support helps make room for learning, play, creativity and the everyday details that tell a young person: you belong here.</p></div><div className="donate-card"><h3>Start a giving conversation</h3><p>Tell us what you would like to contribute. We’ll respond with the clearest next step for you.</p><form className="donate-form" onSubmit={handleDonate}><input value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} type="text" placeholder="Amount or kind of support" aria-label="Amount or kind of support" data-testid="input-donation" /><input type="email" placeholder="Your email address" aria-label="Your email address" required data-testid="input-donation-email" /><button className="button primary" type="submit" data-testid="button-donate">I want to help <ArrowRight size={16} /></button></form></div></div></section>

        <section className="section contact" id="contact"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow">Find your way in</span><h2>Let’s make something good together.</h2><p>Whether you want to visit, volunteer, partner or simply understand more, there is a place to begin.</p><div className="contact-details"><div className="contact-detail"><MapPinIcon /><div><strong>Find us</strong><span>Lira, Northern Uganda</span></div></div><div className="contact-detail"><MailIcon /><div><strong>Write to us</strong><span>hello@selflessce.org</span></div></div><div className="contact-detail"><PhoneIcon /><div><strong>Call the centre</strong><span>Reach out to arrange a visit</span></div></div></div></div><div className="contact-panel"><form className="contact-form" onSubmit={handleContact}><input type="text" placeholder="Your name" aria-label="Your name" required data-testid="input-contact-name" /><input type="email" placeholder="Email address" aria-label="Email address" required data-testid="input-contact-email" /><textarea placeholder="What brings you our way?" aria-label="Your message" required data-testid="input-contact-message" /><button className="button primary" type="submit" data-testid="button-contact">{contactSent ? 'Message sent' : 'Send a note'} <ArrowRight size={16} /></button></form><div className="map"><iframe title="Map showing Lira, Northern Uganda" src="https://www.openstreetmap.org/export/embed.html?bbox=32.45%2C2.22%2C32.50%2C2.27&amp;layer=mapnik&amp;marker=2.25%2C32.47" loading="lazy" /></div></div></div></section>
      </main>
      <footer className="footer"><div className="container"><div className="brand"><span className="brand-mark">s</span><span>selfless CE Lira</span></div><span>For resilient minds, practical confidence & belonging.</span><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Back to top ↑</a></div></footer>
      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.caption} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image" data-testid="button-close-gallery"><CircleX size={20} /></button><img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} /><span className="lightbox-caption">{lightbox.caption}</span></div>}
      {toast && <div className="toast" role="status" data-testid="status-feedback">{toast}</div>}
    </div>
  );
}

function MapPinIcon() { return <span aria-hidden="true">●</span>; }
function MailIcon() { return <span aria-hidden="true">@</span>; }
function PhoneIcon() { return <span aria-hidden="true">+</span>; }

export default App;
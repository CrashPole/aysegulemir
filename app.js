/* ============================================================
   AYŞEGÜL & EMIR KAAN — app.js
   ============================================================ */

const UPLOAD_URL = window.AE_CONFIG.UPLOAD_URL;
const WEDDING_DATE = new Date("2026-06-20T19:00:00+03:00");

/* ============================================================
   i18n
   ============================================================ */
const i18n = {
  tr: {
    nav_wedding_day:   "Düğün Günü",
    nav_getting_there: "Nasıl Gelinir",
    nav_accommodation: "Konaklama",
    nav_registry:      "Hediye",
    nav_memory:        "Bir Anı Bırakın",
    nav_contact:       "İletişim",

    hero_eyebrow:   "Bizimle Kutlayın",
    hero_meta_loc:  "İzmir · Türkiye",
    hero_lbl_date:  "Tarih",
    hero_lbl_day:   "Gün",
    hero_val_day:   "Cumartesi",
    hero_lbl_place: "Mekan",
    hero_lbl_dress: "Kıyafet",
    hero_val_dress: "Şık · Yazlık",
    scroll_cue:     "Aşağı Kaydır",

    wd_label: "01 · Program",
    wd_title: "Düğün <em>Günü</em>",
    wd_sub:   "Bu özel günü sizinle birlikte kutlamak için sabırsızlanıyoruz. İşte günün akışı.",

    cd_banner: "Geri sayım — büyük güne kalan",
    cd_days:    "Gün",
    cd_hours:   "Saat",
    cd_minutes: "Dakika",
    cd_seconds: "Saniye",

    tl_ceremony_title: "Varış &amp; Nikah Töreni",
    tl_ceremony_desc:  "Lütfen saat 19:00'da mekanda olun. Sembolik nikah törenimiz 19:30'da başlıyor.",

    tl_cocktail_title: "Nikah Töreni &amp; Kokteyl",
    tl_cocktail_desc:  "Saat 19:00'da sembolik nikah törenimiz başlıyor. Törenin ardından kokteyl saati ile kutlamalar başlıyor.",

    tl_dinner_title: "Akşam Yemeği",
    tl_dinner_desc:  "Gece boyunca İzmir mutfağından özel hazırlanmış lezzetler servis edilecektir.",

    tl_party_title: "Dans &amp; Kutlama",
    tl_party_desc:  "DJ seti, sürprizler ve sabaha kadar süren parti. Rahat ayakkabılarınızı getirmenizi öneririz.",

    tl_end_title: "Gece Yarısı · Veda",
    tl_end_desc:  "Bu özel geceyi bizimle paylaştığınız için teşekkür ederiz. Güvenli yolculuklar.",

    gt_label: "02 · Yol",
    gt_title: "Nasıl <em>Gelinir</em>",
    gt_sub:   "Güzelbahçe, İzmir — sizleri ağırlamak için sabırsızlanıyoruz. İki kolay seçenek aşağıda.",

    gt_car_title: "Araçla",
    gt_car_text:  "İzmir merkezden Güzelbahçe'ye yaklaşık 30 dk. Çevre yolundan Güzelbahçe çıkışını alın, ardından Sahil Caddesi'ne yönelin. Mekanda ücretsiz vale hizmeti mevcuttur.",

    gt_transit_title: "Taksi",
    gt_transit_text:  "Mekana ulaşmak için sarı taksiler, Yandex Go veya Uber kullanabilirsiniz. Gece dönüşü için önceden rezervasyon yapmanızı tavsiye ederiz.",

    gt_map_btn: "Google Haritalar'da Aç",

    ac_label: "03 · Konaklama",
    ac_title: "Nerede <em>Kalınır</em>",
    ac_sub:   "Güzelbahçe ve İzmir civarındaki üç farklı atmosferde, düğün misafirlerimize özel indirimli seçenekler.",

    hotel1_tag:      "Deniz Manzaralı",
    hotel1_name:     "Örnek Sahil Oteli",
    hotel1_location: "Güzelbahçe · 0.5 km",
    hotel1_desc:     "Denize sıfır konum, açık havuz, spa ve kahvaltı dahil. Düğün kodu: AE2026.",
    hotel1_price:    "₺3.500 / gece'den",

    hotel2_tag:      "Butik",
    hotel2_name:     "Zeytin Bahçesi Butik",
    hotel2_location: "Güzelbahçe merkez · 1.2 km",
    hotel2_desc:     "Tarihi zeytinlik içinde 12 odalı butik otel. Sakin ve özel atmosfer, organik kahvaltı dahil.",
    hotel2_price:    "₺2.200 / gece'den",

    hotel3_tag:      "Şehir Merkezi",
    hotel3_name:     "İzmir Marina Hotel",
    hotel3_location: "İzmir Konak · 18 km",
    hotel3_desc:     "Şehir merkezinde modern konfor, havaalanı transferi ve uzun konaklamalarda %15 indirim.",
    hotel3_price:    "₺2.800 / gece'den",

    hotel_book_btn: "Rezervasyon",

    reg_label: "03 · Hediye",
    reg_title: "Bir Küçük <em>Not</em>",
    reg_sub:   "Türkiye dışından gelen sevgili misafirlerimiz için.",
    reg_band_left:  "Hediye · Bilet N°&nbsp;2026",
    reg_presence:   "&ldquo;Sevgili misafirlerimiz — sizinle aynı masada olmak bizim için <em>en güzel hediyedir</em>.&rdquo;",
    reg_intro:      "",
    reg_holder_label:"Hesap Sahibi",
    reg_bank_label:  "Banka",
    reg_copy_btn:    "IBAN'ı Kopyala",
    reg_copied:      "Kopyalandı ✓",

    mem_label:       "04 · Anılar",
    mem_title:       "Anılarımıza <em>Eklenin</em>",
    mem_sub:         "Çektiğiniz her kare bizim için çok değerli. QR kodu okutup gönderin — biz teşekkür ederiz.",
    mem_lead:        "Kameranızı doğrultun, fotoğrafları <em>birlikte yazalım.</em>",
    mem_help:        "Telefonunuzun kamerasını yandaki QR koda doğrultun, açılan bağlantıya dokunun ve istediğiniz fotoğraf ve videoları paylaşın.",
    mem_open_btn:    "Yükleme Sayfasını Aç",
    mem_print_btn:   "Yazdırılabilir Kart",
    mem_arrow:       "buraya bakın!",

    ct_label: "05 · İletişim",
    ct_title: "İletişim",
    ct_sub:   "Sorularınız için bize ulaşın.",

    ct_info_heading: "Bize <em>Ulaşın</em>",
    ct_bride_label:  "Gelin",
    ct_groom_label:  "Damat",
    ct_email_label:  "E-posta",
    ct_venue_label:  "Mekan",
    ct_venue_value:  "Piena Case de Event, Güzelbahçe / İzmir",

    rsvp_title: "Katılımınızı <em>Onaylayın</em>",
    rsvp_sub:   "Son tarih: 1 Mayıs 2026",

    form_attend_label:      "Katılım Durumu",
    form_attend_yes:        "Geliyorum",
    form_attend_no:         "Maalesef",
    form_name_label:        "Ad Soyad",
    form_name_placeholder:  "Adınızı girin",
    form_guests_label:      "Kişi Sayısı",
    form_msg_label:         "Mesajınız (isteğe bağlı)",
    form_msg_placeholder:   "Bize bir mesaj bırakın...",
    form_submit_btn:        "Onayla &amp; Gönder",
    form_note:              "Yanıtınız için en kısa sürede dönüş yapılacaktır.",

    form_success_title: "Teşekkürler!",
    form_success_sub:   "Kaydınız alındı. Sizi aramızda görmek için sabırsızlanıyoruz.",

    footer_thanks: "Geldiğiniz için teşekkürler",
  },

  en: {
    nav_wedding_day:   "Wedding Day",
    nav_getting_there: "Getting There",
    nav_accommodation: "Accommodation",
    nav_registry:      "Gift",
    nav_memory:        "Leave a Memory",
    nav_contact:       "Contact",

    hero_eyebrow:   "Celebrate With Us",
    hero_meta_loc:  "İzmir · Türkiye",
    hero_lbl_date:  "Date",
    hero_lbl_day:   "Day",
    hero_val_day:   "Saturday",
    hero_lbl_place: "Venue",
    hero_lbl_dress: "Attire",
    hero_val_dress: "Elegant · Summer",
    scroll_cue:     "Scroll",

    wd_label: "01 · Schedule",
    wd_title: "Wedding <em>Day</em>",
    wd_sub:   "We can't wait to share this day with you. Here's how it'll unfold.",

    cd_banner: "Countdown — time until the big day",
    cd_days:    "Days",
    cd_hours:   "Hours",
    cd_minutes: "Minutes",
    cd_seconds: "Seconds",

    tl_ceremony_title: "Arrival &amp; Wedding Ceremony",
    tl_ceremony_desc:  "Please be at the venue by 19:00. Our symbolic wedding ceremony begins at 19:30.",

    tl_cocktail_title: "Wedding Ceremony &amp; Cocktail",
    tl_cocktail_desc:  "Our symbolic wedding ceremony begins at 19:00. Cocktails and celebrations follow immediately after.",

    tl_dinner_title: "Dinner",
    tl_dinner_desc:  "İzmir-inspired dishes will be served throughout the evening.",

    tl_party_title: "Dance &amp; Celebrate",
    tl_party_desc:  "DJ set, a few surprises, and dancing until midnight. Comfortable shoes strongly recommended.",

    tl_end_title: "Midnight · Farewell",
    tl_end_desc:  "Thank you for sharing this special night with us. Safe travels home.",

    gt_label: "02 · Travel",
    gt_title: "Getting <em>There</em>",
    gt_sub:   "Güzelbahçe, İzmir — we can't wait to welcome you. Two easy options below.",

    gt_car_title: "By Car",
    gt_car_text:  "About 30 min from central İzmir. Take the Güzelbahçe exit from the ring road and follow signs to Sahil Caddesi. Free valet parking on site.",

    gt_transit_title: "Taxi",
    gt_transit_text:  "Yellow taxis, Yandex Go, or Uber are all available to reach the venue. We recommend booking in advance for the return journey.",

    gt_map_btn: "Open in Google Maps",

    ac_label: "03 · Stay",
    ac_title: "Where to <em>Stay</em>",
    ac_sub:   "Three different atmospheres in Güzelbahçe and central İzmir — all with special rates for wedding guests.",

    hotel1_tag:      "Sea View",
    hotel1_name:     "Sample Coastal Hotel",
    hotel1_location: "Güzelbahçe · 0.5 km",
    hotel1_desc:     "Beachfront location with outdoor pool, spa and breakfast included. Wedding code: AE2026.",
    hotel1_price:    "from ₺3,500 / night",

    hotel2_tag:      "Boutique",
    hotel2_name:     "Olive Garden Boutique",
    hotel2_location: "Güzelbahçe centre · 1.2 km",
    hotel2_desc:     "A 12-room boutique inside a historic olive grove. Quiet, intimate, with an organic breakfast.",
    hotel2_price:    "from ₺2,200 / night",

    hotel3_tag:      "City Centre",
    hotel3_name:     "İzmir Marina Hotel",
    hotel3_location: "İzmir Konak · 18 km",
    hotel3_desc:     "Modern comfort in the heart of İzmir. Airport transfer and 15% off for extended stays.",
    hotel3_price:    "from ₺2,800 / night",

    hotel_book_btn: "Book",

    reg_label: "03 · Gift",
    reg_title: "A Little <em>Note</em>",
    reg_sub:   "Especially for our guests joining us from outside of Türkiye.",
    reg_band_left:  "Gift · Ticket N°&nbsp;2026",
    reg_presence:   "&ldquo;Dear guests — sharing this moment with you is the <em>most beautiful gift</em> we could ask for.&rdquo;",
    reg_intro:      "If you would still like to contribute, we have shared our account details below. Your thoughtfulness truly means the world to us.",
    reg_holder_label:"Account Holder",
    reg_bank_label:  "Bank",
    reg_copy_btn:    "Copy IBAN",
    reg_copied:      "Copied ✓",

    mem_label:       "04 · Memories",
    mem_title:       "Add to our <em>Memories</em>",
    mem_sub:         "Every shot you take is precious to us. Scan the QR and send them our way — thank you.",
    mem_lead:        "Point your camera, and <em>let's write the album</em> together.",
    mem_help:        "Aim your phone's camera at the QR code, tap the link that appears, and upload your favourite photos and videos.",
    mem_open_btn:    "Open Upload Page",
    mem_print_btn:   "Printable Card",
    mem_arrow:       "scan me!",

    ct_label: "05 · Contact",
    ct_title: "Contact",
    ct_sub:   "Reach out with any questions.",

    ct_info_heading: "Get in <em>Touch</em>",
    ct_bride_label:  "Bride",
    ct_groom_label:  "Groom",
    ct_email_label:  "Email",
    ct_venue_label:  "Venue",
    ct_venue_value:  "Piena Case de Event, Güzelbahçe / İzmir",

    rsvp_title: "Confirm Your <em>Attendance</em>",
    rsvp_sub:   "Deadline: May 1, 2026",

    form_attend_label:      "Will you join us?",
    form_attend_yes:        "Yes, joyfully",
    form_attend_no:         "Sadly, no",
    form_name_label:        "Full Name",
    form_name_placeholder:  "Enter your name",
    form_guests_label:      "Party Size",
    form_msg_label:         "Your Message (optional)",
    form_msg_placeholder:   "Leave us a note...",
    form_submit_btn:        "Confirm &amp; Send",
    form_note:              "We'll be in touch shortly.",

    form_success_title: "Thank you!",
    form_success_sub:   "Your RSVP has been received. We can't wait to celebrate with you.",

    footer_thanks: "Thanks for being here",
  }
};

let currentLang = 'tr';

function setLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) el.placeholder = dict[key];
  });
  document.documentElement.lang = lang;
  document.title = lang === 'tr'
    ? "Ayşegül & Emir Kaan — 20.06.2026"
    : "Ayşegül & Emir Kaan — June 20, 2026";
  document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  // Registry section is only relevant for international guests
  const registry = document.getElementById('registry');
  if (registry) registry.style.display = lang === 'tr' ? 'none' : '';
}

/* ============================================================
   Mobile menu
   ============================================================ */
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-nav').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-nav').classList.remove('open');
}

/* ============================================================
   Marquee — build dup content
   ============================================================ */
function buildMarquee(elId, items) {
  const el = document.getElementById(elId);
  if (!el) return;
  const block = items.map(it => {
    if (it.dot) return `<span class="dot">✦</span>`;
    return `<span>${it.text}</span>`;
  }).join('');
  el.innerHTML = block + block;
}

const heroItems = [
  {text:'Ayşegül &amp; Emir Kaan'}, {dot:1},
  {text:'20 · 06 · 2026'}, {dot:1},
  {text:'Güzelbahçe · İzmir'}, {dot:1},
  {text:'Save the Date'}, {dot:1},
  {text:'İzmir Wedding'}, {dot:1},
];

/* ============================================================
   Countdown
   ============================================================ */
function pad(n){ return String(n).padStart(2, '0'); }

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  if (diff <= 0) {
    set('cd-days', '00'); set('cd-hours', '00');
    set('cd-minutes', '00'); set('cd-seconds', '00');
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  set('cd-days',    pad(d));
  set('cd-hours',   pad(h));
  set('cd-minutes', pad(m));
  set('cd-seconds', pad(s));
}

/* ============================================================
   IBAN copy
   ============================================================ */
function copyIban() {
  const code = document.getElementById('iban-code').textContent.replace(/\s+/g, ' ').trim();
  navigator.clipboard.writeText(code).then(() => {
    const note = document.getElementById('iban-copied');
    note.classList.add('visible');
    setTimeout(() => note.classList.remove('visible'), 2200);
  }).catch(() => {
    /* fallback */
    const ta = document.createElement('textarea');
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta);
    const note = document.getElementById('iban-copied');
    note.classList.add('visible');
    setTimeout(() => note.classList.remove('visible'), 2200);
  });
}

/* ============================================================
   RSVP form
   ============================================================ */
function handleRsvp(e) {
  e.preventDefault();
  document.getElementById('rsvp-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
  document.getElementById('form-success').scrollIntoView ?
    document.getElementById('form-success') : null;
}

/* ============================================================
   QR code
   ============================================================ */
function qrImageUrl(data, size) {
  return "https://api.qrserver.com/v1/create-qr-code/"
    + "?size=" + size + "x" + size
    + "&margin=8"
    + "&ecc=M"
    + "&format=png"
    + "&color=0F2547"
    + "&bgcolor=F4EFE2"
    + "&data=" + encodeURIComponent(data);
}

/* ============================================================
   Scroll reveal
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setLang('tr');

  buildMarquee('hero-marquee-track', heroItems);
  buildMarquee('footer-marquee-track', heroItems);

  updateCountdown();
  setInterval(updateCountdown, 1000);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* QR */
  const qrImg = document.getElementById('memory-qr-img');
  if (qrImg) qrImg.src = qrImageUrl(UPLOAD_URL, 480);
  const openLink = document.getElementById('memory-open-link');
  if (openLink) openLink.href = UPLOAD_URL;

  /* Header background shift on scroll */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.style.background = 'rgba(15, 37, 71, 0.92)';
    } else {
      header.style.background = 'rgba(15, 37, 71, 0.78)';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
});

// Central content store — swap for API calls once a backend/admin panel exists.
import pastorImage from "../assets/images/pastor.jpg";
export const churchInfo = {
  name: "VICTORY A.G. CHURCH",
  location: "CUDDALORE",
  tagline: "Winning Souls for Christ",
  phone: "+91 998654 73252",
  email: "victoryagchurchcud@gmail.com",
  address: "10-A,Vallalar Nagar, Cuddalore N.T, Tamil Nadu, India",
  whatsapp: "91 98654 73252",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/victory_ag_church_cuddalore?igsh=ZDA2ZXM0dGpuZmNk",
    youtube: "https://www.youtube.com/@VictoryAGChurchCuddalore",
    whatsapp: "https://wa.me/9865473252",
  },
  officeHours: "Mon – Sat, 9:00 AM – 5:00 PM",
};
export const sermons = [
  {
    title: "Communion Sunday Service",
    pastor: "Rev.J.Jayaraj",
    date: "02 August 2026",
    youtubeUrl: "https://www.youtube.com/live/z7nvrbZ0fbg",
  },

  {
    title: "Sunday Worship Service",
    pastor: "Rev.J.Jayaraj",
    date: "26 July 2026",
    youtubeUrl: "https://youtube.com/live/-k8dBVvFpG0?feature=share",
  },

  {
    title: "Sunday Worship Service",
    pastor: "Rev.J.Jayaraj",
    date: "19 July 2026",
    youtubeUrl: "https://youtube.com/live/6Sf-FXe2gXI?feature=share",
  },

  {
    title: "Sunday Worship Service",
    pastor: "Rev.J.Jayaraj",
    date: "12 July 2026",
    youtubeUrl: "https://www.youtube.com/live/rcYYQZP3ufE?si=yDEBKrqfJ9WBZYQc",
  }
];

export const latestSermon = sermons[0];

// Editable monthly by the media team — Tamil and English shown side by side.
export const monthlyVerse = {
  month: "August 2026",

  tamil: {
    text: "தடைகளை நீக்கிப்போடுகிறவர் அவர்களுக்கு முன்பாக நடந்துபோகிறார்; அவர்கள் தடைகளை நீக்கி, வாசலால் உட்பிரவேசித்துக் கடந்துபோவார்கள்; அவர்கள் ராஜா அவர்களுக்கு முன்பாகப் போவார், கர்த்தர் அவர்கள் முன்னணியில் நடந்துபோவார்.",
    reference: "மீகா 2:13",
  },

  english: {
    text: "The One who breaks open the way will go up before them; they will break through the gate and go out. Their King will pass through before them, the Lord at their head.",
    reference: "Micah 2:13",
  },
};
// Editable yearly by the media team — same Tamil + English structure.
export const yearlyVerse = {
  year: "2026",

  tamil: {
    text: "அப்பொழுது கர்த்தருடைய ஆவி உம்மேல் பலமாக இறங்கும்; நீர் அவர்களோடே தீர்க்கதரிசனம் சொல்லி, வேறொரு மனுஷனாய் மாற்றப்படுவீர்.",
    reference: "1 சாமுவேல் 10:6",
  },

  english: {
    text: "The Spirit of the Lord will come powerfully upon you, and you will prophesy with them; and you will be changed into a different person.",
    reference: "1 Samuel 10:6",
  },
};

// The media team only needs to paste the YouTube link + a title.
// Thumbnail and embed player are derived automatically from the URL.


export const ministries = [
  { id: 1, title: "Prayer Ministry", icon: "GiPrayerBeads", desc: "Interceding fervently for our church, city and nation." },
  { id: 2, title: "Youth Fellowship", icon: "FaFire", desc: "Raising a passionate generation on fire for Christ." },
  { id: 3, title: "Women's Fellowship", icon: "FaFemale", desc: "Building strong women of faith, hope and love." },
  { id: 4, title: "Men's Fellowship", icon: "FaMale", desc: "Equipping men to lead their homes and communities." },
  { id: 5, title: "Children Ministry", icon: "FaChild", desc: "Nurturing little hearts in the love of Jesus." },
  { id: 6, title: "Sunday School", icon: "FaBookReader", desc: "Foundational biblical teaching for every age." },
  { id: 7, title: "Choir", icon: "FaMusic", desc: "Leading the congregation into heartfelt worship." },
  { id: 8, title: "Evangelism", icon: "FaHandsHelping", desc: "Carrying the Gospel beyond our walls." },
  { id: 9, title: "Bible Study", icon: "FaBible", desc: "Digging deeper into God's Word together." },
];

export const services = [
  {
    id: 1,
    name: "VICTORY A.G. CHURCH - Cuddalore N.T",
     address: "VICTORY A.G. CHURCH,10-A,Vallalar Nagar,  Cuddalore N.T, Tamil Nadu",
    phone: "+91 998654 73252",

iframe: "https://www.google.com/maps/embed?pb=!4v1785757755381!6m8!1m7!1so-lU5nhoQR4Cl4clFLWFWA!2m2!1d11.75929682051599!2d79.7599430507804!3f19.917753594206484!4f24.440341437097402!5f0.4000000000000002",

    mapLink:
      "https://maps.app.goo.gl/53b1ZyDGzP9y6FEHA",
  
    timings: [
      { label: "Sunday Worship", time: "7:15 AM" },
      // { label: "Morning Service", time: "6:30 AM" },
      // { label: "Evening Service", time: "6:00 PM" },
    ],
    mapQuery: "Cuddalore, Tamil Nadu",
  },
  {
    id: 2,
    name: "AG Church House",
    address: "28, Annai Moogambigai Nagar, Koothapakkam, Cuddalore, Tamil Nadu",
    phone: "+91 998654 73252",
     iframe:
       "https://www.google.com/maps/embed?pb=!4v1785757053681!6m8!1m7!1sUEavxrdbhR4wmtqz6ZWzEw!2m2!1d11.74490089811501!2d79.73906598596913!3f1.1067759258383774!4f12.020419437968172!5f0.7820865974627469",

    mapLink:
      "https://maps.app.goo.gl/uQ95xi8BinKpz4dE8",
    timings: [
      { label: "Sunday Worship", time: "9:45 AM" },
      // { label: "Morning Service", time: "6:00 AM" },
    ],
    mapQuery: "Cuddalore New Town, Tamil Nadu",
  },
];

export const events = [
  { id: 1, title: "Youth Meeting", date: "Aug 15, 2026", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Christmas Celebration", date: "Dec 25, 2026", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "New Year Watch Night", date: "Dec 31, 2026", image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Annual Convention", date: "Sep 10, 2026", image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Special Prayer Meeting", date: "Aug 28, 2026", image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Bible Camp", date: "Oct 5, 2026", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop" },
];

export const galleryCategories = [
  "All",
  "Sunday Service",
  "Youth",
  "Sunday School",
  "Christmas",
  "New Year",
  "Convention",
  "Outreach",
  "Women's Fellowship",
];

const galleryPhotoIds = [
  "1445445290350-18a3b86e0b5a", "1508898578281-774ac4893c0c", "1519452575417-564c1401ecc0",
  "1438232992991-995b7058bbb3", "1544427920-c49ccfb85579", "1507692049790-de58290a4334",
  "1478147427282-58a87a120781", "1517457373958-b7bdd4587205", "1523580494863-6f3031224c94",
  "1543589077-47d81606c1bf", "1467810563316-b5476525c0f9", "1529070538774-1843cb3265df",
];

export const galleryImages = [
  {
    id: 1,
    type: "image",
    category: "vbs 2026",
    src: "/gallery/church1.jpg",
  },
  {
    id: 2,
    type: "video",
    category: "Youth",
    src: "/gallery/easteryouth.mp4",
  },
  {
    id: 3,
    type: "video",
    category: "Sunday Service",
    src: "/gallery/church3.mp4",
  },
   {
    id: 4,
    type: "video",
    category: "Sunday Service",
    src: "/gallery/church4.mp4",
  },
  {
    id: 5,
    type: "image",
    category: "Sunday School",
    src: "/gallery/ss1.jpg",
  },
  {
    id: 6,
    type: "image",
    category: "Sunday School",
    src: "/gallery/ss2.jpg",
  },
  {
    id: 7,
    type: "image",
    category: "Sunday Service",
    src: "/gallery/sse1.jpg",
  },
];

export const timeline = [
  { year: "1998", title: "Church Started", desc: "VICTORY A.G. CHURCH began with a small prayer group of 12 believers." },
  { year: "2005", title: "New Building", desc: "God provided a permanent sanctuary in Cuddalore N.T." },
  { year: "2015", title: "Youth Ministry Launched", desc: "A dedicated ministry to disciple the next generation." },
  { year: "2026", title: "Current Ministry", desc: "Serving hundreds of families across multiple congregations." },
];

export const pastor = {
  name: "Rev. J. Jayaraj",

  description:
    "Rev. J. Jayaraj is the Senior Pastor of VICTORY A.G. CHURCH, Cuddalore N.T. With a deep passion for sharing God's Word and shepherding His people, he has faithfully led the church in worship, prayer, discipleship, and community outreach. His vision is to see lives transformed through the Gospel of Jesus Christ, strengthen families in faith, and equip believers to serve God with love, humility, and commitment.",

  vision:
    "To lead people into a deeper relationship with Jesus Christ, build a Christ-centered community, and share the love of God with every family in Cuddalore and beyond.",

  image: pastorImage,};

/* =====================================================================
   CONTENT FILE
   Everything the site says lives here: your name, copy, projects,
   experiments and links. index.html only holds the layout and reads
   this file on load, so you can add, remove, reorder or rewrite any
   entry without touching the design.

   Images: leave a path empty ("") and the slot shows labelled
   placeholder artwork at the right aspect ratio. Put a path in
   (e.g. "img/world-01/cover.jpg") and the real image replaces it,
   lazy-loaded, with a loading shimmer.
   ===================================================================== */

window.UNIVERSE = {

  /* ---------- Who you are ---------- */
  identity: {
    name: "Hardik Khurana",            // shown huge on the gate and in the page title
    alias: "HK",                       // short tag in the top bar
    role: "Multidisciplinary designer",
    location: "Based in India · open to remote",   // empty hides it
    statement: "I build worlds, shape identities, and tell stories through design.",
    // The four lines of the big headline in Chapter I
    headline: ["I build worlds,", "shape identities", "& tell stories", "through design."],
    bio: "I'm a multidisciplinary designer exploring the intersection of brand identity, storytelling and creative direction. My work blends strategic thinking with bold visual expression to build distinctive brand experiences that connect with people and leave a lasting impression.",
    portrait: "img/portrait.jpg",      // 4:5 image
    portraitNote: "Hardik Khurana, 2026"
  },

  /* ---------- What you do (stickers in Chapter I + the tape marquee) ---------- */
  disciplines: [
    "Brand identity & visual systems",
    "Art direction & campaigns",
    "Visual storytelling",
    "Photography & image-making",
    "Experimental concepts"
  ],

  /* ---------- Links ---------- */
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/hardikkhurana09/" },
    { label: "Behance",   url: "https://www.behance.net/hardikkhurana7" }
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" }
  ],

  contact: {
    email: "hardikkhurana1803@gmail.com",
    resume: "",                        // e.g. "files/resume.pdf"; empty hides the link's action
    availability: "Open to full-time roles, freelance, internships and collaborations",
    roles: "Brand identity · Art direction · Graphic design · Creative direction"
  },

  /* ---------- Chapter III: Lore ---------- */
  lore: {
    origin: [
      "I came to design through more than one door: graphic design, photography and creative direction. Each one taught me something different about how an idea turns into something people can see and feel.",
      "My taste was built outside the studio too, in music, in stories, in the way films are lit and framed, and in campaigns that make you stop. I think in Hindi, English and Punjabi, and I try to make work that is simple, purposeful and culturally relevant.",
      "I trust wild thinking, I'm willing to take the risky idea, and I keep a positive attitude while chasing it. Today I build identities and campaigns across digital and print, always looking for the next world worth building."
    ],
    // What shaped the taste. kind = the small label, name = the influence,
    // note = one line in italics, glyph = star | eye | moon | crown | planet | flame
    // style = how the name is set: spray | serif | outline | tape | marker | stack
    //         (stack puts each part split by "·" on its own line)
    influences: [
      { kind: "Soundtrack",     name: "Music",          style: "spray",   glyph: "planet", note: "Every project gets a soundtrack before it gets a sketch." },
      { kind: "Plot",           name: "Stories",        style: "serif",   glyph: "moon",   note: "A brand is a story told the same way, every time." },
      { kind: "The frame",      name: "Cinematography", style: "outline", glyph: "eye",    note: "Light, shadow and where the eye lands first." },
      { kind: "The cut",        name: "Direction",      style: "tape",    glyph: "star",   note: "Knowing what to leave out of the shot." },
      { kind: "The noise",      name: "Campaigns",      style: "marker",  glyph: "flame",  note: "The ones that stop you mid-scroll and stay for a week." },
      { kind: "Mother tongues", name: "हिन्दी · English · ਪੰਜਾਬੀ", style: "stack", glyph: "crown", note: "Three languages, three rhythms for every idea." }
    ],
    // Your process, in order
    approach: [
      { name: "Listen", text: "Every project starts with the people, the music and the place. I dig before I draw." },
      { name: "Dream",  text: "Build the world first: its rules, its weather, its folklore. The identity grows out of that." },
      { name: "Direct", text: "Set the frame for type, colour, image and voice so every piece feels authored by the same hand." },
      { name: "Build",  text: "Ship systems that survive contact with reality: flexible, documented and ready for the next chapter." }
    ]
  },

  /* ---------- Chapter II: Projects ----------
     Order here = order on the page. Each project is its own "world".

     layout   xl | md | sm | wide | tall | showcase
              (showcase = a full-screen band that breaks the grid; use one or two)
     palette  three colours: [glow, accent, ground] — the world's own colours
     motif    star | eye | moon | crown | planet | flame   (placeholder art only)
     pattern  dots | rings | stripes | grid | burst         (placeholder art only)
     slug     used in the link: yoursite/#world-01

     caseStudy (all optional; anything missing shows a labelled placeholder):
       intro, brief, research, direction, outcomes, reflection   — text
         (a string, a list of paragraphs, or a list of
          { title, text, images } parts shown A, B, C… in that section)
       images: { hero, intro: [], brief: [], research: [],
                 direction: [], outcomes: [] }  — "path" or { src, alt }
       sections: custom order, e.g. ["intro", "brief",
                 { title, text, images }, "reflection"]
       note: a line shown at the top, e.g. "Self-initiated concept"
  */
  projects: [
    {
      slug: "netflix-reimagined",
      title: "Netflix Reimagined",
      realm: "The Red Room",
      category: "Concept campaign & art direction",
      year: "2026",
      role: "Concept, art direction, design & photography",
      tags: ["Key art", "Packaging", "Campaign", "UI/UX", "Social", "Photography"],
      summary: "A self-initiated body of work that stretches Netflix's storytelling past the screen: concept posters, a Blinkit delivery campaign, a music app, a social series and a desk-lamp photo shoot.",
      layout: "xl",
      palette: ["#e50914", "#ff8a8f", "#120304"],
      motif: "eye", pattern: "dots",
      cover: "img/netflix/nf-27.jpg",
      coverAlt: "img/netflix/nf-13.jpg",
      caseStudy: {
        note: "Self-initiated concept work. Not commissioned by or affiliated with Netflix or Blinkit.",
        intro: [
          "What would Netflix look like if its stories leaked out of the app and into posters, grocery bags, headphones and Instagram feeds?",
          "Netflix Reimagined is a set of five connected concepts built around one red-and-black world: experimental key art, a physical recommendation campaign with Blinkit, a music-first app, a guess-the-show social series and a concept photography shoot."
        ],
        brief: "The Concept Poster Series set the tone. The goal was to move beyond conventional promotional artwork and reimagine each title through a single compelling visual metaphor, using composition, symbolism, typography and cinematic storytelling while staying true to each title's tone.",
        // Pick Your Next Binge: the whole campaign, from problem to final visuals
        research: [
          "Netflix recommendations usually exist only inside the app, and choosing what to watch often ends in endless scrolling. Pick Your Next Binge takes them into the real world and replaces decision fatigue with playful exploration.",
          "The campaign pairs Netflix with Blinkit's instant delivery. Customers placing an order above ₹1200 receive an interactive Netflix Recommendation Disk.",
          "The disk is made from premium hard paperboard. Its bottom layer is divided into six genres: Thriller, Sci-Fi, Horror, Romance, Family and Comedy. The top layer carries six precision-cut flaps, and lifting one reveals curated Netflix titles in that genre, with a QR code that opens them instantly.",
          "Its circular form represents endless entertainment, while the hidden flaps add curiosity and reward. It should feel more like opening a collectible than reading a promotional leaflet, so people keep it instead of throwing it away.",
          "The disk was then visualised across the full delivery journey, from the Blinkit rider at the door to the flaps opening on a living-room table."
        ],
        direction: [
          "Every poster reduces a film or series to one idea: a single image that tells you what the story feels like before you know what it is about. The social series pushes that further, stripping iconic characters and objects down to one symbol on Netflix red.",
          "Caption: \"One symbol. One clue. One iconic story. How many Netflix titles can you recognize before checking the comments?\""
        ],
        // Section order. Built-in keys use the text and images below;
        // an object is a custom section with its own title, text and images.
        sections: [
          "intro", "brief", "research",
          {
            title: "Netflix Music: UI/UX concept",
            text: "A speculative UI/UX concept that imagines Netflix as a music-first ecosystem. Instead of competing as a traditional music app, it reimagines discovery through the lens of cinema: original scores, soundtracks, curated playlists, artist collaborations and listening experiences built around the films and series audiences already love.",
            images: [
              { src: "img/netflix/nf-29.jpg", alt: "Netflix Music logo and app screens with a vinyl-style player" },
              { src: "img/netflix/nf-30.jpg", alt: "Phone home screen with the Netflix Music app icon" },
              { src: "img/netflix/nf-31.jpg", alt: "Netflix Music app on a phone among red laser lines" },
              { src: "img/netflix/nf-32.jpg", alt: "Netflix Music player screen for 3 Body Problem" },
              { src: "img/netflix/nf-33.jpg", alt: "Phone showing the player inside a dark glass cube" }
            ]
          },
          "direction",
          {
            title: "Concept photography",
            text: "Shot on a study table with only a desk lamp and a mobile phone. Inspired by Netflix's bold visual language, every frame uses dramatic shadows, rich red tones and minimal props. Angles, light direction, everyday objects and negative space turn ordinary items into frames that feel like movie stills or streaming key art.",
            images: [
              { src: "img/netflix/nf-41.jpg", alt: "Grid of six concept photographs shot with a desk lamp and phone" },
              { src: "img/netflix/nf-42.jpg", alt: "A rock and a matchstick in red light" },
              { src: "img/netflix/nf-43.jpg", alt: "A small rock casting a long shadow on red" }
            ]
          },
          "reflection"
        ],
        reflection: [
          "Compelling visual storytelling is driven by creativity, not equipment. Even the smallest workspace can become a cinematic set when light is treated as the main character."
        ],
        images: {
          hero: { src: "img/netflix/nf-06.jpg", alt: "Streaks of red and blue light, like the Netflix intro animation" },
          intro: [
            { src: "img/netflix/nf-07.jpg", alt: "A 'Who's watching?' profile screen where each profile is one part of the project: posters, campaign, UI/UX, social media and photography" }
          ],
          brief: [
            { src: "img/netflix/nf-09.jpg", alt: "Concept posters for 3 Body Problem and Get Out" },
            { src: "img/netflix/nf-10.jpg", alt: "Concept posters for The Meg and Fight Club" },
            { src: "img/netflix/nf-11.jpg", alt: "Conceptual posters: Slow, Ship to Nowhere and Golden Spiral" },
            { src: "img/netflix/nf-12.jpg", alt: "Conceptual posters: The Burial, Poly and Scorpion" },
            { src: "img/netflix/nf-13.jpg", alt: "Inspirational posters: The Octopus, Lobster and Master Croc" }
          ],
          research: [
            { src: "img/netflix/nf-20.jpg", alt: "Raw design of the Recommendation Disk: the round genre base and the six-flap top layer" },
            { src: "img/netflix/nf-22.jpg", alt: "Rendered Recommendation Disk with genre segments around the Netflix wordmark" },
            { src: "img/netflix/nf-25.jpg", alt: "The disk with its flaps open on a black plinth, revealing 3 Body Problem under Thriller" },
            { src: "img/netflix/nf-24.jpg", alt: "Flat lay of the open disk with branded headphones, cans and remote" },
            { src: "img/netflix/nf-26.jpg", alt: "A Blinkit rider handing over a grocery bag with the disk inside" },
            { src: "img/netflix/nf-23.jpg", alt: "Someone opening the disk on a sofa with Netflix on the TV" },
            { src: "img/netflix/nf-27.jpg", alt: "The disk surrounded by groceries under red light" }
          ],
          direction: [
            { src: "img/netflix/nf-35.jpg", alt: "Eight minimal red symbol posts for guess-the-show" },
            { src: "img/netflix/nf-36.jpg", alt: "Instagram post mockup with a hanging spider symbol" },
            { src: "img/netflix/nf-37.jpg", alt: "Instagram post mockup with a bat symbol" },
            { src: "img/netflix/nf-38.jpg", alt: "Instagram post mockup with a revolver and speech bubble" },
            { src: "img/netflix/nf-39.jpg", alt: "Instagram post mockup with a crosshair symbol" }
          ]
        }
      }
    },
    {
      slug: "air-india",
      title: "Reimagining Air India",
      realm: "Atithi Skies",
      category: "Brand identity",
      year: "2026",
      role: "Brand identity, logo & pattern design",
      tags: ["Logo", "Monogram", "Colour", "Pattern", "Livery", "Uniforms", "Print"],
      summary: "A concept identity for Air India built from a single letter: an A shaped like a flame, carrying light, flight and the welcome of India from logo to livery.",
      layout: "md",
      palette: ["#d23a2e", "#d4894f", "#1c0606"],
      motif: "flame", pattern: "rings",
      cover: "img/airindia/ai-03.jpg",
      coverAlt: "img/airindia/ai-05.jpg",
      caseStudy: {
        note: "A personal conceptual project, not affiliated with or commissioned by Air India.",
        reflection: [
          "This project was an exploration of how an existing identity can evolve while staying connected to its roots. From aircraft liveries to cabin interiors and travel collateral, I explored how a consistent visual language can shape an entire brand experience.",
          "One key takeaway: a brand is more than its logo. It's how every detail comes together to tell a story."
        ],
        intro: [
          "What if India's airline could be summed up in one letter?",
          "This concept identity builds Air India around a single A: a flame-shaped monogram that carries heritage, journey and the welcome of India, extended into a colour palette, an ornamental pattern and a full set of touchpoints from aircraft to boarding pass."
        ],
        brief: "Create an identity that feels unmistakably Indian and unmistakably modern. It had to carry heritage, movement and journey, and read as bold, stable, forward and trustworthy at every scale, from a tail fin to a name badge.",
        sections: [
          "intro", "brief",
          {
            title: "Logo concept: the flame A",
            text: [
              "The A works on several levels at once: Air India, ascend, India, Atithi (the guest, the welcome) and ahead.",
              "Inside it sits a flame built from three ideas. A candle flame for light, warmth, tradition, guidance and heritage. An aircraft engine for power, movement, technology and progress. An airplane seen from above for flight, journey, global reach and India to the world.",
              "Explorations of the letter and the flame were refined into a horizontal wordmark and a standalone monogram."
            ],
            images: [
              { src: "img/airindia/ai-03-1.jpg", alt: "Hand-drawn logo concept sheet: the A, a candle flame, an aircraft engine and an airplane form, with letter and flame explorations" },
              { src: "img/airindia/ai-02.jpg", alt: "Horizontal Air India wordmark in deep red with the flame A" },
              { src: "img/airindia/ai-03.jpg", alt: "The flame A monogram on its own" }
            ]
          },
          {
            title: "Colour & pattern",
            text: [
              "Two colours carry the system: a deep heritage red (#960508) and a warm copper (#ba6a35).",
              "The brand pattern draws on Indian ornament and was designed to feel elegant, repeatable and premium. A flame, a paisley curl, a diamond, a dot and a flower are combined on a strict grid into one diamond motif, then repeated into a surface pattern that works as a full field, a border, a corner or a single accent."
            ],
            images: [
              { src: "img/airindia/ai-05-1.jpg", alt: "Hand-drawn pattern sheet: motif construction, grid, element breakdown, variations, repeat pattern and usage explorations" },
              { src: "img/airindia/ai-04.jpg", alt: "Brand colours: deep red #960508 and copper #ba6a35" },
              { src: "img/airindia/ai-05.jpg", alt: "The finished brand pattern in copper on deep red" }
            ]
          },
          {
            title: "Applications",
            text: "The identity was carried across the journey: aircraft livery and tail, cabin seating and headrests, crew uniforms with patterned ties and scarves, and a boarding pass.",
            images: [
              { src: "img/airindia/ai-06.jpg", alt: "Aircraft livery with the patterned tail, engine and wordmark" },
              { src: "img/airindia/ai-07.jpg", alt: "Cabin interiors with branded headrests, patterned carpet and seats" },
              { src: "img/airindia/ai-08.jpg", alt: "Crew uniforms: a pilot's patterned tie and a cabin crew scarf with monogram badges" },
              { src: "img/airindia/ai-09.jpg", alt: "Pilot and cabin crew standing in the branded cabin" },
              { src: "img/airindia/ai-10.jpg", alt: "Patterned boarding pass on a passport, with the aircraft on the runway behind" }
            ]
          },
          "reflection"
        ],
        images: {
          hero: { src: "img/airindia/ai-01.jpg", alt: "The Air India wordmark over an aircraft flying above the clouds" },
          brief: []   // text only
        }
      }
    },
    {
      slug: "the-tiger-society",
      title: "The Tiger Society",
      realm: "Velvet After Dark",
      category: "Social media design language",
      year: "2026",
      role: "Art direction & social media design",
      tags: ["Instagram", "Art direction", "Image-making", "Typography"],
      summary: "A social media design language for an imagined luxury restaurant: black velvet, candlelight, a red script signature and animals dripping in diamonds.",
      layout: "md",
      palette: ["#e3202a", "#d8b77a", "#0a0505"],
      motif: "crown", pattern: "stripes",
      cover: "img/tts/tts-tiger.jpg",
      coverAlt: "img/tts/tts-cat.jpg",
      caseStudy: {
        intro: [
          "Every post an invitation to somewhere you're not sure you're allowed in.",
          "The Tiger Society is an imagined luxury restaurant, and this is the design language for its social feed: a set of rules that lets every post, from a champagne pour to a silver cloche, feel like part of the same night."
        ],
        note: "A personal conceptual project. The Tiger Society is an imagined restaurant, not a real client.",
        reflection: [
          "Creating the design language for The Tiger Society was an exploration of luxury through visual storytelling. Inspired by power, mystery and indulgence, I developed a dramatic aesthetic using deep blacks, rich textures, golden highlights and striking crimson typography.",
          "Through cinematic imagery, ornate details and expressive compositions, the aim was to create a distinctive digital presence that feels immersive, exclusive and theatrical.",
          "The project taught me how a cohesive visual language can communicate a brand's personality and transform its online presence into an experience rather than just a collection of visuals."
        ],
        brief: "Give a luxury restaurant a feed that feels less like advertising and more like a private club: indulgent, a little dangerous and impossible to scroll past, while staying instantly recognisable post after post.",
        sections: [
          "intro", "brief",
          {
            title: "The design language",
            text: [
              "Every post follows the same few rules. A near-black ground lit like a candlelit dining room. One hero subject, isolated and centred on the luxury of the moment. A jewel-like lace texture laid over the image so even glass and silver feel embroidered. A single sparkle flare, the glint that catches your eye mid-scroll.",
              "The signature ties it together: The Tiger Society in a red copperplate script, spaced wide and set in a corner, like a name signed on an invitation."
            ]
          },
          {
            title: "The table",
            text: "Champagne poured until it overflows, a flute catching candlelight, a crystal chandelier, stacked chocolate, gilded cutlery and a gloved hand lifting a silver cloche. Each object is a promise of the evening.",
            cols: 3, ratio: "4:5",
            images: [
              { src: "img/tts/tts-bottle.jpg", alt: "Champagne pouring into an overflowing coupe held by a hand with red nails" },
              { src: "img/tts/tts-champagne.jpg", alt: "A tall champagne flute against candlelit bokeh" },
              { src: "img/tts/tts-chandelier.jpg", alt: "A crystal chandelier glinting in the dark" },
              { src: "img/tts/tts-chocolate.jpg", alt: "Three glossy chocolates stacked, the top one cut open" },
              { src: "img/tts/tts-cutlery.jpg", alt: "Ornate gold cutlery beside a silver plate and candle" },
              { src: "img/tts/tts-food.jpg", alt: "A white-gloved hand presenting a silver cloche" }
            ]
          },
          {
            title: "The society",
            text: "The members. A cat in a diamond collar and a tiger with a diamond grill turn the restaurant's name into characters: elegant, wild and dressed for the occasion.",
            cols: 2, ratio: "4:5",
            images: [
              { src: "img/tts/tts-cat.jpg", alt: "A ginger cat wearing a diamond necklace" },
              { src: "img/tts/tts-tiger.jpg", alt: "A roaring tiger with diamond-encrusted teeth" }
            ]
          },
          "reflection"
        ],
        images: {
          hero: { src: "img/tts/tts-hero.jpg", alt: "Three Tiger Society posts side by side: the diamond cat, the diamond-toothed tiger and the champagne pour" },
          brief: []
        }
      }
    },
    {
      slug: "graphic-explorations",
      title: "Graphic Explorations",
      realm: "Two-Colour Myths",
      category: "Poster & cover explorations",
      year: "2026",
      role: "Design & image-making",
      tags: ["Posters", "Cover art", "Duotone", "Typography", "Photo manipulation"],
      summary: "Gods, heroes and strangers in two colours. A set of personal explorations in posters and covers, where the type and the image fight for the same space.",
      layout: "sm",
      palette: ["#f2a46b", "#4a5bd8", "#14112e"],
      motif: "flame", pattern: "dots",
      cover: "img/explorations/ex-zeus.jpg",
      coverAlt: "img/explorations/ex-untitled.jpg",
      caseStudy: {
        note: "Personal design explorations. Not commissioned by or affiliated with any brand, studio or title shown.",
        intro: [
          "Not every idea needs a client. Some just need a free evening and two colours.",
          "These are explorations: posters and covers made to test an idea quickly, from a mythological game cover to a lost-love film poster to the same hero in two moods. Each one is small, but together they show how I think when nobody is setting the brief."
        ],
        reflection: [
          "Working without a brief taught me to set my own. Limiting each piece to two colours and one figure forced every decision into the open: where the type sits, what the image hides, what the colour says before a single word is read.",
          "Constraints aren't the opposite of creativity. They're where it starts."
        ],
        brief: "The rules were self-imposed. Limit the palette to two colours, or close to it. Let one figure carry the image. Make the type do more than label things: cut through the figure, hide behind it or stand up the side of the frame.",
        sections: [
          "intro", "brief",
          {
            title: "Myth & legend",
            text: "Durga Avtar imagines a PlayStation cover for a game drawn from Indian mythology, with a masked warrior emerging from a goddess's face in bronze and shadow. Zeus turns the god into a printed relic: blue and peach, a grainy halftone figure on crumpled paper, the name running down the edge like a spine.",
            cols: 2,
            images: [
              { src: "img/explorations/ex-game-cover.jpg", ratio: "1131:1600", alt: "Durga Avtar game cover: a masked warrior with a trident in front of a goddess's face, in bronze and black" },
              { src: "img/explorations/ex-zeus.jpg", ratio: "1:1", alt: "Zeus seated on a throne holding a lightning bolt, in peach on blue, with ZEUS set vertically" }
            ]
          },
          {
            title: "Cinema",
            text: "Two film posters at opposite temperatures. WALK is sepia and quiet: a couple, two children on an empty road, and the line \"Sometimes taking the road is more important than reaching the destination.\" Fight Back is loud: a pile of screaming faces in black on acid yellow.",
            cols: 2, ratio: "1131:1600",
            images: [
              { src: "img/explorations/ex-visual-2.jpg", alt: "WALK poster: a kissing couple above two children walking down a road, the title painted on the tarmac" },
              { src: "img/explorations/ex-visual-3.jpg", alt: "Fight Back poster: screaming faces in black on acid yellow with vertical text" }
            ]
          },
          {
            title: "Covers & colourways",
            text: "Sailor sets a polaroid in the pocket of a striped shirt, inverted into magenta and cyan. Spiderman is the same composition in two moods, cool violet and burnt orange, with the hero's head breaking through the letters of his own name.",
            cols: 3,
            images: [
              { src: "img/explorations/ex-sailor.jpg", ratio: "4:5", alt: "Sailor cover: a striped shirt in magenta and cyan with a polaroid in the pocket" },
              { src: "img/explorations/ex-spiderman.jpg", ratio: "1:1", alt: "Spiderman in violet and blue, his head overlapping the title" },
              { src: "img/explorations/ex-untitled.jpg", ratio: "1:1", alt: "Spiderman in dark red and orange, his head overlapping the title" }
            ]
          },
          "reflection"
        ],
        images: {
          hero: { src: "img/explorations/ex-hero.jpg", alt: "WALK, Zeus and Durga Avtar side by side" },
          brief: []
        }
      }
    },
    {
      slug: "photography",
      title: "Light Collected",
      realm: "Golden Hour Archive",
      category: "Photography",
      year: "2023–2026",
      role: "Photography",
      tags: ["Landscape", "Silhouette", "Night", "Still life"],
      summary: "Four years of photographs, mostly taken on a phone: desert dust at sunset, shorelines in silhouette, a single lamp in the dark. Not a series, just the light I couldn't walk past.",
      layout: "showcase",
      palette: ["#f0a640", "#e8d3b0", "#120a04"],
      motif: "eye", pattern: "burst",
      cover: "img/photography/ph-05.jpg",
      coverAlt: "",
      caseStudy: {
        note: "A personal collection of photographs taken between 2023 and 2026.",
        intro: [
          "Not a series. A collection.",
          "These photographs were taken over three to four years, wherever I happened to be when the light did something worth stopping for. They were never planned as a set, but looking back they keep returning to the same few things: gold, shadow and the one detail that holds the frame together."
        ],
        reflection: [
          "Putting these together showed me that I've been chasing the same light for years without noticing: low sun, long shadows, one subject left alone in the frame.",
          "You don't need a series to have a point of view. It shows up anyway."
        ],
        sections: [
          "intro",
          {
            title: "Gold",
            text: "Golden hour in the desert, when dust turns the air to light. Camels, trees and people reduced to silhouettes against a sky the colour of sand.",
            cols: 2,
            images: [
              { src: "img/photography/ph-05.jpg", ratio: "4:3", alt: "A camel in silhouette in a dusty golden desert at sunset, a person seated nearby" },
              { src: "img/photography/ph-06.jpg", ratio: "3:4", alt: "Camels resting together in silhouette against an orange haze" }
            ]
          },
          {
            title: "Shadow",
            text: "The other end of the day. Figures walking a tilted shoreline, a rider under a starless sky, two small lamps holding back a whole night.",
            cols: 3,
            images: [
              { src: "img/photography/ph-03.jpg", ratio: "3:4", alt: "Silhouetted people walking along a shoreline shot at a steep diagonal" },
              { src: "img/photography/ph-07.jpg", ratio: "728:1600", alt: "A person on a scooter lit by a single light under a dark night sky" },
              { src: "img/photography/ph-08.jpg", ratio: "9:16", alt: "Two small lit carts in an otherwise black frame" }
            ]
          },
          {
            title: "Detail",
            text: "Up close. The eye of a peacock feather, and a product shot made with nothing but fairy lights and a shallow focus.",
            cols: 2,
            images: [
              { src: "img/photography/ph-01.jpg", ratio: "3:4", alt: "Close-up of a peacock feather's iridescent eye" },
              { src: "img/photography/ph-04.jpg", ratio: "1600:1105", alt: "A lip balm tube in front of warm golden bokeh" }
            ]
          },
          "reflection"
        ],
        images: {
          hero: { src: "img/photography/ph-02.jpg", alt: "A red-orange sunset over the sea with a dark island on the horizon" }
        }
      }
    }
  ],

  // Shows a "next world" slot at the end of the grid. Set to "" to hide it.
  nextWorldNote: "A new world is forming. Check back soon.",

  // Set to true to show the Experiments chapter (and its stop on the map) again
  showExperiments: false,

  /* ---------- Chapter IV: Experiments ----------
     type  typography | photography | poster | study | motion | unreleased
     glyph (typography only) the characters shown on the specimen
     image optional image path
  */
  experiments: [
    { type: "typography",  title: "Untitled type study",   year: "YYYY", glyph: "Aa", palette: ["#c6ff1a", "#8b3dff", "#0d0b26"], image: "" },
    { type: "poster",      title: "Untitled poster",       year: "YYYY", palette: ["#ff2d9b", "#ff5a1f", "#1b0716"], motif: "flame", image: "" },
    { type: "photography", title: "Untitled frame",        year: "YYYY", palette: ["#d9dbe8", "#4b33ff", "#0a0a14"], motif: "moon", image: "" },
    { type: "motion",      title: "Untitled loop",         year: "YYYY", palette: ["#8b3dff", "#c6ff1a", "#0b0820"], motif: "eye", image: "" },
    { type: "study",       title: "Untitled colour study", year: "YYYY", palette: ["#ff5a1f", "#ff2d9b", "#200a05"], motif: "planet", image: "" },
    { type: "unreleased",  title: "Unreleased concept",    year: "YYYY", palette: ["#c9a85a", "#d9dbe8", "#15120a"], motif: "crown", image: "" },
    { type: "typography",  title: "Untitled lettering",    year: "YYYY", glyph: "Rr", palette: ["#ff2d9b", "#c6ff1a", "#1d0717"], image: "" },
    { type: "poster",      title: "Untitled flyer",        year: "YYYY", palette: ["#c6ff1a", "#4b33ff", "#0c1a06"], motif: "star", image: "" },
    { type: "photography", title: "Untitled frame",        year: "YYYY", palette: ["#ff7a1a", "#c9a85a", "#1a0c05"], motif: "eye", image: "" }
  ]
};

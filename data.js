const DESIGN_IDEAS = [
  {
    id: "astro-therapy",
    product: "tshirt",
    title: "Astro Therapy Club",
    subtitle: "Celestial mental health affirmations for anxious astrology lovers",
    searchVolume: "Search: 5.1k/mo",
    competition: "Competition: Low-Med",
    potential: "POD Potential: 8.7/10",
    tags: ["astrology", "mental health", "affirmations", "gen z"],
    prompt:
      "Cosmic therapist sofa floating in space with zodiac constellations and a neon 'It's okay to be a retrograde mess' headline, vaporwave palette",
    notes:
      "Trend: #mentalhealthtok meets star charts. Keep typography playful, focus on positive messaging for anxious millennials.",
    seasons: ["spring", "summer"],
    trend: "emerging",
    marketGap: [
      "400% keyword growth on TikTok in 90 days",
      "Few illustrated designs pair mental health and astrology"
    ],
  },
  {
    id: "nature-noise",
    product: "poster",
    title: "Analog Nature Soundscapes",
    subtitle: "Hand-drawn looping tapes inspired by ambient field recordings",
    searchVolume: "Search: 3.3k/mo",
    competition: "Competition: Low",
    potential: "POD Potential: 8.2/10",
    tags: ["ambient", "lo-fi", "field recordings", "audiophile"],
    prompt:
      "Retro cassette deck unraveling into watercolor pine forest and sound waves, muted moss green + warm beige palette, grain texture",
    notes:
      "Appeals to the growing slow-living + analog audio crowd. Bundle as wall art sets.",
    seasons: ["autumn", "winter"],
    trend: "steady",
    marketGap: [
      "Lo-fi + nature keywords trending but underrepresented in art prints",
      "Audiophile communities buying poster packs for studios"
    ],
  },
  {
    id: "spicy-botanicals",
    product: "mug",
    title: "Spicy Kitchen Botanicals",
    subtitle: "Cute pepper plant personas for home cooks who love heat",
    searchVolume: "Search: 4.5k/mo",
    competition: "Competition: Low",
    potential: "POD Potential: 8.9/10",
    tags: ["cooking", "hot sauce", "plants", "punny"],
    prompt:
      "Cheerful chili pepper houseplants each with quirky facial expressions and spice level badges, bold primary colors",
    notes:
      "Giftable for hot sauce subscription communities. Offer color variants tied to heat intensity.",
    seasons: ["all"],
    trend: "emerging",
    marketGap: [
      "Exploding interest in indoor gardening crossovers",
      "Mug category still light on character-driven spice themes"
    ],
  },
  {
    id: "tiny-rebellions",
    product: "tshirt",
    title: "Tiny Acts of Rebellion",
    subtitle: "Optimistic activism micro-illustrations for burnout Gen Z",
    searchVolume: "Search: 6.8k/mo",
    competition: "Competition: Medium",
    potential: "POD Potential: 8.4/10",
    tags: ["activism", "gentle rebellion", "gen z", "positivity"],
    prompt:
      "Collage of soft pastel doodles (watering plants, community fridge, free library) with bold handwritten 'Tiny Acts Change Systems' message",
    notes:
      "Positive activism is outperforming doom messaging. Keep linework soft and inclusive.",
    seasons: ["spring", "summer"],
    trend: "steady",
    marketGap: [
      "Viral #gentlerebellion tag but few polished merch options",
      "Sells well in sticker form; shirts/posters underserved"
    ],
  },
  {
    id: "cryptid-camp",
    product: "poster",
    title: "Cryptid Summer Camp Badges",
    subtitle: "National park style patches for folklore seekers",
    searchVolume: "Search: 7.2k/mo",
    competition: "Competition: Medium",
    potential: "POD Potential: 9.1/10",
    tags: ["cryptids", "national park", "retro", "camp"],
    prompt:
      "Grid of embroidered-style badges featuring Bigfoot, Mothman, Jersey Devil in 70s park poster palette with textured typography",
    notes:
      "Collectible poster set converts well to stickers, enamel pins, and tees. Lean into faux embroidery shading.",
    seasons: ["summer"],
    trend: "evergreen",
    marketGap: [
      "Cryptid fandom steady; outdoor aesthetic crossover relatively untapped",
      "High pinboard saves for retro camp art"
    ],
  },
  {
    id: "sci-fi-seniors",
    product: "mug",
    title: "Sci-Fi Book Club Seniors",
    subtitle: "Silver-haired protagonists quoting vintage space pulp",
    searchVolume: "Search: 2.9k/mo",
    competition: "Competition: Low",
    potential: "POD Potential: 8.1/10",
    tags: ["senior", "book club", "sci-fi", "representation"],
    prompt:
      "Grandma astronaut sipping tea in a spaceship library, mid-century modern colors, lettering 'Still Boldly Going'",
    notes:
      "Boomer sci-fi Facebook groups crave representation. Add foil accent mockups for premium feel.",
    seasons: ["all"],
    trend: "emerging",
    marketGap: [
      "Low supply of older hero characters in merch",
      "Saves spiking on Pinterest for 'cozy sci-fi' boards"
    ],
  },
  {
    id: "moss-punk",
    product: "tshirt",
    title: "Moss Punk Movement",
    subtitle: "Eco-punk aesthetic with overgrown circuitry motifs",
    searchVolume: "Search: 4.1k/mo",
    competition: "Competition: Low",
    potential: "POD Potential: 9.0/10",
    tags: ["solarpunk", "biotech", "green goth", "future"],
    prompt:
      "Futuristic city skyline overtaken by neon moss and mushrooms growing from circuit boards, bold stencil typography",
    notes:
      "Solarpunk adjacent keywords are ascending with minimal direct merch. Offer dark and light fabric versions.",
    seasons: ["autumn", "winter"],
    trend: "emerging",
    marketGap: [
      "#mosscore posts up 180% quarter over quarter",
      "Gamers + climate communities hungry for merch"
    ],
  },
  {
    id: "roller-disenchant",
    product: "poster",
    title: "Roller Disco Disenchantment",
    subtitle: "Retro disco meets surreal breakup quotes",
    searchVolume: "Search: 5.6k/mo",
    competition: "Competition: Medium",
    potential: "POD Potential: 7.8/10",
    tags: ["roller skating", "disco", "breakup", "retro"],
    prompt:
      "Roller skater gliding through shattered disco ball with neon typographic lyric 'Healing looks like glitter on the floor', 80s gradients",
    notes:
      "Roller revival fans crave unique emotional art prints. Use metallic textures in previews.",
    seasons: ["summer"],
    trend: "steady",
    marketGap: [
      "Roller skating communities still active post-pandemic",
      "Most designs focus on joy; cathartic angle is fresh"
    ],
  },
  {
    id: "heirloom-hackers",
    product: "tshirt",
    title: "Heirloom Plant Hackers",
    subtitle: "Garden tech mashups for STEM foodies",
    searchVolume: "Search: 3.7k/mo",
    competition: "Competition: Low",
    potential: "POD Potential: 8.6/10",
    tags: ["gardening", "STEM", "DIY", "biohacking"],
    prompt:
      "Cutaway blueprint of a tomato plant being coded on a tablet with playful annotations, vibrant cyan + tomato red palette",
    notes:
      "Community gardens + tech meetups love clever mashups. Offer infographic variants.",
    seasons: ["spring", "summer"],
    trend: "emerging",
    marketGap: [
      "Reddit r/hydroponics and garden tech groups requesting apparel",
      "Little overlap between farmcore and tech style"
    ],
  },
  {
    id: "ocean-optimists",
    product: "mug",
    title: "Ocean Optimists",
    subtitle: "Cute marine conservation mascots for kids at heart",
    searchVolume: "Search: 4.9k/mo",
    competition: "Competition: Low",
    potential: "POD Potential: 8.3/10",
    tags: ["ocean", "cute", "conservation", "kids"],
    prompt:
      "Smiling seal, turtle, and manta ray team holding reusable cups with bubbly hand-lettered 'Tide Turners Club', pastel aquatic palette",
    notes:
      "Bundle mugs + stickers. Donate % to reef groups for marketing angle.",
    seasons: ["summer"],
    trend: "steady",
    marketGap: [
      "Parents seeking wholesome eco merch",
      "Kawaii marine art trending on Instagram reels"
    ],
  },
  {
    id: "nocturnal-notes",
    product: "poster",
    title: "Nocturnal Study Notes",
    subtitle: "Study motivation collage for night owl students",
    searchVolume: "Search: 6.1k/mo",
    competition: "Competition: Medium",
    potential: "POD Potential: 7.9/10",
    tags: ["study", "night owl", "aesthetic", "students"],
    prompt:
      "Moonlit desk scene with glowing sticky notes, cozy hoodie figure, and motivational snippets in handwriting fonts, deep indigo palette",
    notes:
      "Back-to-school evergreen. Offer multilingual variants for global students.",
    seasons: ["autumn"],
    trend: "evergreen",
    marketGap: [
      "Studygram audience evergreen yet under-merchandised",
      "Dark academia aesthetic still strong"
    ],
  },
  {
    id: "adaptive-athletes",
    product: "tshirt",
    title: "Adaptive Athlete Energy",
    subtitle: "Dynamic sports silhouettes celebrating accessible fitness",
    searchVolume: "Search: 3.2k/mo",
    competition: "Competition: Low",
    potential: "POD Potential: 8.5/10",
    tags: ["adaptive sports", "inclusion", "fitness", "motivation"],
    prompt:
      "Bold duotone figures with prosthetics and wheelchairs playing basketball and track events, energetic diagonal shapes, headline 'Limitless Motion'",
    notes:
      "Athletic inclusion trending across sports media. Partner messaging with adaptive orgs for authenticity.",
    seasons: ["all"],
    trend: "emerging",
    marketGap: [
      "Search interest up 150% year over year",
      "Few wearable designs beyond event merch"
    ],
  },
];

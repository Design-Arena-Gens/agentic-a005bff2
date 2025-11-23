const resultsEl = document.getElementById("results");
const searchEl = document.getElementById("search");
const productFilterEl = document.getElementById("productFilter");
const seasonFilterEl = document.getElementById("seasonFilter");
const trendFilterEl = document.getElementById("trendFilter");
const cardTemplate = document.getElementById("cardTemplate");
const sweetSpotHeadline = document.getElementById("sweetSpotHeadline");
const sweetSpotDetails = document.getElementById("sweetSpotDetails");

const uniqueSeasons = [
  ...new Set(
    DESIGN_IDEAS.flatMap((item) =>
      item.seasons.includes("all") ? ["all year"] : item.seasons
    )
  ),
];

uniqueSeasons
  .sort((a, b) => a.localeCompare(b))
  .forEach((season) => {
    const option = document.createElement("option");
    option.value = season === "all year" ? "all" : season;
    option.textContent =
      season === "all year"
        ? "All Year"
        : season.charAt(0).toUpperCase() + season.slice(1);
    seasonFilterEl.appendChild(option);
  });

const PRODUCT_LABELS = {
  tshirt: "T-Shirt",
  mug: "Mug",
  poster: "Poster",
};

const TREND_BADGE = {
  emerging: "🔥 Emerging",
  steady: "🧭 Steady",
  evergreen: "🌿 Evergreen",
};

function renderIdeas(ideas) {
  resultsEl.innerHTML = "";

  ideas.forEach((idea) => {
    const clone = cardTemplate.content.cloneNode(true);

    clone.querySelector("[data-slot='product']").textContent = `${
      PRODUCT_LABELS[idea.product]
    } · ${TREND_BADGE[idea.trend]}`;
    clone.querySelector("[data-slot='title']").textContent = idea.title;
    clone.querySelector("[data-slot='subtitle']").textContent = idea.subtitle;
    clone.querySelector("[data-slot='searchVolume']").textContent =
      idea.searchVolume;
    clone.querySelector("[data-slot='competition']").textContent =
      idea.competition;
    clone.querySelector("[data-slot='potential']").textContent = idea.potential;
    const tagList = clone.querySelector("[data-slot='tags']");
    idea.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tagList.appendChild(li);
    });
    clone.querySelector("[data-slot='prompt']").textContent = idea.prompt;

    const notesEl = clone.querySelector("[data-slot='notes']");
    const notesPara = document.createElement("p");
    notesPara.textContent = idea.notes;
    notesEl.appendChild(notesPara);

    const gapList = document.createElement("ul");
    idea.marketGap.forEach((gap) => {
      const li = document.createElement("li");
      li.textContent = gap;
      gapList.appendChild(li);
    });
    notesEl.appendChild(gapList);

    resultsEl.appendChild(clone);
  });

  if (ideas.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty";
    emptyState.textContent =
      "No matches. Try broadening your filters or exploring adjacent niches.";
    resultsEl.appendChild(emptyState);
  }

  highlightSweetSpot(ideas);
}

function highlightSweetSpot(ideas) {
  if (!ideas.length) {
    sweetSpotHeadline.textContent =
      "No current sweet spots — reset filters to find fresh opportunities.";
    sweetSpotDetails.innerHTML = "";
    return;
  }

  const sorted = [...ideas].sort((a, b) => {
    const scoreA = parseFloat(a.potential.match(/([0-9]+\.?[0-9]?)/)[0]);
    const scoreB = parseFloat(b.potential.match(/([0-9]+\.?[0-9]?)/)[0]);
    const competitionScore = (text) => {
      const normalized = text.toLowerCase();
      if (normalized.includes("low")) return 2;
      if (normalized.includes("med")) return 1;
      return 0;
    };

    return scoreB + competitionScore(b.competition) - (scoreA + competitionScore(a.competition));
  });

  const top = sorted[0];
  sweetSpotHeadline.textContent = `${top.title} → ${
    PRODUCT_LABELS[top.product]
  } audience ready to buy.`;

  sweetSpotDetails.innerHTML = "";
  top.marketGap.forEach((detail) => {
    const li = document.createElement("li");
    li.textContent = detail;
    sweetSpotDetails.appendChild(li);
  });
}

function matchesFilters(idea, { search, product, season, trend }) {
  const normalizedSearch = search.trim().toLowerCase();

  if (product !== "all" && idea.product !== product) return false;
  if (trend !== "all" && idea.trend !== trend) return false;

  if (season !== "all") {
    const seasons = idea.seasons.includes("all") ? ["all"] : idea.seasons;
    if (!seasons.includes(season)) return false;
  }

  if (!normalizedSearch) return true;

  const haystack = [
    idea.title,
    idea.subtitle,
    idea.prompt,
    idea.notes,
    idea.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return normalizedSearch
    .split(/\s+/)
    .every((term) => haystack.includes(term));
}

function gatherFilters() {
  return {
    search: searchEl.value,
    product: productFilterEl.value,
    season: seasonFilterEl.value,
    trend: trendFilterEl.value,
  };
}

function applyFilters() {
  const filters = gatherFilters();
  const filtered = DESIGN_IDEAS.filter((idea) => matchesFilters(idea, filters));
  renderIdeas(filtered);
}

[searchEl, productFilterEl, seasonFilterEl, trendFilterEl].forEach((el) => {
  el.addEventListener("input", applyFilters);
  el.addEventListener("change", applyFilters);
});

renderIdeas(DESIGN_IDEAS);

const data = window.TRAIN_DATA;

/* ──────────────────────────────────
   TYPE SECTIONS
────────────────────────────────── */
const TYPE_ORDER = ["台鐵", "觀光", "高鐵", "捷運", "輕軌"];
const TYPE_EMOJI = { "台鐵": "🚆", "高鐵": "🚄", "捷運": "🚇", "輕軌": "🚊", "觀光": "🚂" };
/* Categorical accent per type (validated 5-slot palette, fixed order — see dataviz skill) */
const TYPE_ACCENT = { "台鐵": "#2a78d6", "高鐵": "#1baf7a", "捷運": "#eda100", "輕軌": "#008300", "觀光": "#4a3aa7" };

/* Return the "primary" variant of a train: newest active variant,
   falling back to newest overall if none are active.
   For flat (no-variants) entries, returns null. */
function getPrimaryVariant(v) {
  if (!v.variants || !v.variants.length) return null;
  const active = v.variants.filter(x => x.status !== "retired");
  const pool = active.length ? active : v.variants;
  return pool.reduce((a, b) => (b.yearStart || 0) > (a.yearStart || 0) ? b : a);
}

/* True when at least one variant defines its own routes (e.g. 阿里山's
   栩悅號/福森號 run different segments than the shared 本線). When true,
   routes render per-variant instead of once in the shared basic-info area. */
function hasPerVariantRoutes(v) {
  return Array.isArray(v.variants) && v.variants.some(x => x.routes && x.routes.length);
}

let searchQuery = "";
let openCardId  = null;

/* ── SEARCH ── */
function matchesSearch(v) {
  if (!searchQuery) return true;
  const q = searchQuery.toLowerCase();
  const variantHay = (v.variants || []).flatMap(x => [x.model, x.nickname, x.manufacturer]);
  const hay = [v.name, v.nameEn, v.model, v.operator, v.type, ...(v.tags||[]), ...variantHay]
    .join(" ").toLowerCase();
  return hay.includes(q);
}

/* ── HTML / URL / COLOR HELPERS ── */
const ESC_MAP = { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" };
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ESC_MAP[c]);
}

function safeColor(hex) {
  return /^#[0-9a-fA-F]{6}$/.test(hex) ? hex : "#4a5568";
}

function safePhotoUrl(url) {
  if (!url) return "";
  if (/^https:\/\//i.test(url)) return url;
  if (/^images\/[\w./-]+$/.test(url)) return url;
  return "";
}

function adjustColor(hex, amt) {
  if (!hex || !hex.startsWith("#")) return "#2d3748";
  let r = parseInt(hex.slice(1,3),16);
  let g = parseInt(hex.slice(3,5),16);
  let b = parseInt(hex.slice(5,7),16);
  r = Math.max(0, Math.min(255, r + amt));
  g = Math.max(0, Math.min(255, g + amt));
  b = Math.max(0, Math.min(255, b + amt));
  return "#" + [r,g,b].map(x => x.toString(16).padStart(2,"0")).join("");
}

function gradient(color, delta=-30) {
  const c = safeColor(color);
  return `linear-gradient(135deg,${c} 0%,${adjustColor(c, delta)} 100%)`;
}

/* Build the photo slot with optional credit tooltip.
   `source` is the variant/train whose photoUrl+photoCredit is used;
   falls back to top-level fields on the train object `v` — unless
   `source` explicitly sets photoUrl: null, meaning "no photo exists
   for this specific variant" (show the placeholder, don't borrow a
   sibling variant's photo and mislabel it). */
function buildPhotoSlot(v, source) {
  const hasOwnPhoto = source && Object.prototype.hasOwnProperty.call(source, "photoUrl");
  const photo = safePhotoUrl(hasOwnPhoto ? source.photoUrl : v.photoUrl);
  if (!photo) {
    return `<div class="img-slot"><span>📷</span><span>照片</span></div>`;
  }
  const credit = (source && source.photoCredit) || v.photoCredit;
  const altText = v.name + (source && source.model ? " · " + source.model : "");
  const creditHTML = credit ? `
    <button class="photo-credit-btn" aria-label="照片來源" title="照片來源">i</button>
    <div class="photo-credit-tooltip" role="tooltip">
      Photo by ${esc(credit.author || "Unknown")}${credit.license ? ` / ${esc(credit.license)}` : ""}
      ${credit.sourceUrl ? `<br><a href="${esc(credit.sourceUrl)}" target="_blank" rel="noopener noreferrer">來源連結 ↗</a>` : ""}
    </div>` : "";
  return `<div class="img-slot img-slot--photo">
    <img src="${esc(photo)}" alt="${esc(altText)}" loading="lazy" onerror="this.parentElement.classList.remove('img-slot--photo');this.parentElement.classList.add('img-slot');this.parentElement.innerHTML='&lt;span&gt;📷&lt;/span&gt;&lt;span&gt;照片&lt;/span&gt;'">
    ${creditHTML}
  </div>`;
}

/* Build the station-hop row for one or more routes. */
function buildRoutesHTML(routes, color) {
  const clr = safeColor(color);
  return routes.map(r => {
    const stHTML = r.stations.map((s, i) => {
      const isLast = i === r.stations.length - 1;
      return `<div class="station" style="color:${clr}">
        <div class="station-row">
          <div class="station-dot"></div>
          ${!isLast ? `<div class="station-line"></div>` : ""}
        </div>
        <div class="station-name">${esc(s)}</div>
      </div>`;
    }).join("");
    return `<div class="route-name">${esc(r.name)}</div>
            <div class="route-stations-scroll"><div class="route-stations">${stHTML}</div></div>`;
  }).join("");
}

/* ── CARD (grid) ── */

/* All variant model names for a train, or the single flat model.
   Drives the tag-like "variant pills" row on each card. */
function variantPillModels(v) {
  if (v.variants && v.variants.length) return v.variants.map(x => x.model);
  return v.model ? [v.model] : [];
}

function buildPillsHTML(v) {
  const models = variantPillModels(v);
  if (!models.length) return "";
  return `<div class="card-pills">${
    models.map(m => `<span class="variant-pill" data-id="${esc(v.id)}" data-variant="${esc(m)}">${esc(m)}</span>`).join("")
  }</div>`;
}

function buildCardEl(v, activeId) {
  const card = document.createElement("div");
  card.className = "card" + (v.id === activeId ? " active" : "");
  card.dataset.id = v.id;
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", v.name);

  const primary = getPrimaryVariant(v);
  const photo = safePhotoUrl((primary && primary.photoUrl) || v.photoUrl);

  card.innerHTML = `
    <div class="card-media" style="background:${gradient(v.color)};">
      <span class="card-media-emoji">${esc(v.emoji || "🚂")}</span>
      ${photo ? `<img class="card-media-img" src="${esc(photo)}" alt="${esc(v.name)}" loading="lazy" onerror="this.remove()">` : ""}
      <div class="card-scrim"></div>
      <div class="card-overlay">
        <div class="card-name">${esc(v.name)}</div>
        ${buildPillsHTML(v)}
        <div class="card-operator">${esc(v.operator || "")}</div>
      </div>
    </div>`;
  return card;
}

/* ── DETAIL HTML ── */

/* Build the variant-specific section: photo + specs + features + funFact
   (+ its own routes, only when the card uses per-variant routes).
   `source` can be a flat train entry OR a variant object. `v` is always
   the parent train (needed for color/photo fallback and route fallback). */
function buildVariantSection(source, v) {
  const specs = [
    { label:"最高時速", value: source.maxSpeed     ? source.maxSpeed + " km/h" : "—" },
    { label:"車廂節數", value: source.cars         ? source.cars     + " 節"   : "—" },
    { label:"製造商",   value: source.manufacturer || "—" },
    { label:"啟用年份", value: source.yearStart
        ? source.yearStart + " 年" + (source.yearEnd ? "－" + source.yearEnd + " 年" : "")
        : "—" }
  ];
  const specsHTML = specs.map(s =>
    `<div class="spec-item"><div class="spec-label">${esc(s.label)}</div><div class="spec-value">${esc(s.value)}</div></div>`
  ).join("");

  // For flat cards `source` IS `v` — its description/features already
  // rendered once in the basic-info block, so skip re-printing them here.
  const isDistinctVariant = source !== v;
  const featHTML = (isDistinctVariant && source.features || []).map(f => `<li>${esc(f)}</li>`).join("");

  let routesHTML = "";
  if (hasPerVariantRoutes(v)) {
    const routes = source.routes || v.routes || [];
    if (routes.length) routesHTML = buildRoutesHTML(routes, v.color);
  }

  // Photo sits in its own column (sticky on wide screens) so it stays
  // in view alongside specs/features while scrolling, instead of
  // scrolling away before the reader reaches the technical details.
  return `
    <div class="variant-body">
      <div class="variant-photo-slot">${buildPhotoSlot(v, source)}</div>
      <div class="variant-info">
        ${isDistinctVariant && source.description ? `<p class="variant-desc">${esc(source.description)}</p>` : ""}
        ${routesHTML ? `<div class="section-title">營運路線</div><div class="routes-wrap">${routesHTML}</div>` : ""}
        <div class="section-title">技術規格</div>
        <div class="specs-grid">${specsHTML}</div>
        ${featHTML ? `<div class="section-title">特色亮點</div><ul class="features-list">${featHTML}</ul>` : ""}
        ${source.funFact ? `<div class="fun-fact"><div class="fun-fact-icon">🎉</div><div class="fun-fact-text">${esc(source.funFact)}</div></div>` : ""}
      </div>
    </div>
  `;
}

function buildDetailHTML(v) {
  const hasVariants = Array.isArray(v.variants) && v.variants.length > 0;
  const primary = hasVariants ? getPrimaryVariant(v) : null;
  const headerModel = hasVariants ? primary.model : v.model;
  const perVariantRoutes = hasPerVariantRoutes(v);

  const featHTML = (v.features || []).map(f => `<li>${esc(f)}</li>`).join("");

  let sharedRoutesHTML = "";
  if (!perVariantRoutes && v.routes && v.routes.length) {
    sharedRoutesHTML = buildRoutesHTML(v.routes, v.color);
  }

  let tabsHTML = "";
  if (hasVariants) {
    tabsHTML = `<div class="variant-tabs" role="tablist">${
      v.variants.map(x => {
        const active = x === primary;
        const retired = x.status === "retired";
        return `<button class="variant-tab${active ? " active" : ""}" role="tab" data-variant="${esc(x.model)}">
          ${esc(x.model)}${retired ? `<span class="badge-retired">已退役</span>` : ""}
        </button>`;
      }).join("")
    }</div>`;
  }

  return `
    <div class="detail-header" style="background:${gradient(v.color, -35)};">
      <div class="detail-header-info">
        <div class="detail-header-name">${esc(v.name)}</div>
        <div class="detail-header-model">${esc(v.nameEn || "")}${headerModel ? " · " + esc(headerModel) : ""}</div>
        <div class="detail-header-operator">${esc(v.operator || "")}</div>
      </div>
      <button class="close-btn" onclick="closeDetail()" title="關閉">✕</button>
    </div>
    <div class="detail-body">
      <div class="basic-info">
        <p class="detail-desc">${esc(v.description || "")}</p>
        ${featHTML ? `<ul class="features-list basic-features">${featHTML}</ul>` : ""}
        ${sharedRoutesHTML ? `<div class="section-title">營運路線</div><div class="routes-wrap">${sharedRoutesHTML}</div>` : ""}
      </div>
      ${tabsHTML}
      <div class="variant-detail">${buildVariantSection(hasVariants ? primary : v, v)}</div>
    </div>`;
}

/* Switch the active variant tab within an already-open detail panel.
   Shared by both the in-panel tab clicks and the on-card variant pills. */
function activateVariant(panel, v, model) {
  if (!v.variants) return;
  const variant = v.variants.find(x => x.model === model);
  if (!variant) return;
  const panelInner = panel.querySelector(".detail-panel");
  panel.querySelectorAll(".variant-tab").forEach(t =>
    t.classList.toggle("active", t.dataset.variant === model));
  const section = panel.querySelector(".variant-detail");
  section.innerHTML = buildVariantSection(variant, v);
  const header = panel.querySelector(".detail-header-model");
  if (header) {
    const nameEn = v.nameEn ? esc(v.nameEn) : "";
    header.innerHTML = nameEn + (variant.model ? " · " + esc(variant.model) : "");
  }
  panel.style.maxHeight = panelInner.scrollHeight + "px";
}

/* ── DETAIL PANEL OPEN/CLOSE ── */
function getPanelForCard(id) {
  return document.querySelector(`.detail-panel-wrap[data-for-${CSS.escape(id)}]`);
}

/* `.detail-panel-wrap` needs overflow:hidden while its max-height is
   animating (so content doesn't visibly poke out), but overflow:hidden
   also makes it the sticky-positioning containing block for any sticky
   descendant (the variant tabs / photo column) — pinning them to that
   box instead of the viewport, i.e. no visible "stick" at all. Once the
   open transition settles, switch to overflow:visible so sticky works;
   switch back to hidden before collapsing so the close animation still
   clips cleanly. */
function settlePanel(panel) {
  panel.classList.add("settled");
}
function unsettlePanel(panel) {
  panel.classList.remove("settled");
}

function mountDetail(panel, v, { animate = true } = {}) {
  const inner = panel.querySelector(".detail-panel");
  inner.innerHTML = buildDetailHTML(v);
  panel.classList.add("open");
  if (!animate) {
    panel.style.maxHeight = "none";
    settlePanel(panel);
    return;
  }
  unsettlePanel(panel);
  panel.style.maxHeight = inner.scrollHeight + "px";
  panel.addEventListener("transitionend", function onEnd(e) {
    if (e.propertyName !== "max-height") return;
    panel.removeEventListener("transitionend", onEnd);
    settlePanel(panel);
  });
}

function openDetail(id) {
  const panel = getPanelForCard(id);
  if (!panel) return;
  const v = data.find(x => x.id === id);
  if (!v) return;

  // Close previous if different row
  if (openCardId && openCardId !== id) {
    const prev = getPanelForCard(openCardId);
    if (prev) {
      unsettlePanel(prev);
      prev.classList.remove("open");
      prev.style.maxHeight = "";
    }
    document.querySelector(`.card[data-id="${openCardId}"]`)?.classList.remove("active");
  }

  mountDetail(panel, v);
  openCardId = id;
  document.querySelector(`.card[data-id="${id}"]`)?.classList.add("active");
  setTimeout(() => panel.scrollIntoView({ behavior:"smooth", block:"nearest" }), 80);
}

function closeDetail() {
  if (!openCardId) return;
  const panel = getPanelForCard(openCardId);
  if (panel) {
    unsettlePanel(panel);
    panel.classList.remove("open");
    panel.style.maxHeight = "";
  }
  document.querySelector(`.card[data-id="${openCardId}"]`)?.classList.remove("active");
  openCardId = null;
}

function toggleDetail(id) {
  if (openCardId === id) closeDetail();
  else openDetail(id);
}

/* ── RENDER ── */
function getColumns() {
  const w = window.innerWidth;
  if (w >= 900) return 4;
  if (w >= 600) return 3;
  return 2;
}

function render() {
  const root = document.getElementById("sections");
  const wasOpen = openCardId; // preserve across re-render
  root.innerHTML = "";

  const filtered = data.filter(matchesSearch);
  const resultCount = document.getElementById("resultCount");

  if (!filtered.length) {
    resultCount.textContent = "沒有符合的車輛";
    root.innerHTML = `<div class="no-results">
      <span class="no-results-emoji">🔍</span>
      <p>找不到符合條件的車輛，換個關鍵字試試？</p>
    </div>`;
    openCardId = null;
    return;
  }

  resultCount.textContent = searchQuery
    ? `符合「${searchQuery}」：${filtered.length} 種車輛`
    : `共 ${filtered.length} 種車輛`;

  const cols = getColumns();

  TYPE_ORDER.forEach(type => {
    const items = filtered.filter(v => v.type === type);
    if (!items.length) return;

    const section = document.createElement("section");
    section.className = "type-section";
    section.id = "section-" + type;
    section.innerHTML = `
      <h2 class="type-heading" style="--accent:${TYPE_ACCENT[type] || "#2a78d6"}">
        <span class="type-heading-emoji">${TYPE_EMOJI[type] || "🚆"}</span>
        ${esc(type)}
        <span class="type-count">${items.length}</span>
      </h2>
      <div class="grid"></div>`;
    root.appendChild(section);

    const grid = section.querySelector(".grid");

    // Chunk into rows so each row gets one full-width detail panel
    for (let i = 0; i < items.length; i += cols) {
      const row = items.slice(i, i + cols);
      const rowIds = row.map(v => v.id);

      row.forEach(v => grid.appendChild(buildCardEl(v, wasOpen)));

      const panelWrap = document.createElement("div");
      panelWrap.className = "detail-panel-wrap";
      rowIds.forEach(id => panelWrap.setAttribute(`data-for-${id}`, "1"));
      panelWrap.innerHTML = `<div class="detail-panel"></div>`;
      grid.appendChild(panelWrap);

      if (wasOpen && rowIds.includes(wasOpen)) {
        const v = data.find(x => x.id === wasOpen);
        if (v) {
          mountDetail(panelWrap, v, { animate: false });
          grid.querySelector(`.card[data-id="${wasOpen}"]`)?.classList.add("active");
        }
      }
    }
  });
}

/* ── TYPE JUMP-NAV ── */
function buildTypeNav() {
  const nav = document.getElementById("typeNav");
  nav.innerHTML = TYPE_ORDER.map(type =>
    `<button class="type-nav-link" data-type="${esc(type)}" style="--accent:${TYPE_ACCENT[type] || "#2a78d6"}">
      <span class="type-nav-dot"></span>${TYPE_EMOJI[type] || "🚆"} ${esc(type)}
    </button>`
  ).join("");
  nav.addEventListener("click", e => {
    const btn = e.target.closest(".type-nav-link");
    if (!btn) return;
    document.getElementById("section-" + btn.dataset.type)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ── INIT ── */

/* Keep --navbar-h in sync with the real sticky nav-bar height, so the
   sticky variant tabs / photo column pin just below it instead of
   using a hardcoded guess (the bar can wrap to two lines on narrow
   viewports when the search box and type-nav don't fit one row). */
function syncNavbarHeight() {
  const bar = document.querySelector(".nav-bar");
  if (bar) document.documentElement.style.setProperty("--navbar-h", bar.offsetHeight + "px");
}
window.addEventListener("resize", syncNavbarHeight);

document.getElementById("searchInput").addEventListener("input", e => { searchQuery = e.target.value.trim(); render(); });

const sectionsEl = document.getElementById("sections");
sectionsEl.addEventListener("click", e => {
  // Photo credit toggle
  const creditBtn = e.target.closest(".photo-credit-btn");
  if (creditBtn && sectionsEl.contains(creditBtn)) {
    e.stopPropagation();
    const slot = creditBtn.closest(".img-slot--photo");
    slot?.classList.toggle("credit-open");
    return;
  }
  // Close open credit tooltip on outside click
  document.querySelectorAll(".img-slot--photo.credit-open").forEach(s => s.classList.remove("credit-open"));

  // Variant tab switch (inside an open detail panel) takes priority over card click
  const tab = e.target.closest(".variant-tab");
  if (tab && sectionsEl.contains(tab)) {
    e.stopPropagation();
    const panel = tab.closest(".detail-panel-wrap");
    const v = data.find(x => x.id === openCardId);
    if (v) activateVariant(panel, v, tab.dataset.variant);
    return;
  }

  // Variant pill on a (possibly still closed) card: open it straight to that variant
  const pill = e.target.closest(".variant-pill");
  if (pill && sectionsEl.contains(pill)) {
    e.stopPropagation();
    const id = pill.dataset.id;
    const v = data.find(x => x.id === id);
    if (!v) return;
    if (openCardId !== id) openDetail(id);
    const panel = getPanelForCard(id);
    if (panel) activateVariant(panel, v, pill.dataset.variant);
    return;
  }

  const card = e.target.closest(".card");
  if (card && sectionsEl.contains(card)) toggleDetail(card.dataset.id);
});
sectionsEl.addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".card");
  if (card && sectionsEl.contains(card)) {
    e.preventDefault();
    toggleDetail(card.dataset.id);
  }
});

let lastColumns = getColumns();
window.addEventListener("resize", () => {
  const cols = getColumns();
  if (cols !== lastColumns) {
    lastColumns = cols;
    render();
  }
});

buildTypeNav();
syncNavbarHeight();
render();

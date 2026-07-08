const data = window.TRAIN_DATA;

/* ──────────────────────────────────
   FILTER CONFIG (derived from data)
────────────────────────────────── */
function yearToDecade(year) {
  if (!year) return "";
  return `${Math.floor(year / 10) * 10}s`;
}

/* Return the "primary" variant of a train.
   Priority: (1) matches the currently-active era filter,
             (2) newest active variant,
             (3) newest overall variant.
   For flat (no-variants) entries, returns null. */
function getPrimaryVariant(v) {
  if (!v.variants || !v.variants.length) return null;
  if (activeEra !== "全部") {
    const eraMatch = v.variants.filter(x => yearToDecade(x.yearStart) === activeEra);
    if (eraMatch.length) {
      return eraMatch.reduce((a, b) => (b.yearStart || 0) > (a.yearStart || 0) ? b : a);
    }
  }
  const active = v.variants.filter(x => x.status !== "retired");
  const pool = active.length ? active : v.variants;
  return pool.reduce((a, b) => (b.yearStart || 0) > (a.yearStart || 0) ? b : a);
}

/* Year used on card era-tag: primary variant year for multi-variant, yearStart for flat. */
function primaryYear(v) {
  const primary = getPrimaryVariant(v);
  return primary ? primary.yearStart : v.yearStart;
}

/* All years across variants (or single year); used for era filter. */
function allYears(v) {
  if (v.variants && v.variants.length) return v.variants.map(x => x.yearStart).filter(Boolean);
  return v.yearStart ? [v.yearStart] : [];
}

const TYPES   = ["全部", ...new Set(data.map(d => d.type))];
const REGIONS = ["全部", ...new Set(data.flatMap(d => d.region || []))];
const ERAS    = ["全部", ...[...new Set(data.flatMap(d => allYears(d).map(yearToDecade)))].sort()];

let activeType   = "全部";
let activeRegion = "全部";
let activeEra    = "全部";
let searchQuery  = "";
let openCardId   = null;

/* ── CHIPS ── */
function buildChips(containerId, items, activeClass, getActive, setter) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "chip" + (getActive() === item ? " " + activeClass : "");
    btn.textContent = item;
    btn.addEventListener("click", () => {
      setter(item);
      buildChips(containerId, items, activeClass, getActive, setter);
      render();
    });
    el.appendChild(btn);
  });
}

function buildAllChips() {
  buildChips("typeChips",   TYPES,   "active-type",   () => activeType,   v => { activeType   = v; });
  buildChips("regionChips", REGIONS, "active-region", () => activeRegion, v => { activeRegion = v; });
  buildChips("eraChips",    ERAS,    "active-era",    () => activeEra,    v => { activeEra    = v; });
}

/* ── FILTERS ── */
function matchesFilters(v) {
  if (activeType   !== "全部" && v.type !== activeType)                          return false;
  if (activeRegion !== "全部" && !(v.region && v.region.includes(activeRegion))) return false;
  if (activeEra    !== "全部") {
    const eras = allYears(v).map(yearToDecade);
    if (!eras.includes(activeEra)) return false;
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    const variantHay = (v.variants || []).flatMap(x => [x.model, x.nickname, x.manufacturer]);
    const hay = [v.name, v.nameEn, v.model, v.operator, v.type, ...(v.tags||[]), ...variantHay]
      .join(" ").toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
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

/* ── DETAIL HTML ── */

/* Build the per-variant section (specs grid + features + funFact).
   `source` can be a flat train entry OR a variant object — both have
   the same shape for the fields we read here. */
function buildVariantSection(source) {
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

  const featHTML = (source.features || []).map(f => `<li>${esc(f)}</li>`).join("");

  return `
    ${source.description ? `<p class="variant-desc">${esc(source.description)}</p>` : ""}
    <div class="section-title">技術規格</div>
    <div class="specs-grid">${specsHTML}</div>
    ${featHTML ? `<div class="section-title">特色亮點</div><ul class="features-list">${featHTML}</ul>` : ""}
    ${source.funFact ? `<div class="fun-fact"><div class="fun-fact-icon">🎉</div><div class="fun-fact-text">${esc(source.funFact)}</div></div>` : ""}
  `;
}

function buildDetailHTML(v) {
  // Routes (service-level, shared across variants)
  let routesHTML = "";
  if (v.routes && v.routes.length) {
    const clr = safeColor(v.color);
    routesHTML = v.routes.map(r => {
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

  const hasVariants = Array.isArray(v.variants) && v.variants.length > 0;
  const primary = hasVariants ? getPrimaryVariant(v) : null;
  const headerModel = hasVariants ? primary.model : v.model;

  // Photo: prefer variant's own photoUrl (if any), fall back to train-level photoUrl
  const photo = safePhotoUrl((primary && primary.photoUrl) || v.photoUrl);
  const svg = (window.TRAIN_SVG && window.TRAIN_SVG[v.id]) || "";

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
      <div class="detail-header-emoji">${esc(v.emoji || "🚂")}</div>
      <div class="detail-header-info">
        <div class="detail-header-name">${esc(v.name)}</div>
        <div class="detail-header-model">${esc(v.nameEn || "")}${headerModel ? " · " + esc(headerModel) : ""}</div>
        <div class="detail-header-operator">${esc(v.operator || "")}</div>
      </div>
      <button class="close-btn" onclick="closeDetail()" title="關閉">✕</button>
    </div>
    <div class="detail-body">
      <div class="img-slots">
        ${photo
          ? `<div class="img-slot img-slot--photo"><img src="${esc(photo)}" alt="${esc(v.name)}" loading="lazy" onerror="this.parentElement.innerHTML='&lt;span&gt;📷&lt;/span&gt;&lt;span&gt;照片&lt;/span&gt;'"></div>`
          : `<div class="img-slot"><span>📷</span><span>照片</span></div>`
        }
        <div class="img-slot img-slot--svg">
          ${svg || `<span>${esc(v.emoji || "🚂")}</span><span style="font-size:0.7rem;color:#a0aec0">插畫</span>`}
        </div>
      </div>
      <p class="detail-desc">${esc(v.description || "")}</p>
      ${routesHTML ? `<div class="section-title">營運路線</div><div class="routes-wrap">${routesHTML}</div>` : ""}
      ${tabsHTML}
      <div class="variant-detail">${buildVariantSection(hasVariants ? primary : v)}</div>
    </div>`;
}

/* ── DETAIL PANEL OPEN/CLOSE ── */
function getPanelForCard(id) {
  return document.querySelector(`.detail-panel-wrap[data-for-${CSS.escape(id)}]`);
}

function mountDetail(panel, v, { animate = true } = {}) {
  const inner = panel.querySelector(".detail-panel");
  inner.innerHTML = buildDetailHTML(v);
  panel.classList.add("open");
  // Set max-height to actual content height so CSS transition works and no clipping
  panel.style.maxHeight = animate ? inner.scrollHeight + "px" : "none";
}

function openDetail(id) {
  const panel = getPanelForCard(id);
  if (!panel) return;
  const v = data.find(x => x.id === id);
  if (!v) return;

  // Close previous if different row
  if (openCardId && openCardId !== id) {
    const prev = getPanelForCard(openCardId);
    if (prev) { prev.classList.remove("open"); prev.style.maxHeight = ""; }
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
  if (panel) { panel.classList.remove("open"); panel.style.maxHeight = ""; }
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
  const grid     = document.getElementById("grid");
  const filtered = data.filter(matchesFilters);
  document.getElementById("resultCount").innerHTML =
    `符合條件：<strong>${filtered.length}</strong> 種車輛`;

  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results">
      <span class="no-results-emoji">🔍</span>
      <p>找不到符合條件的車輛，試試看其他篩選條件？</p>
    </div>`;
    openCardId = null;
    return;
  }

  const cols = getColumns();
  const wasOpen = openCardId; // preserve across re-render

  // Chunk into rows
  for (let i = 0; i < filtered.length; i += cols) {
    const row = filtered.slice(i, i + cols);
    const rowIds = row.map(v => v.id);

    // Cards
    row.forEach(v => {
      const card = document.createElement("div");
      card.className = "card" + (v.id === wasOpen ? " active" : "");
      card.dataset.id = v.id;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", v.name);
      card.innerHTML = `
        <div class="card-top" style="background:${gradient(v.color)};">
          ${esc(v.emoji || "🚂")}
          <div class="card-top-stripe"></div>
        </div>
        <div class="card-body">
          <div class="card-name">${esc(v.name)}</div>
          <div class="card-model">${esc(v.variants ? `${v.variants.length} 車型世代` : (v.model || ""))}</div>
          <div class="card-operator">${esc(v.operator || "")}</div>
          <div class="card-tags">
            <span class="tag">${esc(v.type)}</span>
            ${(v.region||[]).map(r => `<span class="tag">${esc(r)}</span>`).join("")}
            <span class="tag">${esc(yearToDecade(primaryYear(v)))}</span>
          </div>
        </div>`;
      grid.appendChild(card);
    });

    // One detail panel per row, spanning all columns
    const panelWrap = document.createElement("div");
    panelWrap.className = "detail-panel-wrap";
    rowIds.forEach(id => panelWrap.setAttribute(`data-for-${id}`, "1"));
    panelWrap.innerHTML = `<div class="detail-panel"></div>`;
    grid.appendChild(panelWrap);

    // Re-open if this row contained the previously open card
    if (wasOpen && rowIds.includes(wasOpen)) {
      const v = data.find(x => x.id === wasOpen);
      if (v) {
        mountDetail(panelWrap, v, { animate: false });
        document.querySelector(`.card[data-id="${wasOpen}"]`)?.classList.add("active");
      }
    }
  }
}

/* ── INIT ── */
document.getElementById("searchInput").addEventListener("input", e => { searchQuery = e.target.value.trim(); render(); });

const gridEl = document.getElementById("grid");
gridEl.addEventListener("click", e => {
  // Variant tab switch takes priority over card click
  const tab = e.target.closest(".variant-tab");
  if (tab && gridEl.contains(tab)) {
    e.stopPropagation();
    const panel = tab.closest(".detail-panel-wrap");
    const panelInner = panel.querySelector(".detail-panel");
    const model = tab.dataset.variant;
    const v = data.find(x => x.id === openCardId);
    if (!v || !v.variants) return;
    const variant = v.variants.find(x => x.model === model);
    if (!variant) return;
    panel.querySelectorAll(".variant-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const section = panel.querySelector(".variant-detail");
    section.innerHTML = buildVariantSection(variant);
    // Update header model line
    const header = panel.querySelector(".detail-header-model");
    if (header) {
      const nameEn = v.nameEn ? esc(v.nameEn) : "";
      header.innerHTML = nameEn + (variant.model ? " · " + esc(variant.model) : "");
    }
    // Update photo if this variant carries its own; fall back to train-level photo
    const photoSlot = panel.querySelector(".img-slot--photo");
    if (photoSlot) {
      const newPhoto = safePhotoUrl(variant.photoUrl || v.photoUrl);
      if (newPhoto) {
        photoSlot.innerHTML = `<img src="${esc(newPhoto)}" alt="${esc(v.name)} · ${esc(variant.model)}" loading="lazy" onerror="this.parentElement.innerHTML='&lt;span&gt;📷&lt;/span&gt;&lt;span&gt;照片&lt;/span&gt;'">`;
      } else {
        photoSlot.classList.remove("img-slot--photo");
        photoSlot.classList.add("img-slot");
        photoSlot.innerHTML = `<span>📷</span><span>照片</span>`;
      }
    }
    // Recalc panel max-height because content height changed
    panel.style.maxHeight = panelInner.scrollHeight + "px";
    return;
  }
  const card = e.target.closest(".card");
  if (card && gridEl.contains(card)) toggleDetail(card.dataset.id);
});
gridEl.addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".card");
  if (card && gridEl.contains(card)) {
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
buildAllChips();
render();

// Product Card Component
// Reusable product card generator

/**
 * Creates a product card HTML element
 * @param {Object} data - Product data
 * @param {string} data.id - Unique product ID
 * @param {string} data.title - Product title
 * @param {string} data.artist - Artist name
 * @param {string} data.price - Product price
 * @param {string} data.image - Product image path
 * @param {string} data.cdImage - CD disc image path
 * @param {string} data.cdImagePlaying - CD disc image when playing (optional)
 * @param {string} data.audioSrc - Audio preview source
 * @param {boolean} data.forCarousel - If true, omit col-* wrapper (for owl-carousel)
 * @returns {string} HTML string for the product card
 */
function createProductCard(data) {
  const {
    id = '',
    title = 'Product Name',
    artist = 'Artist Name',
    price = '$0',
    image = 'imgs/CD-IMG/default.png',
    cdImage = 'imgs/02. Compact Disks/01 Compact Disk.png',
    cdImagePlaying = '',
    audioSrc = '#',
    forCarousel = false
  } = data;

  const cdPlayingAttr = cdImagePlaying ? `data-src-playing="${cdImagePlaying}"` : '';
  const cdPausedAttr = `data-src-paused="${cdImage}"`;

  const cardInnerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <img src="${image}" alt="${title}" loading="lazy">
            <div class="front-content">
              <div id="front-name">
                <h6>${title}</h6>
                <p>${artist}</p>
              </div>
              <h5>${price}</h5>
            </div>
          </div>
          <div class="card-overlay">
            <div class="cd-rotate">
              <img src="${cdImage}" ${cdPausedAttr} ${cdPlayingAttr} alt="cd" loading="lazy">
            </div>
            <div class="productbtn-container">
              <div class="product-btn heart-btn glass-figma-pink">
                <img src="imgs/icon/Heart-white.svg" alt="favorite" loading="lazy">
              </div>
              <div class="preview-btn glass-figma">
                <img class="preview-icon" src="imgs/icon/play-music2.svg" alt="play" loading="lazy">
              </div>
              <div class="product-btn glass-figma-pink">
                <img src="imgs/icon/Plus-white.svg" alt="add to cart" loading="lazy">
              </div>
              <audio src="${audioSrc}"></audio>
            </div>
          </div>
        </div>
  `.trim();

  // For carousel: no col wrapper, just the card
  if (forCarousel) {
    return `
      <div class="glass-figma-2" id="product-card" data-product-id="${id}">
        ${cardInnerHTML}
      </div>
    `.trim();
  }

  // For grid: wrap in col-*
  return `
    <div class="col-6 col-sm-6 col-md-4 col-lg-3">
      <div class="glass-figma-2" id="product-card" data-product-id="${id}">
        ${cardInnerHTML}
      </div>
    </div>
  `.trim();
}

/**
 * Renders multiple product cards to a container
 * @param {string} containerId - Container element ID or selector
 * @param {Array} products - Array of product data objects
 */
function renderProductCards(containerId, products) {
  const container = document.querySelector(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }

  const html = products.map(product => createProductCard(product)).join('');
  container.innerHTML = html;
}

/**
 * Appends product cards to a container (preserves existing content)
 * @param {string} containerId - Container element ID or selector
 * @param {Array} products - Array of product data objects
 */
function appendProductCards(containerId, products) {
  const container = document.querySelector(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }

  const html = products.map(product => createProductCard(product)).join('');
  container.insertAdjacentHTML('beforeend', html);
}

/**
 * Renders product cards to an Owl Carousel
 * @param {string} carouselId - Carousel element ID or selector
 * @param {Array} products - Array of product data objects
 * @param {Object} carouselOptions - Owl Carousel options (optional)
 */
function renderCarouselCards(carouselId, products, carouselOptions = {}) {
  const carousel = document.querySelector(carouselId);
  if (!carousel) {
    console.error(`Carousel ${carouselId} not found`);
    return;
  }

  // Mark products for carousel (no col wrapper)
  const carouselProducts = products.map(p => ({ ...p, forCarousel: true }));
  const html = carouselProducts.map(product => createProductCard(product)).join('');
  carousel.innerHTML = html;

  // Initialize Owl Carousel if jQuery and owlCarousel are available
  if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
    const defaultOptions = {
      loop: false,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 2  // XS: 2 items
        },
        576: {
          items: 2  // SM: 2 items
        },
        768: {
          items: 3  // MD: 3 items
        },
        992: {
          items: 3  // LG: 3 items (carousel usually hidden at this size)
        }
      }
    };

    const options = { ...defaultOptions, ...carouselOptions };
    jQuery(carousel).owlCarousel(options);
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createProductCard, renderProductCards, appendProductCards, renderCarouselCards };
}

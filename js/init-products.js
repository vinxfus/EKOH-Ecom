// Initialize Products
// This file loads products into their respective containers

document.addEventListener('DOMContentLoaded', () => {
  // Render Best Seller products
  if (document.querySelector('#best-seller .row')) {
    renderProductCards('#best-seller .row', productData.bestSeller,);
  }

  // Render J-Pop products (when tab is available)
  if (document.querySelector('#j-pop .row')) {
    renderProductCards('#j-pop .row', productData.jpop, {
      
    });
  }

  // Render Pop Rock products
  if (document.querySelector('#pop-rock .row')) {
    renderProductCards('#pop-rock .row', productData.popRock);
  }

  // Render Alternative Rock products
  if (document.querySelector('#alternative-rock .row')) {
    renderProductCards('#alternative-rock .row', productData.alternativeRock);
  }
  // Render Moe Moe Kyun Kyun <3 products (desktop grid)
  if (document.querySelector('#moe-kuyn .row.d-none')) {
    renderProductCards('#moe-kuyn .row.d-none', productData.moeKuyn);
  }
  
  // Render Moe Moe Kyun Kyun <3 carousel (mobile/tablet)
  if (document.querySelector('#moe-kuyn-mobilebg')) {
    renderCarouselCards('#moe-kuyn-mobilebg', productData.moeKuyn, {
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        }
      }
    });
  }
  // Render Punk Rock products
  if (document.querySelector('#punk-rock .row')) {
    renderProductCards('#punk-rock .row', productData.punkRock);
  }

  // Render Idol-Dance Pop products
  if (document.querySelector('#idol-dance .row')) {
    renderProductCards('#idol-dance .row', productData.idolDance);
  }

  // Render Metal products
  if (document.querySelector('#metal .row')) {
    renderProductCards('#metal .row', productData.metal);
  }

  // Render EDM products
  if (document.querySelector('#edm .row')) {
    renderProductCards('#edm .row', productData.edm);
  }

  //Mobile-section
  // Render Idol-Dance Pop products
  if (document.querySelector('#best-seller-mobilebg')) {
    renderCarouselCards('#best-seller-mobilebg', productData.bestSeller, {
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        }
      }
    });
  }

  //RENDER J-POP CAROUSEL
  if (document.querySelector('#j-pop-mobilebg')) {
    renderCarouselCards('#j-pop-mobilebg', productData.jpop, {
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        }
      }
    });
  }

  //RENDER ALTERNATIVE ROCK CAROUSEL
  if (document.querySelector('#alternative-rock-mobilebg')) {
    renderCarouselCards('#alternative-rock-mobilebg', productData.alternativeRock, {
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        }
      }
    });
  }

  if (document.querySelector('#linh-carousel')) {
    renderCarouselCards('#linh-carousel', productData.linh, {
      loop: false,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        }
      }
    });
  }
  // Example: Render products outside tabs (if you have a separate section)
  // renderProductCards('.row', productData.bestSeller);
});


/* ===========================================================
   SERVICE WORK DATA - EDIT THIS FILE TO ADD / REMOVE THE PAGES
   THAT SIT INSIDE EACH SERVICE
   (e.g. "Product Renders" and "Interior Visualisation" both sit
   inside 3D Visualisation)
   -----------------------------------------------------------
   To ADD a page: copy a whole block { ... } in SERVICE_WORK, paste it
   at the end of the list (add a comma between blocks) and edit it.
   To REMOVE a page: delete its whole block { ... }.
   service: decides which service page the entry appears on.
   images:  the FIRST image is the large image on the page and the picture
            in the list. All the others fill the gallery.
   If a service has no entries, its list section is hidden automatically.
   Each entry gets its own page at service-detail.html?id=YOUR-ID
   =========================================================== */
const SERVICE_WORK = [
  {
    id: "product-renders",             // unique, lowercase, no spaces (used in the page URL)
    service: "3d-visualisation",   // which service page it appears on: "product-design", "cad-design" or "3d-visualisation"
    name: "Product Renders",
    shortDescription: "Photoreal renders of products in clean studio and lifestyle scenes.",   // shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",
    galleryText: "Short line shown above the gallery. Optional, can be \"\".",
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/product-renders/1.svg", alt: "Product Renders, main image" },
      { src: "assets/images/work/product-renders/2.svg", alt: "Product Renders, example 1" },
      { src: "assets/images/work/product-renders/3.svg", alt: "Product Renders, example 2" },
      { src: "assets/images/work/product-renders/4.svg", alt: "Product Renders, example 3" },
      { src: "assets/images/work/product-renders/5.svg", alt: "Product Renders, example 4" }
    ]
  },
  {
    id: "interior-visualisation",             // unique, lowercase, no spaces (used in the page URL)
    service: "3d-visualisation",   // which service page it appears on: "product-design", "cad-design" or "3d-visualisation"
    name: "Interior Visualisation",
    shortDescription: "Rooms and spaces brought to life before they are built.",   // shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",
    galleryText: "Short line shown above the gallery. Optional, can be \"\".",
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/interior-visualisation/1.svg", alt: "Interior Visualisation, main image" },
      { src: "assets/images/work/interior-visualisation/2.svg", alt: "Interior Visualisation, example 1" },
      { src: "assets/images/work/interior-visualisation/3.svg", alt: "Interior Visualisation, example 2" },
      { src: "assets/images/work/interior-visualisation/4.svg", alt: "Interior Visualisation, example 3" },
      { src: "assets/images/work/interior-visualisation/5.svg", alt: "Interior Visualisation, example 4" }
    ]
  },
  {
    id: "technical-modelling",             // unique, lowercase, no spaces (used in the page URL)
    service: "cad-design",   // which service page it appears on: "product-design", "cad-design" or "3d-visualisation"
    name: "Technical Modelling",
    shortDescription: "Accurate 3D models prepared for engineering and manufacture.",   // shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",
    galleryText: "Short line shown above the gallery. Optional, can be \"\".",
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/technical-modelling/1.svg", alt: "Technical Modelling, main image" },
      { src: "assets/images/work/technical-modelling/2.svg", alt: "Technical Modelling, example 1" },
      { src: "assets/images/work/technical-modelling/3.svg", alt: "Technical Modelling, example 2" },
      { src: "assets/images/work/technical-modelling/4.svg", alt: "Technical Modelling, example 3" },
      { src: "assets/images/work/technical-modelling/5.svg", alt: "Technical Modelling, example 4" }
    ]
  },
  {
    id: "manufacturing-drawings",             // unique, lowercase, no spaces (used in the page URL)
    service: "cad-design",   // which service page it appears on: "product-design", "cad-design" or "3d-visualisation"
    name: "Manufacturing Drawings",
    shortDescription: "Dimensioned drawings and files ready to send to a maker.",   // shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",
    galleryText: "Short line shown above the gallery. Optional, can be \"\".",
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/manufacturing-drawings/1.svg", alt: "Manufacturing Drawings, main image" },
      { src: "assets/images/work/manufacturing-drawings/2.svg", alt: "Manufacturing Drawings, example 1" },
      { src: "assets/images/work/manufacturing-drawings/3.svg", alt: "Manufacturing Drawings, example 2" },
      { src: "assets/images/work/manufacturing-drawings/4.svg", alt: "Manufacturing Drawings, example 3" },
      { src: "assets/images/work/manufacturing-drawings/5.svg", alt: "Manufacturing Drawings, example 4" }
    ]
  },
  {
    id: "concept-development",             // unique, lowercase, no spaces (used in the page URL)
    service: "product-design",   // which service page it appears on: "product-design", "cad-design" or "3d-visualisation"
    name: "Concept Development",
    shortDescription: "From first sketch to a considered, buildable concept.",   // shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",
    galleryText: "Short line shown above the gallery. Optional, can be \"\".",
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/concept-development/1.svg", alt: "Concept Development, main image" },
      { src: "assets/images/work/concept-development/2.svg", alt: "Concept Development, example 1" },
      { src: "assets/images/work/concept-development/3.svg", alt: "Concept Development, example 2" },
      { src: "assets/images/work/concept-development/4.svg", alt: "Concept Development, example 3" },
      { src: "assets/images/work/concept-development/5.svg", alt: "Concept Development, example 4" }
    ]
  },
  {
    id: "prototyping-support",             // unique, lowercase, no spaces (used in the page URL)
    service: "product-design",   // which service page it appears on: "product-design", "cad-design" or "3d-visualisation"
    name: "Prototyping Support",
    shortDescription: "Support through prototypes, testing and refinement.",   // shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",
    galleryText: "Short line shown above the gallery. Optional, can be \"\".",
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/prototyping-support/1.svg", alt: "Prototyping Support, main image" },
      { src: "assets/images/work/prototyping-support/2.svg", alt: "Prototyping Support, example 1" },
      { src: "assets/images/work/prototyping-support/3.svg", alt: "Prototyping Support, example 2" },
      { src: "assets/images/work/prototyping-support/4.svg", alt: "Prototyping Support, example 3" },
      { src: "assets/images/work/prototyping-support/5.svg", alt: "Prototyping Support, example 4" }
    ]
  }
];

/* The three service pages. You only need to edit this if you rename a service. */
const SERVICE_PAGES = {
  "product-design":   { name: "Product Design",   page: "service-product-design.html",   intro: "Choose an area to see examples and what is involved." },
  "cad-design":       { name: "CAD Design",       page: "service-cad-design.html",       intro: "Choose an area to see examples and what is involved." },
  "3d-visualisation": { name: "3D Visualisation", page: "service-3d-visualisation.html", intro: "Choose an area to see examples and what is involved." }
};

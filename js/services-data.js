/* ===========================================================
   SERVICE WORK DATA - EDIT THIS FILE TO ADD / REMOVE THE PAGES
   THAT SIT INSIDE EACH SERVICE
   (e.g. "Product Renders" and "Interior Visualisation" both sit
   inside 3D Visualisation)
   -----------------------------------------------------------
   To ADD an item: copy a whole block { ... }, paste it at the
   end of the list (add a comma between blocks) and edit it.
   To REMOVE an item: delete its whole block { ... }.
   service: "product-design"   -> appears on the Product Design page
            "cad-design"       -> appears on the CAD Design page
            "3d-visualisation" -> appears on the 3D Visualisation page
   If a service has no items, its "Within ..." section is hidden automatically.
   Every item gets its own page inside its service, e.g. services/cad-design/ITS-ID (created automatically when you push)
   =========================================================== */
const SERVICE_WORK = [
  {
    id: "product-renders",             // unique, lowercase, no spaces (used in the page URL)
    service: "3d-visualisation",   // "product-design", "cad-design" or "3d-visualisation"
    name: "Product Renders",
    shortDescription: "Photoreal renders of products in clean studio and lifestyle scenes.",   // one line shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",   // longer text shown on this item's own page
    galleryText: "Placeholder line shown above the gallery.",   // short line above the gallery. Optional: use "" for none (its spacing is removed too)
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/product-renders/1.svg", alt: "Product Renders, main image" },   // FIRST = large main image on this item's page and the picture in the list
      { src: "assets/images/work/product-renders/2.svg", alt: "Product Renders, example 1" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/product-renders/3.svg", alt: "Product Renders, example 2" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/product-renders/4.svg", alt: "Product Renders, example 3" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/product-renders/5.svg", alt: "Product Renders, example 4" }   // further images fill the gallery on this item's page
    ]
  },
  {
    id: "interior-visualisation",             // unique, lowercase, no spaces (used in the page URL)
    service: "3d-visualisation",   // "product-design", "cad-design" or "3d-visualisation"
    name: "Interior Visualisation",
    shortDescription: "Rooms and spaces brought to life before they are built.",   // one line shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",   // longer text shown on this item's own page
    galleryText: "Placeholder line shown above the gallery.",   // short line above the gallery. Optional: use "" for none (its spacing is removed too)
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/interior-visualisation/1.svg", alt: "Interior Visualisation, main image" },   // FIRST = large main image on this item's page and the picture in the list
      { src: "assets/images/work/interior-visualisation/2.svg", alt: "Interior Visualisation, example 1" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/interior-visualisation/3.svg", alt: "Interior Visualisation, example 2" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/interior-visualisation/4.svg", alt: "Interior Visualisation, example 3" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/interior-visualisation/5.svg", alt: "Interior Visualisation, example 4" }   // further images fill the gallery on this item's page
    ]
  },
  {
    id: "technical-modelling",             // unique, lowercase, no spaces (used in the page URL)
    service: "cad-design",   // "product-design", "cad-design" or "3d-visualisation"
    name: "Technical Modelling",
    shortDescription: "Accurate 3D models prepared for engineering and manufacture.",   // one line shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",   // longer text shown on this item's own page
    galleryText: "Placeholder line shown above the gallery.",   // short line above the gallery. Optional: use "" for none (its spacing is removed too)
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/technical-modelling/1.svg", alt: "Technical Modelling, main image" },   // FIRST = large main image on this item's page and the picture in the list
      { src: "assets/images/work/technical-modelling/2.svg", alt: "Technical Modelling, example 1" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/technical-modelling/3.svg", alt: "Technical Modelling, example 2" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/technical-modelling/4.svg", alt: "Technical Modelling, example 3" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/technical-modelling/5.svg", alt: "Technical Modelling, example 4" }   // further images fill the gallery on this item's page
    ]
  },
  {
    id: "manufacturing-drawings",             // unique, lowercase, no spaces (used in the page URL)
    service: "cad-design",   // "product-design", "cad-design" or "3d-visualisation"
    name: "Manufacturing Drawings",
    shortDescription: "Dimensioned drawings and files ready to send to a maker.",   // one line shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",   // longer text shown on this item's own page
    galleryText: "Placeholder line shown above the gallery.",   // short line above the gallery. Optional: use "" for none (its spacing is removed too)
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/manufacturing-drawings/1.svg", alt: "Manufacturing Drawings, main image" },   // FIRST = large main image on this item's page and the picture in the list
      { src: "assets/images/work/manufacturing-drawings/2.svg", alt: "Manufacturing Drawings, example 1" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/manufacturing-drawings/3.svg", alt: "Manufacturing Drawings, example 2" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/manufacturing-drawings/4.svg", alt: "Manufacturing Drawings, example 3" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/manufacturing-drawings/5.svg", alt: "Manufacturing Drawings, example 4" }   // further images fill the gallery on this item's page
    ]
  },
  {
    id: "concept-development",             // unique, lowercase, no spaces (used in the page URL)
    service: "product-design",   // "product-design", "cad-design" or "3d-visualisation"
    name: "Concept Development",
    shortDescription: "From first sketch to a considered, buildable concept.",   // one line shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",   // longer text shown on this item's own page
    galleryText: "Placeholder line shown above the gallery.",   // short line above the gallery. Optional: use "" for none (its spacing is removed too)
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/concept-development/1.svg", alt: "Concept Development, main image" },   // FIRST = large main image on this item's page and the picture in the list
      { src: "assets/images/work/concept-development/2.svg", alt: "Concept Development, example 1" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/concept-development/3.svg", alt: "Concept Development, example 2" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/concept-development/4.svg", alt: "Concept Development, example 3" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/concept-development/5.svg", alt: "Concept Development, example 4" }   // further images fill the gallery on this item's page
    ]
  },
  {
    id: "prototyping-support",             // unique, lowercase, no spaces (used in the page URL)
    service: "product-design",   // "product-design", "cad-design" or "3d-visualisation"
    name: "Prototyping Support",
    shortDescription: "Support through prototypes, testing and refinement.",   // one line shown in the list on the service page
    description: "Longer text shown at the top of this page. Placeholder, replace with your own.",   // longer text shown on this item's own page
    galleryText: "Placeholder line shown above the gallery.",   // short line above the gallery. Optional: use "" for none (its spacing is removed too)
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/work/prototyping-support/1.svg", alt: "Prototyping Support, main image" },   // FIRST = large main image on this item's page and the picture in the list
      { src: "assets/images/work/prototyping-support/2.svg", alt: "Prototyping Support, example 1" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/prototyping-support/3.svg", alt: "Prototyping Support, example 2" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/prototyping-support/4.svg", alt: "Prototyping Support, example 3" },   // further images fill the gallery on this item's page
      { src: "assets/images/work/prototyping-support/5.svg", alt: "Prototyping Support, example 4" }   // further images fill the gallery on this item's page
    ]
  }
];

/* Intro line shown under each "Within ..." heading. The service names and page links come from
   the PAGES list in js/layout.js, so rename a service there. */
const SERVICE_PAGES = {
  "product-design":   { intro: "Choose an area to see examples and what is involved." },
  "cad-design":       { intro: "Choose an area to see examples and what is involved." },
  "3d-visualisation": { intro: "Choose an area to see examples and what is involved." }
};

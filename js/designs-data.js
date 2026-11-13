/* ===========================================================
   DESIGNS DATA - EDIT THIS FILE TO ADD / REMOVE DESIGNS
   -----------------------------------------------------------
   To ADD a design: copy a whole block { ... }, paste it at the
   end of the list (add a comma between blocks) and edit it.
   To REMOVE a design: delete its whole block { ... }.
   status: "available"    -> appears under "Available now"
           "kickstarter"  -> appears under "In the works"
   If a status has no designs, its heading is hidden automatically.
   =========================================================== */
const DESIGNS = [
  {
    id: "Scaffolder Sideboard",            // unique, lowercase, no spaces (used in the page URL)
    name: "Scaffolder Sideboard",
    status: "kickstarter",   // "available" or "kickstarter"
    price: "£000",                  // shown for available designs
    shortDescription: "Sleek, modern sideboard made from reclaimed scaffolding that develops character with your home.",
    description: "Sleek, modern sideboard made from reclaimed scaffolding that develops character with your home. Pollished scaffold poles provide a perfect level of contrast between the deep wood finsih and unique hardware.",
    specs: ["Material: placeholder", "Dimensions: placeholder"],   // optional, can be []
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/designs/example-chair/1.svg", alt: "Example Chair, standard product image" },   // FIRST = grid card image
      { src: "assets/images/designs/example-chair/2.svg", alt: "Example Chair in a room setting" },   // SECOND = hover image (in scene / in action)
      { src: "assets/images/designs/example-chair/3.svg", alt: "Example Chair, close-up detail" },   // further images appear in the gallery on the design page
      { src: "assets/images/designs/example-chair/4.svg", alt: "Example Chair, close-up detail" }   // further images appear in the gallery on the design page
    ],
    buyUrl: "https://example.com/buy",              // used for available designs
    kickstarterUrl: ""        // used for kickstarter designs
  },
  {
    id: "example-table",            // unique, lowercase, no spaces (used in the page URL)
    name: "Example Table",
    status: "kickstarter",   // "available" or "kickstarter"
    price: "£000",                  // shown for available designs
    shortDescription: "One line shown on the grid card.",
    description: "Longer text shown on the design page.",
    specs: [],   // optional, can be []
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/designs/example-table/1.svg", alt: "Example Table, standard product image" },   // FIRST = grid card image
      { src: "assets/images/designs/example-table/2.svg", alt: "Example Table in a room setting" },   // SECOND = hover image (in scene / in action)
      { src: "assets/images/designs/example-table/3.svg", alt: "Example Table, close-up detail" }   // further images appear in the gallery on the design page
    ],
    buyUrl: "https://example.com/buy",              // used for available designs
    kickstarterUrl: ""        // used for kickstarter designs
  },
  {
    id: "example-lamp",            // unique, lowercase, no spaces (used in the page URL)
    name: "Example Lamp",
    status: "kickstarter",   // "available" or "kickstarter"
    price: "",                  // shown for available designs
    shortDescription: "One line shown on the grid card.",
    description: "Longer text shown on the design page.",
    specs: ["Material: placeholder"],   // optional, can be []
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/designs/example-lamp/1.svg", alt: "Example Lamp, standard product image" },   // FIRST = grid card image
      { src: "assets/images/designs/example-lamp/2.svg", alt: "Example Lamp in a room setting" },   // SECOND = hover image (in scene / in action)
      { src: "assets/images/designs/example-lamp/3.svg", alt: "Example Lamp, close-up detail" }   // further images appear in the gallery on the design page
    ],
    buyUrl: "",              // used for available designs
    kickstarterUrl: "https://www.kickstarter.com/"        // used for kickstarter designs
  },
  {
    id: "example-shelf",            // unique, lowercase, no spaces (used in the page URL)
    name: "Example Shelf",
    status: "kickstarter",   // "available" or "kickstarter"
    price: "",                  // shown for available designs
    shortDescription: "One line shown on the grid card.",
    description: "Longer text shown on the design page.",
    specs: [],   // optional, can be []
    images: [   // each image needs a src and alt text (describe the image)
      { src: "assets/images/designs/example-shelf/1.svg", alt: "Example Shelf, standard product image" },   // FIRST = grid card image
      { src: "assets/images/designs/example-shelf/2.svg", alt: "Example Shelf in a room setting" }   // SECOND = hover image (in scene / in action)
    ],
    buyUrl: "",              // used for available designs
    kickstarterUrl: "https://www.kickstarter.com/"        // used for kickstarter designs
  }
];

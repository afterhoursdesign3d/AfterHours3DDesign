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
    id: "example-chair",            // unique, lowercase, no spaces (used in the page URL)
    name: "Example Chair",
    status: "available",
    price: "£000",                  // shown for available designs
    shortDescription: "One line shown on the grid card.",
    description: "Longer text shown on the design page.",
    specs: ["Material: placeholder", "Dimensions: placeholder"],   // optional, can be []
    images: [
      "assets/images/designs/example-chair/1.jpg",   // FIRST = grid card image
      "assets/images/designs/example-chair/2.jpg",   // SECOND = hover image (in scene / in action)
      "assets/images/designs/example-chair/3.jpg"
    ],
    buyUrl: "https://example.com/buy",
    kickstarterUrl: ""
  },
  {
    id: "example-table", name: "Example Table", status: "available", price: "£000",
    shortDescription: "One line shown on the grid card.", description: "Longer text shown on the design page.",
    specs: [], images: ["assets/images/designs/example-table/1.jpg","assets/images/designs/example-table/2.jpg"],
    buyUrl: "https://example.com/buy", kickstarterUrl: ""
  },
  {
    id: "example-lamp", name: "Example Lamp", status: "kickstarter", price: "",
    shortDescription: "One line shown on the grid card.", description: "Longer text shown on the design page.",
    specs: ["Material: placeholder"], images: ["assets/images/designs/example-lamp/1.jpg","assets/images/designs/example-lamp/2.jpg"],
    buyUrl: "", kickstarterUrl: "https://www.kickstarter.com/"
  },
  {
    id: "example-shelf", name: "Example Shelf", status: "kickstarter", price: "",
    shortDescription: "One line shown on the grid card.", description: "Longer text shown on the design page.",
    specs: [], images: ["assets/images/designs/example-shelf/1.jpg"],
    buyUrl: "", kickstarterUrl: "https://www.kickstarter.com/"
  }
];

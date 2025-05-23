// global.d.ts

import type { IStaticMethods } from "preline/dist";

declare global {
  interface Window {
    // Optional third-party libraries
    _: any;
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
    DataTable: any;
    Dropzone: any;
    VanillaCalendarPro: any;
    noUiSlider: typeof import("nouislider"); // ✅ Tambahkan ini

    // Preline UI
    HSStaticMethods: IStaticMethods;
  }
}

export {};

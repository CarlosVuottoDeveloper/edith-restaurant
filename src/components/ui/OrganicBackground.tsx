/** Color blobs behind the hero, from md up. The parent needs `relative isolate overflow-hidden`. */
export function OrganicBackground() {
  return (
    <svg
      viewBox="0 0 1440 1240"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 -z-10 hidden h-full w-full fill-carrot-orange md:block"
    >
      <path d="M610 0 C730 24 790 140 782 300 C774 440 830 570 960 650 C1080 724 1210 700 1310 780 C1380 836 1424 920 1440 1030 L1440 0 Z" />
      <path d="M0 860 C24 1030 120 1130 290 1168 C370 1186 450 1190 510 1204 C552 1214 540 1226 490 1230 C340 1246 150 1246 0 1206 Z" />
    </svg>
  );
}

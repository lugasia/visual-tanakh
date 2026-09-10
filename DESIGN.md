# Brand and interface

Confirmed names: התנ״ך הוויזואלי (Hebrew), Tanakh Atlas (English).

Fixed navigation follows document direction: right in Hebrew and left in English. At widths of 900px and below, a fixed top bar opens a side drawer with Escape dismissal, focus containment and backdrop dismissal. Chapter section anchors remain available in the drawer and sidebar.

Editorial palette: navy #15384b, antique gold #b99756, paper #f7f6f2. Shared chapter styling in site/assets/atlas.css changes mastheads, section hierarchy, calendar workspace, tables, map framing, controls and timeline entries while preserving source data and existing interactions. Numbered map labels reduce to numerals on phones to avoid collisions; the map points retain full popup information.

## Logo

Asset: site/assets/atlas-logo.png. Generated with the built-in image-generation tool from the user's supplied visual reference. It is a raster PNG with transparency, not a hand-authored vector logo. Seven lamps were visually checked. The source image was a reference; it is not bundled in this repository.

Generation prompt:

Create one refined logo mark for Tanakh Atlas using the attached image as visual inspiration. This is a website logo asset, NOT a mockup. Simplify the existing eye/scroll/menorah concept to a crisp elegant editorial emblem: open Torah scroll outlines forming an almond eye, centered seven-branched menorah with exactly seven lamps, three branches each side of central stem. Strong dark navy #15384b lines and muted antique gold #b99756 accents. Remove all miniature people, landscape, lyre and oil lamp. No words, letters, typography or text. No shadows, texture or gradients. Flat vector-like silhouette with restrained consistent line weights, generous clear negative space; legible at 64px. Centered mark filling about 85 percent of canvas, square composition, transparent background (actual alpha). Preserve symbolic character of reference but dramatically reduce detail. Save usable PNG asset.

## Validation and scope

Desktop 1440px: Hebrew sidebar right, English sidebar left, chapter anchor leaves sidebar fixed. Mobile 390px: no horizontal page overflow across the collection and three chapters, drawer opens/closes and chapter anchors work. Calendar leap control, census source switch and search, and treasure map layer switching tested. Local links and JavaScript syntax checked separately.

Chapter bodies remain in Hebrew. The source/quotation editorial review remains incomplete, as indicated in the site. This change is visual and navigational, not a completed factual review.

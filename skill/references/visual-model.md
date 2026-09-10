# Visual atlas production model

## Choose the visual by the question

- Where / across which terrain? Map with period layers and an accessible place list.
- When / what overlaps? Timeline; retain ranges and chronology variants.
- How many / why do totals differ? Aligned comparison, accumulation or distribution.
- Who relates to whom? Directed relationship graph with quoted evidence per edge; distinguish kinship, alliance, succession and attributed influence.
- How does a system work? Flow diagram or cycle; distinguish textual prescription from evidence of historical practice.
- How do witnesses differ? Parallel text with differences highlighted, edition and translation metadata, and commentary separate from the witnesses.

## Shared records

Use stable IDs so the same fact powers Hebrew, English, map labels and social exports. Store data independently of the view; avoid separate hand-edited datasets per language. Choose a lightweight JSON representation unless the project needs a database.

A source record needs: id, work, locator, edition, language, exact_quote, quote_normalization (if any), translation and translator if used, url, checked_at, verification_status.
A claim needs: id, text_he, text_en, source_ids, type (explicit_text/calculation/interpretation/reconstruction), caveat, calculation inputs and formula when relevant.
A place needs: id, labels, geometry or null, geometry_source_ids, identification_status, candidate_geometries where applicable, relevant periods and claim_ids.
An event needs: id, labels, date range or textual relative order, chronology label, place_ids and claim_ids.
A comparison needs: id, witness/source IDs, alignment rule, values with missingness status, and calculation claim IDs.

Do not infer an exact coordinate from a verse naming a place. A geographical identification needs separate evidence. Unknown locations remain in the list instead of disappearing or receiving invented coordinates.

## Map rules

Period selection controls which features are visible. Distinguish modern base geography from reconstructed ancient walls, routes and boundaries. Show uncertain sites as areas, alternatives or appropriately labeled symbols. Never use precise-looking lines for unknown frontiers without a clear reconstruction label. A schematic route is not an attested itinerary or modern walking route.

A place card gives its names, relevant period, what is attested, a short quotation, exact reference/link, identification evidence and uncertainties. A deep link should restore the selected place/period. Support a guided story as well as free exploration. Search aliases in both languages.

Avoid crowding the map: a first release can contain 10–15 fully documented places within one defined scope. Coverage completeness means completeness against the declared inventory, not “every place ever mentioned”. Expansions require new research, not merely more pins.

## Meaningful release checks

No dangling claim/source IDs; every published factual label backed by verified evidence; no unknown values converted to zero. Numeric totals computed from underlying data. Map layer, source drawer and deep-link state work. Hebrew/English agree on facts and uncertainty. Keyboard and mobile users can reach all substantive content. Quote text remains readable. Record unverified historical propositions outside the public dataset.

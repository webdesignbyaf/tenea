# TENÉA Olive Oil

## Kurzprofil
- Marke: TENÉA, Familienunternehmen aus Chiliomodi / Ancient Tenea, Griechenland.
- Ziel: hochwertige zweisprachige Markenwebsite für Olivenöl, Oliven und Produktanfragen.
- Sprachen: Englisch und Griechisch (EN/GR), Sprachwahl gespeichert und per `?lang=en` / `?lang=el` verlinkbar.
- Optik: Originalverpackungen als feste Referenz; Weiß, dunkles Olivschwarz, dezentes Gold, große Serifenschrift und viel Weißraum. Inspiration: Bijou, Sigalas, Ses Talaioles, Gini.

## Gezielt bearbeiten
- Einstieg: `index.html`; Gestaltung: `style.css` und `fonts.css`; Verhalten: `script.js`; Übersetzungen: `i18n.js`.
- Bilder und Schriften: `assets/`, vollständig lokal.
- Vom Nutzer ausdrücklich gewünschter zusätzlicher Haupteinstieg: `../../index.html` mit angepassten Assetpfaden. Nach HTML-Änderungen synchronisieren.
- Start: im Workspace `python3 -m http.server 8765 --bind 127.0.0.1`, dann `http://127.0.0.1:8765/`.
- Quellen und Details: [README.md](README.md).

## Aktueller Stand
- Stand: 2026-09-23.
- Umgesetzt: responsiver Onepager, drei Öllinien, zwei Olivensorten, Geschenkbox, native Produktdialoge, Kategoriewechsel, Herkunft/Familie, belegte Auszeichnungen und Kontakt.
- Direkte E-Mail- und Telefonlinks; übersetzte Produktanfragen per E-Mail; Shoplink in Navigation/Kollektion und Produktdialogen. Premium 500 ml, Organic 250 ml und beide Oliven direkt verknüpft; Regular/Geschenkbox zur Shopübersicht, keine passende Artikelseite gefunden.
- Kein Framework, keine Installation, kein Build und keine externen Font-Anfragen nötig.
- Offen: keine lokale Umsetzung offen; Freigabe der Inhalte und rechtliche Pflichtangaben vor einer Veröffentlichung.
- Nächster Schritt: Alexanders gestalterisches Feedback einarbeiten; Veröffentlichung nur auf Wunsch.

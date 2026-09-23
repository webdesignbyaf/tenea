# TENÉA — lokaler Website-Entwurf

## Öffnen und bearbeiten

Die Seite kann direkt mit `index.html` geöffnet werden. Alternativ den in PROJEKT.md genannten lokalen Server verwenden. Die zusätzliche vollständige Hauptdatei im Workspace wurde ausdrücklich gewünscht; alle weiteren Dateien bleiben im Projekt gekapselt.

Nach Änderungen an `index.html` die Hauptdatei im Workspace aktualisieren:

```python
from pathlib import Path
page = Path('projekte/tenea/index.html').read_text()
for ref in ['href="fonts.css"', 'href="style.css"', 'src="script.js"', 'src="i18n.js"', 'src="assets/']:
    page = page.replace(ref, ref.replace('"', '"./projekte/tenea/', 1))
Path('index.html').write_text(page)
```

Der bestehende Shop unter https://www.tenea.shop/webshop übernimmt Bestellungen und Zahlung. Produktdialoge führen zu den belegten Shopartikeln; Regular und Geschenkbox zur Übersicht, ohne eine dortige Verfügbarkeit zu behaupten. Zusätzliche Anfragen öffnen das E-Mail-Programm mit Produkttitel und vorbereitetem Text. Es werden keine Preise oder Verfügbarkeiten behauptet. Die Darstellung unterstützt reduzierte Bewegung, Tastaturnavigation, native modale Dialoge und mobile Navigation.

## Inhaltliche Quellen

Am 23.09.2026 gezielt aus der offiziellen Website übernommen und neu formuliert:

- [Produkte und Größen](https://www.tenea-oliveoil.com/en/products/)
- [Familienunternehmen und Gründerin](https://www.tenea-oliveoil.com/en/our-company/)
- [Herkunft, Manaki und Chiliomodi](https://www.tenea-oliveoil.com/en/our-company/origin/)
- [Auszeichnungen](https://www.tenea-oliveoil.com/en/our-company/awards/) — bewusst mit Jahr 2022 statt zeitloser Aktualitätsbehauptung.
- [Kontakt](https://www.tenea-oliveoil.com/en/contact-us/)

Die Ursprungsseite nennt uneinheitlich drei bzw. vier Generationen; der Entwurf vermeidet deshalb eine konkrete Generationenzahl. Höhe 340 m bezieht sich auf Chiliomodi. Alle Marken- und Produktfotos stammen von TENÉA und wurden für den angefragten lokalen Entwurf gespeichert.

## Bilder

Basis: `https://www.tenea-oliveoil.com/wp-content/uploads/`

| Lokale Datei | Originalpfad |
| --- | --- |
| premium.jpg | 2025/01/PREMIUM-500ML-TENEA.jpg |
| organic.jpg | 2025/01/ORGANIC-250ML-TENEA.jpg |
| regular.png | 2025/04/TENEA-Regular-Line-500ml.png |
| gift.jpg | 2025/01/PREMIUM-BOX-ML-TENEA.jpg |
| chalkidiki.jpg | 2025/01/OLIVES-CHALKIDIKI-PITTED.jpg |
| kalamon.jpg | 2025/01/TENEA-KALAMON-PITTED.jpg |
| land.jpg | 2025/04/TENEA-LAND-SITE.jpg |
| grove.jpg | 2025/04/IMG_3707-2-1-scaled.jpg |
| organic-life.jpg | 2023/04/leuko-mpoukali-3-1.jpg |

Schriften: Cormorant Garamond (Regular, Medium, Italic) und Manrope (Regular, Medium, Semibold), lokal über Google Fonts geladen; Quelladressen siehe CSS-Abrufmuster `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600&display=swap`.

## Gestaltungsreferenzen

- [Bijou](https://bijouwine.com/)
- [Domaine Sigalas](https://sigalas-wine.com/)
- [Ses Talaioles](https://sestalaioles.de/)
- [Gini](https://www.ginivini.com/en)

Die Referenzen dienen der gestalterischen Orientierung; Bilder und Markeninhalte wurden ausschließlich von TENÉA verwendet.

## Prüfungen

- JavaScript-Syntax geprüft.
- Beide HTML-Einstiege: alle 14 lokalen Ressourcen und 15 Anker geprüft.
- Desktop: Startseite, Kollektionswechsel, Premium-Produktdialog und Escape-Schließen im Safari geprüft.
- Mobile Darstellung bei 390 px: Typografie, Produktübersicht, Menü und Menü-Navigation im Browser geprüft.

## GR / EN und Shop

`i18n.js` übersetzt sichtbare Texte, zugängliche Beschriftungen und Metadaten. `script.js` lokalisiert zusätzlich dynamische Produktdetails und vorbereitete E-Mails. Sprache wird lokal gespeichert (mit Ausweichverhalten bei blockiertem Speicher); URL-Parameter hat Vorrang. GR verwendet den Sprachcode `el`. Externe Shopseiten behalten ihre vom Shop angebotene Sprache.

Direktlinks (aus den Shopseiten ermittelt, 23.09.2026):
- [Premium 500 ml](https://www.tenea.shop/webshop/Tenea-500ml-Premium-Selection-p420059568)
- [Organic 250 ml](https://www.tenea.shop/webshop/Tenea-250ml-Organic-p592375511)
- [Chalkidiki 330 g](https://www.tenea.shop/webshop/Tenea-330gr-Green-Chalkidiki-Olives-p805163080)
- [Kalamon 330 g](https://www.tenea.shop/webshop/Tenea-330gr-Black-Kalamon-Olives-p805166566)

Die Olivenlinks sind in den Produktempfehlungen des Premium-Artikels belegt; der Rechercheabruf der Zielseiten lieferte einen Cache-Fehler. Preise und Bestände werden deshalb ausschließlich im Shop angezeigt.

GR/EN-Erweiterung geprüft: JavaScript-Syntax, lokale Ressourcen, griechischer Premium-Dialog mit korrektem Shopziel und griechischer E-Mail-Vorlage sowie Rückwechsel auf Englisch im Safari.

<div align="center">

<img src="site/assets/logo-320.png" alt="" width="120">

# התנ״ך הוויזואלי · Tanakh Atlas

**מפות, מספרים ומקורות — מעולם התנ״ך**
*Maps, numbers and sources from the Hebrew Bible*

[**→ לאתר**](https://lugasia.github.io/visual-tanakh/) · [**→ English**](https://lugasia.github.io/visual-tanakh/en/)

</div>

---

## עברית

### מה זה

שלושה פרקים אינטראקטיביים שמראים את התנ״ך דרך הנתונים שבו: מספרים, תאריכים,
מרחקים וגרסאות שחולקות זו על זו. כל טענה מסומנת במקורה, וההבחנה בין מה שכתוב,
מה שמחושב ומה שמשוחזר נשמרת לאורך כל הדרך.

### הפרקים

| | פרק | מה יש בו |
|---|---|---|
| **01** | [לוח השנה](https://lugasia.github.io/visual-tanakh/he/calendar/) | גלגל שנה ירחי עם שלב הירח בכל אחד מ־354 הימים, שלוש מערכות שמות החודשים, וכל המועדים לפי מקורותיהם |
| **02** | [הרכוש](https://lugasia.github.io/visual-tanakh/he/treasures/) | 14 אירועי ביזה ותשלום לאורך 470 שנה, מפה אינטראקטיבית של יעדי האוצרות, ומסע ארון הברית |
| **03** | [שיבת ציון](https://lugasia.github.io/visual-tanakh/he/return/) | עזרא ב׳ מול נחמיה ז׳ — 42 שורות, 21 מהן חולקות — ומפת ערי המוצא |

### שלוש עובדות מתוך האתר

- בתורה לחודשים אין שמות כלל, רק מספרים. השמות שאנחנו משתמשים בהם בבליים,
  וחמישה מתוך שנים־עשר אינם מופיעים בתנ״ך בכלל.
- מלכים ב׳ מתארך את שריפת הבית לשבעה באב. ירמיהו מתארך את אותו אירוע לעשרה בו.
  תשעה באב שהתקבע אחר כך אינו אף אחד מהם.
- רשימת שבי ציון מצהירה על 42,360. חיבור הפריטים שברשימה נותן 29,818.

### איך זה בנוי

אתר סטטי, ללא שלב בנייה וללא תלות בזמן ריצה. אין פריימוורק, אין ספריות מפה,
ואין קריאות רשת לשום שרת חיצוני.

המפות הן מנוע SVG שנכתב לפרויקט, ובסיס המפה — קווי חוף, ימים, אגמים ונהרות —
מוטמע בתוך הקובץ כ־GeoJSON מעובד. התוצאה: המפות עובדות גם ללא חיבור לאינטרנט
ולא נשברות כששרת אריחים חיצוני נופל.

### מקורות

הנתונים מנוסח המסורה. במקומות שבהם מקורות חולקים זה על זה, שתי הגרסאות מוצגות
זו לצד זו ואין הכרעה שרירותית ביניהן. מקורות חוץ־מקראיים — כתובת שישק בכרנך,
מנסרת סנחריב, לוח גזר — מסומנים ככאלה במפורש.
בסיס המפה: [Natural Earth](https://www.naturalearthdata.com/) (נחלת הכלל).

---

## English

### What this is

Three interactive chapters that read the Hebrew Bible through its own data:
numbers, dates, distances, and versions that contradict each other. Every claim
is tied to its source, and the distinction between what the text says, what is
calculated, and what is reconstructed is kept visible throughout.

### Chapters

| | Chapter | What's inside |
|---|---|---|
| **01** | [The Calendar](https://lugasia.github.io/visual-tanakh/he/calendar/) | A lunar year wheel showing the moon phase on each of 354 days, three systems of month names, and every festival traced to its source |
| **02** | [The Treasures](https://lugasia.github.io/visual-tanakh/he/treasures/) | 14 events of plunder and payment across 470 years, an interactive map of where the treasure went, and the journey of the Ark |
| **03** | [Return to Zion](https://lugasia.github.io/visual-tanakh/he/return/) | Ezra 2 against Nehemiah 7 — 42 entries, 21 of which disagree — plus a map of the towns of origin |

*Chapter content is currently in Hebrew.*

### Three findings from the site

- The Torah gives the months no names at all, only numbers. The names in use
  today are Babylonian, and five of the twelve never appear in the Hebrew Bible.
- 2 Kings dates the burning of the Temple to the 7th of Av. Jeremiah dates the
  same event to the 10th. The Ninth of Av is neither.
- The census of returning exiles declares a total of 42,360. Adding up its own
  line items gives 29,818.

### How it's built

A static site with no build step and no runtime dependencies. No framework,
no mapping library, and no network calls to any external service.

The maps run on a purpose-built SVG engine, with the base map — coastlines,
seas, lakes and rivers — embedded directly in the page as processed GeoJSON.
The maps therefore work offline and cannot break when a third-party tile
server goes down.

### Sources

Figures follow the Masoretic Text. Where sources disagree, both readings are
shown side by side rather than silently reconciled. Extra-biblical sources —
the Shishak relief at Karnak, the Sennacherib Prism, the Gezer Calendar — are
labelled as such. Base map: [Natural Earth](https://www.naturalearthdata.com/)
(public domain).

---

## Support This Project

If you find this project useful, consider supporting its development:

- [**GitHub Sponsors**](https://github.com/sponsors/lugasia)
- **Star this repo** to help others find it

---

<div align="center">
<sub>

בנוי בידי [lugasia](https://github.com/lugasia) · Built by [lugasia](https://github.com/lugasia)

</sub>
</div>

---

## Development & deployment

Static site, no build step. Serve `site/` with any static HTTP server:

```sh
python3 -m http.server -d site 8000
```

Deployment runs through GitHub Actions (`.github/workflows/pages.yml`) and uploads
`site/` only. The workflow is `workflow_dispatch` — pushing to `main` does not publish;
run **Deploy Visual Tanakh** manually from the Actions tab.

Still outstanding before a full public launch: complete the claim and quotation review,
align the grouped census rows in the return chapter, confirm map and data asset
attribution, and add English chapter translations. See `SETUP.md` for the open items
around sharing, analytics and a custom domain.

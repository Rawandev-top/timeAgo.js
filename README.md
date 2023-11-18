# timeAgo.js
timeAgo.js is a nano library (less than 2.22 KB) used to format datetime in 5 different languages. eg: '3 days ago'.

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  |   Yes   |
| Firefox | Latest  |   Yes   |
| Safari  | Latest  |   Yes   |
| Edge    | Latest  |   Yes   |
| Opera   | Latest  |   Yes   |

# Demo

## English (en)

```plain
just now
12 seconds ago
2 minutes age
2 hours ago
3 days ago
3 month ago
2 years ago
```

## German (de)

```plain
Jetzt
Vor 12 Sekunden
Vor 12 Minute
Vor 2 Stunde
Vor 3 Tage
Vor 3 Monate
Vor 2 Jahre
```

## Arabic (ar)

```plain
الآن
منذ 12 ثانية
منذ 12 دقيقة
منذ 2 ساعة
منذ 3 يوم
منذ 3 شهر
منذ 2 سنة
```

## Kurdish Kurmanji (ku)

```plain
nuha
12 çirke berê
12 deqîqe berê
2 saet berêrê
3 roj berê
3 meh berê
2 sal berê
```

## Kurdish Sorani (ckb)

```plain
ئێستا
12 چرکە پێش ئێستا
12 خولەك پێش ئێستا
2 کاتژمێر پێش ئێستا
3 ڕۆژ پێش ئێستا
3 مانگ پێش ئێستا
2 ساڵ پێش ئێستا
```

## Usage

 - install/import `<script>` in `<head>`

```html
<script src="./timeAgo.js"></script>
```

- add `<script>` before `</body>`

```html
<script>
  // Load TimeAgo.js
  const timeago = new TimeAgo("en");

  // Update timestamps
  document.querySelectorAll(".timestamp").forEach((element) => {
    const timestamp = new Date(element.getAttribute("date-time"));
    element.innerText = timeago.format(timestamp);
  });
</script>
```

- chnage `TimeAgo("en")` to chnage the language

- language codes:
  -  `en` for English
  -  `de` for German
  -  `ar` for Arabic
  -  `ckb` for Kurdish Sorani
  -  `ku` for Kurdish Kurmaji

# How to use?

```html
<div class="timestamp" date-time="2023-11-18 23:03:12"></div>
```

 - for example `day/month/year hour:minute:second` or `year-month-day hour:minute:second`

```html
<div class="timestamp" date-time="11/18/2023 08:44:12 AM"></div> /* 2 minutes age */
<div class="timestamp" date-time="11/18/2023 08:44:12 PM"></div> /* منذ 12 ثانية */
<div class="timestamp" date-time="2023-11-18 21:03:12 AM"></div> /* 2 کاتژمێر پێش ئێستا */
<div class="timestamp" date-time="2023-11-18 21:03:12 PM"></div> /* Vor 3 Monate */
<div class="timestamp" date-time="11/18/2023 08:44:12"></div> /* 2 sal berê */
<div class="timestamp" date-time="11/18/2023 20:44:12"></div> /* Vor 2 Stunde */
<div class="timestamp" date-time="2023-11-18 21:03:12"></div> /* just now */
```

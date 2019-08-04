---
name: 'earth-coordinates-and-spatial-data'
title: כדור הארץ, קואורדינטות במרחב ומה שביניהם
year: 8 באוגוסט 2019
color: '#8e7964'
id: 'earth-coordinates'
description: |
   איפורמציה קלה, על קצה המזלג, על עולם קואורדינטות כדור-הארץ ותיאור מיקומים ויחס בין מיקומים
   מנקודת מבט של מפתח למערכות GIS. 
---

## רקע

המאמר מקוצר מאוד ואינו מתיימר להקיף הכל, אך מנסיוני כמפתח ללא רקע אקדמי, המידע במאמר יכול מאוד להוסיף למי שנצרך להבין את העקרונות הבסיסיים ביותר של העולם הזה למטרת עבודה עם מפות ומערכות GIS כמפתח תכנה.

וגם אם אתם לא מפתחים אבל תמיד תהיתם מה הם המספרים המוזרים ב-URL של מיקום בגוגל Maps מקומכם איתנו.

אשמח מאוד להארות והערות ותיקונים במייל או בכל דרך אחרת 😀.

## מערכות קואורדינטות ויישור קו כללי

מערכת קרטזית הינה מערכת המבוססת צירי X,Y,Z לתיאור מרחק הנקודה הנלונה מנקודת האפס במערכת הצירים, מתאים בד"כ למרחב מלבני.
מערכת פולארית (קוטבית) הינה מערכת קואורדינטות בה מיקום מיוצג בעזרת הזוית בכל ציר (ציר רוחב/גובה) מנקודת ה-0 במערכת הצירים, מתאים בד"כ למרחב כדורי.

### Datum (נתון)

מכלול הפרמטרים המגדירים מערכת ייחוס קבועה המאפשרת לתאר מקום על פני כדור הארץ
([ויקיפדיה](https://he.wikipedia.org/wiki/דאטום))


ובעברית: בגלל שצורת כדור-הארץ איננה גוף מתמטי פשוט (כדור גליל חרוט וכדו') , 
בכדי שניתן  יהיה לתאר מיקום במערכת צירים כלשהי יש צורך לסכם מראש מהי הצורה המתמטית שעליה נעבוד שתהיה הכי קרובה לצורתו האמיתית של כדוה"א, 
ההחלטה הזו היא הדאטום שלנו, ולכן אין זה משנה איזו מערכת צירים/קואורדינטות נשתמש תמיד נצטרך לסכם מראש מהו הדאטום שעמו אנו עובדים.

קיימים דאטומים רבים, ככהנפוצים שבהם הם:

#### `ED50` Europe datum
 דאטום שנוצר ב... 1950 כחלק מלקחי מלחמת העולם השנייה,
 שהיו קשיים בתכנון מבצעים בעקבות שינויי דאטומים בין בעלות הברית.
#### `WGS84` World geographic system
סטנדרט עולמי משנת 1984 משמש ב-GPS וברוב המערכות העולמיות.

## מערכות קואורדינטות בכדור הארץ

###  Geocentric Cartesian
#### הרעיון
ל"הניח" את כדוה"א בתורך ריבוע וירטואלי, וכל מיקום בתוכו יהיה בעזרת צירי X,Y,Z כמו בל מלבן עם גובה, כשראשית מערכת הצירים במרכז כדוה"א.

#### יתרונות
* קל מאוד לחשב מרחקים (מי לא שמע על [פיתגורס](https://he.wikipedia.org/wiki/%D7%9E%D7%A9%D7%A4%D7%98_%D7%A4%D7%99%D7%AA%D7%92%D7%95%D7%A8%D7%A1#%D7%9E%D7%A8%D7%97%D7%A7_%D7%91%D7%9E%D7%A8%D7%97%D7%91_%D7%94%D7%90%D7%95%D7%A7%D7%9C%D7%99%D7%93%D7%99)) ותנועה. (ללא התחשבות בכדוריות פני כדוה"א, כמובן).
* המיקומים מדויקים. (ללא עיגול לטובה).
* ניתן לתאר בקלות מיקום בחלל החיצון.
#### חסרונות
 קשה להבנה ותיאור מיקום לעין והמוח האנושי. (לדוגמה צירי ה-X,Y גם משתנים בתנועה צפונה על פני הים).
### Geodetic polar
#### הרעיון
חלוקת כדוה"א לקווי רוחב `Latitude` סיבוביים, וקווי אורך `Longitude` מקוטב לקוטב, 
וכך מתארים מיקום "ציר y" בעזרת קו הרוחב עליו נמצאת הנקודה 
(האם גבוה יותר או נמוך יותר מקו המשווה בין 90° 90°- כשקו המשווה הוא קו רוחב 0) 

ומיקום ב"ציר x" בעזרת קו האורך עליו נמצאת הנקודה (האם קו שמאלי יותר או ימני יותר, בין 180° 180°- כשקו הגובה 0 עובר
 [בקו גריניץ](https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%92%D7%A8%D7%99%D7%A0%D7%99%D7%A5%27) בריטניה).
 
וגובה (Altitude) הוא לפי המרחק מפני הים.
 
הערכים הזוויתיים של קווי הרוחב/גובה הם לפי הזווית מנקודת ה-0 ולכן הם בד"כ במעלות או רדיאנים
בבסיס עשרוני.

אך ניתן ומקובל לתאר את המעלות גם בעזרת DMS (Degrees, Minutes, Seconds) שזה תיאור שברי המעלות בבסיס 60.

המערכת כמו שלא קשה להבין היא קוטבית.

#### יתרונות
* קל להתמצא במרחקים ואיםה נמצאים ביחס ל.. בני אדם.
* המיקומים מדוייקים ללא עיגול לטובה.
* רוב מוחלט של המפות ומערכות הGIS משתמשות במערכת זו.
#### חסרונות
* קשה יחסית לחישוב מרחקים ויחס (הפרש מרחק זווית תלוי בהיקף הכדור בגובה הנתון)

### UTM universal transverse Mercator
#### הרעיון
חלוקת פני כדוה"א (למעט איזור הקטבים) ל-60 רצועות והשטחתם לתמונה דו-ממדית, כל פלח/רצועה 6.5 מעלות. (6 מעלות + חפיפה).

וכך כל נ.צ. (=נקודת ציון, נקודה במפה) כוללת x,y ואיזור/פלח/רצועה או איך שקוראים לזה.

בנוסף, מאחר ורוחב הרצועה שונה בהתאם למרחק מקו המשווה, גם הרצועה מחולקת לגבהים באותיות מ-C עד X (לא חייבים נתון זה, מאחר וניתן להסיק אותו מערך ציר ה-y.
מאחר והקטבים מתעוותים לחלוטין ישנה מערכת משלימה שנקראת UPS.

המערכת מן הסתם קרטזית.

#### יתרונות
* קל מאוד לחישוב וניתוח (כל עוד נמצאים באותו האיזור)
* קל מאוד להבנה של מרחקים ומחס לבני אדם.
* מתאים לניהול איזור מצומצם.
#### חסרונות
* מעוות את המצאיות בצורה משתמעותית.
* עבודה לא נוחה במעבר בין אזורים.

### Range vector

#### Distance
המרחק בין שני נקודות במרחב.

#### Elevation
זווית ההגבהה בין שני נקודות במרחב תלת ממדי.

#### Azimuth
זוויץ בציר האופקי (בדו ממדי) 
בין שני נקודות במרחב הדו ממדי 

(בתלת ממדי גם מתייחסים לזווית הדו ממדית)

### Orientation (נטייה)

#### heading (yaw)
סבסוב

#### Pitch 
עילרוד

#### Roll
גלגול

### Velocity

#### מהירות בצירים ; כיוון 

##### Speed
מהירות מוחלטת בכל הצירים בערכי מרחק/זמן.

##### Course 
כיוון תנועת היישות במרחב האופקי (דו ממדי) ביחס למערכת צירים נתונה, בערכי זווית.

##### Elevation
כיוון ההגבהה שך היישות במרחב (תלת ממדי) ביחס למערכת צירים נתונה, בערכי זווית.

#### תנועה בכל ציר בנפרד 
ידוע בשמו Velocity vector
מכיל יחידת מריק זמן עבור כל ציר בנפרד.


---

Photo by <a href="https://burst.shopify.com/@matthew_henry?utm_campaign=photo_credit&amp;utm_content=Free+Hand+Points+On+Globe+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit">Matthew Henry</a> from <a href="https://burst.shopify.com/trip?utm_campaign=photo_credit&amp;utm_content=Free+Hand+Points+On+Globe+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit">Burst</a>

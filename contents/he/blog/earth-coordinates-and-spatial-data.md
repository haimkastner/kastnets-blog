---
name: 'earth-coordinates-and-spatial-data'
title: כדור הארץ, קואורדינטות במרחב ומה שביניהם
year: 8 באוגוסט 2019
color: '#8e7964'
id: 'earth-coordinates'
description: אינפורמציה קלה, על קצה המזלג, על עולם קואורדינטות כדור-הארץ ותיאור מיקומים ויחס בין יקומים מנקודת מבט של מפתח למערכות GIS. 
---

## רקע

המאמר מקוצר מאוד ואינו מתיימר להקיף הכל,
ונכתב מנסיוני כמפתח ללא רקע אקדמי.

ניסיתי כמובן לעשות את המיטב,
אך בהחלט ייתכן וחסר מידע ו\או מידע לא מספיק מדויק. 

אשמח מאוד להארות הערות ותיקונים במייל/טוויטר או בכל דרך אחרת 😀.

המידע במאמר יכול לדעתי להוסיף למי שנצרך להבין את העקרונות הבסיסיים ביותר של העולם הזה למטרת עבודה עם מפות ומערכות GIS כמפתח תכנה.

וגם אם אתם לא מפתחים אבל תמיד תהיתם מה הם המספרים המוזרים ב-URL של מיקום בגוגל Maps מקומכם אתנו.


## מערכות קואורדינטות ויישור קו כללי

מערכת קרטזית הינה מערכת המבוססת צירי X,Y,Z 
[במרחב האוקלידי](https://he.wikipedia.org/wiki/%D7%9E%D7%A8%D7%97%D7%91_%D7%90%D7%95%D7%A7%D7%9C%D7%99%D7%93%D7%99) 
לתיאור מרחק הנקודה הנתונה מנקודת האפס במערכת הצירים, מתאים בד"כ למרחב מלבני.

מערכת פולארית (קוטבית) הינה מערכת קואורדינטות בה מיקום מיוצג בעזרת הזווית בכל ציר (ציר רוחב/גובה) מנקודת ה-0 במערכת הצירים, מתאים בד"כ למרחב כדורי.

### Datum (נתון)

מכלול הפרמטרים המגדירים מערכת ייחוס קבועה המאפשרת לתאר מקום על פני כדור הארץ
([ויקיפדיה](https://he.wikipedia.org/wiki/דאטום))


ובעברית: בגלל שצורת כדור-הארץ איננה גוף מתמטי פשוט (כדור, גליל, חרוט וכדו') , 
בכדי שניתן יהיה לתאר מיקום במערכת צירים כלשהי יש צורך לסכם מראש מהי הצורה המתמטית שעליה נעבוד שתהיה הכי קרובה לצורתו האמיתית של כדוה"א, 
ההחלטה הזו היא הדאטום שלנו, ולכן אין זה משנה איזו מערכת צירים/קואורדינטות נשתמש תמיד נצטרך לסכם מראש מהו הדאטום שעמו אנו עובדים.

קיימים דאטומים רבים, כשהנפוצים שבהם:

#### `ED50` Europe datum
 דאטום שנוצר ב... 1950 כחלק מלקחי מלחמת העולם השנייה,
 שהיו קשיים בתכנון מבצעים בעקבות שינויי דאטומים בין בעלות הברית.
#### `WGS84` World geographic system
סטנדרט עולמי משנת 1984, משמש ב-GPS וברוב המערכות העולמיות.

## מערכות קואורדינטות בכדור הארץ

### Geocentric Cartesian
#### הרעיון
ל"הניח" את כדוה"א בתוך ריבוע וירטואלי, וכל מיקום בתוכו יהיה בעזרת צירי X,Y,Z כמו כל מלבן עם גובה, כשראשית מערכת הצירים במרכז כדוה"א.

איור מערכת הצירים על כדור הארץ: 

<image-responsive class="center" imageURL="blog/earth-coordinates/geocentriccoordinatesystem.png" alt="Geocentric cartesian coordinates system"/>

(קרדיט [mak.com](https://ftp.mak.com/out/classdocs/vrlink5.2.1/hla1516e/vrl_coordinate_conversions.html))


#### אז איך זה נראה 
לדוגמה המיקום:

- X `4393545.25898511`
- Y `3080024.99015086`
- Z `3436747.86996515`

מייצג את המיקום של מפרץ חיפה בגובה פני הים, ישראל.
(המרחקים/ערכים הינם במטרים)

#### יתרונות
* קל מאוד לחשב מרחקים (מי לא שמע על [פיתגורס](https://he.wikipedia.org/wiki/משפט_פיתגורס#מרחק_במרחב_האוקלידי)) ותנועה. (ללא התחשבות בכדוריות פני כדוה"א, כמובן).
* המיקומים מדויקים (ללא עיגול לטובה).
* ניתן לתאר בקלות מיקום בחלל החיצון.
#### חסרונות
* קשה להבנה ותיאור מיקום לעין והמוח האנושי (לדוגמה צירי ה-X,Y גם משתנים בתנועה צפונה על פני הים).
### Geodetic polar
#### הרעיון
חלוקת כדוה"א לקווי רוחב `Latitude` סיבוביים, וקווי אורך `Longitude` מקוטב לקוטב, 
וכך מתארים מיקום "ציר y" בעזרת קו הרוחב עליו נמצאת הנקודה 
(האם גבוה יותר או נמוך יותר מקו המשווה בין 90° 90°- כשקו המשווה הוא קו רוחב 0) 

ומיקום ב"ציר x" בעזרת קו האורך עליו נמצאת הנקודה (האם קו שמאלי יותר או ימני יותר, בין 180° 180°- כשקו הגובה 0 עובר
 [בקו גריניץ](https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%92%D7%A8%D7%99%D7%A0%D7%99%D7%A5%27) בריטניה).
 
וגובה `Altitude` הוא לפי המרחק מפני הים.
 
הערכים הזוויתיים של קווי הרוחב/גובה הם לפי הזווית מנקודת ה-0 ולכן הם בד"כ במעלות או רדיאנים בבסיס עשרוני.

אך ניתן ומקובל לתאר את המעלות גם בעזרת DMS (Degrees, Minutes, Seconds) שזה תיאור שברי המעלות בבסיס 60.

איור קווי רוחב\גובה על פני כדור הארץ:

<image-responsive class="center" imageURL="blog/earth-coordinates/fedstats_lat_long.png"  alt="Geographic lat lon coordinates"/>

(מתוך [wikipedia](https://en.wikipedia.org/wiki/Geographic_coordinate_system))

איור חלוקת פני כדור הארץ לזוויות:

<image-responsive class="center" imageURL="blog/earth-coordinates/full_earth_lat_lon.gif"  alt="Full earth lan lon angels"/>

[קרדיט](https://thesocialsciencesblogger.blogspot.com/2013/09/geographic-coordinates-quiz.html)


#### אז איך זה נראה 
לדוגמה המיקום:
- Latitude `32.8103889`
- Longitude `35.0108669`
- Altitude `0`

מייצג את המיקום של מפרץ חיפה בגובה פני הים, ישראל.
(ערכי הזוית הינם במעלות)

כמובן ניתן לייצוג גם כ-DMS
<image-responsive class="center" imageURL="blog/earth-coordinates/dms.png"  alt="dms location"/>

ועכשיו כבר די מובן וברור לאן מוביל אותנו הקישור הבא של גוגל מפות:

`https://www.google.co.il/maps/place/32°48'37.4"N+35°00'47.0"E/`

המערכת כמו שלא קשה להבין היא קוטבית.

#### יתרונות
* קל להתמצא במרחקים ואיפה נמצאים ביחס ל.. בני אדם.
* המיקומים מדויקים ללא עיגול לטובה.
* רוב מוחלט של המפות ומערכות ה-GIS משתמשות במערכת זו.
#### חסרונות
* קשה יחסית לחישוב מרחקים ויחס (הפרש מרחק זווית תלוי בהיקף הכדור בגובה הנתון)

### UTM universal transverse Mercator
#### הרעיון
חלוקת פני כדוה"א (למעט איזור הקטבים) ל-60 רצועות והשטחתם לתמונה דו-ממדית, כל פלח/רצועה 6.5 מעלות. (6 מעלות + חפיפה).

וכך כל נ.צ. (=נקודת ציון, נקודה במפה) כוללת x,y ואיזור/פלח/רצועה או איך שקוראים לזה.

בנוסף, מאחר ורוחב הרצועה שונה בהתאם למרחק מקו המשווה, גם הרצועה מחולקת לגבהים באותיות מ-C עד X (לא חייבים נתון זה, מאחר וניתן להסיק אותו מערך ציר ה-y).
מאחר והקטבים מתעוותים לחלוטין ישנה מערכת משלימה שנקראת UPS.

איור חלוקת פני כדור הארץ לפלחים:

<image-responsive class="center" imageURL="blog/earth-coordinates/utm-zones-globe.png"  alt="Full earth lan lon angels"/>

[קרדיט](https://gisgeography.com/utm-universal-transverse-mercator-projection/)


איור מפת אפריקה ב-UTM:

(ניתן להבחין שישראל נמצאת באיזור `36S/R`)
<image-responsive class="center" imageURL="blog/earth-coordinates/africa-utm-zones.png"  alt="Full earth lan lon angels"/>

[קרדיט](https://commons.wikimedia.org/wiki/File:LA2-Africa-UTM-zones.png)


המערכת מן הסתם קרטזית.

#### יתרונות
* קל מאוד לחישוב וניתוח (כל עוד נמצאים באותו הפלח)
* קל מאוד להבנה של מרחקים ויחס לבני אדם.
* מתאים לניהול אזור מצומצם.
#### חסרונות
* מעוות את המציאות בצורה משמעותית.
* עבודה לא נוחה במעבר בין אזורים.

## Range vector (יחס בין נקודות)

#### Distance (מרחק)
המרחק בין שני נקודות במרחב.

#### Elevation (הגבהה)
זווית ההגבהה בין שני נקודות במרחב תלת ממדי.

#### Azimuth (אָזִימוּט)
זווית בציר האופקי (בדו ממדי) 
בין שני נקודות במרחב הדו ממדי 

(בתלת ממדי גם מתייחסים לזווית הדו ממדית)

איור להדגמת ההבדל בין זווית ה-`Elevation` לזווית ה-`Azimuth`:
<image-responsive class="center" imageURL="blog/earth-coordinates/azimuth_elevation.gif"  alt="Azimuth vs Elevation angle"/>

[קרדיט](http://www.ece.northwestern.edu/local-apps/matlabhelp/techdoc/visualize/chview3.html)


## Orientation (נטייה)
חשוב להדגיש שנתון זה *שונה* מכיוון התנועה והכיוון במרחב.

למשל מטוס נוחת כשהנטייה שלו כלפי מעלה והכיוון שלו מן הסתם כלפי מטה.

#### heading \ yaw (סבסוב)

<image-responsive class="center" imageURL="blog/earth-coordinates/aileron_yaw.gif"  alt="Airplane yaw animation"/>

[קרדיט](https://commons.wikimedia.org/wiki/File:Aileron_yaw.gif)

#### Pitch (עילרוד)

<image-responsive class="center" imageURL="blog/earth-coordinates/aileron_pitch.gif"  alt="Airplane pitch animation"/>

[קרדיט](https://commons.wikimedia.org/wiki/File:Aileron_pitch.gif)

#### Roll (גלגול)

<image-responsive class="center" imageURL="blog/earth-coordinates/aileron_roll.gif"  alt="Airplane roll animation"/>

[קרדיט](https://commons.wikimedia.org/wiki/File:Aileron_roll.gif)

## Velocity (תנועה)

### תיאור תנועה באמצעות מהירות + כיוון 

##### Speed (מהירות)
מהירות מוחלטת בכל הצירים בערכי מרחק/זמן.

##### Course (כיוון)
כיוון תנועת הישות במרחב האופקי (דו ממדי) ביחס למערכת צירים נתונה, בערכי זווית.

##### Elevation (הגבהה)
כיוון ההגבהה של הישות במרחב (תלת ממדי) ביחס למערכת צירים נתונה, בערכי זווית.

### תיאור תנועה באמצעות המהירות בכל ציר
ידוע בשמו `Velocity vector`
מתאר יחידת מרחק / זמן עבור כל ציר בנפרד.

## סיכום
חשוב לציין כי התוכן במאמר הוא קצה קצהו של עולם מופלא
(ומבולגן?) 
הכולל המון מתמטיקה וידע אנושי שנצבר במשך שנים ולא באמת ניתן ללמוד אותו 
מרפרוף ברשת, רק בתקווה שמי שלא מכיר את עולם התוכן הזה,
 המאמר כן ייתן קצת פתח לעולם מדהים זה.

ונסיים באיור שלא יועד להיות קומי

<image-responsive class="center" imageURL="blog/earth-coordinates/earth_projections.jpg"  alt="Cool earth projection"/>

[ק-רדיט](https://www.reddit.com/r/coolguides/comments/bsjr8f/this_is_pretty_cool_guide_of_how_distorting_map/) (בחבחבח...)

---

Photo by <a href="https://burst.shopify.com/@matthew_henry?utm_campaign=photo_credit&amp;utm_content=Free+Hand+Points+On+Globe+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit">Matthew Henry</a> from <a href="https://burst.shopify.com/trip?utm_campaign=photo_credit&amp;utm_content=Free+Hand+Points+On+Globe+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit">Burst</a>

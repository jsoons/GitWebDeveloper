# LogFile
In vscode extensie geïnstalleerd om datum/tijd in te voegen.
Gekozen voor:
Insert Date String
jsynowiec.vscode-insertdatestring
Jakub Synowiec

Gebruik na installatie uit extensions marketplace: 
CTRL+SHFT+I 
Werkt in markdown file
2020-03-29 15:33:30

### 2020-03-29 15:49:51
Eerste oefeningen node.js
Link voor site; https://github.com/LearnWebCode/welcome-to-git
Adres voor image: https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg
Dit is een beetje tricky... Met dit adres lukt het niet. Je moet de via github verder doorklikken naar foto , open het beeld in een nieuw tabblad en dan kan je via chrome de locatie kopiëren.
De goede locatie is dus:
https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg


###2020-03-29 16:19:31
NPM, node packages maar ook andere dingen
We starten met sites/travel-site
We gaan daar via npm downloaden en "lijst" bijhouden, ,json file dus

npm init -y maakt package.json file aan in project
nadien doet npm install lodash een locale kopie in de project folder
als de npm init -y niet gebeurd is dan komt de kopie in homedirectory 

We installeren zo ook npm install normalize.css
Als bestanden lokaal wel zijn, maar package.json bestand is er nog.... npm install zorg dat alles weer op zijn plaatst staat...

### 2020-03-29 17:01:40
Webpack
Site folder met apps

Vanaf sites/travel-site volgende uitvoeren om te installeren:

npm i webpack webpack-cli
npm i webpack webpack-cli  --save-dev

bestand aangemaakt sites/travel-site/app/assets/scripts/App.js
dan sites/travel-site/webpack.config.js (entry)
en tot slot aanpassen van  sites/travel-site/package.json, script aanpassen
npm run dev laat nu script lopen

sites/travel-site/webpack.config.js aanpassen voor output, opletten voor path, er moet absoluut path gegeven worden
Dus ook const path = require('path'); path is onderdeel van webpack en is dus geïnstalleerd
Tot slot nog enkele aanpassingen in sites/travel-site/webpack.config.js
Met name: mode: 'development' ==> om warning weg te krijgen
En watch: true ==> Hierdoor blijft webpack lopen en als er ergens aanpassingen zijn doet webpack automatische update.

Om te stoppen webpack: CTRL+C

Opmerking... npm modules worden mee in git ingecheckt. Nakijken
Problemen opgelost?

### 2020-03-29 20:08:05
postcss
npm i css-loader style-loader  --save-dev
aanmaken sites/travel-site/app/assets/styles/styles.css, stylesheet niet in html gebruiken
in javascript file toevoegen... import '../styles/styles.css';
in sites/travel-site/webpack.config.js toevoegen:
module: {
    rules: [
      {test: /\.css$/i,
        use: ['style-loader','css-loader'] 
      }
    ]
  }

Je laadt module, webpack standaard alleen maar javascript
Dus extra module voor css, en dan via regexp laden van modules
Opmerking: css-loader ==> laad stylesheet, style-loader ==> zorgt dat style in index.html komt

postcss
npm i postcss-loader  --save-dev
npm i postcss-simple-vars postcss-nested autoprefixer --save-dev
aanpassen in sites/travel-site/webpack.config.js, met array van requires voor modules
const postCSSPlugins = [
  require('postcss-simple-vars'), 
  require('postcss-nested'), 
  require('autoprefixer')
];
Nog aanpassingen in sites/travel-site/app/assets/styles/styles.css
Dit is nu geen valid css file meer. maar webpack kan er door de extra modules mee aan de slag


### 2020-04-01 16:44:47
Begin met het bouwen van de site
CSS organisation, dat is volgende onderwerp
We werken nu op andere computer en hebben npm modules niet meet in git gestoken, dus eerst npm i --save-dev
Dan npm run dev

We starten met opbouw css
import
Dan extra postcss module installeren met npm i postcss-import --save-dev
En uiteraard ook configureren in sites/travel-site/webpack.config.js
Array met plugins aanpassen , toevoegen require('postcss-import'),
Bestanden die niet op zichzelf staan maar in ander bestand gebruikt moeten worden, starten met _ 
normalize packege door gewoon import van module naar, dus @import 'normalize.css';

In sites/travel-site/app/index.html div class bijvoegen om text aan te passen
Dan in css sites/travel-site/app/assets/styles/modules/_large-hero.css via class id aanpassen
transform functie!

### 2020-04-01 17:39:23
Video 2, BEM
Type en descendent 
https://www.sitepoint.com/descendant-selector-css-selector/ : Descendant Selector (CSS Selector)
Weg van Type en Descendant Selector Nu BEM als alternatief
BEM , design
Block, onanfhankelijk geheel in design
Element, behoort bij een block
Modifier, kan toegepast worden op block of element om af te wijken van standaard gedrag
BEM ==> Single-responsibility blocks, reusable
Naming methodology, consistent en nadien snel begrijpbaar
TE LEZEN nog: http://nicolasgallagher.com/about-html-semantics-front-end-architecture/

& en toch nesten


### 2020-04-01 20:59:50
rem ==> root element, gebruiken om font size relatief te maken tov html element
BEM
B btn
E __
M --
Dus bijkomende modifiers, voor btn btn--orange btn--large

### 2020-04-04 11:05:03

npm i webpack-dev-server --save-dev
invoegen object 

devServer: {
    contentBase: path.join(__dirname,'app'),
    hot: true,
    port: 3000

  },
  in sites/travel-site/webpack.config.js

  watch weg, devServer neemt over
  sites/travel-site/package.json in scripts, webpack-dev-server ipv webpack

  2020-04-04 15:08:49
  automatisch html herladen
  sites/travel-site/webpack.config.js
  devServer object
  before object ==> html reload
  host object  ==> toegang voor localnet
  
  http://localhost:3000/bundled.js , toegang tot gegenereerd bestand. Html in geheugen


@media voor resize in css
maar beter alternatief, postcss mixins
npm i postcss-mixins --save-dev
aanpassen sites/travel-site/webpack.config.js
  require('postcss-mixins'),

in mixins stylesheet 
define-mixin atSmall {
  @media (min-width: 530px) {
    @mixin-content;
  }
}
in stylesheet
@mixin atSmall {
            font-size: 2rem;
        }
### 2020-04-05 06:59:59
Responsive images
twee redenen om ander beeld door te sturen, artistiek of technisch
artistiek ==> cropping, samenstelling beeld ==> focus picture element
technisch ==> grootte van het bestand, beeldresolutie ==> focus file size

Alternatief 1: artistiek
<picture></picture>
binnen picture element, <source>
gebruiken met media query en srcset attribuut
image met standaard, klein formaat (mobile first)

Alternatief 2: groote van bestand
<img> element met srcset attribute
verschillende alternatieven oplijsten in het img element
je moet wel aantal pixels meegeven, browser weet welke te kiezen maar weet niet de grootte van afbeelding tenzij deze eerst gedowload wordt, xxxw (aantal pixels wide)
opgelet! inteligentie in browser, geen micromangement, maakt het bij ontwikkelen soms lastig. 
Chrome als je van groot naar klein gaat, geen downloads meer (grote zit in cache)
Voor developper: of afbeelding uit cache halen, of via igcognito mode (andere cache)

Nu aanpassingen aan site
Aanpassingen aan sites/travel-site/app/index.html
ook img element kan srcset gebruiken in plaats van src

### 2020-04-05 08:10:29
Testen van responsive images
-i.jpg bestanden, informatie
dpr, device pixel ratio kan hoger gezet worden om te testen via chrome developpers tools  

### 2020-04-05 08:18:52 
Create reusable blocks
padding toevoegen via extra class wrapper
als je die meegeeft 

Verder design van file met css
opmerking: beide marges auto ==> gelijkmatig verdelen
Uit de MDN reference https://developer.mozilla.org/nl/docs/Web/CSS/margin-left

auto
The left margin receives a share of the unused horizontal space, as determined mainly by the layout mode that is used. If the values of margin-left and margin-right are both auto, the calculated space is evenly distributed.

vscode opmerking. Je kan html elementen toevoegen via emmet
Stuk tekst selecteren <CTRL><SHFT><P> Emmet: Wrap with abbrevation

Styling voor headlines, bijkomende class b-marging-small , em (is tov element zelf, niet tov root em /rem)

layout opnieuw aanpassen met mixin voor mobiel
aanpassen css sites/travel-site/app/assets/styles/modules/_wrapper.css
nested wrapper ==> padding-right en left op 0 

### 2020-04-05 15:31:42
Column layout
Virtueel 12 kolommen, 1-4 ==> row__4, 5-12 ==> row__8 (8 van de 12)
Styling: met float neem je element uit normale float, als je dat bij allemaal doet heeft parent element in DOM niks meer.
Gebeurt nu met class row, de twee kinderen met row__4 en row__8 worden uit de flow genomen en row heeft niks meer over

gutters! ==> "groef"
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
boxing model
box-sizing: content-box; ==> basis model
box-sizing: border-box;  ==> nu nodig om te laten kloppen, starten langs buitenkant
De verschillende randen (edge) van binnen naar buiten: Content>Padding>Border>Margin

Nu vertrek je vanuit Border (dus enkel marge valt nog buiten afmetingen)
Aanpassen in sites/travel-site/app/assets/styles/base/_global.css
* ==> op alles van toepassing
* {
  box-sizing: border-box;
}

oplossing om laatste colom geen padding te hebben, negatieve margin en overflow: hidden (_wrapper.css)

### 2020-04-05 19:53:38
vscode delete line <SHFT>+<DEL>
in sites/travel-site/app/index.html media queries , bvb media="(min-width:1020px) 
opmerking, <img srcset="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe"> kan ook met srcset en maar 1 afbeelding
Bij src aangeven wat maximale breedte is, browser weet niet dat er maar 1/3 van scherm moet gebruikt worden, dus sizes=...
Extra info is niet nodig voor moble column layout, daar is het maar 1 kolom, en dus klopt veronderstelling van browser terug dat het volledige breedte is

foto zonder alternatieven naar compositie, enkel download
        <img sizes="(min-width:970px) 976px, 100vw" srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-high-dpi.jpg 1952w" alt="Couple walking down a street.">
vw = viewport width
dus indien geen 970px dan is grootte 100% van de viewport width

line-height: 1.65; ==> heeft geen eenheid nodig

### 2020-04-05 22:17:02
git merge om samen te voegen

branch toevoegen
our-features branch

### 2020-04-11 11:54:46
Zelf wat testen met branches in vscode
Ik doe nu een extra lijn maar niet in remote.


 























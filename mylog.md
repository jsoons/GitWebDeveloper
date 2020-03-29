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







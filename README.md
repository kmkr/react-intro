Dette er presentasjon og materiale brukt for React-intro-presentasjon holdt 2016-06-13 for Webstep.

Presentasjonen vises ved å åpne `index.html` som ligger i toppen av repositoriet.

Ferdig resultat av kodebasen ligger under `code/0_basic` og `code/1_babel` for henholdsvis ES5 (plain JavaScript) og ES6 + JSX med Babel.

## ES5

Det er tilstrekkelig å åpne `code/0_basic/index.html` rett i nettleser. Endringer gjøres i fila `code/0_basic/index.html` og vil vises ved en refresh av siden.

## ES6 + JSX

Siden Babel bruker XHR til å hente ned JS-filer må denne leveres via en webserver for å fungere. Hvis du har Python installert kan det gjøres enkelt slik:

`cd code/`
`python -mSimpleHTTPServer` (Python 2)
`python -m http.server` (Python 3)

Åpne http://localhost:8000 og naviger inn i mappa `1_babel`.

Endringer gjøres i `code/1_babel/app.js` og vil vises ved en refresh av siden.

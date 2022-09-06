#!/bin/bash

export NODE_ENV=production
VERSION=$(date +"%Y.%m.%d")

perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" manifest.chrome.json
perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" manifest.firefox.json
perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" cortico.js
perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" modules/cortico/Widget/WidgetSidebar.js

yarn
yarn build

rm -f cortico-*.zip
rm -f oscar-enhancement-suite.zip

cp manifest.firefox.json manifest.json
zip -r cortico-firefox.zip dist resources manifest.json

cp manifest.chrome.json manifest.json
zip -r cortico-chrome.zip dist resources manifest.json

zip -r oscar-enhancement-suite.zip . -x '*.git*' -x '*.zip' -x '*node_modules*'

cp manifest.chrome.json.bak manifest.chrome.json
cp manifest.firefox.json.bak manifest.firefox.json
cp cortico.js.bak cortico.js
cp modules/cortico/Widget/WidgetSidebar.js.bak modules/cortico/Widget/WidgetSidebar.js

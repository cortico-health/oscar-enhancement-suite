#!/bin/bash

export NODE_ENV=production
VERSION=$(date +"%Y.%m.%d")

perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" manifest.chrome.json
perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" manifest.firefox.json
perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" cortico.js
perl -i.bak -p -e "s/__PLUGIN_VERSION__/${VERSION}/g" modules/cortico/Widget/WidgetSidebar.js

echo 'BUILDING STAGE'

export INCLUDE_PROVIDER_MESSAGING=1
export CEREBRO_URL=https://cerebro-develop.cortico.ca
export WEBSOCKET_URL=wss://cerebro-develop.cortico.ca

yarn
yarn build

rm -f builds_staging/cortico-*.zip
rm -f builds_staging/oscar-enhancement-suite-stage.zip

cp manifest.firefox.json manifest.json
zip -r builds_staging/cortico-firefox-stage.zip dist resources manifest.json

cp manifest.chrome.json manifest.json
zip -r builds_staging/cortico-chrome-stage.zip dist resources manifest.json

zip -r builds_staging/oscar-enhancement-suite-stage.zip . -x '*.git*' -x '*.zip' -x '*node_modules*'

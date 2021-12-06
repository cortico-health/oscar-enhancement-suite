#!/bin/bash

export NODE_ENV=production

yarn
yarn build

rm -f cortico-*.zip
rm -f oscar-enhancement-suite.zip

cp manifest.firefox.json manifest.json
zip -r cortico-firefox.zip dist resources manifest.json

cp manifest.chrome.json manifest.json
zip -r cortico-chrome.zip dist resources manifest.json

zip -r oscar-enhancement-suite.zip . -x '*.git*' -x '*.zip' -x '*node_modules*'


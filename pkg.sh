#!/bin/ash

rm -f cortico-*.zip

cp manifest.firefox.json manifest.json
zip -r cortico-firefox.zip dist resources manifest.json

cp manifest.chrome.json manifest.json
zip -r cortico-chrome.zip dist resources manifest.json

rm manifest.json


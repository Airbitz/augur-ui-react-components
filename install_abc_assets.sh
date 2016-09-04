#!/bin/sh

# I haven't figured out a better way to do this, so for now...
# here is the hack to put the abc-auth assets into the ./demo folder.

mkdir -p demo/abcui
cd node_modules/airbitz-core-js-ui
npm install
npm run prebuild
cd ../..
rsync -avz node_modules/airbitz-core-js-ui/assets demo/abcui/

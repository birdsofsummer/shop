const mbxStyles = require('@mapbox/mapbox-sdk/services/styles');
const mbxTilesets = require('@mapbox/mapbox-sdk/services/tilesets');
const mbxClient = require('@mapbox/mapbox-sdk');

const MY_ACCESS_TOKEN='sk.eyJ1IjoiYmlyZHNvZnN1bW1lciIsImEiOiJjandqMHRqcHkwenEzNDlvMjF0YmtjcTdpIn0.NkK-cPxPd1Ax2w79mb38mw'
const baseClient = mbxClient({ accessToken: MY_ACCESS_TOKEN });

const tilesetsService = mbxTilesets(baseClient);
const stylesService = mbxStyles(baseClient);

test=async()=>{
    /*
        listStyles() 
        createStyle() 
        getStyle()
    */
    a=await tilesetsService.listTilesets().send()
    b=await stylesService.createStyle({}).send()
    console.log(a)
    console.log(b)
}


module.exports = {
  "globDirectory": "static/",
  "globPatterns": [
    "**/*.{html,json,css,ico,woff,ttf,eot,woff2,jpg,png,js}"
  ],
  "swDest": "static/sw.js",
  "importWorkboxFrom":"local",
   "cleanupOutdatedCaches": true,
};

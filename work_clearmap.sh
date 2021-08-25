node produce-clearmap/index-clear.js
rm -rf produce-clearmap/clearmapVT/*
/usr/local/bin/tile-join --no-tile-size-limit -e produce-clearmap/clearmapVT produce-clearmap/clearmaptile/0-0-0.mbtiles --no-tile-compression


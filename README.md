# produce-gsc-4-pro
production package for the production env


## install
```console
git clone https://github.com/un-vector-tile-toolkit/produce-gsc-4-pro
cd produce-gsc-4-pro
npm install
vi config/default.hjson //edit config info, e.g. host, dbUser, dbPassword, etc.
```

## Possible workflow
run "work_small.sh" to creat small scale (un and osm sourced) vector tile (update frequency is irregular/ when needed.)  
run "work_undata.sh" to create un sourced vector tiles (update frequency is irregular/ when needed.)  
run "work_every.sh" everyday up create/update priority area (daily update).  
run "work_day0X" once a week to create/update othere areas (weekly update).     

Please be advised that "work_every" and "work_day0x" newly create (update) the data from osm only, but they will be merged with un source vectortile using tile-join.  

## Where are the tiles?
un-sourced vector tiles --> ./produce-gsc-un-46/mbtiles/un_tile  
osm-source vector tiles --> ./produce-gsc-osm-46/mbtiles/osm_tile_day0x, or ./produce-gsc-osm-46/mbtiles/osm_tile_every  
merged tiles (un and osm) --> ./large_tiles/unosmosm_tile_day0x, or ./large_tiles/unosmosm_tile_every  

## Tips
When you run the script using crontab, make sure that you specify the path of tile-join properly. (instead of "tile-join", you may need to use /usr/local/bin/tile-join) 
 
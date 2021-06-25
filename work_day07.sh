node produce-gsc-osm-46/index_day07.js
for f in produce-gsc-osm-46/mbtiles/osm_tile_day07/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/un/osm/tile_day07/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day07/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day07/`basename ${f}` ;done
scp -i XXX(path to your ssh key) -r ./large_tiles/unosm/tile_day07/* (username)@(hostingserver):(path)/mbtiles/unosm

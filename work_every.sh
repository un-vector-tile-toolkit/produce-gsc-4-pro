node produce-gsc-osm-46/index_everyday.js
for f in produce-gsc-osm-46/mbtiles/osm_tile_every/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_every/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_every/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_every/`basename ${f}` ;done
scp -i XXX(path to your ssh key) -r ./large_tiles/unosm/tile_every/* (username)@(hostingserver):(path)/mbtiles/unosm


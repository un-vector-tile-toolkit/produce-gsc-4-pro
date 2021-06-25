node produce-gsc-osm-46/index_everyday.js
node produce-gsc-osm-46/index_day01.js
node produce-gsc-osm-46/index_day02.js
node produce-gsc-osm-46/index_day03.js
node produce-gsc-osm-46/index_day04.js
node produce-gsc-osm-46/index_day05.js
node produce-gsc-osm-46/index_day06.js
node produce-gsc-osm-46/index_day07.js
for f in produce-gsc-osm-46/mbtiles/osm_tile_every/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_every/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_every/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_every/`basename ${f}` ;done
for f in produce-gsc-osm-46/mbtiles/osm_tile_day01/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_day01/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day01/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day01/`basename ${f}` ;done
for f in produce-gsc-osm-46/mbtiles/osm_tile_day02/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_day02/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day02/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day02/`basename ${f}` ;done
for f in produce-gsc-osm-46/mbtiles/osm_tile_day03/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_day03/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day03/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day03/`basename ${f}` ;done
for f in produce-gsc-osm-46/mbtiles/osm_tile_day04/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_day04/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day04/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day04/`basename ${f}` ;done
for f in produce-gsc-osm-46/mbtiles/osm_tile_day05/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_day05/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day05/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day05/`basename ${f}` ;done
for f in produce-gsc-osm-46/mbtiles/osm_tile_day06/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_day06/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day06/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day06/`basename ${f}` ;done
for f in produce-gsc-osm-46/mbtiles/osm_tile_day07/*.mbtiles; do tile-join --no-tile-size-limit -f -o large_tiles/unosm/tile_day07/`basename ${f}` produce-gsc-un-46/mbtiles/un_tile/`basename ${f}` produce-gsc-osm-46/mbtiles/osm_tile_day07/`basename ${f}`; date; echo  `basename ${f}`; ls -alh large_tiles/unosm/tile_day07/`basename ${f}` ;done
scp -i XXX(path to your ssh key) -r ./large_tiles/unosm/tile_*/* (username)@(hostingserver):(path)/mbtiles/unosm

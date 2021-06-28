//modify for un large (ZL6-
const geojsonArea = require('@mapbox/geojson-area')

const preProcess = (f) => {
  f.tippecanoe = {
    layer: 'other',
    minzoom: 15,
    maxzoom: 15
  }
  // name
  if (
    f.properties.hasOwnProperty('en_name') ||
    f.properties.hasOwnProperty('int_name') ||
    f.properties.hasOwnProperty('name') ||
    f.properties.hasOwnProperty('ar_name')
  ) {
    let name = ''
    if (f.properties['en_name']) {
      name = f.properties['en_name']
    } else if (f.properties['int_name']) {
      name = f.properties['int_name']
    } else if (f.properties['name']) {
      name = f.properties['name']
    } else {
      name = f.properties['ar_name']
    }
    delete f.properties['en_name']
    delete f.properties['ar_name']
    delete f.properties['int_name']
    delete f.properties['name']
    f.properties.name = name
  }
  return f
}

const postProcess = (f) => {
if(f!==null){
  delete f.properties['_database']
  delete f.properties['_table']
}
  return f
}


const flap = (f, defaultZ) => {
  switch (f.geometry.type) {
    case 'MultiPolygon':
    case 'Polygon':
      let mz = Math.floor(
        19 - Math.log2(geojsonArea.geometry(f.geometry)) / 2
      )
      if (mz > 15) { mz = 15 }
      if (mz < 6) { mz = 6 }
      return mz
    default:
      return defaultZ ? defaultZ : 10
  }
}

const lut = {
 // Base
  custom_planet_land_08_a: f => {
    f.tippecanoe = {
      layer: 'landmass',
      minzoom: 6,
      maxzoom: 7
    }
    delete f.properties['objectid']
    delete f.properties['fid_1']
    return f
  },
  custom_planet_land_main_a: f => {
    f.tippecanoe = {
      layer: 'landmass',
      minzoom: 8,
      maxzoom: 15
    } 
//for antarctic region to save disc space
  let antarcticaArray = [2313279, 2314068, 2314067, 2314191, 2313300, 2313280, 2313286, 2313285, 2313287, 2313301, 2313302, 2313277, 2313278, 2313281, 2313282, 2313283, 2313284, 2313303, 2313304, 2313311, 2313307, 2313312, 2313313, 2313308, 2313288, 2313289, 2313290, 2313291, 2313292, 2313305, 2313306, 2313369, 2313319, 2313320, 2313293, 2313314, 2313294, 2313295, 2313322, 2313323, 2313315, 2313324, 2313316, 2313325, 2313296, 2313309, 2313310, 2313321, 2313388, 2313326, 2313317, 2313327, 2313389, 2313328, 2313318, 2313370, 2314127, 2313330, 2313331, 2314128, 2313332, 2313390, 2313391, 2313392, 2313329, 2314130, 2314131, 2313341, 2313297, 2313393, 2314135, 2314136, 2314137, 2313394, 2313395, 2313396, 2314129, 2313342, 2313343, 2313344, 2314132, 2314133, 2313333, 2313334, 2313335, 2313336, 2313345, 2314138, 2313346, 2313350, 2313351, 2313337, 2313338, 2313339, 2314139, 2313352, 2314140, 2313353, 2313354, 2313355, 2313356, 2313340, 2314134, 2313358, 2313298, 2313299, 2313347, 2313348, 2313349, 2313357, 2314141, 2313366, 2314142, 2314143, 2313368, 2313364, 2313400, 2314144, 2313371, 2313374, 2313359, 2313360, 2313367, 2313408, 2313365, 2313375, 2313378, 2313470, 2313372, 2313376, 2313401, 2313377, 2313379, 2313380, 2313381, 2313382, 2313361, 2313402, 2313362, 2313363, 2313397, 2313383, 2313373, 2313409, 2313410, 2313403, 2313416, 2313411, 2313412, 2313404, 2313384, 2313385, 2313413, 2313417, 2313414, 2313418, 2313405, 2313398, 2313399, 2313386, 2313387, 2313419, 2313415, 2314145, 2313406, 2313420, 2313423, 2313421, 2313422, 2313432, 2313433, 2313424, 2313434, 2314146, 2313444, 2313447, 2313448, 2313407, 2313950, 2314163, 2313437, 2313425, 2313455, 2314164, 2314165, 2313435, 2313436, 2313474, 2313475, 2314181, 2314178, 2314167, 2314168, 2313426, 2313427, 2313428, 2313429, 2314169, 2314166, 2313468, 2313469, 2313473, 2313471, 2313472, 2313430, 2314170, 2313478, 2313476, 2313477, 2313431, 2314182, 2314197, 2313479, 2313480, 2313682, 2313715, 2313683, 2313684, 2314183, 2313701, 2313702, 2313703, 2314198, 2313693, 2313694, 2313695, 2313696, 2313697, 2313698, 2314199, 2313687, 2313688, 2313689, 2313690, 2313691, 2313692, 2313752, 2313716, 2313685, 2313686, 2313730, 2313711, 2313704, 2313705, 2313731, 2313717, 2313735, 2313737, 2313742, 2313743, 2313744, 2313712, 2313713, 2313706, 2313707, 2313699, 2313755, 2313718, 2313719, 2313757, 2313783, 2313786, 2313787, 2313708, 2313709, 2313700, 2313836, 2313721, 2313805, 2313714, 2313723, 2313837, 2313725, 2313726, 2313710, 2313831, 2313832, 2313765, 2313846, 2313766, 2313972, 2314025, 2314026, 2314027, 2313930, 2314019, 2314020, 2314031, 2313966, 2313967, 2313937, 2313938, 2314013, 2313988, 2313989, 2314032, 2314021, 2314022, 2314023, 2314024, 2314010, 2314015, 2314071, 2314072, 2314070, 2314038, 2314029, 2314033, 2314034, 2314028, 2314039, 2314057, 2314073, 2314058, 2314040, 2314041, 2314030, 2314035, 2314036, 2314037, 2314056, 2314042, 2314062, 2314053, 2314063, 2314052, 2314064, 2314047, 2314043, 2314044, 2314045, 2314054, 2314069, 2314055, 2314065, 2314059, 2314060, 2314061, 2314074, 2314076, 2314046, 2314077, 2314090, 2314091, 2314092, 2314075, 2314078, 2314079, 2314048, 2314049, 2314050, 2314066, 2314093, 2314051, 2314099, 2314101, 2314094, 2314095, 2314100, 2314096, 2314097, 2314103, 2314104, 2314108, 2314080, 2314102, 2314116, 2314098, 2314113, 2314117, 2314118, 2314119, 2314120, 2314114, 2314115, 2314110, 2314111, 2314112, 2314159, 2314147, 2314081, 2314122, 2314121, 2314123, 2314124, 2314151, 2314148, 2314149, 2314150, 2314154, 2314155, 2314082, 2314083, 2314125, 2314126, 2314152, 2314171, 2314156, 2314157, 2314084, 2314160, 2314158, 2314172, 2314153, 2314173, 2314184, 2314188, 2314189, 2314185, 2314179, 2314085, 2314174, 2314180, 2314175, 2314161, 2314176, 2314192, 2314177, 2314193, 2314194, 2314195, 2314196, 2314200, 2314086, 2314186, 2314187, 2314190, 2314201, 2314202, 2314203, 2314215, 2314206, 2314204, 2314087, 2314088, 2314216, 2314089, 2314162, 2314218, 2314207, 2314208, 2314205, 2314224, 2314217, 2453281, 2314225, 2314219, 2314220, 2314221, 2314222, 2314223, 2453297, 2314209, 2314210, 2314212, 2314213, 2314214, 2453285, 2453286, 2453287, 2453290, 2453291, 2453292, 2453293, 2453294, 2453295, 2453296, 2453298, 2453288, 2453282, 2453283, 2453284, 2453289, 2493148, 2492577, 2493150, 2456506, 2492580, 2492581, 2493187, 2457389, 2457390, 2457391, 2457392, 2492578, 2493149, 2493186, 2493061, 2493188, 2493105, 2493062, 2493065, 2493106, 2493063, 2493051, 2493052, 2493066, 2493053, 2493056, 2493058, 2493085, 2493074, 2493075, 2493076, 2493077, 2493078, 2493079, 2493080, 2493064, 2493254, 2493093, 2493059, 2493060, 2493086, 2493087, 2493081, 2493094, 2493095, 2493128, 2493082, 2493107, 2493083, 2493096, 2493067, 2493108, 2493109, 2493084, 2493100, 2493068, 2493101, 2493110, 2493111, 2493102, 2493069, 2493103, 2493097, 2493112, 2493113, 2493117, 2493118, 2493104, 2493098, 2493070, 2493114, 2493115, 2493119, 2493120, 2493156, 2493157, 2493099, 2493116, 2493158, 2493121, 2493129, 2493159, 2493122, 2493130, 2493160, 2493192, 2493131, 2493161, 2493193, 2493132, 2493071, 2493133, 2493123, 2493124, 2493162, 2493163, 2493164, 2493194, 2493195, 2493196, 2493197, 2493134, 2493135, 2493136, 2493125, 2493126, 2493165, 2493198, 2493137, 2493138, 2493127, 2493166, 2493199, 2493139, 2493072, 2493140, 2493141, 2493223, 2493167, 2493200, 2493201, 2493202, 2493203, 2493142, 2493224, 2493225, 2493168, 2493169, 2493204, 2493205, 2493226, 2493170, 2493206, 2493227, 2493171, 2493207, 2493228, 2493172, 2493173, 2493174, 2493175, 2493176, 2493177, 2493178, 2493208, 2493209, 2493210, 2493211, 2493212, 2493213, 2493214, 2493143, 2493144, 2493145, 2493146, 2493147, 2493151, 2493152, 2493153, 2493154, 2493155, 2493229, 2493230, 2493231, 2493232, 2493233, 2493234, 2493235, 2493236, 2493237, 2493238, 2493239, 2493240, 2493241, 2493242, 2493243, 2493244, 2493179, 2493180, 2493181, 2493182, 2493183, 2493184, 2493185, 2493189, 2493190, 2493191, 2493215, 2493216, 2493217, 2493218, 2493219, 2493220, 2493221, 2493255, 2493256, 2493262, 2493263, 2493264, 2493265, 2493266, 2493245, 2493246, 2493247, 2493248, 2493249, 2493250, 2493289, 2493290, 2493291, 2493292, 2493293, 2493257, 2493222, 2493267, 2493268, 2493269, 2493251, 2493294, 2493295, 2493270, 2493073, 2493271, 2493272, 2493273, 2493252, 2493253, 2493296, 2493297, 2493298, 2493299, 2493274, 2493275, 2493088, 2493276, 2493277, 2493300, 2493278, 2493089, 2493279, 2493280, 2493258, 2493259, 2493301, 2493090, 2493302, 2493303, 2493281, 2493260, 2493261, 2493304, 2493282, 2493305, 2493091, 2493306, 2493307, 2493283, 2493284, 2493285, 2493092, 2493286, 2493287, 2493288, 2505431, 2498540, 2498541, 2498542, 2498543, 2498545, 2505415, 2505418, 2498525, 2498527, 2498528, 2498533, 2498535, 2498536, 2498538, 2498539, 2505423, 2505424, 2505425, 2505428, 2498524, 2505438, 2505439, 2505440, 2505441, 2505420, 2505429, 2505432, 2505444, 2505515, 2505434, 2505516, 2505517, 2505435, 2505518, 2505519, 2505520, 2505521, 2505522, 2505523, 2505524, 2505525, 2505526, 2505527, 2505528, 2505529, 2505530, 2505531, 2505501, 2505502, 2505503, 2505504, 2505411, 2505413, 2505414, 2505421, 2505437]
  if (antarcticaArray.includes(f.properties.objectid)) {
    f.tippecanoe.maxzoom = 13  
  }
//for antarctic region to save disc space(until here)

    delete f.properties['objectid']
    delete f.properties['fid_1']
    return f
  },
 // Admin
  unmap_bndl_l: f => {
    f.tippecanoe = {
      layer: 'bndl',
      maxzoom: 15
    }
    f.properties._source = 'hq'
    delete f.properties['objectid']
    delete f.properties['bdytyp_code']
  if (f.properties.bdytyp === '7') {
    f.tippecanoe.minzoom = 7
//  } else if (f.properties.bdytyp === 'Administrative boundary 3') {
//    f.tippecanoe.minzoom = 9
  } else {
    f.tippecanoe.minzoom = 6
  }
  if (f.properties.iso3cd == 'COL' || f.properties.iso3cd == 'COL_ECU' || f.properties.iso3cd == 'COL_PER' || f.properties.iso3cd == 'COL_VEN' || f.properties.iso3cd == 'BRA_COL' || f.properties.iso3cd == 'COL_PAN') {
    return null
  } else {
    return f
  }
  },
  custom_unmap_bndl_l: f => {
    f.tippecanoe = {
      layer: 'bndl',
      maxzoom: 15
    }
    f.properties._source = 'c'
    delete f.properties['objectid']
    delete f.properties['name1']
    delete f.properties['cnty1']
    delete f.properties['name2']
    delete f.properties['cnty2']
    delete f.properties['adm1_name1']
    delete f.properties['adm1_name2']
    delete f.properties['adm2_name1']
    delete f.properties['adm2_name2']
  if (f.properties.type == '3') {
    f.tippecanoe.minzoom = 6
    f.properties.bdytyp = '6'
  } else if (f.properties.type == '4') {
    f.tippecanoe.minzoom = 7
    f.properties.bdytyp = '7'
  } else {
    f.tippecanoe.minzoom = 6
    f.properties.bdytyp = f.properties.typ
  }
    return f
  },
  un_unmik_bndl_l: f => {
    f.tippecanoe = {
      layer: 'bndl',
       maxzoom: 15
    }
    f.properties._source = 'mik'
    delete f.properties['objectid']
  if (f.properties.boundary_type === 'Administrative boundary 2') {
    f.tippecanoe.minzoom = 7
    f.properties.bdytyp = '7'
  } else if (f.properties.boundary_type === 'Administrative boundary 3') {
    f.tippecanoe.minzoom = 9
    f.properties.bdytyp = '10' //tentatively
  } else {
    f.tippecanoe.minzoom = 7
    f.properties.bdytyp = '99' //other
  }
    delete f.properties['boundary_type']
    delete f.properties['boundary_type_code']
    return f
  },
  un_unvmc_igac_bndl_l: f => {
    f.tippecanoe = {
      layer: 'bndl',
      maxzoom: 15
    }
    f.properties._source = 'vmc'
    delete f.properties['objectid']
  if (f.properties.level_ == '7') {
    f.tippecanoe.minzoom = 7
    f.properties.bdytyp = '7'
  } else if (f.properties.level_ == '10') {
    f.tippecanoe.minzoom = 9
    f.properties.bdytyp = '10'
  } else {
    f.tippecanoe.minzoom = 6
    f.properties.bdytyp = f.properties.level_
  }
    return f
  },

 //Hydro
  custom_ne_rivers_lakecentrelines_l: f => {
    f.tippecanoe = {
      layer: 'un_water',
      minzoom: 6,
      maxzoom: 7
    }
    delete f.properties['objectid']
    delete f.properties['strokeweig']
    delete f.properties['featurecla']
    delete f.properties['dissolve']
    delete f.properties['note']
    return f
  },

 //Land Use
  un_glc30_global_lc_ms_a: f => {
    f.tippecanoe = {
      layer: 'landcover',
      minzoom: 6,
      maxzoom: 9
    }
  if (f.properties.gridcode == 20 || f.properties.gridcode == 30 || f.properties.gridcode == 80) {
    delete f.properties['id']
    delete f.properties['objectid']
    return f
  } else {
    return null 
  }
  },
  un_mission_lc_ls_a: f => {
    f.tippecanoe = {
      layer: 'landcover',
      minzoom: 10,
      maxzoom: 15
    }
  if (f.properties.gridcode == 20 || f.properties.gridcode == 30 || f.properties.gridcode == 80) {
    delete f.properties['objectid']
    delete f.properties['landcover']
    return f
  } else {
    return null  
  }
  },
 //Places
  un_global_places_p: f => {
    f.tippecanoe = {
      layer: 'un_place',
      minzoom: 6,
      maxzoom: 15
    }
  if (f.properties.type === 'Town' || f.properties.type === 'Village') {
    f.tippecanoe.minzoom = 7
  } else if (f.properties.type === 'Suburb' || f.properties.type === 'Other Populated Places') {
    f.tippecanoe.minzoom = 11
  } else {
    f.tippecanoe.minzoom = 6 
  }
    delete f.properties['objectid']
    return f
  },
  unmap_popp_p: f => {
    f.tippecanoe = {
      layer: 'un_popp',
      maxzoom: 15
    }

  if (f.properties.cartolb === 'Alofi' ||f.properties.cartolb === 'Avarua' ||f.properties.cartolb === 'Sri Jayewardenepura Kotte' ) {
    return null
  } else if (f.properties.poptyp == 1 || f.properties.poptyp == 2) {
    f.tippecanoe.minzoom = 6 
   return f
  } else if (f.properties.poptyp == 3 && f.properties.scl_id == 10) {
    f.tippecanoe.minzoom = 6
   return f
  } else {
    return null
  } 
  },

//labels
  unmap_phyp_label_06_p: f => {
    f.tippecanoe = {
      layer: 'lab_water',
      minzoom: 6,
      maxzoom: 10
    }
    return f
  },
  unmap_phyp_p: f => {
    f.tippecanoe = {
      layer: 'phyp_label',
      minzoom: 6,
      maxzoom: 15
    }
//edit 2021-01-27 starts
f.properties.display = 0
if (f.properties.type == 4 && !/Sea|Ocean|Gulf/.test(f.properties.name) ){
f.properties.display = 1
}
//edit 2021-01-27 ends
    return f
  },

 unmap_bnda_a1_ap: f => {
    f.tippecanoe = {
      layer: 'bnd_lab1',
      minzoom: 6,
      maxzoom: 8
    }
    f.properties._source = 'hq'
    return f
  },
  unmap_bnda_a2_ap: f => {
    f.tippecanoe = {
      layer: 'bnd_lab2',
      minzoom: 9,
      maxzoom: 15
    }
    f.properties._source = 'hq'
    return f
  },
  custom_unmap_bnda_a1_ap: f => {
    f.tippecanoe = {
      layer: 'bnd_lab1',
      minzoom: 6,
      maxzoom: 8
    }
    f.properties._source = 'c'
    f.properties.adm1nm = f.properties.adm1_name
    delete f.properties['adm1_name']
    return f
  },
  custom_unmap_bnda_a2_ap: f => {
    f.tippecanoe = {
      layer: 'bnd_lab2',
      minzoom: 9,
      maxzoom: 15
    }
    f.properties._source = 'c'
    f.properties.adm2nm = f.properties.adm2_name
    delete f.properties['adm2_name']
    return f
  },
  un_unmik_bnda_a2_ap: f => {
    f.tippecanoe = {
      layer: 'mik_bnd_lab2',
      minzoom: 6,
      maxzoom: 8
    }
    return f
  },
  un_unmik_bnda_a3_ap: f => {
    f.tippecanoe = {
      layer: 'mik_bnd_lab3',
      minzoom: 8,
      maxzoom: 15
    }
    return f
  },
  un_unvmc_igac_bnda_a1_departments_ap: f => {
    f.tippecanoe = {
      layer: 'vmc_bnd_lab1',
      minzoom: 7,
      maxzoom: 8
    }
    return f
  },
  un_unvmc_igac_bnda_a2_municipalities_ap: f => {
    f.tippecanoe = {
      layer: 'vmc_bnd_lab2',
      minzoom: 9,
      maxzoom: 10
    }
    return f
  },
  un_unvmc_igac_bnda_a3_rural_units_ap: f => {
    f.tippecanoe = {
      layer: 'vmc_bnd_lab3',
      minzoom: 11,
      maxzoom: 15
    }
    return f
  },
  unmap_bnda05_cty_a: f => {
    f.tippecanoe = {
      layer: 'bnda_cty',
      minzoom: 6,
      maxzoom: 11
    }
    return f
  },
  unmap_bnda_cty_anno_06_p: f => {
    f.tippecanoe = {
      layer: 'lab_cty',
      minzoom: 6,
      maxzoom: 11
    }
    return f
  },
  // 9. POIs
  un_minusca_pois_p: f => {
    f.tippecanoe = {
      layer: 'poi_minusca',
      maxzoom: 15
    }
    switch (f.properties.feat_class) {
      //Large airport
      case 'Airport':
         f.tippecanoe.minzoom = 7
        break
      //public
      case 'NGO':
      case 'Police':
      case 'Embassy':
      case 'Consulate':
      case 'Local Authority':
      case 'International Organisation':
      case 'Public Place':
      case 'National Institution':
      case 'Regional Organisation':
      case 'Library':
      case 'Youth Centre':
      case 'Social Centre':
      case 'Military Camp':
         f.tippecanoe.minzoom = 11
        break
      //transport1
      case 'Boat Ramp':
         f.tippecanoe.minzoom = 12
        break
      //service1
      case 'Hospital':
      case 'Health Centre':
      case 'University & College':
      case 'Kindergarten':
      case 'Primary School':
      case 'Secondary School':
      case 'Hotel':
         f.tippecanoe.minzoom = 13
        break
      //worship
      case 'Church':
      case 'Mosque':
         f.tippecanoe.minzoom = 13
        break
      //traffic
      case 'Fuel Station':
         f.tippecanoe.minzoom = 14
        break
/*
      //service2
      case 'Club':
      case 'Restaurant':
         f.tippecanoe.minzoom = 15
        break
      //heritage
      case 'Cemetery':
      case 'Landmark':
         f.tippecanoe.minzoom = 15
        break
      //other
      case 'Market':
      case 'Super Market':	
      case 'Bank':
      case 'RadioTower':
      case 'Telecommunication':
      case 'Stadium':
      case 'Zoo':
         f.tippecanoe.minzoom = 15
        break
*/
     default:
        f.tippecanoe.minzoom = 15
    }
    return f
  },
  un_global_pois_p: f => {
    f.tippecanoe = {
      layer: 'un_poi',
      maxzoom: 15
    }
    switch (f.properties.type) {
      //Large airport
      case 'Airport':
         f.tippecanoe.minzoom = 7
        break
      //transport1(big)
      case 'Airfield':
      case 'Helipad':
         f.tippecanoe.minzoom = 10
        break
      //public
      case 'NGO':
      case 'UN':
      case 'Post Office':
      case 'Fire Station':
      case 'Prison':
      case 'Police Station':
      case 'Courthouse':
      case 'Embassy':
      case 'Town Hall':
      case 'Other Public Building':
      case 'Military':
         f.tippecanoe.minzoom = 11
        break
      //transport1(small)
      case 'Taxi Station':
      case 'Ferry Terminal':
      case 'Port':
      case 'Bus Station':
      case 'Railway Station':
         f.tippecanoe.minzoom = 12
        break
      //service1
      case 'Hospital':
      case 'University':
      case 'College':
      case 'School':
      case 'Hotel':
         f.tippecanoe.minzoom = 13
        break
      //worship
      case 'Christian':
      case 'Muslim':
         f.tippecanoe.minzoom = 13
        break
      //traffic
      case 'Fuel':
         f.tippecanoe.minzoom = 14
        break
     default:
        f.tippecanoe.minzoom = 15
    }
    return f
  }
}
module.exports = (f) => {
  return postProcess(lut[f.properties._table](preProcess(f)))
}


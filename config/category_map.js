
const mapping = {
  'aerialway': {
    '*':                        ['gandola'],
  },

  'aeroway': {
    'airport':                  ['airport'],
    'aerodrome':                ['airport'],
  },

  'amenity': {

    // Sustenance
    'bar':                    ['bar'],
    'biergarten':             ['bar'],
    'cafe':                   ['cafe'],
    'fast_food':              ['restaurant'],
    'food_court':             ['food_court'],
    'ice_cream':              ['ice_cream'],
    'pub':                    ['bar'],
    'restaurant':             ['restaurant'],

    // Education
    'college':                ['college'],
    'dancing_school':         ['dancing_school'],
    'driving_school':         ['driving_school'],
    'first_aid_school':       ['first_aid_school'],
    'kindergarten':           ['kindergarten'],
    'language_school':        ['language_school'],
    'library':                ['library'],
    'music_school':           ['music_school'],
    'school':                 ['school'],
    'university':             ['university'],

    // Transportation
    'bicycle_rental':         ['bicycle_rental'],
    'boat_rental':            ['boat_rental'],
    'bus_station':            ['bus_station'],
    'car_rental':             ['car_rental'],
    'car_wash':               ['car_wash'],
    'charging_station':       ['charging_station'],
    'ferry_terminal':         ['ferry_terminal'],
    'fuel':                   ['gas_station'],
    'parking':                ['parking'],
    'taxi':                   ['taxi_stand'],

    // Financial
    'atm':                    ['atm'],
    'bank':                   ['bank'],
    'bureau_de_change':       ['currency_exchange'],
    'money_transfer':         ['money_transfer'],

    //Healthcare
    'clinic':                 ['doctor'],
    'dentist':                ['dentist'],
    'doctors':                ['doctor'],
    'hospital':               ['hospital'],
    'nursing_home':           ['hospital'],
    'pharmacy':               ['pharmacy', 'drugstore'],
    'veterinary':             ['veterinary_care'],

    // Entertainment, Arts & Culture
    'arts_centre':            ['arts_centre'],
    'brothel':                ['brothel'],
    'casino':                 ['casino'],
    'cinema':                 ['movie_theater'],
    'community_centre':       ['community_centre'],
    'nightclub':              ['night_club'],
    'planetarium':            ['planetarium'],
    'stripclub':              ['stripclub'],
    'theatre':                ['theatre'],

    //Public Service
    'courthouse':             ['courthouse'],
    'fire_station':           ['fire_station'],
    'police':                 ['police'],
    'post_office':            ['post_office'],
    'prison':                 ['prison'],
    'townhall':               ['city_hall'],

    //Others

    'animal_boarding':        ['animal_boarding'],
    'animal_breeding':        ['animal_breeding'],
    'animal_shelter':         ['animal_shelter'],
    'crematorium':            ['funeral_home'],
    'funeral_hall':           ['funeral_home'],
    'grave_yard':             ['cemetery'],
    'internet_cafe':          ['internet_cafe'],
    'monastery':              ['monastery'],
    'mortuary':               ['funeral_home'],
    'place_of_mourning':      ['funeral_home'],
    'public_bath':            ['public_bath']
  },

  'building': {
    //Accommodation
    'apartments':             ['apartments'],
    'barracks':               ['barracks'],
    'hotel':                  ['lodging'],

    //Religious
    'cathedral':              ['cathedral'],
    'church':                 ['church'],
    'mosque':                 ['mosque'],
    'synagogue':              ['synagogue'],
    'gurdwara':               ['religion_sikhreligion_sikh'],

    //Sports
    'stadium':                ['stadium'],
    'sports_centre':          ['sports_centre'],

    //Cars
    'parking':                ['parking'],
  },

  'beauty': {
    'spa':        ["spa"]
  },

  'cuisine': {

    '*':                        ['restaurant'],

    "afghan":   ["afghan_restaurant"],
    "african":   ["african_restaurant"],
    "american":   ["american_restaurant"],
    "arab":   ["arab_restaurant"],
    "argentinian":   ["argentinian_restaurant"],
    "armenian":   ["armenian_restaurant"],
    "asian":   ["asian_restaurant"],
    "australian":   ["australian_restaurant"],
    "austrian":   ["austrian_restaurant"],
    "balkan":   ["balkan_restaurant"],
    "bangladeshi":   ["bangladeshi_restaurant"],
    "basque":   ["basque_restaurant"],
    "bavarian":   ["bavarian_restaurant"],
    "belgian":   ["belgian_restaurant"],
    "bolivian":   ["bolivian_restaurant"],
    "brazilian":   ["brazilian_restaurant"],
    "british":   ["british_restaurant"],
    "bulgarian":   ["bulgarian_restaurant"],
    "cajun":   ["cajun_restaurant"],
    "cambodian":   ["cambodian_restaurant"],
    "cantonese":   ["cantonese_restaurant"],
    "caribbean":   ["caribbean_restaurant"],
    "chinese":   ["chinese_restaurant"],
    "colombian":   ["colombian_restaurant"],
    "croatian":   ["croatian_restaurant"],
    "cuban":   ["cuban_restaurant"],
    "czech":   ["czech_restaurant"],
    "danish":   ["danish_restaurant"],
    "dutch":   ["dutch_restaurant"],
    "egyptian":   ["egyptian_restaurant"],
    "ethiopian":   ["ethiopian_restaurant"],
    "european":   ["european_restaurant"],
    "filipino":   ["filipino_restaurant"],
    "french":   ["french_restaurant"],
    "georgian":   ["georgian_restaurant"],
    "german":   ["german_restaurant"],
    "greek":   ["greek_restaurant"],
    "hawaiian":   ["hawaiian_restaurant"],
    "hungarian":   ["hungarian_restaurant"],
    "indian":   ["indian_restaurant"],
    "indonesian":   ["indonesian_restaurant"],
    "irish":   ["irish_restaurant"],
    "italian":   ["italian_restaurant"],
    "jamaican":   ["jamaican_restaurant"],
    "japanese":   ["japanese_restaurant"],
    "jewish":   ["jewish_restaurant"],
    "korean":   ["korean_restaurant"],
    "lao":   ["lao_restaurant"],
    "latin_american":   ["latin_american_restaurant"],
    "lebanese":   ["lebanese_restaurant"],
    "malagasy":   ["malagasy_restaurant"],
    "malaysian":   ["malaysian_restaurant"],
    "mediterranean":   ["mediterranean_restaurant"],
    "mexican":   ["mexican_restaurant"],
    "middle_eastern":   ["middle_eastern_restaurant"],
    "mongolian":   ["mongolian_restaurant"],
    "moroccan":   ["moroccan_restaurant"],
    "nepalese":   ["nepalese_restaurant"],
    "oriental":   ["oriental_restaurant"],
    "pakistani":   ["pakistani_restaurant"],
    "persian":   ["persian_restaurant"],
    "peruvian":   ["peruvian_restaurant"],
    "polish":   ["polish_restaurant"],
    "portuguese":   ["portuguese_restaurant"],
    "romanian":   ["romanian_restaurant"],
    "russian":   ["russian_restaurant"],
    "salvadoran":   ["salvadoran_restaurant"],
    "senegalese":   ["senegalese_restaurant"],
    "serbian":   ["serbian_restaurant"],
    "singaporean":   ["singaporean_restaurant"],
    "south_indian":   ["south_indian_restaurant"],
    "southern":   ["southern_restaurant"],
    "spanish":   ["spanish_restaurant"],
    "sri_lankan":   ["sri_lankan_restaurant"],
    "swedish":   ["swedish_restaurant"],
    "swiss":   ["swiss_restaurant"],
    "syrian":   ["syrian_restaurant"],
    "taiwanese":   ["taiwanese_restaurant"],
    "tex-mex":   ["tex-mex_restaurant"],
    "thai":   ["thai_restaurant"],
    "tibetan":   ["tibetan_restaurant"],
    "tunisian":   ["tunisian_restaurant"],
    "turkish":   ["turkish_restaurant"],
    "ukrainian":   ["ukrainian_restaurant"],
    "uzbek":   ["uzbek_restaurant"],
    "venezuelan":   ["venezuelan_restaurant"],
    "vietnamese":   ["vietnamese_restaurant"],
    "western":   ["western_restaurant"],

    "bakery": ["cuisine_bakery"],
    "bar&grill": ["cuisine_bar&grill"],
    "barbecue": ["cuisine_barbecue"],
    "basque_ciderhouse": ["cuisine_basque_ciderhouse"],
    "bistro": ["cuisine_bistro"],
    "brasserie": ["cuisine_brasserie"],
    "breakfast": ["cuisine_breakfast"],
    "brunch": ["cuisine_brunch"],
    "buffet": ["cuisine_buffet"],
    "buschenschank": ["cuisine_buschenschank"],
    "cafe": ["cuisine_cafe"],
    "deli": ["cuisine_deli"],
    "dessert": ["cuisine_dessert"],
    "diner": ["cuisine_diner"],
    "fast_food": ["cuisine_fast_food"],
    "fine_dining": ["cuisine_fine_dining"],
    "fried_food": ["cuisine_fried_food"],
    "friture": ["cuisine_friture"],
    "fusion": ["cuisine_fusion"],
    "grill": ["cuisine_grill"],
    "heuriger": ["cuisine_heuriger"],
    "international": ["cuisine_international"],
    "local": ["cuisine_local"],
    "lunch": ["cuisine_lunch"],
    "mongolian_grill": ["cuisine_mongolian_grill"],
    "pub": ["cuisine_pub"],
    "regional": ["cuisine_regional"],
    "snack": ["cuisine_snack"],
    "steak_house": ["cuisine_steak_house"],
    "tapas": ["cuisine_tapas"],
    "yakiniku": ["cuisine_yakiniku"],

    "açaí": ["cuisine_açaí"],
    "arepa": ["cuisine_arepa"],
    "bagel": ["cuisine_bagel"],
    "beef": ["cuisine_beef"],
    "beef_bowl": ["cuisine_beef_bowl"],
    "beef_noodle": ["cuisine_beef_noodle"],
    "bubble_tea": ["cuisine_bubble_tea"],
    "burger": ["cuisine_burger"],
    "cachapa": ["cuisine_cachapa"],
    "cake": ["cuisine_cake"],
    "chicken": ["cuisine_chicken"],
    "chili": ["cuisine_chili"],
    "chocolate": ["cuisine_chocolate"],
    "churro": ["cuisine_churro"],
    "coffee_shop": ["cuisine_coffee_shop"],
    "couscous": ["cuisine_couscous"],
    "crepe": ["cuisine_crepe"],
    "curry": ["cuisine_curry"],
    "donut": ["cuisine_donut"],
    "dumpling": ["cuisine_dumpling"],
    "empanada": ["cuisine_empanada"],
    "falafel": ["cuisine_falafel"],
    "fish": ["cuisine_fish"],
    "fish_and_chips": ["cuisine_fish_and_chips"],
    "fondue": ["cuisine_fondue"],
    "fried_chicken": ["cuisine_fried_chicken"],
    "fries": ["cuisine_fries"],
    "frozen_yogurt": ["cuisine_frozen_yogurt"],
    "gyoza": ["cuisine_gyoza"],
    "gyros": ["cuisine_gyros"],
    "hot_dog": ["cuisine_hot_dog"],
    "hotpot": ["cuisine_hotpot"],
    "ice_cream": ["cuisine_ice_cream"],
    "juice": ["cuisine_juice"],
    "kebab": ["cuisine_kebab"],
    "meat": ["cuisine_meat"],
    "noodle": ["cuisine_noodle"],
    "pancake": ["cuisine_pancake"],
    "pasta": ["cuisine_pasta"],
    "pastry": ["cuisine_pastry"],
    "piadina": ["cuisine_piadina"],
    "pie": ["cuisine_pie"],
    "pita": ["cuisine_pita"],
    "pizza": ["cuisine_pizza"],
    "poke": ["cuisine_poke"],
    "potato": ["cuisine_potato"],
    "pretzel": ["cuisine_pretzel"],
    "ramen": ["cuisine_ramen"],
    "salad": ["cuisine_salad"],
    "sandwich": ["cuisine_sandwich"],
    "sausage": ["cuisine_sausage"],
    "savory_pancakes": ["cuisine_savory_pancakes"],
    "seafood": ["cuisine_seafood"],
    "shawarma": ["cuisine_shawarma"],
    "smoothie": ["cuisine_smoothie"],
    "smørrebrød": ["cuisine_smørrebrød"],
    "soba": ["cuisine_soba"],
    "soup": ["cuisine_soup"],
    "souvlaki": ["cuisine_souvlaki"],
    "steak": ["cuisine_steak"],
    "sushi": ["cuisine_sushi"],
    "tacos": ["cuisine_tacos"],
    "takoyaki": ["cuisine_takoyaki"],
    "tea": ["cuisine_tea"],
    "udon": ["cuisine_udon"],
    "waffle": ["cuisine_waffle"],
    "wings": ["cuisine_wings"],
    "yakitori": ["cuisine_yakitori"],
  },

  'craft': {

    "agricultural_engines": ["craft_agricultural_engines"],
    "atelier": ["craft_atelier"],
    "bag_repair": ["craft_bag_repair"],
    "bakery": ["craft_bakery"],
    "basket_maker": ["craft_basket_maker"],
    "beekeeper": ["craft_beekeeper"],
    "blacksmith": ["craft_blacksmith"],
    "boatbuilder": ["craft_boatbuilder"],
    "bookbinder": ["craft_bookbinder"],
    "brewery": ["craft_brewery"],
    "builder": ["craft_builder"],
    "cabinet_maker": ["craft_cabinet_maker"],
    "candlemaker": ["craft_candlemaker"],
    "car_painter": ["craft_car_painter"],
    "carpenter": ["craft_carpenter"],
    "carpet_cleaner": ["craft_carpet_cleaner"],
    "carpet_layer": ["craft_carpet_layer"],
    "caterer": ["craft_caterer"],
    "chimney_sweeper": ["craft_chimney_sweeper"],
    "cleaning": ["craft_cleaning"],
    "clockmaker": ["craft_clockmaker"],
    "confectionery": ["craft_confectionery"],
    "cooper": ["craft_cooper"],
    "dental_technician": ["craft_dental_technician"],
    "distillery": ["craft_distillery"],
    "door_construction": ["craft_door_construction"],
    "dressmaker": ["craft_dressmaker"],
    "electrician": ["craft_electrician"],
    "electronics_repair": ["craft_electronics_repair"],
    "elevator": ["craft_elevator"],
    "embroiderer": ["craft_embroiderer"],
    "engraver": ["craft_engraver"],
    "fence_maker": ["craft_fence_maker"],
    "floorer": ["craft_floorer"],
    "gardener": ["craft_gardener"],
    "glassblower": ["craft_glassblower"],
    "glaziery": ["craft_glaziery"],
    "goldsmith": ["craft_goldsmith"],
    "grinding_mill": ["craft_grinding_mill"],
    "handicraft": ["craft_handicraft"],
    "hvac": ["craft_hvac"],
    "insulation": ["craft_insulation"],
    "interior_decorator": ["craft_interior_decorator"],
    "interior_work": ["craft_interior_work"],
    "jeweller": ["craft_jeweller"],
    "joiner": ["craft_joiner"],
    "key_cutter": ["craft_key_cutter"],
    "laboratory": ["craft_laboratory"],
    "lapidary": ["craft_lapidary"],
    "leather": ["craft_leather"],
    "locksmith": ["craft_locksmith"],
    "luthier": ["craft_luthier"],
    "metal_construction": ["craft_metal_construction"],
    "mint": ["craft_mint"],
    "musical_instrument": ["craft_musical_instrument"],
    "oil_mill": ["craft_oil_mill"],
    "optician": ["craft_optician"],
    "organ_builder": ["craft_organ_builder"],
    "painter": ["craft_painter"],
    "parquet_layer": ["craft_parquet_layer"],
    "paver": ["craft_paver"],
    "pest_control": ["craft_pest_control"],
    "photographer": ["craft_photographer"],
    "photographic_laboratory": ["craft_photographic_laboratory"],
    "paperhanger": ["craft_paperhanger"],
    "pest_control": ["craft_pest_control"],
    "photovoltaic": ["craft_photovoltaic"],
    "piano_tuner": ["craft_piano_tuner"],
    "plasterer": ["craft_plasterer"],
    "plumber": ["craft_plumber"],
    "pottery": ["craft_pottery"],
    "printer": ["craft_printer"],
    "printmaker": ["craft_printmaker"],
    "restoration": ["craft_restoration"],
    "rigger": ["craft_rigger"],
    "roofer": ["craft_roofer"],
    "saddler": ["craft_saddler"],
    "sailmaker": ["craft_sailmaker"],
    "sawmill": ["craft_sawmill"],
    "scaffolder": ["craft_scaffolder"],
    "sculptor": ["craft_sculptor"],
    "shoemaker": ["craft_shoemaker"],
    "signmaker": ["craft_signmaker"],
    "stand_builder": ["craft_stand_builder"],
    "stonemason": ["craft_stonemason"],
    "stove_fitter": ["craft_stove_fitter"],
    "sun_protection": ["craft_sun_protection"],
    "tailor": ["craft_tailor"],
    "tatami": ["craft_tatami"],
    "tiler": ["craft_tiler"],
    "tinsmith": ["craft_tinsmith"],
    "toolmaker": ["craft_toolmaker"],
    "turner": ["craft_turner"],
    "upholsterer": ["craft_upholsterer"],
    "watchmaker": ["craft_watchmaker"],
    "water_well_drilling": ["craft_water_well_drilling"],
    "weaver": ["craft_weaver"],
    "welder": ["craft_welder"],
    "window_construction": ["craft_window_construction"],
    "winery": ["craft_winery"],
  },

  'office': {
    "accountant": ["office_accountant"],
    "advertising_agency": ["office_advertising_agency"],
    "architect": ["office_architect"],
    "chamber": ["office_chamber"],
    "charity": ["office_charity"],
    "construction_company": ["office_construction_company"],
    "consulting": ["office_consulting"],
    "courier": ["office_courier"],
    "coworking": ["office_coworking"],
    "diplomatic": ["office_diplomatic"],
    "employment_agency": ["office_employment_agency"],
    "engineer": ["office_engineer"],
    "estate_agent": ["office_estate_agent"],
    "financial": ["office_financial"],
    "financial_advisor": ["office_financial_advisor"],
    "forestry": ["office_forestry"],
    "geodesist": ["office_geodesist"],
    "graphic_design": ["office_graphic_design"],
    "guide": ["office_guide"],
    "harbour_master": ["office_harbour_master"],
    "insurance": ["office_insurance"],
    "it": ["office_it"],
    "lawyer": ["office_lawyer"],
    "logistics": ["office_logistics"],
    "mortgage_broker": ["office_mortgage"],
    "mortgage": ["office_mortgage"],
    "moving_company": ["office_moving_company"],
    "newspaper": ["office_newspaper"],
    "ngo": ["office_ngo"],
    "notary": ["office_notary"],
    "property_management": ["office_property_management"],
    "publisher": ["office_publisher"],
    "security": ["office_security"],
    "surveyor": ["office_surveyor"],
    "tax_advisor": ["office_tax_advisor"],
    "therapist": ["office_therapist"],
    "travel_agent": ["office_travel_agent"],
    "tutoring": ["office_tutoring"],
    "visa": ["office_visa"],
  }, 

  'industrial': {
    'trucking': ["industrial_trucking"],
    'machine_shop': ["industrial_machine_shop"],
  }, 

  'highway': {
    'bus_stop':         ["bus_stop"]
  },

  'railway': {
    'station':         ["railway_station"],
    'tram_stop':        ["tram_stop"]
  },

  'leisure': {
    "adult_gaming_centre": ["leisure_adult_gaming_centre"],
    "amusement_arcade": ["leisure_amusement_arcade"],
    "bandstand": ["leisure_bandstand"],
    "bathing_place": ["leisure_bathing_place"],
    "beach_resort": ["leisure_beach_resort"],
    "bird_hide": ["leisure_bird_hide"],
    "bowling_alley": ["leisure_bowling_alley"],
    "dance": ["leisure_dance"],
    "disc_golf_course": ["leisure_disc_golf_course"],
    "dog_park": ["leisure_dog_park"],
    "escape_game": ["leisure_escape_game"],
    "fitness_centre": ["leisure_fitness_centre"],
    "garden": ["leisure_garden"],
    "golf_course": ["leisure_golf_course"],
    "hackerspace": ["leisure_hackerspace"],
    "horse_riding": ["leisure_horse_riding"],
    "ice_rink": ["leisure_ice_rink"],
    "marina": ["leisure_marina"],
    "miniature_golf": ["leisure_miniature_golf"],
    "nature_reserve": ["leisure_nature_reserve"],
    "park": ["leisure_park"],
    "pitch": ["leisure_pitch"],
    "playground": ["leisure_playground"],
    "resort": ["leisure_resort"],
    "sauna": ["leisure_sauna"],
    "slipway": ["leisure_slipway"],
    "sports_centre": ["leisure_sports_centre"],
    "sports_hall": ["leisure_sports_hall"],
    "stadium": ["leisure_stadium"],
    "summer_camp": ["leisure_summer_camp"],
    "swimming_area": ["leisure_swimming_area"],
    "swimming_pool": ["leisure_swimming_pool"],
    "tanning_salon": ["leisure_tanning_salon"],
    "track": ["leisure_track"],
    "trampoline_park": ["leisure_trampoline_park"],
    "water_park": ["leisure_water_park", "theme_park"],
    "wildlife_hide": ["leisure_wildlife_hide"],
  },

  'tourism': {
    "*": ["tourist_attraction"],
    "alpine_hut": ["tourism_alpine_hut"],
    "apartment": ["lodging"],
    "aquarium": ["tourism_aquarium"],
    "camp_pitch": ["tourism_camp_pitch"],
    "camp_site": ["tourism_camp_site"],
    "caravan_site": ["tourism_caravan_site"],
    "chalet": ["tourism_chalet"],
    "gallery": ["tourism_gallery"],
    "guest_house": ["tourism_guest_house"],
    "hostel": ["tourism_hostel"],
    "hotel": ["lodging"],
    "information": ["tourism_information"],
    "motel": ["lodging"],
    "museum": ["tourism_museum"],
    "picnic_site": ["tourism_picnic_site"],
    "theme_park": ["tourism_theme_park"],
    "viewpoint": ["tourism_viewpoint"],
    "wilderness_hut": ["tourism_wilderness_hut"],
    "zoo": ["tourism_zoo"],
  },

  'shop': {
    "*": ["store"],

    "alcohol": ["shop_alcohol"],
    "bakery": ["shop_bakery"],
    "beverages": ["shop_beverages"],
    "brewing_supplies": ["shop_brewing_supplies"],
    "butcher": ["shop_butcher"],
    "cheese": ["shop_cheese"],
    "chocolate": ["shop_chocolate"],
    "coffee": ["shop_coffee"],
    "confectionery": ["shop_confectionery"],
    "convenience": ["shop_convenience"],
    "dairy": ["shop_dairy"],
    "deli": ["shop_deli"],
    "farm": ["shop_farm"],
    "frozen_food": ["shop_frozen_food"],
    "greengrocer": ["grocery_store"],
    "health_food": ["shop_health_food"],
    "ice_cream": ["shop_ice_cream"],
    "nuts": ["shop_nuts"],
    "pasta": ["shop_pasta"],
    "pastry": ["shop_pastry"],
    "seafood": ["shop_seafood"],
    "spices": ["shop_spices"],
    "tea": ["shop_tea"],
    "wine": ["shop_wine"],
    "department_store": ["shop_department_store"],
    "general": ["shop_general"],
    "kiosk": ["shop_kiosk"],
    "mall": ["shop_mall"],
    "supermarket": ["shop_supermarket"],
    "wholesale": ["shop_wholesale"],
    "baby_goods": ["shop_baby_goods"],
    "bag": ["shop_bag"],
    "boutique": ["shop_boutique"],
    "clothes": ["clothing_store"],
    "fabric": ["shop_fabric"],
    "fashion": ["clothing_store"],
    "fashion_accessories": ["shop_fashion_accessories"],
    "jewelry": ["shop_jewelry"],
    "leather": ["shop_leather"],
    "sewing": ["shop_sewing"],
    "shoes": ["shop_shoes"],
    "shoe_repair": ["shop_shoe_repair"],
    "tailor": ["shop_tailor"],
    "watches": ["shop_watches"],
    "wool": ["shop_wool"],
    "charity": ["shop_charity"],
    "second_hand": ["shop_second_hand"],
    "variety_store": ["shop_variety_store"],
    "beauty": ["shop_beauty"],
    "chemist": ["shop_chemist"],
    "cosmetics": ["shop_cosmetics"],
    "erotic": ["shop_erotic"],
    "hairdresser": ["shop_hairdresser"],
    "hairdresser_supply": ["shop_hairdresser_supply"],
    "hearing_aids": ["shop_hearing_aids"],
    "herbalist": ["shop_herbalist"],
    "massage": ["shop_massage"],
    "medical_supply": ["shop_medical_supply"],
    "nutrition_supplements": ["shop_nutrition_supplements"],
    "optician": ["shop_optician"],
    "perfumery": ["shop_perfumery"],
    "tattoo": ["shop_tattoo"],
    "agrarian": ["shop_agrarian"],
    "appliance": ["shop_appliance"],
    "bathroom_furnishing": ["shop_bathroom_furnishing"],
    "country_store": ["shop_country_store"],
    "doityourself": ["shop_doityourself"],
    "electrical": ["shop_electrical"],
    "energy": ["shop_energy"],
    "fireplace": ["shop_fireplace"],
    "florist": ["shop_florist"],
    "garden_centre": ["shop_garden_centre"],
    "garden_furniture": ["shop_garden_furniture"],
    "gas": ["shop_gas"],
    "glaziery": ["shop_glaziery"],
    "groundskeeping": ["shop_groundskeeping"],
    "hardware": ["shop_hardware"],
    "houseware": ["shop_houseware"],
    "locksmith": ["shop_locksmith"],
    "paint": ["shop_paint"],
    "pottery": ["shop_pottery"],
    "security": ["shop_security"],
    "tool_hire": ["shop_tool_hire"],
    "antiques": ["shop_antiques"],
    "bed": ["shop_bed"],
    "candles": ["shop_candles"],
    "carpet": ["shop_carpet"],
    "curtain": ["shop_curtain"],
    "doors": ["shop_doors"],
    "flooring": ["shop_flooring"],
    "furniture": ["shop_furniture"],
    "household_linen": ["shop_household_linen"],
    "interior_decoration": ["shop_interior_decoration"],
    "kitchen": ["shop_kitchen"],
    "lighting": ["shop_lighting"],
    "tiles": ["shop_tiles"],
    "window_blind": ["shop_window_blind"],
    "computer": ["shop_computer"],
    "electronics": ["shop_electronics"],
    "hifi": ["shop_hifi"],
    "mobile_phone": ["shop_mobile_phone"],
    "printer_ink": ["shop_printer_ink"],
    "radiotechnics": ["shop_radiotechnics"],
    "vacuum_cleaner": ["shop_vacuum_cleaner"],
    "atv": ["shop_atv"],
    "bicycle": ["shop_bicycle"],
    "boat": ["shop_boat"],
    "car": ["shop_car"],
    "car_parts": ["shop_car_parts"],
    "car_repair": ["shop_car_repair"],
    "caravan": ["shop_caravan"],
    "fishing": ["shop_fishing"],
    "fuel": ["shop_fuel"],
    "golf": ["shop_golf"],
    "hunting": ["shop_hunting"],
    "military_surplus": ["shop_military_surplus"],
    "motorcycle": ["shop_motorcycle"],
    "motorcycle_repair": ["shop_motorcycle_repair"],
    "outdoor": ["shop_outdoor"],
    "scuba_diving": ["shop_scuba_diving"],
    "ski": ["shop_ski"],
    "snowmobile": ["shop_snowmobile"],
    "sports": ["shop_sports"],
    "surf": ["shop_surf"],
    "swimming_pool": ["shop_swimming_pool"],
    "trailer": ["shop_trailer"],
    "truck": ["shop_truck"],
    "tyres": ["shop_tyres"],
    "art": ["shop_art"],
    "camera": ["shop_camera"],
    "collector": ["shop_collector"],
    "craft": ["shop_craft"],
    "frame": ["shop_frame"],
    "games": ["shop_games"],
    "music": ["shop_music"],
    "musical_instrument": ["shop_musical_instrument"],
    "photo": ["shop_photo"],
    "trophy": ["shop_trophy"],
    "video": ["shop_video"],
    "video_games": ["shop_video_games"],
    "anime": ["shop_anime"],
    "books": ["shop_books"],
    "gift": ["shop_gift"],
    "lottery": ["shop_lottery"],
    "newsagent": ["shop_newsagent"],
    "stationery": ["shop_stationery"],
    "ticket": ["shop_ticket"],
    "bookmaker": ["shop_bookmaker"],
    "cannabis": ["shop_cannabis"],
    "copyshop": ["shop_copyshop"],
    "dry_cleaning": ["shop_dry_cleaning"],
    "e-cigarette": ["shop_e-cigarette"],
    "funeral_directors": ["shop_funeral_directors"],
    "laundry": ["shop_laundry"],
    "money_lender": ["shop_money_lender"],
    "outpost": ["shop_outpost"],
    "party": ["shop_party"],
    "pawnbroker": ["shop_pawnbroker"],
    "pest_control": ["shop_pest_control"],
    "pet": ["shop_pet"],
    "pet_grooming": ["shop_pet_grooming"],
    "pyrotechnics": ["shop_pyrotechnics"],
    "religion": ["shop_religion"],
    "storage_rental": ["shop_storage_rental"],
    "tobacco": ["shop_tobacco"],
    "toys": ["shop_toys"],
    "travel_agency": ["office_travel_agent"],
    "weapons": ["shop_weapons"],
  },

  'sport': {
    '*':                        ['recreation'],
    "9pin": ["sport_9pin"],
    "10pin": ["sport_10pin"],
    "aerobics": ["sport_aerobics"],
    "american_football": ["sport_american_football"],
    "aikido": ["sport_aikido"],
    "archery": ["sport_archery"],
    "athletics": ["sport_athletics"],
    "australian_football": ["sport_australian_football"],
    "badminton": ["sport_badminton"],
    "bandy": ["sport_bandy"],
    "baseball": ["sport_baseball"],
    "basketball": ["sport_basketball"],
    "beachvolleyball": ["sport_beachvolleyball"],
    "biathlon": ["sport_biathlon"],
    "billiards": ["sport_billiards"],
    "bmx": ["sport_bmx"],
    "bobsleigh": ["sport_bobsleigh"],
    "boules": ["sport_boules"],
    "boxing": ["sport_boxing"],
    "bullfighting": ["sport_bullfighting"],
    "canadian_football": ["sport_canadian_football"],
    "cliff_diving": ["sport_cliff_diving"],
    "climbing": ["sport_climbing"],
    "climbing_adventure": ["sport_climbing_adventure"],
    "cockfighting": ["sport_cockfighting"],
    "cricket": ["sport_cricket"],
    "crossfit": ["sport_crossfit"],
    "croquet": ["sport_croquet"],
    "curling": ["sport_curling"],
    "cycle_polo": ["sport_cycle_polo"],
    "cycling": ["sport_cycling"],
    "darts": ["sport_darts"],
    "dog_agility": ["sport_dog_agility"],
    "dog_racing": ["sport_dog_racing"],
    "dragon_boat": ["sport_dragon_boat"],
    "equestrian": ["sport_equestrian"],
    "fencing": ["sport_fencing"],
    "field_hockey": ["sport_field_hockey"],
    "fitness": ["sport_fitness"],
    "floorball": ["sport_floorball"],
    "four_square": ["sport_four_square"],
    "football": ["sport_football"],
    "free_flying": ["sport_free_flying"],
    "futsal": ["sport_futsal"],
    "gaelic_games": ["sport_gaelic_games"],
    "gymnastics": ["sport_gymnastics"],
    "handball": ["sport_handball"],
    "hapkido": ["sport_hapkido"],
    "hiking": ["sport_hiking"],
    "hockey": ["sport_hockey"],
    "horse_racing": ["sport_horse_racing"],
    "ice_hockey": ["sport_ice_hockey"],
    "ice_skating": ["sport_ice_skating"],
    "judo": ["sport_judo"],
    "karate": ["sport_karate"],
    "karting": ["sport_karting"],
    "kickboxing": ["sport_kickboxing"],
    "kitesurfing": ["sport_kitesurfing"],
    "korfball": ["sport_korfball"],
    "krachtbal": ["sport_krachtbal"],
    "lacrosse": ["sport_lacrosse"],
    "laser_tag": ["sport_laser_tag"],
    "martial_arts": ["sport_martial_arts"],
    "miniature_golf": ["sport_miniature_golf"],
    "motocross": ["sport_motocross"],
    "motor": ["sport_motor"],
    "netball": ["sport_netball"],
    "obstacle_course": ["sport_obstacle_course"],
    "orienteering": ["sport_orienteering"],
    "paddle_tennis": ["sport_paddle_tennis"],
    "paintball": ["sport_paintball"],
    "parachuting": ["sport_parachuting"],
    "paragliding": ["sport_paragliding"],
    "parkour": ["sport_parkour"],
    "pelota": ["sport_pelota"],
    "pesäpallo": ["sport_pesäpallo"],
    "pickleball": ["sport_pickleball"],
    "pilates": ["sport_pilates"],
    "pole_dance": ["sport_pole_dance"],
    "racquet": ["sport_racquet"],
    "rc_car": ["sport_rc_car"],
    "roller_skating": ["sport_roller_skating"],
    "rowing": ["sport_rowing"],
    "rugby_league": ["sport_rugby_league"],
    "rugby_union": ["sport_rugby_union"],
    "running": ["sport_running"],
    "sailing": ["sport_sailing"],
    "scuba_diving": ["sport_scuba_diving"],
    "shooting": ["sport_shooting"],
    "shot-put": ["sport_shot-put"],
    "skateboard": ["sport_skateboard"],
    "ski_jumping": ["sport_ski_jumping"],
    "skiing": ["sport_skiing"],
    "snooker": ["sport_snooker"],
    "soccer": ["sport_soccer"],
    "softball": ["sport_softball"],
    "speedway": ["sport_speedway"],
    "squash": ["sport_squash"],
    "sumo": ["sport_sumo"],
    "surfing": ["sport_surfing"],
    "swimming": ["sport_swimming"],
    "table_tennis": ["sport_table_tennis"],
    "table_soccer": ["sport_table_soccer"],
    "taekwondo": ["sport_taekwondo"],
    "tennis": ["sport_tennis"],
    "teqball": ["sport_teqball"],
    "toboggan": ["sport_toboggan"],
    "trampoline": ["sport_trampoline"],
    "ultralight_aviation": ["sport_ultralight_aviation"],
    "volleyball": ["sport_volleyball"],
    "wakeboarding": ["sport_wakeboarding"],
    "water_polo": ["sport_water_polo"],
    "water_ski": ["sport_water_ski"],
    "weightlifting": ["sport_weightlifting"],
    "windsurfing": ["sport_windsurfing"],
    "wrestling": ["sport_wrestling"],
    "yoga": ["sport_yoga"],
    "zurkhaneh_sport": ["sport_zurkhaneh_sport"],
  },

  'religion': {
    "buddhist": ["religion_buddhist"],
    "christian": ["religion_christian"],
    "hindu": ["religion_hindu"],
    "jain": ["religion_jain"],
    "jewish": ["religion_jewish"],
    "muslim": ["religion_muslim"],
    "pagan": ["religion_pagan"],
    "shinto": ["religion_shinto"],
    "sikh": ["religion_sikh"],
    "taoist": ["religion_taoist"],
    "zoroastrian": ["religion_zoroastrian"],
  },

  'healthcare': {
    "alternative": ["healthcare_alternative"],
    "audiologist": ["healthcare_audiologist"],
    "birthing_centre": ["healthcare_birthing_centre"],
    "blood_bank": ["healthcare_blood_bank"],
    "blood_donation": ["healthcare_blood_donation"],
    "clinic": ["doctor"],
    "community_health_worker": ["healthcare_community_health_worker"],
    "counselling": ["healthcare_counselling"],
    "dentist": ["dentist"],
    "dialysis": ["healthcare_dialysis"],
    "doctor": ["doctor"],
    "hospice": ["healthcare_hospice"],
    "hospital": ["hospital"],
    "laboratory": ["healthcare_laboratory"],
    "midwife": ["healthcare_midwife"],
    "occupational_therapist": ["healthcare_occupational_therapist"],
    "optometrist": ["healthcare_optometrist"],
    "pharmacy": ["pharmacy"],
    "physiotherapist": ["healthcare_physiotherapist"],
    "podiatrist": ["healthcare_podiatrist"],
    "psychotherapist": ["healthcare_psychotherapist"],
    "rehabilitation": ["healthcare_rehabilitation"],
    "sample_collection": ["healthcare_sample_collection"],
    "speech_therapist": ["healthcare_speech_therapist"],
    "vaccination_centre": ["healthcare_vaccination_centre"],
  },

  'healthcare:speciality': {
    "allergology": ["health_s_allergology"],
    "anaesthetics": ["health_s_anaesthetics"],
    "cardiology": ["health_s_cardiology"],
    "cardiothoracic_surgery": ["health_s_cardiothoracic_surgery"],
    "child_psychiatry": ["health_s_child_psychiatry"],
    "community": ["health_s_community"],
    "dermatology": ["health_s_dermatology"],
    "dermatovenereology": ["health_s_dermatovenereology"],
    "diagnostic_radiology": ["health_s_diagnostic_radiology"],
    "emergency": ["health_s_emergency"],
    "endocrinology": ["health_s_endocrinology"],
    "gastroenterology": ["health_s_gastroenterology"],
    "general": ["health_s_general"],
    "geriatrics": ["health_s_geriatrics"],
    "gynaecology": ["health_s_gynaecology"],
    "haematology": ["health_s_haematology"],
    "hepatology": ["health_s_hepatology"],
    "infectious_diseases": ["health_s_infectious_diseases"],
    "intensive": ["health_s_intensive"],
    "internal": ["health_s_internal"],
    "dental_oral_maxillo_facial_surgery": ["health_s_dental_oral_maxillo_facial_surgery"],
    "neonatology": ["health_s_neonatology"],
    "nephrology": ["health_s_nephrology"],
    "neurology": ["health_s_neurology"],
    "neuropsychiatry": ["health_s_neuropsychiatry"],
    "neurosurgery": ["health_s_neurosurgery"],
    "nuclear": ["health_s_nuclear"],
    "occupational": ["health_s_occupational"],
    "oncology": ["health_s_oncology"],
    "ophthalmology": ["health_s_ophthalmology"],
    "orthodontics": ["health_s_orthodontics"],
    "orthopaedics": ["health_s_orthopaedics"],
    "otolaryngology": ["health_s_otolaryngology"],
    "paediatric_surgery": ["health_s_paediatric_surgery"],
    "paediatrics": ["health_s_paediatrics"],
    "palliative": ["health_s_palliative"],
    "pathology": ["health_s_pathology"],
    "physiatry": ["health_s_physiatry"],
    "plastic_surgery": ["health_s_plastic_surgery"],
    "podiatry": ["health_s_podiatry"],
    "proctology": ["health_s_proctology"],
    "psychiatry": ["health_s_psychiatry"],
    "pulmonology": ["health_s_pulmonology"],
    "radiology": ["health_s_radiology"],
    "radiotherapy": ["health_s_radiotherapy"],
    "rheumatology": ["health_s_rheumatology"],
    "stomatology": ["health_s_stomatology"],
    "surgery": ["health_s_surgery"],
    "transplant": ["health_s_transplant"],
    "trauma": ["health_s_trauma"],
    "tropical": ["health_s_tropical"],
    "urology": ["health_s_urology"],
    "vascular_surgery": ["health_s_vascular_surgery"],
    "venereology": ["health_s_venereology"],
    "abortion": ["health_s_abortion"],
    "fertility": ["health_s_fertility"],
    "vaccination": ["health_s_vaccination"],
    "acupuncture": ["health_s_acupuncture"],
    "anthroposophical": ["health_s_anthroposophical"],
    "applied_kinesiology": ["health_s_applied_kinesiology"],
    "aromatherapy": ["health_s_aromatherapy"],
    "ayurveda": ["health_s_ayurveda"],
    "chiropractic": ["health_s_chiropractic"],
    "herbalism": ["health_s_herbalism"],
    "homeopathy": ["health_s_homeopathy"],
    "hydrotherapy": ["health_s_hydrotherapy"],
    "hypnosis": ["health_s_hypnosis"],
    "naturopathy": ["health_s_naturopathy"],
    "osteopathy": ["health_s_osteopathy"],
    "reflexology": ["health_s_reflexology"],
    "reiki": ["health_s_reiki"],
    "shiatsu": ["health_s_shiatsu"],
    "traditional_chinese_medicine": ["health_s_traditional_chinese_medicine"],
    "tuina": ["health_s_tuina"],
    "unani": ["health_s_unani"],
  }

};

module.exports = mapping;

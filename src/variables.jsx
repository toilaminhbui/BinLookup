const countries = [
  {
    value: "all_countries",
    label: "All countries",
  },
  {
    value: "afghanistan",
    label: "Afghanistan",
  },
  {
    value: "albania",
    label: "Albania",
  },
  {
    value: "algeria",
    label: "Algeria",
  },
  {
    value: "american_samoa",
    label: "American Samoa",
  },
  {
    value: "andorra",
    label: "Andorra",
  },
  {
    value: "angola",
    label: "Angola",
  },
  {
    value: "anguilla",
    label: "Anguilla",
  },
  {
    value: "antigua_and_barbuda",
    label: "Antigua And Barbuda",
  },
  {
    value: "argentina",
    label: "Argentina",
  },
  {
    value: "armenia",
    label: "Armenia",
  },
  {
    value: "aruba",
    label: "Aruba",
  },
  {
    value: "australia",
    label: "Australia",
  },
  {
    value: "austria",
    label: "Austria",
  },
  {
    value: "azerbaijan",
    label: "Azerbaijan",
  },
  {
    value: "bahamas",
    label: "Bahamas",
  },
  {
    value: "bahrain",
    label: "Bahrain",
  },
  {
    value: "bangladesh",
    label: "Bangladesh",
  },
  {
    value: "barbados",
    label: "Barbados",
  },
  {
    value: "belarus",
    label: "Belarus",
  },
  {
    value: "belgium",
    label: "Belgium",
  },
  {
    value: "belize",
    label: "Belize",
  },
  {
    value: "benin",
    label: "Benin",
  },
  {
    value: "bermuda",
    label: "Bermuda",
  },
  {
    value: "bhutan",
    label: "Bhutan",
  },
  {
    value: "bolivia,_plurinational_state_of",
    label: "Bolivia, Plurinational State Of",
  },
  {
    value: "bonaire,_sint_eustatius_and_saba",
    label: "Bonaire, Sint Eustatius And Saba",
  },
  {
    value: "bosnia_and_herzegovina",
    label: "Bosnia And Herzegovina",
  },
  {
    value: "botswana",
    label: "Botswana",
  },
  {
    value: "brazil",
    label: "Brazil",
  },
  {
    value: "brunei_darussalam",
    label: "Brunei Darussalam",
  },
  {
    value: "bulgaria",
    label: "Bulgaria",
  },
  {
    value: "burkina_faso",
    label: "Burkina Faso",
  },
  {
    value: "burundi",
    label: "Burundi",
  },
  {
    value: "cabo_verde",
    label: "Cabo Verde",
  },
  {
    value: "cambodia",
    label: "Cambodia",
  },
  {
    value: "cameroon",
    label: "Cameroon",
  },
  {
    value: "canada",
    label: "Canada",
  },
  {
    value: "cape_verde",
    label: "Cape Verde",
  },
  {
    value: "cayman_islands",
    label: "Cayman Islands",
  },
  {
    value: "central_african_republic",
    label: "Central African Republic",
  },
  {
    value: "chad",
    label: "Chad",
  },
  {
    value: "chile",
    label: "Chile",
  },
  {
    value: "china",
    label: "China",
  },
  {
    value: "colombia",
    label: "Colombia",
  },
  {
    value: "comoros",
    label: "Comoros",
  },
  {
    value: "congo",
    label: "Congo",
  },
  {
    value: "congo,_the_democratic_republic_of_the",
    label: "Congo, The Democratic Republic Of The",
  },
  {
    value: "cook_islands",
    label: "Cook Islands",
  },
  {
    value: "costa_rica",
    label: "Costa Rica",
  },
  {
    value: "cote_d'ivoire",
    label: "Cote D'ivoire",
  },
  {
    value: "croatia",
    label: "Croatia",
  },
  {
    value: "cuba",
    label: "Cuba",
  },
  {
    value: "curacao",
    label: "Curacao",
  },
  {
    value: "cyprus",
    label: "Cyprus",
  },
  {
    value: "czech_republic",
    label: "Czech Republic",
  },
  {
    value: "denmark",
    label: "Denmark",
  },
  {
    value: "djibouti",
    label: "Djibouti",
  },
  {
    value: "dominica",
    label: "Dominica",
  },
  {
    value: "dominican_republic",
    label: "Dominican Republic",
  },
  {
    value: "ecuador",
    label: "Ecuador",
  },
  {
    value: "egypt",
    label: "Egypt",
  },
  {
    value: "el_salvador",
    label: "El Salvador",
  },
  {
    value: "equatorial_guinea",
    label: "Equatorial Guinea",
  },
  {
    value: "eritrea",
    label: "Eritrea",
  },
  {
    value: "estonia",
    label: "Estonia",
  },
  {
    value: "eswatini",
    label: "Eswatini",
  },
  {
    value: "ethiopia",
    label: "Ethiopia",
  },
  {
    value: "falkland_islands_(malvinas)",
    label: "Falkland Islands (malvinas)",
  },
  {
    value: "fiji",
    label: "Fiji",
  },
  {
    value: "finland",
    label: "Finland",
  },
  {
    value: "france",
    label: "France",
  },
  {
    value: "french_polynesia",
    label: "French Polynesia",
  },
  {
    value: "gabon",
    label: "Gabon",
  },
  {
    value: "gambia",
    label: "Gambia",
  },
  {
    value: "georgia",
    label: "Georgia",
  },
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "ghana",
    label: "Ghana",
  },
  {
    value: "gibraltar",
    label: "Gibraltar",
  },
  {
    value: "greece",
    label: "Greece",
  },
  {
    value: "grenada",
    label: "Grenada",
  },
  {
    value: "guam",
    label: "Guam",
  },
  {
    value: "guatemala",
    label: "Guatemala",
  },
  {
    value: "guernsey",
    label: "Guernsey",
  },
  {
    value: "guersney",
    label: "Guersney",
  },
  {
    value: "guinea",
    label: "Guinea",
  },
  {
    value: "guinea-bissau",
    label: "Guinea-bissau",
  },
  {
    value: "guyana",
    label: "Guyana",
  },
  {
    value: "haiti",
    label: "Haiti",
  },
  {
    value: "holy_see_(vatican_city_state)",
    label: "Holy See (vatican City State)",
  },
  {
    value: "honduras",
    label: "Honduras",
  },
  {
    value: "hong_kong",
    label: "Hong Kong",
  },
  {
    value: "hungary",
    label: "Hungary",
  },
  {
    value: "iceland",
    label: "Iceland",
  },
  {
    value: "india",
    label: "India",
  },
  {
    value: "indonesia",
    label: "Indonesia",
  },
  {
    value: "iran,_islamic_republic_of",
    label: "Iran, Islamic Republic Of",
  },
  {
    value: "iraq",
    label: "Iraq",
  },
  {
    value: "ireland",
    label: "Ireland",
  },
  {
    value: "isle_of_man",
    label: "Isle Of Man",
  },
  {
    value: "israel",
    label: "Israel",
  },
  {
    value: "italy",
    label: "Italy",
  },
  {
    value: "jamaica",
    label: "Jamaica",
  },
  {
    value: "japan",
    label: "Japan",
  },
  {
    value: "jersey",
    label: "Jersey",
  },
  {
    value: "jordan",
    label: "Jordan",
  },
  {
    value: "kazakhstan",
    label: "Kazakhstan",
  },
  {
    value: "kenya",
    label: "Kenya",
  },
  {
    value: "kiribati",
    label: "Kiribati",
  },
  {
    value: "korea,_democratic_people's_republic_of",
    label: "Korea, Democratic People's Republic Of",
  },
  {
    value: "korea,_republic_of",
    label: "Korea, Republic Of",
  },
  {
    value: "kosovo,_republic_of",
    label: "Kosovo, Republic Of",
  },
  {
    value: "kuwait",
    label: "Kuwait",
  },
  {
    value: "kyrgyzstan",
    label: "Kyrgyzstan",
  },
  {
    value: "lao_people's_democratic_republic",
    label: "Lao People's Democratic Republic",
  },
  {
    value: "latvia",
    label: "Latvia",
  },
  {
    value: "lebanon",
    label: "Lebanon",
  },
  {
    value: "lesotho",
    label: "Lesotho",
  },
  {
    value: "liberia",
    label: "Liberia",
  },
  {
    value: "libya",
    label: "Libya",
  },
  {
    value: "libyan_arab_jamahiriya",
    label: "Libyan Arab Jamahiriya",
  },
  {
    value: "liechtenstein",
    label: "Liechtenstein",
  },
  {
    value: "lithuania",
    label: "Lithuania",
  },
  {
    value: "luxembourg",
    label: "Luxembourg",
  },
  {
    value: "macao",
    label: "Macao",
  },
  {
    value: "macau",
    label: "Macau",
  },
  {
    value: "macedonia,_the_former_yugoslav_republic_of",
    label: "Macedonia, The Former Yugoslav Republic Of",
  },
  {
    value: "madagascar",
    label: "Madagascar",
  },
  {
    value: "malawi",
    label: "Malawi",
  },
  {
    value: "malaysia",
    label: "Malaysia",
  },
  {
    value: "maldives",
    label: "Maldives",
  },
  {
    value: "mali",
    label: "Mali",
  },
  {
    value: "malta",
    label: "Malta",
  },
  {
    value: "marshall_islands",
    label: "Marshall Islands",
  },
  {
    value: "martinique",
    label: "Martinique",
  },
  {
    value: "mauritania",
    label: "Mauritania",
  },
  {
    value: "mauritius",
    label: "Mauritius",
  },
  {
    value: "mayotte",
    label: "Mayotte",
  },
  {
    value: "mexico",
    label: "Mexico",
  },
  {
    value: "micronesia,_federated_states_of",
    label: "Micronesia, Federated States Of",
  },
  {
    value: "moldova,_republic_of",
    label: "Moldova, Republic Of",
  },
  {
    value: "monaco",
    label: "Monaco",
  },
  {
    value: "mongolia",
    label: "Mongolia",
  },
  {
    value: "montenegro",
    label: "Montenegro",
  },
  {
    value: "montserrat",
    label: "Montserrat",
  },
  {
    value: "morocco",
    label: "Morocco",
  },
  {
    value: "mozambique",
    label: "Mozambique",
  },
  {
    value: "myanmar",
    label: "Myanmar",
  },
  {
    value: "namibia",
    label: "Namibia",
  },
  {
    value: "nauru",
    label: "Nauru",
  },
  {
    value: "nepal",
    label: "Nepal",
  },
  {
    value: "netherlands",
    label: "Netherlands",
  },
  {
    value: "netherlands_antilles",
    label: "Netherlands Antilles",
  },
  {
    value: "new_caledonia",
    label: "New Caledonia",
  },
  {
    value: "new_zealand",
    label: "New Zealand",
  },
  {
    value: "nicaragua",
    label: "Nicaragua",
  },
  {
    value: "niger",
    label: "Niger",
  },
  {
    value: "nigeria",
    label: "Nigeria",
  },
  {
    value: "northern_mariana_islands",
    label: "Northern Mariana Islands",
  },
  {
    value: "norway",
    label: "Norway",
  },
  {
    value: "oman",
    label: "Oman",
  },
  {
    value: "pakistan",
    label: "Pakistan",
  },
  {
    value: "palau",
    label: "Palau",
  },
  {
    value: "palestine,_state_of",
    label: "Palestine, State Of",
  },
  {
    value: "palestinian_territory,_occupied",
    label: "Palestinian Territory, Occupied",
  },
  {
    value: "panama",
    label: "Panama",
  },
  {
    value: "papua_new_guinea",
    label: "Papua New Guinea",
  },
  {
    value: "paraguay",
    label: "Paraguay",
  },
  {
    value: "peru",
    label: "Peru",
  },
  {
    value: "philippines",
    label: "Philippines",
  },
  {
    value: "poland",
    label: "Poland",
  },
  {
    value: "portugal",
    label: "Portugal",
  },
  {
    value: "puerto_rico",
    label: "Puerto Rico",
  },
  {
    value: "qatar",
    label: "Qatar",
  },
  {
    value: "reunion",
    label: "Reunion",
  },
  {
    value: "romania",
    label: "Romania",
  },
  {
    value: "russian_federation",
    label: "Russian Federation",
  },
  {
    value: "rwanda",
    label: "Rwanda",
  },
  {
    value: "saint_kitts_and_nevis",
    label: "Saint Kitts And Nevis",
  },
  {
    value: "saint_lucia",
    label: "Saint Lucia",
  },
  {
    value: "saint_vincent_and_the_grenadines",
    label: "Saint Vincent And The Grenadines",
  },
  {
    value: "samoa",
    label: "Samoa",
  },
  {
    value: "san_marino",
    label: "San Marino",
  },
  {
    value: "sao_tome_and_principe",
    label: "Sao Tome And Principe",
  },
  {
    value: "saudi_arabia",
    label: "Saudi Arabia",
  },
  {
    value: "senegal",
    label: "Senegal",
  },
  {
    value: "serbia",
    label: "Serbia",
  },
  {
    value: "seychelles",
    label: "Seychelles",
  },
  {
    value: "sierra_leone",
    label: "Sierra Leone",
  },
  {
    value: "singapore",
    label: "Singapore",
  },
  {
    value: "sint_maarten_(dutch_part)",
    label: "Sint Maarten (dutch Part)",
  },
  {
    value: "slovakia",
    label: "Slovakia",
  },
  {
    value: "slovenia",
    label: "Slovenia",
  },
  {
    value: "solomon_islands",
    label: "Solomon Islands",
  },
  {
    value: "somalia",
    label: "Somalia",
  },
  {
    value: "south_africa",
    label: "South Africa",
  },
  {
    value: "south_sudan",
    label: "South Sudan",
  },
  {
    value: "spain",
    label: "Spain",
  },
  {
    value: "sri_lanka",
    label: "Sri Lanka",
  },
  {
    value: "sudan",
    label: "Sudan",
  },
  {
    value: "suriname",
    label: "Suriname",
  },
  {
    value: "swaziland",
    label: "Swaziland",
  },
  {
    value: "sweden",
    label: "Sweden",
  },
  {
    value: "switzerland",
    label: "Switzerland",
  },
  {
    value: "syrian_arab_republic",
    label: "Syrian Arab Republic",
  },
  {
    value: "taiwan,_province_of_china",
    label: "Taiwan, Province Of China",
  },
  {
    value: "tajikistan",
    label: "Tajikistan",
  },
  {
    value: "tanzania,_united_republic_of",
    label: "Tanzania, United Republic Of",
  },
  {
    value: "thailand",
    label: "Thailand",
  },
  {
    value: "timor-leste",
    label: "Timor-leste",
  },
  {
    value: "togo",
    label: "Togo",
  },
  {
    value: "tonga",
    label: "Tonga",
  },
  {
    value: "trinidad_and_tobago",
    label: "Trinidad And Tobago",
  },
  {
    value: "tunisia",
    label: "Tunisia",
  },
  {
    value: "turkey",
    label: "Turkey",
  },
  {
    value: "turkmenistan",
    label: "Turkmenistan",
  },
  {
    value: "turks_and_caicos_islands",
    label: "Turks And Caicos Islands",
  },
  {
    value: "uganda",
    label: "Uganda",
  },
  {
    value: "ukraine",
    label: "Ukraine",
  },
  {
    value: "united_arab_emirates",
    label: "United Arab Emirates",
  },
  {
    value: "united_kingdom",
    label: "United Kingdom",
  },
  {
    value: "united_states",
    label: "United States",
  },
  {
    value: "united_states_minor_outlying_islands",
    label: "United States Minor Outlying Islands",
  },
  {
    value: "uruguay",
    label: "Uruguay",
  },
  {
    value: "uzbekistan",
    label: "Uzbekistan",
  },
  {
    value: "vanuatu",
    label: "Vanuatu",
  },
  {
    value: "venezuela,_bolivarian_republic_of",
    label: "Venezuela, Bolivarian Republic Of",
  },
  {
    value: "viet_nam",
    label: "Viet Nam",
  },
  {
    value: "virgin_islands,_british",
    label: "Virgin Islands, British",
  },
  {
    value: "virgin_islands,_u.s.",
    label: "Virgin Islands, U.s.",
  },
  {
    value: "yemen",
    label: "Yemen",
  },
  {
    value: "zambia",
    label: "Zambia",
  },
  {
    value: "zimbabwe",
    label: "Zimbabwe",
  },
];

const vendors = [
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "american_express", label: "American Express" },
  { id: "jcb", label: "JCB" },
  { id: "maestro", label: "Maestro" },
  { id: "discover", label: "Discover" },
];

const levels = [
  { id: "business", label: "Business" },
  { id: "world", label: "World" },
  { id: "infinite", label: "Infinite" },
  { id: "gold", label: "Gold" },
  { id: "platinum", label: "Platinum" },
  { id: "signature", label: "Signature" },
  { id: "corporate", label: "Corporate" },
  { id: "classic", label: "Classic" },
  { id: "standard", label: "Standard" },
  { id: "premier", label: "Premier" },
  { id: "fleet", label: "Fleet" },
  { id: "titanium", label: "Titanium" },
  { id: "electron", label: "Electron" },
  { id: "virtual", label: "Virtual" },
  { id: "prepaid", label: "Prepaid" },
  { id: "purchasing", label: "Purchasing" },
];

const types = [
  { id: "credit", label: "Credit" },
  { id: "debit", label: "Debit" },
];

export { countries, vendors, levels, types };

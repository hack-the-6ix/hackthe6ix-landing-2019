export const APPLY = `
    mutation create($app: ApplicantInputPublic!) {
        createApplicant(
            applicant: $app
        ) {
          applicant {
            id
          }
          user_errors {
            message
          }
        }
    }
`;

export const HAS_EMAIL = `
    query hasEmail($email: String!) {
      hasEmail(email: $email)
    }
`;

export const GENDER_ENUM = {
  male: 'Male',
  female: 'Female',
  prefer_not_to_say: 'Prefer not to say',
};

export const YEAR_OF_STUDY_ENUM = {
  highschool: 'High School',
  first_year: 'Undergraduate Year 1',
  second_year: 'Undergraduate Year 2',
  third_year: 'Undergraduate Year 3',
  fourth_year: 'Undergraduate Year 4+',
  graduate_school: 'Gradate School',
  new_grad: 'New Grad',
};

export const PROVINCES_ENUM = {
  AB: 'Alberta',
  BC: 'British Columbia',
  MB: 'Manitoba',
  NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador',
  NS: 'Nova Scotia',
  NT: 'Northwest Territories',
  NU: 'Nunavut',
  ON: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Quebec',
  SK: 'Saskatchewan',
  YT: 'Yukon',
};

export const COUNTRIES_ENUM = {
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua And Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia And Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, The Democratic Republic Of The',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: "Cote D'ivoire",
  HR: 'Croatia',
  CU: 'Cuba',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  TP: 'East Timor',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (malvinas)',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GN: 'Guinea',
  GW: 'Guinea-bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island And Mcdonald Islands',
  VA: 'Holy See (vatican City State)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran, Islamic Republic Of',
  IQ: 'Iraq',
  IE: 'Ireland',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JO: 'Jordan',
  KZ: 'Kazakstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KP: "Korea, Democratic People's Republic Of",
  KR: 'Korea, Republic Of',
  KV: 'Kosovo',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macau',
  MK: 'Macedonia, The Former Yugoslav Republic Of',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia, Federated States Of',
  MD: 'Moldova, Republic Of',
  MC: 'Monaco',
  MN: 'Mongolia',
  MS: 'Montserrat',
  ME: 'Montenegro',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestinian Territory, Occupied',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  RE: 'Reunion',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  SH: 'Saint Helena',
  KN: 'Saint Kitts And Nevis',
  LC: 'Saint Lucia',
  PM: 'Saint Pierre And Miquelon',
  VC: 'Saint Vincent And The Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome And Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia And The South Sandwich Islands',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard And Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania, United Republic Of',
  TH: 'Thailand',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad And Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks And Caicos Islands',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  UM: 'United States Minor Outlying Islands',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Viet Nam',
  VG: 'Virgin Islands, British',
  VI: 'Virgin Islands, U.s.',
  WF: 'Wallis And Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
};

export const TIMEZONES = [
  '(+10:30 GMT) ACDT - Australian Central Daylight Savings Time',
  '(+09:30 GMT) ACST - Australian Central Standard Time',
  '(-05:00 GMT) ACT - Acre Time',
  '(+06:30 - +09 GMT) ACT - ASEAN Common Time',
  '(-03:00 GMT) ADT - Atlantic Daylight Time',
  '(+11:00 GMT) AEDT - Australian Eastern Daylight Savings Time',
  '(+10:00 GMT) AEST - Australian Eastern Standard Time',
  '(+04:30 GMT) AFT - Afghanistan Time',
  '(-08:00 GMT) AKDT - Alaska Daylight Time',
  '(-09:00 GMT) AKST - Alaska Standard Time',
  '(-03:00 GMT) AMST - Amazon Summer Time (Brazil)[1]',
  '(-04:00 GMT) AMT - Amazon Time (Brazil)[2]',
  '(+04:00 GMT) AMT - Armenia Time',
  '(-03:00 GMT) ART - Argentina Time',
  '(+03:00 GMT) AST - Arabia Standard Time',
  '(-04:00 GMT) AST - Atlantic Standard Time',
  '(+08:00 GMT) AWST - Australian Western Standard Time',
  '(±00:00 GMT) AZOST - Azores Summer Time',
  '(-01:00 GMT) AZOT - Azores Standard Time',
  '(+04:00 GMT) AZT - Azerbaijan Time',
  '(+08:00 GMT) BDT - Brunei Time',
  '(+06:00 GMT) BIOT - British Indian Ocean Time',
  '(-12:00 GMT) BIT - Baker Island Time',
  '(-04:00 GMT) BOT - Bolivia Time',
  '(-02:00 GMT) BRST - Brasilia Summer Time',
  '(-03:00 GMT) BRT - Brasilia Time',
  '(+06:00 GMT) BST - Bangladesh Standard Time',
  '(+11:00 GMT) BST - Bougainville Standard Time[3]',
  '(+06:00 GMT) BTT - Bhutan Time',
  '(+02:00 GMT) CAT - Central Africa Time',
  '(+06:30 GMT) CCT - Cocos Islands Time',
  '(-05:00 GMT) CDT - Central Daylight Time (North America)',
  '(-04:00 GMT) CDT - Cuba Daylight Time[4]',
  '(+02:00 GMT) CEST - Central European Summer Time (Cf. HAEC)',
  '(+01:00 GMT) CET - Central European Time',
  '(+13:45 GMT) CHADT - Chatham Daylight Time',
  '(+12:45 GMT) CHAST - Chatham Standard Time',
  '(+08:00 GMT) CHOT - Choibalsan Standard Time',
  '(+09:00 GMT) CHOST - Choibalsan Summer Time',
  '(+10:00 GMT) CHST - Chamorro Standard Time',
  '(+10:00 GMT) CHUT - Chuuk Time',
  '(-08:00 GMT) CIST - Clipperton Island Standard Time',
  '(+08:00 GMT) CIT - Central Indonesia Time',
  '(-10:00 GMT) CKT - Cook Island Time',
  '(-03:00 GMT) CLST - Chile Summer Time',
  '(-04:00 GMT) CLT - Chile Standard Time',
  '(-04:00 GMT) COST - Colombia Summer Time',
  '(-05:00 GMT) COT - Colombia Time',
  '(-06:00 GMT) CST - Central Standard Time (North America)',
  '(+08:00 GMT) CST - China Standard Time',
  '(+09:30 GMT) ACST - Central Standard Time (Australia)',
  '(+10:30 GMT) ACDT - Central Summer Time (Australia)',
  '(-05:00 GMT) CST - Cuba Standard Time',
  '(+08:00 GMT) CT - China time',
  '(-01:00 GMT) CVT - Cape Verde Time',
  '(+08:45 GMT) CWST - Central Western Standard Time (Australia) unofficial',
  '(+07:00 GMT) CXT - Christmas Island Time',
  '(+07:00 GMT) DAVT - Davis Time',
  "(+10:00 GMT) DDUT - Dumont d'Urville Time",
  '(+01:00 GMT) DFT - AIX specific equivalent of Central European Time[5]',
  '(-05:00 GMT) EASST - Easter Island Summer Time',
  '(-06:00 GMT) EAST - Easter Island Standard Time',
  '(+03:00 GMT) EAT - East Africa Time',
  '(-04:00 GMT) ECT - Eastern Caribbean Time (does not recognise DST)',
  '(-05:00 GMT) ECT - Ecuador Time',
  '(-04:00 GMT) EDT - Eastern Daylight Time (North America)',
  '(+11:00 GMT) AEDT - Eastern Summer Time (Australia)',
  '(+03:00 GMT) EEST - Eastern European Summer Time',
  '(+02:00 GMT) EET - Eastern European Time',
  '(±00:00 GMT) EGST - Eastern Greenland Summer Time',
  '(-01:00 GMT) EGT - Eastern Greenland Time',
  '(+09:00 GMT) EIT - Eastern Indonesian Time',
  '(-05:00 GMT) EST - Eastern Standard Time (North America)',
  '(+10:00 GMT) AEST - Eastern Standard Time (Australia)',
  '(+03:00 GMT) FET - Further-eastern European Time',
  '(+12:00 GMT) FJT - Fiji Time',
  '(-03:00 GMT) FKST - Falkland Islands Summer Time',
  '(-04:00 GMT) FKT - Falkland Islands Time',
  '(-02:00 GMT) FNT - Fernando de Noronha Time',
  '(-06:00 GMT) GALT - Galapagos Time',
  '(-09:00 GMT) GAMT - Gambier Islands',
  '(+04:00 GMT) GET - Georgia Standard Time',
  '(-03:00 GMT) GFT - French Guiana Time',
  '(+12:00 GMT) GILT - Gilbert Island Time',
  '(-09:00 GMT) GIT - Gambier Island Time',
  '(±00:00 GMT) GMT - Greenwich Mean Time',
  '(-02:00 GMT) GST - South Georgia and the South Sandwich Islands',
  '(+04:00 GMT) GST - Gulf Standard Time',
  '(-04:00 GMT) GYT - Guyana Time',
  '(-09:00 GMT) HADT - Hawaii-Aleutian Daylight Time',
  "(+02:00 GMT) HAEC - Heure Avancée d'Europe Centrale francised name for CEST",
  '(-10:00 GMT) HAST - Hawaii-Aleutian Standard Time',
  '(+08:00 GMT) HKT - Hong Kong Time',
  '(+05:00 GMT) HMT - Heard and McDonald Islands Time',
  '(+08:00 GMT) HOVST - Khovd Summer Time',
  '(+07:00 GMT) HOVT - Khovd Standard Time',
  '(+07:00 GMT) ICT - Indochina Time',
  '(+03:00 GMT) IDT - Israel Daylight Time',
  '(+03:00 GMT) IOT - Indian Ocean Time',
  '(+04:30 GMT) IRDT - Iran Daylight Time',
  '(+08:00 GMT) IRKT - Irkutsk Time',
  '(+03:30 GMT) IRST - Iran Standard Time',
  '(+05:30 GMT) IST - Indian Standard Time',
  '(+01:00 GMT) IST - Irish Standard Time[6]',
  '(+02:00 GMT) IST - Israel Standard Time',
  '(+09:00 GMT) JST - Japan Standard Time',
  '(+06:00 GMT) KGT - Kyrgyzstan time',
  '(+11:00 GMT) KOST - Kosrae Time',
  '(+07:00 GMT) KRAT - Krasnoyarsk Time',
  '(+09:00 GMT) KST - Korea Standard Time',
  '(+10:30 GMT) LHST - Lord Howe Standard Time',
  '(+11:00 GMT) LHST - Lord Howe Summer Time',
  '(+14:00 GMT) LINT - Line Islands Time',
  '(+12:00 GMT) MAGT - Magadan Time',
  '(-09:30 GMT) MART - Marquesas Islands Time',
  '(+05:00 GMT) MAWT - Mawson Station Time',
  '(-06:00 GMT) MDT - Mountain Daylight Time (North America)',
  '(+01:00 GMT) MET - Middle European Time Same zone as CET',
  '(+02:00 GMT) MEST - Middle European Summer Time Same zone as CEST',
  '(+12:00 GMT) MHT - Marshall Islands',
  '(+11:00 GMT) MIST - Macquarie Island Station Time',
  '(-09:30 GMT) MIT - Marquesas Islands Time',
  '(+06:30 GMT) MMT - Myanmar Standard Time',
  '(+03:00 GMT) MSK - Moscow Time',
  '(+08:00 GMT) MST - Malaysia Standard Time',
  '(-07:00 GMT) MST - Mountain Standard Time (North America)',
  '(+04:00 GMT) MUT - Mauritius Time',
  '(+05:00 GMT) MVT - Maldives Time',
  '(+08:00 GMT) MYT - Malaysia Time',
  '(+11:00 GMT) NCT - New Caledonia Time',
  '(-02:30 GMT) NDT - Newfoundland Daylight Time',
  '(+11:00 GMT) NFT - Norfolk Time',
  '(+05:45 GMT) NPT - Nepal Time',
  '(-03:30 GMT) NST - Newfoundland Standard Time',
  '(-03:30 GMT) NT - Newfoundland Time',
  '(-11:00 GMT) NUT - Niue Time',
  '(+13:00 GMT) NZDT - New Zealand Daylight Time',
  '(+12:00 GMT) NZST - New Zealand Standard Time',
  '(+06:00 GMT) OMST - Omsk Time',
  '(+05:00 GMT) ORAT - Oral Time',
  '(-07:00 GMT) PDT - Pacific Daylight Time (North America)',
  '(-05:00 GMT) PET - Peru Time',
  '(+12:00 GMT) PETT - Kamchatka Time',
  '(+10:00 GMT) PGT - Papua New Guinea Time',
  '(+13:00 GMT) PHOT - Phoenix Island Time',
  '(+08:00 GMT) PHT - Philippine Time',
  '(+05:00 GMT) PKT - Pakistan Standard Time',
  '(-02:00 GMT) PMDT - Saint Pierre and Miquelon Daylight time',
  '(-03:00 GMT) PMST - Saint Pierre and Miquelon Standard Time',
  '(+11:00 GMT) PONT - Pohnpei Standard Time',
  '(-08:00 GMT) PST - Pacific Standard Time (North America)',
  '(+08:00 GMT) PST - Philippine Standard Time',
  '(-03:00 GMT) PYST - Paraguay Summer Time (South America)[7]',
  '(-04:00 GMT) PYT - Paraguay Time (South America)[8]',
  '(+04:00 GMT) RET - Réunion Time',
  '(-03:00 GMT) ROTT - Rothera Research Station Time',
  '(+11:00 GMT) SAKT - Sakhalin Island time',
  '(+04:00 GMT) SAMT - Samara Time',
  '(+02:00 GMT) SAST - South African Standard Time',
  '(+11:00 GMT) SBT - Solomon Islands Time',
  '(+04:00 GMT) SCT - Seychelles Time',
  '(+08:00 GMT) SGT - Singapore Time',
  '(+05:30 GMT) SLST - Sri Lanka Standard Time',
  '(+11:00 GMT) SRET - Srednekolymsk Time',
  '(-03:00 GMT) SRT - Suriname Time',
  '(-11:00 GMT) SST - Samoa Standard Time',
  '(+08:00 GMT) SST - Singapore Standard Time',
  '(+03:00 GMT) SYOT - Showa Station Time',
  '(-10:00 GMT) TAHT - Tahiti Time',
  '(+07:00 GMT) THA - Thailand Standard Time',
  '(+05:00 GMT) TFT - Indian/Kerguelen',
  '(+05:00 GMT) TJT - Tajikistan Time',
  '(+13:00 GMT) TKT - Tokelau Time',
  '(+09:00 GMT) TLT - Timor Leste Time',
  '(+05:00 GMT) TMT - Turkmenistan Time',
  '(+03:00 GMT) TRT - Turkey Time',
  '(+13:00 GMT) TOT - Tonga Time',
  '(+12:00 GMT) TVT - Tuvalu Time',
  '(+09:00 GMT) ULAST - Ulaanbaatar Summer Time',
  '(+08:00 GMT) ULAT - Ulaanbaatar Standard Time',
  '(+02:00 GMT) USZ1 - Kaliningrad Time',
  '(±00:00 GMT)  - Coordinated Universal Time',
  '(-02:00 GMT) UYST - Uruguay Summer Time',
  '(-03:00 GMT) UYT - Uruguay Standard Time',
  '(+05:00 GMT) UZT - Uzbekistan Time',
  '(-04:00 GMT) VET - Venezuelan Standard Time',
  '(+10:00 GMT) VLAT - Vladivostok Time',
  '(+04:00 GMT) VOLT - Volgograd Time',
  '(+06:00 GMT) VOST - Vostok Station Time',
  '(+11:00 GMT) VUT - Vanuatu Time',
  '(+12:00 GMT) WAKT - Wake Island Time',
  '(+02:00 GMT) WAST - West Africa Summer Time',
  '(+01:00 GMT) WAT - West Africa Time',
  '(+01:00 GMT) WEST - Western European Summer Time',
  '(±00:00 GMT) WET - Western European Time',
  '(+07:00 GMT) WIT - Western Indonesian Time',
  '(+08:00 GMT) WST - Western Standard Time',
  '(+09:00 GMT) YAKT - Yakutsk Time',
  '(+05:00 GMT) YEKT - Yekaterinburg Time',
];

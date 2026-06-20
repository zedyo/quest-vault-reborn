// AUTO-GENERIERT von scripts/build_hero_de_images.py – nicht von Hand editieren.
//
// Zuordnung HeldId -> deutsches Kartenbild (eingescannte deutsche Karten,
// web-optimiert unter public/heroes/de/). Die englischen any2cards-Bilder
// bleiben als `imageUrl` in heroes.ts erhalten (fuer die spaetere EN-Version).

export const HERO_IMAGE_DE: Record<string, string> = {
  'andira-runehand': 'heroes/de/andira-runehand.webp',
  'ashrian': 'heroes/de/ashrian.webp',
  'augur-grisom': 'heroes/de/augur-grisom.webp',
  'avric-albright': 'heroes/de/avric-albright.webp',
  'brother-gherinn': 'heroes/de/brother-gherinn.webp',
  'elder-mok': 'heroes/de/elder-mok.webp',
  'ispher': 'heroes/de/ispher.webp',
  'jonas-the-kind': 'heroes/de/jonas-the-kind.webp',
  'okaluk-and-rakash': 'heroes/de/okaluk-and-rakash.webp',
  'rendiel': 'heroes/de/rendiel.webp',
  'sahla': 'heroes/de/sahla.webp',
  'ulma-grimstone': 'heroes/de/ulma-grimstone.webp',
  'alys-raine': 'heroes/de/alys-raine.webp',
  'corbin': 'heroes/de/corbin.webp',
  'one-fist': 'heroes/de/one-fist.webp',
  'grisban-the-thirsty': 'heroes/de/grisban-the-thirsty.webp',
  'karnon': 'heroes/de/karnon.webp',
  'krutzbeck': 'heroes/de/krutzbeck.webp',
  'pathfinder-durik': 'heroes/de/pathfinder-durik.webp',
  'lord-hawthorne': 'heroes/de/lord-hawthorne.webp',
  'mordrog': 'heroes/de/mordrog.webp',
  'nanok-of-the-blade': 'heroes/de/nanok-of-the-blade.webp',
  'nara-the-fang': 'heroes/de/nara-the-fang.webp',
  'orkell-the-swift': 'heroes/de/orkell-the-swift.webp',
  'reynhart-the-worthy': 'heroes/de/reynhart-the-worthy.webp',
  'sir-valadir': 'heroes/de/sir-valadir.webp',
  'steelhorns': 'heroes/de/steelhorns.webp',
  'syndrael': 'heroes/de/syndrael.webp',
  'tahlia': 'heroes/de/tahlia.webp',
  'trenloe-the-strong': 'heroes/de/trenloe-the-strong.webp',
  'arvel-worldwalker': 'heroes/de/arvel-worldwalker.webp',
  'jain-fairwood': 'heroes/de/jain-fairwood.webp',
  'grey-ker': 'heroes/de/grey-ker.webp',
  'laurel-of-bloodwood': 'heroes/de/laurel-of-bloodwood.webp',
  'lindel': 'heroes/de/lindel.webp',
  'logan-lashley': 'heroes/de/logan-lashley.webp',
  'roganna-the-shade': 'heroes/de/roganna-the-shade.webp',
  'silhouette': 'heroes/de/silhouette.webp',
  'tatianna': 'heroes/de/tatianna.webp',
  'tetherys': 'heroes/de/tetherys.webp',
  'thaiden-mistpeak': 'heroes/de/thaiden-mistpeak.webp',
  'tinashi-the-wanderer': 'heroes/de/tinashi-the-wanderer.webp',
  'tomble-burrowell': 'heroes/de/tomble-burrowell.webp',
  'astarra': 'heroes/de/astarra.webp',
  'dezra-the-vile': 'heroes/de/dezra-the-vile.webp',
  'high-mage-quellen': 'heroes/de/high-mage-quellen.webp',
  'jaes-the-exile': 'heroes/de/jaes-the-exile.webp',
  'leoric-of-the-book': 'heroes/de/leoric-of-the-book.webp',
  'master-thorn': 'heroes/de/master-thorn.webp',
  'ravaella-lightfoot': 'heroes/de/ravaella-lightfoot.webp',
  'seer-kel': 'heroes/de/seer-kel.webp',
  'shiver': 'heroes/de/shiver.webp',
  'widow-tarha': 'heroes/de/widow-tarha.webp',
  'zyla': 'heroes/de/zyla.webp',
}

/**
 * Base-bewusste URL des deutschen Kartenbilds eines Helden, sonst undefined.
 * (Vite stellt public/ unter import.meta.env.BASE_URL bereit.)
 */
export function heroImageDeSrc(heroId: string): string | undefined {
  const path = HERO_IMAGE_DE[heroId]
  return path ? import.meta.env.BASE_URL + path : undefined
}

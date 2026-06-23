import type { Rumor } from '../types/game'

// Gerücht-Karten (Rumor) – deutsche Original-Karten (Akt I + Akt II).
// Name DE 1:1 vom Kartentitel; Akt-Badge + Reise-Symbole von den Karten gelesen;
// EN/Erweiterung: Akt I aus any2cards rumors.js, Akt II aus der verknüpften Advanced
// Quest (nameEn = Quest-Name). textDe = deutscher Vorderseiten-Kartentext (1:1).
// Akt-II-Karten sind doppelseitig: back = Overlord-/Helden-Belohnung der Rückseite
// (Bild rumorCardBackDeUrl(id)). Symbole stehen als Wort (Herz/Schub/Erschöpfung/
// Aktion) und werden von renderGameText als Symbol gerendert.
// Vorderbild: rumorCardDeUrl(id) -> public/cards/de/geruechte/<id>.webp.
// Ausgeschlossen: „Sands of the Past" (nicht in expansions.ts).

export const RUMORS: Rumor[] = [
  {
    id: "rudeawakening", nameDe: "Böses Erwachen", nameEn: "Rude Awakening",
    expansionId: "lair-of-the-wyrm", act: 1, travel: ["Plain", "Plain", "Forest", "Road"],
    textDe: "Wenn du die Gerüchtekarte „Gute Mine zum bösen Spiel\" oder „Schatzjäger\" gespielt hast, wirf diese Karte ab und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Solange diese Karte im Spiel ist, kann sie als nächstes Abenteuer gewählt werden.\n\nEuch hat die Nachricht erreicht, dass der Overlord Lindwurmkönigin Valyndra als Verbündete für seinen schrecklichen Eroberungsfeldzug gewinnen konnte. Als ob das noch nicht schlimm genug wäre, treffen nun die ersten Berichte ein, dass ihre Halbdrachenuntertanen mordend und brandschatzend durch die Lande ziehen. Ihr müsst ihnen Einhalt gebieten!",
  },
  {
    id: "myhousemyrules", nameDe: "Der Herr des Hauses", nameEn: "My House, My Rules",
    expansionId: "manor-of-ravens", act: 1, travel: ["Forest", "Forest", "Plain"],
    textDe: "Wenn du die Gerüchtekarte „Vogelfrei\" oder „Finderlohn\" gespielt hast, wirf diese Karte ab und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nMehrmals hat man bereits versucht Skarn zu vernichten, dieses wildgewordene Konstrukt, das in Ysindrus' altem Schloss haust. Doch niemand kehrte von dort zurück. Das Schloss hält jene, die eintreten, in seinem Inneren gefangen.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord das Relikt „Scherben des Ysindrus\". Dann kommt die Zusatzabenteuerkarte „Tief unterm Schloss\" ins Spiel.",
  },
  {
    id: "onemanstrash", nameDe: "Des einen Müll …", nameEn: "One Man's Trash",
    expansionId: "bonds-of-the-wild", act: 1, travel: ["Road", "Forest", "Mountain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nDie Dorfbewohner tuscheln über ihren Wäschekörben und Bierkrügen über den Mabinogizweig. Dieser geschwärzte Zweig wurde angeblich vom Baum des Lebens entwendet, einem uralten Baum, der Krankheiten heilen und sogar Tote wieder zum Leben erwecken konnte. Obwohl er schon vor langer Zeit verloren gegangen ist, wurde die Suche nach dem Zweig nie aufgegeben. Den neuesten Gerüchten zufolge, sei er in einer Koboldhöhle verborgen, inmitten des ganzen Gerümpels der Monster.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Schrotthaufen\". Die Zusatzabenteuerkarte „Erwachen der Wildnis\" kommt ins Spiel.",
  },
  {
    id: "shardsofeverdark", nameDe: "Die Scherben von Everdark", nameEn: "Shards of Everdark",
    expansionId: "shards-of-everdark", act: 1, travel: ["Road", "Plain", "Mountain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nAls alles begann, dachtet ihr, es sei eine Geisteskrankheit. Liebevolle Menschen und zahme Tiere verwandelten sich in abscheuliche, entwürdigte Kreaturen. Dann fandet ihr die Scherben: Splitter der Finsternis, welche die Seelen der Menschen verderben. Die Scherben und ihr Einfluss breiten sich aus und nur das reinste Herz kann sich ihrer Macht widersetzen.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Spott\". Die Zusatzabenteuerkarte „Das Heer von Everdark\" kommt ins Spiel.",
  },
  {
    id: "guardiansofdeephall", nameDe: "Die Wächter von Deephall", nameEn: "Guardians of Deephall",
    expansionId: "guardians-of-deephall", act: 1, travel: ["Road", "Plain", "Mountain", "Road"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nSeit einiger Zeit schon treiben nun Banden Dunkler Priester ihr zunehmend beunruhigendes Unwesen im Tal. Es scheint, dass sie ihr Augenmerk auf Deephall konzentrieren, die nahegelegene Bergfestung, deren Bewohner sowieso schon von Horden ihrer eigenen wiederbelebten Toten belagert wird.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Erdrückende Überzahl\". Dann kommt die Zusatzabenteuerkarte „Der Fluch von Iona\" ins Spiel.",
  },
  {
    id: "threeheadsonemind", nameDe: "Drei Köpfe, ein Gedanke", nameEn: "Three Heads, One Mind",
    expansionId: "the-trollfens", act: 1, travel: ["Water", "Road", "Mountain"],
    textDe: "Wenn du die Gerüchtekarte „Geisterstadt\" oder „Wurmfraß\" gespielt hast, wirf diese Karte ab, und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Solange diese Karte im Spiel ist, kann sie als nächstes Abenteuer gewählt werden.\n\nEine Krankheit beginnt sich in einigen nahe gelegenen Städten auszubreiten. Sie scheint nicht schlimm zu sein, doch ihr plötzliches Auftreten hat die Stadträte aufhorchen lassen. Anscheinend grassiert dieselbe Krankheit unter den ohnehin schon geplagten Bewohner der Valdari-Sümpfe.\n\nDüstere Gerüchte hört man schon seit längerem aus der Gegend. Vielleicht solltet ihr ihnen nachgehen.",
  },
  {
    id: "burningharvest", nameDe: "Feurige Ernte", nameEn: "Burning Harvest",
    expansionId: "crown-of-destiny", act: 1, travel: ["Mountain", "Plain", "Mountain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nMan sagt, der Riese Mughin weiß, wo die Krone des Schicksals liegt, ein legendäres Artefakt mit der Macht, das Schicksal neu zu schmieden. Bald schon wird Mughin aus seiner Heimat in den Bergen ausziehen, um die kostbaren Feuerkristalle an sich zu reißen, die von Lavakäfern aus Lavaseen geerntet werden. Eine einmalige Gelegenheit, den uralten Riesen abzupassen und aus ihm herauszupressen, wo sich die vergessene Krone befindet.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Feuerkristalle\". Die Zusatzabenteuerkarte „Krone des Schicksals\" kommt ins Spiel.",
  },
  {
    id: "findersandkeepers", nameDe: "Finderlohn", nameEn: "Finders and Keepers",
    expansionId: "manor-of-ravens", act: 1, travel: ["Road", "Plain", "Forest"],
    textDe: "Wenn du die Gerüchtekarte „Vogelfrei\" oder „Der Herr des Hauses\" gespielt hast, wirf diese Karte ab und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nEin rastloses Wesen ist gekommen, um über Ysindrus' altes Schloss zu wachen. Doch im Schloss ist es still und leer, zumal es schon oft geplündert wurde. Vielleicht ist der Wächter ausgezogen, um die gestohlenen Artefakte zurückzufordern.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord das Relikt „Stein der Abwegigkeit\". Dann kommt die Zusatzabenteuerkarte „Zur falschen Zeit am falschen Ort\" ins Spiel.",
  },
  {
    id: "trucebreaker", nameDe: "Friedensbrecher", nameEn: "Trucebreaker",
    expansionId: "visions-of-dawn", act: 1, travel: ["Plain", "Forest", "Mountain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nObwohl Oger und Trolle jetzt eine Blutfehde gegeneinander hegen, gab es eine Zeit, zu der sie als größtes Übel für die freien Rassen zusammenhielten. Nach ungeheuerlichem Blutvergießen schlug die Kriegerpriesterin Ig'thalea die mordenden Horden nieder und die Überlebenden zerstritten sich. Erst in jüngster Vergangenheit haben sich die alten Feinde auf heiligem Boden versammelt, um über einen Frieden zu verhandeln. Gemeinsam wird ihre Blutgier die umgebenden Siedlungen auslöschen.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Harte Schläge\". Die Zusatzabenteuerkarte „Prophezeiung eines neuen Anfangs\" kommt ins Spiel.",
  },
  {
    id: "adangerouspath", nameDe: "Gefährliche Pfade", nameEn: "A Dangerous Path",
    expansionId: "lair-of-the-wyrm", act: 1, travel: [],
    textDe: "Spiele diese Karte zu Beginn des Reiseschritts einer Kampagnenphase in Akt I:\n\nDie Nachrichten von Wegelagerern auf den Hauptstraßen haben euch dazu veranlasst, weniger bekannte Pfade einzuschlagen. In diesen dunklen Zeiten mag zwar kein Pfad mehr wirklich sicher sein, doch vertraut ihr auf eure Erfahrung in der Wildnis und zieht mutig voran. Je weniger man euch sieht, desto eher könnt ihr dem Übel ein Ende bereiten, das sich wie ein schwarzer Schleier über das Land legt.\n\nSieh dir die obersten 3 Karten des Reiseereignisstapels an und lege sie in beliebiger Reihenfolge wieder zurück.\n\nWirf diese Gerüchtekarte dann ab, und ziehe eine neue.",
  },
  {
    id: "ghosttown", nameDe: "Geisterstadt", nameEn: "Ghost Town",
    expansionId: "the-trollfens", act: 1, travel: ["Forest", "Road", "Road"],
    textDe: "Wenn du die Gerüchtekarte „Wurmfraß\" oder „Drei Köpfe, ein Gedanke\" gespielt hast, wirf diese Karte ab, und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Solange diese Karte im Spiel ist, kann sie als nächstes Abenteuer gewählt werden.\n\nReisende, die ihr unterwegs trefft, berichten von Unheil in den Dörfern der Valdari-Sümpfe vor den Grenzen der Baronie Rhynn und von einem unbekannten Feind, der jene Lande bedroht. Zu weit entfernt sind sie, als dass irgendeine der Baronien offizielle Hilfe senden würde, und so wurden kleinere Belohnungen allen versprochen, die sich ihrer erbarmen.",
  },
  {
    id: "atrocities", nameDe: "Gräueltaten", nameEn: "Atrocities",
    expansionId: "the-trollfens", act: 1, travel: [],
    textDe: "Spiele diese Karte sofort nach dem Reiseschritt einer Kampagnenphase in Akt I:\n\nBis auf die Knochen durchgeweicht trottet ihr durch den sintflutartigen Regen. Ihr verlauft euch und stoßt plötzlich auf die Überreste einer Karawane.\n\nErschlagen liegen die Reisenden im Matsch, die offensichtlich Opfer einer schrecklichen Untat wurden. Ihr durchsucht die Trümmer, durch und durch erschüttert von der ungezügelten Brutalität, mit der hier gewütet wurde.\n\nJeder Held legt eine Willenskraft-Probe ab. Jeder, dessen Probe misslingt, wird vom Anblick überwältigt. Er erleidet 1 Erschöpfung und wird geschwächt.\n\nWirf diese Gerüchtekarte dann ab, und ziehe eine neue.",
  },
  {
    id: "whatsyoursismine", nameDe: "Gute Mine zum bösen Spiel", nameEn: "What's Yours Is Mine",
    expansionId: "lair-of-the-wyrm", act: 1, travel: ["Plain", "Forest", "Mountain", "Mountain"],
    textDe: "Wenn du die Gerüchtekarte „Böses Erwachen\" oder „Schatzjäger\" gespielt hast, wirf diese Karte ab und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Solange diese Karte im Spiel ist, kann sie als nächstes Abenteuer gewählt werden.\n\nAm Straßenrand seht ihr einen verwundeten Grubenarbeiter liegen, der euch zuruft: „Sie greifen die Vigilia-Mine an! Die haben von Jorems Fund gehört, und jetzt halten sie ihn unten in der Mine fest, bis er das ganze verfluchte Erz freigelegt hat. Ich flehe Euch an … es bleibt nicht viel Zeit! Könnt Ihr die Mine retten?\"",
  },
  {
    id: "famineandstrife", nameDe: "Hunger und Not", nameEn: "Famine and Strife",
    expansionId: "the-trollfens", act: 1, travel: [],
    textDe: "Spiele diese Karte am Ende des Reiseschritts einer Kampagnenphase in Akt I:\n\nDie jüngste Vergangenheit hat ihre Spuren in dieser Gegend hinterlassen. Feldfrüchte verfaulen und die Gehöfte liegen still und verlassen. In den Siedlungen, durch die ihr kommt, starren die Bewohner mit leerem Blick vor sich hin. Grabesstille hat sich über das Land gelegt und kündet vom Erstarken böser Mächte.\n\nDer Overlord zieht so viele Overlordkarten, vom Overlorddeck, wie Helden im Spiel sind. Dann legt er so viele Overlordkarten von seiner Hand in beliebiger Reihenfolge auf das Overlorddeck, wie Helden im Spiel sind.\n\nWenn er eine Gerüchtekarte mit einem Abenteuer des aktuellen Akts auf der Hand hat, muss er sie jetzt spielen.",
  },
  {
    id: "stewardsofthesecret", nameDe: "Hüter des Geheimnisses", nameEn: "Stewards of the Secret",
    expansionId: "stewards-of-the-secret", act: 1, travel: ["Forest", "Water", "Mountain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nSchon seit langer Zeit lebt der Orden der Hüter im friedlichen Wynewood Tal. Die unauffälligen Priester beschäftigen sich normalerweise mit ihren heiligen örtlichen Riten, aber nun wurden sie schon seit einigen Wochen nicht mehr gesehen. Die im Tal lebenden Farmer sind besorgt und die verzerrten Kreaturen, die seit kurzem einsame Reisende angreifen, tragen nur zu ihrer Furcht bei.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Spleißen“. Die Zusatzabenteuerkarte „Devis Blutturm“ kommt ins Spiel.",
  },
  {
    id: "crusadeoftheforgotten", nameDe: "Kreuzzug der Vergessenen", nameEn: "Crusade of the Forgotten",
    expansionId: "crusade-of-the-forgotten", act: 1, travel: ["Road", "Water", "Plain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nEinwohner der Städte verschwinden seit Wochen. Manche erzählen, dass ihre Lieben schreiend und weinend von Schatten weggezerrt wurden, während andere sagen, dass die Opfer einfach nur „Auf Wiedersehen“ sagten und in der Dunkelheit verschwanden. Doch eines ist ihnen allen gemein: Sie alle waren Mitglieder des Kultes der Vergessenen.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Vergessene Hexerei“. Dann kommt die Zusatzabenteuerkarte „Schattenwacht“ ins Spiel.",
  },
  {
    id: "golddigger", nameDe: "Schatzjäger", nameEn: "Gold Digger",
    expansionId: "lair-of-the-wyrm", act: 1, travel: ["Road", "Road", "Road"],
    textDe: "Wenn du die Gerüchtekarte „Böses Erwachen“ oder „Gute Mine zum bösen Spiel“ gespielt hast, wirf diese Karte ab und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Solange diese Karte im Spiel ist, kann sie als nächstes Abenteuer gewählt werden.\n\nAuf dem Weg zu eurem Ziel seht ihr in der Ferne Rauchschwaden aufziehen. Ihr hastet um die nächste Wegbiegung und hört einen gellenden Hilferuf. Die Wagenspuren, die jäh von der Straße abbiegen und ins Unterholz führen, lassen Böses ahnen …",
  },
  {
    id: "scarcegoods", nameDe: "Schwer erhältliche Waren", nameEn: "Scarce Goods",
    expansionId: "the-trollfens", act: 1, travel: [],
    textDe: "Spiele diese Karte zu Beginn des Einkaufsschritts einer Kampagnenphase:\n\nIhr macht bei mehreren Händlern halt und wundert euch, dass überall bestimmte Waren zu fehlen scheinen.\n\n„Tut mir leid“, sagt ein Krämer mit einem Kopfschütteln. „Ein junger Lord kam kürzlich vorbei und nahm meinen ganzen Bestand der Dinger mit. Ist mir schleierhaft, was er mit so vielen wollte, aber es wird sicher ein paar Tage dauern, bis ich neue hereinbekomme.“\n\nDer Overlord wählt ein Marktkartenmerkmal (z.B. Magie, Exotisch, etc.). Jede Marktkarte mit dem gewählten Merkmal, die in diesem Einkaufsschritt aufgedeckt wird, wird sofort abgeworfen und durch eine neue vom Stapel ersetzt.\n\nWenn er eine Gerüchtekarte mit einem Abenteuer des aktuellen Akts auf der Hand hat, muss er sie jetzt spielen.",
  },
  {
    id: "oathoftheoutcast", nameDe: "Schwur der Verbannten", nameEn: "Oath of the Outcast",
    expansionId: "oath-of-the-outcast", act: 1, travel: ["Forest", "Forest", "Mountain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nDas Grabmal der Zwölf liegt offen und unbewacht da. Die Wächterin ist verschwunden. Schon bald werden Grabräuber oder noch schlimmere Gestalten es plündern. Ihr müsst die Gebeine der gefallenen Krieger wieder versiegeln. Sonst ist es nur eine Frage der Zeit, bis ihr ihre Wut spüren werdet.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Unsichtbare Schwingen“. Dann kommt die Zusatzabenteuerkarte „Ein Käfig aus Eis und Lügen“ ins Spiel.",
  },
  {
    id: "sindaessecret", nameDe: "Sindaeas Geheimnis", nameEn: "Sindae's Secret",
    expansionId: "treaty-of-champions", act: 1, travel: ["Road", "Forest", "Plain"],
    textDe: "Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nEine uralte Bestie erhebt sich und ihr seid nicht in der Lage, sie aufzuhalten. Die Helden, die sie vor vielen Jahren besiegt haben, sind in einem verwunschenen Land verschwunden und die Fesseln, die sie erschufen, lösen sich. Eure einzige Hoffnung ist es, sie zu finden und ihr Geheimnis wiederzuentdecken, bevor es zu spät ist.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord die Karte „Hexenhunger“. Die Zusatzabenteuerkarte „Kontrakt der Unbesiegten“ kommt ins Spiel.",
  },
  {
    id: "valyndrasfury", nameDe: "Valyndras Zorn", nameEn: "Valyndra's Fury",
    expansionId: "lair-of-the-wyrm", act: 1, travel: [],
    textDe: "Spiele diese Karte sofort nach dem Reiseschritt einer Kampagnenphase in Akt I:\n\nAls ihr euch eurem Ziel nähert, vernehmt ihr den unheilvollen Klang von ledrigen Schwingen in der Luft. Schnell versucht ihr euch zu verstecken. Denn ihr ahnt, dass auf diesen Schwingen kein Freund daherkommt.\n\nAls ihr fast schon in Sicherheit seid, ertönt höhnisches Gelächter, und mit einem sengenden Flammenstrahl schickt Valyndra ihre Grüße …\n\nJeder Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, wird von Valyndras Flammenstrahl getroffen. Er erleidet 1 Herz und brennt. Wenn alle Proben gelingen, gewinnt jeder Held 1 Erschöpfung zurück.",
  },
  {
    id: "cursedtreasures", nameDe: "Verfluchte Schätze", nameEn: "Cursed Treasures",
    expansionId: "manor-of-ravens", act: null, travel: [],
    textDe: "Spiele diese Karte nach dem Aufbau einer Szene, aber nicht im Finale.\n\nImmer mehr mächtige Artefakte tauchen auf Märkten und bei Händlern auf. Zunächst habt ihr die größere Auswahl an Waren begrüßt. Nun aber glaubt ihr zu wissen, woher sie stammen. Sie wurden aus Ysindrus’ Schloss gestohlen und bringen Fluch und Verderben über den, der sie trägt.\n\nJeder Held legt eine Stärke-Probe ab und fügt zum Ergebnis so viele Verteidigung hinzu, wie er selbst Akt-II-Marktkarten vor sich liegen hat. Jeder Held, dessen Probe misslingt, erhält einen Zustand deiner Wahl.",
  },
  {
    id: "spreadyourwings", nameDe: "Vogelfrei", nameEn: "Spread Your Wings",
    expansionId: "manor-of-ravens", act: 1, travel: ["Mountain", "Water", "Plain"],
    textDe: "Wenn du die Gerüchtekarte „Finderlohn“ oder „Der Herr des Hauses“ gespielt hast, wirf diese Karte ab und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann. Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nEin wildgewordenes Konstrukt wütet in einem verlassenen Schloss. Gespeist von der Macht vergessener Artefakte und unvollendeter Zauber ist nicht abzusehen, wie stark und mächtig es noch werden wird. Ihr müsst es finden und vernichten.\n\nWenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält der Overlord das Relikt „Foliant der Fünf Lügen“. Dann kommt die Zusatzabenteuerkarte „Herzensangelegenheit“ ins Spiel.",
  },
  {
    id: "foodforworms", nameDe: "Wurmfraß", nameEn: "Food for Worms",
    expansionId: "the-trollfens", act: 1, travel: ["Forest", "Water", "Water"],
    textDe: "Wenn du die Gerüchtekarte „Geisterstadt“ oder „Drei Köpfe, ein Gedanke“ gespielt hast, wirf diese Karte ab, und ziehe eine neue Gerüchtekarte.\n\nSpiele diese Karte zu Beginn einer Kampagnenphase in Akt I. Solange diese Karte im Spiel ist, kann sie als nächstes Abenteuer gewählt werden.\n\nAngriffe auf die Randgebiete der Sümpfe sind heftiger geworden und die wenigen Überlebenden der betroffenen Dörfer erzählen von Freunden und Verwandten, die bei Nacht und Nebel in die Sümpfe verschleppt wurden. Die Vorstellung, sich durch Morast und Matsch zu kämpfen, ist nicht gerade verlockend, doch klingen euch diese Nachrichten zu bitter, um sie nicht zu beachten.",
  },
  {
    id: "unknowntreasures", nameDe: "Zweifelhafte Schätze", nameEn: "Unknown Treasures",
    expansionId: "lair-of-the-wyrm", act: null, travel: [],
    textDe: "Spiele diese Karte zu Beginn des Einkaufsschritts einer Kampagnenphase:\n\nAls ihr den vertrauten Laden betretet, überkommt euch ein Unbehagen, das ihr euch nicht erklären könnt. Ihr seht euch nach dem Händler um, doch da erklingt eine fremdartige Stimme aus einer dunklen Ecke des Raumes.\n\n„Seid gegrüßt“, spricht euch eine Gestalt an, deren Gesicht von einer weiten Kapuze verborgen ist. „Wie kann ich Euch dienen?“\n\nDie Marktkarten werden in diesem Einkaufsschritt verdeckt ausgelegt. Jeder Held legt eine Wissen-Probe ab. Jeder Held, dessen Probe gelingt, deckt 1 zufällige Marktkarte auf.\n\nDie Helden können auch verdeckt liegende Karten kaufen. In Akt I kostet jede verdeckt liegende Karte 100, in Akt II 175 Goldstücke.",
  },
  {
    id: "spreadingaffliction", nameDe: "Ausbreitung der Pest", nameEn: "Spreading Affliction",
    expansionId: "the-trollfens", act: 2, travel: ["Road", "Mountain", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nDie Dörfer am Rande des Sumpfes sind verlassen. Die Bewohner sind schon lange verschwunden oder geflohen. Ihr müsst euch auf das Wenige, das ihr bisher herausfinden konntet, stützen und euer Bestes versuchen. Welches Übel auch immer in diesem Sumpf vor sich geht, ihr klammert euch an die Hoffnung, seinen Ursprung zu finden und zu vernichten, bevor es zu spät ist …",
    back: {
      overlordDe: "Epidemie: Zu Beginn einer Szene kannst du diese Karte zurück in die Schachtel legen. Dadurch erleidet jeder Held 1 Herz und 1 Erschöpfung, erkrankt und wird geschwächt.",
      heroDe: "Sichere Reise: Solange die Helden diese Karte haben, legen Sie Zustände oder Infektionsmarker, die sie durch Reiseereigniskarten erhalten, sofort ab.",
    },
  },
  {
    id: "armedtotheteeth", nameDe: "Bis an die Zähne bewaffnet", nameEn: "Armed to the Teeth",
    expansionId: "lair-of-the-wyrm", act: 2, travel: ["Plain", "Forest", "Mountain", "Road"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nValyndras Schergen haben euch daran gehindert, Jorem Tolk zu finden. Inzwischen hat sie bestimmt vollbracht, was auch immer sie mit ihm vorhatte. Mittlerweile gibt es sogar Gerüchte, dass die Dunkle Macht, die Terrinoth unterwerfen will, großes Interesse an den Machenschaften der Lindwurmkönigin zu haben scheint. Ihr dürft keine Zeit verlieren. Ihr müsst solch ein Bündnis verhindern, bevor es zu spät ist!",
    back: {
      overlordDe: "Eine Geheimwaffe: Nach dem Aufbau des Finales kannst du diese Karte zurück in die Schachtel legen, um 1 Reliktkarte zu erhalten, die weder du noch die Helden haben.",
      heroDe: "Geschenk aus der Waffenkammer: Zu Beginn der Kampagnenphase könnt ihr diese Karte zurück in die Schachtel legen, um 5 Karten vom Akt-II-Marktkartenstapel aufzudecken. 1 davon dürft ihr euch kostenlos nehmen. Die anderen mischt ihr zurück in den Stapel.",
    },
  },
  {
    id: "hostofeverdark", nameDe: "Das Heer von Everdark", nameEn: "Host of Everdark",
    expansionId: "shards-of-everdark", act: 2, travel: ["Forest", "Plain", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer nach dem Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nEs scheint, dass eure Bemühungen, den verderblichen Einfluss von Everdark aufzuhalten, nicht ausreichend waren. Obwohl ihr viele Kristalle zerstört und die Quelle versiegelt habt, dauert die Wirkung der Kristalle an und füllt die Schenken und Tavernen mit Geschichten von ehrenwerten Menschen, die schreckliche Taten begehen. Ihr vermutet, dass irgendwo noch ein Hort der Scherben verborgen ist und dass es nur eine Frage der Zeit ist, bis sich ihre Macht voll entfaltet.",
    back: {
      overlordDe: "Kaputte Marionetten: Erschöpfe diese Karte während deines Zuges und wähle einen niedergestreckten Helden. Führe einen Angriff mit diesem Helden aus, als wäre er eins deiner Monster auf dem Feld, auf dem sein Heldenmarker liegt.",
      heroDe: "Bewältiger: Ein Held darf diese Karte zu Beginn einer Runde erschöpfen. Sobald diese Karte erschöpft wird, gewinnt jeder Held so viele Erschöpfung zurück, wie er Herz erlitten hat. Diese Karte wird nicht wie üblich spielbereit gemacht. Mache diese Karte zum Ende jedes Abenteuers spielbereit.",
    },
  },
  {
    id: "thecurseofiona", nameDe: "Der Fluch von Iona", nameEn: "The Curse of Iona",
    expansionId: "guardians-of-deephall", act: 2, travel: ["Road", "Mountain", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer nach dem Aufbau des Finales noch ausliegt, darf der Overlord 1 Overlordkarte ziehen.\n\nIhr erhaltet eine Nachricht von einer alten Schriftgelehrten aus Deephall. Sie behauptet, dass ihre Nachforschungen ergeben haben, dass die Ursache der Probleme der alten Festung in einem Artefakt begründet ist. Sie glaubt, dass die Priesterschaft von Deephall vor Jahrhunderten ein heiliges Amulett verflucht und unter dem Grabmal der Verruchten vergraben hat. Durch die so erweckten Toten konnten sie „beweisen“, dass ihr uralter Aberglaube begründet ist.",
    back: {
      overlordDe: "Der Schutz des Amuletts: Wähle nach dem Aufbau jeder Szene eine Monstergruppe und lege diese Karte neben die Monsterkarte dieser Gruppe. Erschöpfe diese Karte, wenn ein Monster dieser Gruppe angegriffen wird, bevor gewürfelt wird, um 8 Verteidigung zum Verteidigungswurf hinzuzufügen. Diese Karte wird nicht wie üblich spielbereit gemacht. Mache diese Karte zu Beginn jedes Abenteuers spielbereit.",
      heroDe: "Fluch-Brecher: Lege diese Karte nach dem Aufbau jeder Szene in den Spielbereich eines Helden. Jedes Mal, wenn dieser Held ein Monster mit dem Merkmal „Verflucht\" besiegt, gewinnt dieser Held 1 Erschöpfung zurück.",
    },
  },
  {
    id: "bloodspireofdevis", nameDe: "Devis' Blutturm", nameEn: "Bloodspire of Devis",
    expansionId: "stewards-of-the-secret", act: 2, travel: ["Road", "Water", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer nach dem Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nEs dauert Wochen, um die Erinnerungen zu analysieren, die euch von den Hütern geschenkt wurden. Ihr könnt darin den alten Hexer Devis erkennen. Mit blutbeschmierten Händen verdreht er Bestien zu schrecklichen neuen Gestalten. In Devis großem roten Turm war der widerliche Nahl'rox, eine seiner perversen Kreaturen, sein einziger Helfer. Die Erinnerungen zeigen euch, dass Nahl'rox Zugang zu einer bestimmten Ritualkammer benötigt, falls er wirklich das Wissen seines Meisters zurückgewinnen will.",
    back: {
      overlordDe: "Solange diese Karte spielbereit ist, erhält jedes Monster mit dem Merkmal Höhle: Schub: Gift Erschöpfe diese Karte während deines Zuges. Solange diese Karte erschöpft ist, hat jedes Monster mit dem Merkmal Höhle −2 Lebenskraft und erhält: Schub: Lähmung",
      heroDe: "Behaltet diese Karte im Spielbereich eines Helden. Falls der Overlord mehr als 6 Overlordkarten auf seiner Hand hat, muss er zum Ende jedes eigenen Zuges seine Handkarten bis auf 5 reduzieren.",
    },
  },
  {
    id: "attheforge", nameDe: "Die Waffenschmiede", nameEn: "At the Forge",
    expansionId: "lair-of-the-wyrm", act: 2, travel: ["Forest", "Forest", "Mountain", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nNachdem ihr von der Entführung des Schmieds Jorem Tolk erfahren habt, versucht ihr mit allen Mitteln Hinweise auf seinen Verbleib zu finden. Nach langem Suchen und Forschen hört ihr schließlich von einem geheimen Ort, an dem immer wieder Gruppen von Valyndras Schergen gesehen wurden. Vielleicht findet ihr Jorem dort …",
    back: {
      overlordDe: "Waffenlieferung: Beim Aufbau eines Abenteuers kannst du diese Karte zurück in die Schachtel legen, um so viele Erschöpfungsmarker auf eine beliebige Monsterkarte zu legen, wie Helden im Spiel sind. Ein Mal pro Würfelwurf für ein Monster dieses Typs kannst du (nach dem Wurf) 1 dieser Erschöpfungsmarker abwerfen, um dem Wurf +1 Herz oder +1 Verteidigung zu geben.",
      heroDe: "Weil Ihr es seid: Im Einkaufsschritt jeder Kampagnenphase deckt ihr 1 Marktkarte mehr auf. Außerdem dürft ihr in jedem Einkaufsschritt 1 der aufgedeckten Marktkarten für 25 Goldstücke weniger kaufen.",
    },
  },
  {
    id: "prisonoficeandlies", nameDe: "Ein Käfig aus Eis und Lügen", nameEn: "Prison of Ice and Lies",
    expansionId: "oath-of-the-outcast", act: 2, travel: ["Water", "Forest", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer nach dem Aufbau des Finales noch ausliegt, darf der Overlord 1 Overlordkarte ziehen.\n\nDie Seele der Wächterin wurde gefangen, und die Gebeine der Zwölf gestohlen. Ihr habt herausgefunden, wo sich die Schuldigen versteckt halten und dass sie planen, ein Ritual zu vollziehen, das die Wächterin vernichten und die Zwölf wiederkehren lässt. Ihr könnt nicht zulassen, dass diese grausamen Krieger wieder über die Erde wandeln.",
    back: {
      overlordDe: "Der Fluch der Zwölf: Erschöpfe diese Karte, wenn ein Monster mit dem Merkmal Verflucht seinen letzten Herz verliert. Dieses Monster gewinnt sofort 1 Herz zurück.",
      heroDe: "Nachhall der Wächterin: In der ersten Runde jeder Szene hat jedes Elite-Monster mit dem Merkmal Verflucht die Werte, Fähigkeiten und Würfel eines normalen Monsters derselben Gruppe.",
    },
  },
  {
    id: "bondsofthewild", nameDe: "Erwachen der Wildnis", nameEn: "Bonds of the Wild",
    expansionId: "bonds-of-the-wild", act: 2, travel: ["Road", "Forest", "Forest"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer beim Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nIn der Nacht werdet ihr immer wieder durch ein entferntes Geheul aus eurer wohlverdienten Nachtruhe aufgeschreckt. Der Mabinogizweig hat seine Geheimnisse noch nicht offenbart und er strahlt keine wahrnehmbare Magie aus. Bei all euren Nachforschungen seid ihr auf nichts weiter als den Namen eines einzigen Ortes gestoßen: Eine Geschichte erwähnt, dass Mabinogi auf seiner Flucht vor den Wächtern des Baums den Fluss Zarseph überquert hat. Vielleicht solltet ihr dort beginnen.",
    back: {
      overlordDe: "Heiße Rache: Während des Aufbaus jeder Szene darfst du diese Karte neben 1 Monstergruppe mit dem Merkmal Höhle legen. Jedes Mal wenn ein Held zum Ende seines Spielzuges benachbart zu mindestens 1 Monster dieser Gruppe steht, erleidet er 2 Herz und 1 Erschöpfung.",
      heroDe: "Mabinogizweig: Erschöpfe diese Karte, sobald ein Held ein Wasserfeld betritt. Dieser Held hat die Wahl, entweder 6 Herz oder 3 Erschöpfung zurückzugewinnen. Diese Karte wird nicht wie üblich spielbereit gemacht. Mache diese Karte am Ende jedes Abenteuers spielbereit.",
    },
  },
  {
    id: "wheretheheartis", nameDe: "Herzensangelegenheit", nameEn: "Where the Heart Is",
    expansionId: "manor-of-ravens", act: 2, travel: ["Road", "Road"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer beim Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nIhr konntet nicht ewig am Schloss verweilen. Also seid ihr anderen Dingen nachgegangen. Nie werdet ihr das wildgewordene Konstrukt mit dem Herz des Schlosses in der Brust vergessen. So harrt ihr des Tages, da es wiederauferstehen wird. Wenn dieser Tag kommt, so habt ihr euch geschworen, soll es ein für alle Mal vernichtet werden.",
    back: {
      overlordDe: "Wacht der Raben: Du kannst diese Karte ein Mal pro Reiseschritt jeder Kampagnenphase einsetzen, wenn eine Ereigniskarte gezogen wird, bei der beim aktuellen Reisesymbol „Nichts passiert\". Ziehe 1 Overlordkarte.",
      heroDe: "Freund der Raben: Helden können nicht todgeweiht sein.",
    },
  },
  {
    id: "treatyofchampions", nameDe: "Kontrakt der Unbesiegten", nameEn: "Treaty of Champions",
    expansionId: "treaty-of-champions", act: 2, travel: ["Water", "Forest", "Water"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer beim Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nIhr heuert einen Schreiber an, um den alten Kontrakt zu analysieren und euch Anweisungen zu geben, wie der Neue geschrieben werden sollte. Wie sich herausstellt, hatten die Helden das Schriftstück in ziemlicher Eile verfasst und verzweifelt versucht, die Angelegenheit zu erledigen, bevor sie von dem Dämonen bei lebendigem Leibe verbrannt würden. Der Schreiber erklärt, das viele Wörter falsch geschrieben und schlecht gewählt sind. Die tatsächliche Macht des Kontraktes liegt in der Hingabe und Einheit derjenigen, die ihn unterzeichnet haben.",
    back: {
      overlordDe: "Dämonischer Schüler: Erschöpfe diese Karte, wenn ein Monster mit dem Merkmal Feuer besiegt wird. Solange diese Karte erschöpft ist, erhält jedes Monster mit dem Merkmal Feuer: Aura 2: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet dieser Held 2 Herz.",
      heroDe: "Ein Freund in Bedrängnis: Ein Held kann diese Karte während seines Zuges in die Spielschachtel zurücklegen. Falls er das tut, hilft er einem Helden innerhalb von 5 Feldern Entfernung zu sich selbst auf. Der Held des aktiven Spielers gewinnt ebenso viel Herz und Erschöpfung zurück, wie der Anzahl der Herz und Erschöpfung entspricht, die der Helden dem aufgeholfen wurde zurückgewonnen hat.",
    },
  },
  {
    id: "crownofdestiny", nameDe: "Krone des Schicksals", nameEn: "Crown of Destiny",
    expansionId: "crown-of-destiny", act: 2, travel: ["Plain", "Mountain", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer beim Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nIhr habt herausgefunden, dass die legendäre Krone des Schicksals keine tatsächliche Krone ist, sondern ein verstecktes Plateau mitten im Hochgebirge. Es heißt, die Flüsse, die durch dieses verborgene Gebiet fließen, verleihen die Fähigkeit, das Schicksal zu beeinflussen. Vergangenheit und Zukunft können neu geschrieben werden.",
    back: {
      overlordDe: "Neu geschmiedet: In der Phase „Belohnungen erhalten\" der Kampagnenphase kannst du diese Karte zusammen mit beliebig vielen gekauften Overlordkarten aus deinem Deck zurück in die Schachtel legen. Du erhältst dann so viele Erfahrungspunkte, wie die zurückgelegten Karten gekostet haben.",
      heroDe: "Unerforschte Pfade: In der Phase „Belohnungen erhalten\" der Kampagnenphase können die Helden diese Karte zusammen mit beliebig vielen gekauften Klassenkarten zurück in die Schachtel legen. Jeder Held erhält so viele Erfahrungspunkte, wie seine zurückgelegten Karten gekostet haben.",
    },
  },
  {
    id: "visionsofdawn", nameDe: "Prophezeiung eines neuen Anfangs", nameEn: "Visions of Dawn",
    expansionId: "visions-of-dawn", act: 2, travel: ["Road", "Plain", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer beim Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nWährend eurer Reisen trefft ihr auf eine Landschaft, die ihr noch nie zuvor gesehen habt. Trotzdem seid ihr mit jedem Baum und jedem Busch vertraut, kennt jede Wegbiegung. In eurem Schlummer brennt eine Armee aus Trollen und Ogern jede Nacht diese Gegend nieder und plündert sie. Irgendwie habt ihr nun am hellen Tage das Land gefunden, das ihr aus euren Träumen kennt. Eure Chance, die Warnung Ig'thaleas zu beachten, ist nun gekommen.",
    back: {
      overlordDe: "Unwahrscheinliche Verbündete: Lege diese Karte während des Aufbaus des Abenteuers zwischen 2 Monsterkarten, die mindestens ein gemeinsames Merkmal besitzen. Jedes Monster dieser Gruppen erhält: Kampfbündnis: Jedes Mal wenn dieses Monster einen Angriff ausführt und dabei benachbart zu einer Figur einer anderen Monstergruppe ist, die ebenfalls dem Kampfbündnis angehört, fügt es seinem Würfelergebnis 1 Schub hinzu.",
      heroDe: "Kriegsvisionen: Solange diese Karte spielbereit ist, kann ein Held jedes Mal wenn er einen Angriff ausführt, vor dem Würfelwurf eine Wissen-Probe ablegen. Wenn er sie besteht, erhält dieser Angriff +1 Herz. Falls die Probe misslingt, wird diese Karte erschöpft. Diese Karte wird nicht wie üblich spielbereit gemacht. Sie wird zum Ende jedes Abenteuers spielbereit gemacht.",
    },
  },
  {
    id: "sourceofsickness", nameDe: "Quell der Krankheit", nameEn: "Source of Sickness",
    expansionId: "the-trollfens", act: 2, travel: ["Water", "Forest", "Water"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden.\n\nEure Nachforschungen haben ergeben, dass in den Tiefen der Sümpfe eine neue Seuche entstanden ist. Ihr hofft zwar, dass eure Bemühungen ihr Fortschreiten etwas aufhalten konnten, ihr wagt euch jedoch nicht vorzustellen, welch Verheerung sie anrichten würde, wenn sie sich in der Welt ausbreiten würde. Da ihr wisst, was auf dem Spiel steht, verliert ihr keine Zeit …",
    back: {
      overlordDe: "Unheilbar: Der Overlord kann für den Rest der Kampagne unabhängig von den Monstermerkmalen einer Szene Pestwürmer als eine seiner offenen Gruppen wählen.",
      heroDe: "Allheilmittel: Zu Beginn eines Heldenzuges können die Helden diese Karte zurück in die Schachtel legen. Dadurch werfen alle Helden sämtliche Zustandskarten und Infektionsmarker ab.",
    },
  },
  {
    id: "shadowsidewatch", nameDe: "Schattenwacht", nameEn: "Shadowside Watch",
    expansionId: "crusade-of-the-forgotten", act: 2, travel: ["Forest", "Water", "Mountain"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer nach dem Aufbau des Finales noch ausliegt, darf der Overlord 1 Overlordkarte ziehen.\n\nTrotz eurer besten Bemühungen breitet sich der Kult der Vergessenen immer weiter aus. Ihr findet Zeichen des Kultes in die Hintertüren von Kneipen eingeritzt und offen auf die Ecken offizieller Dokumente gekritzelt. Eure einzige Hoffnung ist es, ihren Anführer ausfindig zu machen und diesen schändlichen Kult auf ewig zu erledigen, indem ihr ihm den Kopf abschneidet.",
    back: {
      overlordDe: "Schattenlaterne: Lege diese Karte in deinen Spielbereich. Erschöpfe diese Karte, sobald ein Monster mit dem Merkmal Bauwerk besiegt wird. Solange diese Karte erschöpft ist, erhält jedes Monster mit dem Merkmal Bauwerk: Schatten: Wenn ein Held auf einem zu diesem Monster benachbarten Feld einen Angriff ankündigt, muss er 1 Schub einsetzen oder der Angriff gilt als Fehlschlag.",
      heroDe: "Unterbrechung der Dunkelheit: Während des Spielaufbaus dürft ihr vor dem Schritt „Monster auswählen\" diese Karte zurück in die Spielschachtel legen. Falls ihr das tut, entscheiden die Helden, welche Monstergruppen der Overlord für jede offene Monstergruppe während dieses Abenteuers nehmen muss.",
    },
  },
  {
    id: "beneaththemanor", nameDe: "Tief unterm Schloss", nameEn: "Beneath the Manor",
    expansionId: "manor-of-ravens", act: 2, travel: ["Road", "Road"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer beim Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nTagelang recherchiert ihr, wie Skarn wohl wiederauferstehen könnte. Stück für Stück erfahrt ihr von der Herkunft des Herzens des Schlosses und der Quelle seiner Macht. Schließlich spürt ihr eine alte Hexe auf, die euch die letzten wichtigen Hinweise geben kann. Sie wohnt nicht weit vom alten Schloss entfernt.",
    back: {
      overlordDe: "Groll des Schlosses: Erschöpfe diese Karte, wenn ein Held eine Aktion „Tür öffnen oder schließen\" ausführt. Der Held legt eine Gespür- oder Willenskraft-Probe nach seiner Wahl ab. Misslingt die Probe, wählst du einen zweiten Helden auf dem Spielplan. Die beiden Helden tauschen die Plätze. Diese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende des Abenteuers.",
      heroDe: "Gunst des Schlosses: Solange diese Karte nicht erschöpft ist, erhält jeder Held +1 auf seine Willenskraft (höchstens 6). Erschöpfe diese Karte, wenn eine Willenskraft-Probe eines Helden misslingt. Diese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende des Abenteuers.",
    },
  },
  {
    id: "wrongmanforthejob", nameDe: "Zur falschen Zeit am falschen Ort", nameEn: "Wrong Man for the Job",
    expansionId: "manor-of-ravens", act: 2, travel: ["Road", "Road"],
    textDe: "Solange diese Karte im Spiel ist, kann sie in der Kampagnenphase als nächstes Abenteuer gewählt werden. Wenn dieses Abenteuer beim Aufbau des Finales noch hätte gespielt werden können, aber nicht wurde, darf der Overlord 1 Overlordkarte ziehen.\n\nTagelang sucht ihr nach Skarn und Dreimesser Ollen. Bisweilen hört ihr sie nebenan kämpfen oder seht sie hinter einem der oberen Fenster miteinander ringen, doch schafft ihr es nie, tatsächlich zu ihnen zu gelangen. Eines Tages hört ihr von einem Schlüssel und einer Geheimtür, die zum Herzen des Schlosses führen soll. Wenn ihr sie findet, könnt ihr Skarn vielleicht Einhalt gebieten.",
    back: {
      overlordDe: "Fluch des Schlosses: Die Lebenskraft jedes Helden sinkt um 1 Punkt.",
      heroDe: "Kraft des Schlosses: Die Lebenskraft jedes Helden steigt um 1 Punkt.",
    },
  },
]

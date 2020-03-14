import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor() { }

  generos = [
    {
      nombre: "Acaulon",
      imagen: "assets/img/generos/Acaulon.jpg"
    },
    {
      nombre: "Aloina",
      imagen: "assets/img/generos/Aloina.jpg"
    },
    {
      nombre: "Aloinella",
      imagen: "assets/img/generos/Aloinella.jpg"
    },
    {
      nombre: "Amblystegium",
      imagen: "assets/img/generos/Amblystegium.jpg"
    },
    {
      nombre: "Amphidium",
      imagen: "assets/img/generos/Amphidium.jpg"
    },
    {
      nombre: "Anacolia",
      imagen: "assets/img/generos/Anacolia.jpg"
    },
    {
      nombre: "Andreaea",
      imagen: "assets/img/generos/andreae.jpg"
    },
    {
      nombre: "Anoectangium",
      imagen: "assets/img/generos/Anoectangium.jpg"
    },
    {
      nombre: "Anomobryum",
      imagen: "assets/img/generos/Anomobryum.jpg"
    },
    {
      nombre: "Aongstroemia",
      imagen: "assets/img/generos/Aongstroemia.jpg"
    },
    {
      nombre: "Archidium",
      imagen: "assets/img/generos/Archidium.jpg"
    },
    {
      nombre: "Astomiopsis",
      imagen: "assets/img/generos/Astomiopsis.jpg"
    },
    {
      nombre: "Atractylocarpus",
      imagen: "assets/img/generos/Atractylocarpus.jpg"
    },
    {
      nombre: "Atrichum",
      imagen: "assets/img/generos/Atrichum.jpg"
    },
    {
      nombre: "Barbula",
      imagen: "assets/img/generos/Barbula.jpg"
    },
    {
      nombre: "Bartramia",
      imagen: "assets/img/generos/Bartramia.jpg"
    },
    {
      nombre: "Brachymenium",
      imagen: "assets/img/generos/Brachymenium.jpg"
    },
    {
      nombre: "Brachymitrion",
      imagen: "assets/img/generos/Brachymitrion.jpg"
    },
    {
      nombre: "Brachythecium",
      imagen: "assets/img/generos/Brachythecium.jpg"
    },
    {
      nombre: "Braunia",
      imagen: "assets/img/generos/Braunia.jpg"
    },
    {
      nombre: "Breutelia",
      imagen: "assets/img/generos/Breutelia.jpg"
    },
    {
      nombre: "Bryoceuthospora",
      imagen: "assets/img/generos/Bryoceuthospora.jpg"
    },
    {
      nombre: "Bryoerythrophyllum",
      imagen: "assets/img/generos/Bryoerythrophyllum.jpg"
    },
    {
      nombre: "Bryomanginia",
      imagen: "assets/img/generos/Bryomanginia.jpg"
    },
    {
      nombre: "Bryoxiphium",
      imagen: "assets/img/generos/Bryoxiphium.jpg"
    },
    {
      nombre: "Bryum",
      imagen: "assets/img/generos/Bryum.jpg"
    },
    {
      nombre: "Campyliadelphus",
      imagen: "assets/img/generos/Campyliadelphus.jpg"
    },
    {
      nombre: "Campylophyllum",
      imagen: "assets/img/generos/"
    },
    {
      nombre: "Campylophylum",
      imagen: "assets/img/generos/Campylophylum.jpg"
    },
    {
      nombre: "Campylopus",
      imagen: "assets/img/generos/Campylopus.jpg"
    },
    {
      nombre: "Ceratodon",
      imagen: "assets/img/generos/Ceratodon.jpg"
    },
    {
      nombre: "Chenia",
      imagen: "assets/img/generos/Chenia.jpg"
    },
    {
      nombre: "Claopodium",
      imagen: "assets/img/generos/Claopodium.jpg"
    },
    {
      nombre: "Coscinodon",
      imagen: "assets/img/generos/Coscinodon.jpg"
    },
    {
      nombre: "Cryphaea",
      imagen: "assets/img/generos/Cryphaea.jpg"
    },
    {
      nombre: "Ctenidium",
      imagen: "assets/img/generos/Ctenidium.jpg"
    },
    {
      nombre: "Cyrto-hypnum",
      imagen: "assets/img/generos/Cyrto-hypnum.jpg"
    },
    {
      nombre: "Desmatodon",
      imagen: "assets/img/generos/Desmatodon.jpg"
    },
    {
      nombre: "Dicranella",
      imagen: "assets/img/generos/Dicranella.jpg"
    },
    {
      nombre: "Dicranoweisia",
      imagen: "assets/img/generos/Dicranoweisia.jpg"
    },
    {
      nombre: "Dicranun",
      imagen: "assets/img/generos/Dicranum.jpg"
    },
    {
      nombre: "Didymodon",
      imagen: "assets/img/generos/Didymodon.jpg"
    },
    {
      nombre: "Diphyscium",
      imagen: "assets/img/generos/Diphyscium.jpg"
    },
    {
      nombre: "Distichium",
      imagen: "assets/img/generos/Distichium.jpg"
    },
    {
      nombre: "Ditrichum",
      imagen: "assets/img/generos/Ditrichum.jpg"
    },
    {
      nombre: "Drepanocladus",
      imagen: "assets/img/generos/Drepanocladus.jpg"
    },
    {
      nombre: "Encalypta",
      imagen: "assets/img/generos/Encalypta.jpg"
    },
    {
      nombre: "Entodon",
      imagen: "assets/img/generos/Entodon.jpg"
    },
    {
      nombre: "Entosthodon",
      imagen: "assets/img/generos/Entosthodon.jpg"
    },
    {
      nombre: "Epipterygium",
      imagen: "assets/img/generos/Epipterygium.jpg"
    },
    {
      nombre: "Eustichia",
      imagen: "assets/img/generos/Eustichia.jpg"
    },
    {
      nombre: "Fabronia",
      imagen: "assets/img/generos/Fabronia.jpg"
    },
    {
      nombre: "Fissidens",
      imagen: "assets/img/generos/fissidens.jpg"
    },
    {
      nombre: "Flowersia",
      imagen: "assets/img/generos/"
    },
    {
      nombre: "Forstroemia",
      imagen: "assets/img/generos/Forstroemia.jpg"
    },
    {
      nombre: "Funari",
      imagen: "assets/img/generos/Funaria.jpg"
    },
    {
      nombre: "Gigaspermum",
      imagen: "assets/img/generos/Gigaspermum.jpg"
    },
    {
      nombre: "Globulinella",
      imagen: "assets/img/generos/Globulinella.jpg"
    },
    {
      nombre: "Grimmia",
      imagen: "assets/img/generos/Grimmia.jpg"
    },
    {
      nombre: "Gymnostomum",
      imagen: "assets/img/generos/Gymnostomum.jpg"
    },
    {
      nombre: "Haplocladium",
      imagen: "assets/img/generos/Haplocladium.jpg"
    },
    {
      nombre: "Hedwigia",
      imagen: "assets/img/generos/Hedwigia.jpg"
    },
    {
      nombre: "Hedwigidium",
      imagen: "assets/img/generos/Hedwigidium.jpg"
    },
    {
      nombre: "Hennediella",
      imagen: "assets/img/generos/Hennediella.jpg"
    },
    {
      nombre: "Herpetineuron",
      imagen: "assets/img/generos/Herpetineuron.jpg"
    },
    {
      nombre: "Herzogiella",
      imagen: "assets/img/generos/Herzogiella.jpg"
    },
    {
      nombre: "Heterophyllium",
      imagen: "assets/img/generos/Heterophyllium.jpg"
    },
    {
      nombre: "Homomallium",
      imagen: "assets/img/generos/Homomallium.jpg"
    },
    {
      nombre: "Horridohypnum",
      imagen: "assets/img/generos/Horridohypnum.jpg"
    },
    {
      nombre: "Hymenostylium",
      imagen: "assets/img/generos/Hymenostylium.jpg"
    },
    {
      nombre: "Hyophila",
      imagen: "assets/img/generos/Hyophila.jpg"
    },
    {
      nombre: "Hypnum",
      imagen: "assets/img/generos/Hypnum.jpg"
    },
    {
      nombre: "Isodrepanium",
      imagen: "assets/img/generos/Isodrepanium.jpg"
    },
    {
      nombre: "Isopterigiopsis",
      imagen: "assets/img/generos/Isopterigiopsis.jpg"
    },
    {
      nombre: "Isopterygium",
      imagen: "assets/img/generos/Isopterygium.jpg"
    },
    {
      nombre: "Kindbergia",
      imagen: "assets/img/generos/Kindbergia.jpg"
    },
    {
      nombre: "Leptodontium",
      imagen: "assets/img/generos/Leptodontium.jpg"
    },
    {
      nombre: "Leptopterigynandrum",
      imagen: "assets/img/generos/Leptopterigynandrum.jpg"
    },
    {
      nombre: "Leskea",
      imagen: "assets/img/generos/Leskea.jpg"
    },
    {
      nombre: "Leucodon",
      imagen: "assets/img/generos/Leucodon.jpg"
    },
    {
      nombre: "Leucoloma",
      imagen: "assets/img/generos/Leucoloma.jpg"
    },
    {
      nombre: "Lindbergia",
      imagen: "assets/img/generos/Lindbergia.jpg"
    },
    {
      nombre: "Lorentzeilla",
      imagen: "assets/img/generos/Lorentziella.jpg"
    },
    {
      nombre: "Macrocoma",
      imagen: "assets/img/generos/Macrocoma.jpg"
    },
    {
      nombre: "Meteorium",
      imagen: "assets/img/generos/Meteorium.jpg"
    },
    {
      nombre: "Micromitrium",
      imagen: "assets/img/generos/Micromitrium.jpg"
    },
    {
      nombre: "Mielichhoferia",
      imagen: "assets/img/generos/Mielichhoferia.jpg"
    },
    {
      nombre: "Mironia",
      imagen: "assets/img/generos/Mironia.jpg"
    },
    {
      nombre: "Mittenothamnium",
      imagen: "assets/img/generos/Mittenothamnium.jpg"
    },
    {
      nombre: "Mnium",
      imagen: "assets/img/generos/Mnium.jpg"
    },
    {
      nombre: "Molendoa",
      imagen: "assets/img/generos/Molendoa.jpg"
    },
    {
      nombre: "Neckera",
      imagen: "assets/img/generos/Neckera.jpg"
    },
    {
      nombre: "Neosharpiella",
      imagen: "assets/img/generos/Neosharpiella.jpg"
    },
    {
      nombre: "Notoligotrichum",
      imagen: "assets/img/generos/notoligotrichum_angulatum.jpg"
    },
    {
      nombre: "Oreoweisia",
      imagen: "assets/img/generos/Oreoweisia.jpg"
    },
    {
      nombre: "Orthodontium",
      imagen: "assets/img/generos/Orthodontium.jpg"
    },
    {
      nombre: "Orthotrichum",
      imagen: "assets/img/generos/Orthotrichum.jpg"
    },
    {
      nombre: "Palamocladium",
      imagen: "assets/img/generos/Palamocladium.jpg"
    },
    {
      nombre: "Paraleucobryum",
      imagen: "assets/img/generos/Paraleucobryum.jpg"
    },
    {
      nombre: "Phascum",
      imagen: "assets/img/generos/Phascum.jpg"
    },
    {
      nombre: "Philonotis",
      imagen: "assets/img/generos/Philonotis.jpg"
    },
    {
      nombre: "Physcomitrium",
      imagen: "assets/img/generos/Physcomitrium.jpg"
    },
    {
      nombre: "Pilopogon",
      imagen: "assets/img/generos/Pilopogon.jpg"
    },
    {
      nombre: "Pilotrichella",
      imagen: "assets/img/generos/Pilotrichella.jpg"
    },
    {
      nombre: "Pilotrichum",
      imagen: "assets/img/generos/Pilotrichum.jpg"
    },
    {
      nombre: "Pireella",
      imagen: "assets/img/generos/Pireella.jpg"
    },
    {
      nombre: "Plagiomnium",
      imagen: "assets/img/generos/Plagiomnium.jpg"
    },
    {
      nombre: "Plagiothecium",
      imagen: "assets/img/generos/Plagiothecium.jpg"
    },
    {
      nombre: "Platygyriella",
      imagen: "assets/img/generos/Platygyriella.jpg"
    },
    {
      nombre: "Platygyrium",
      imagen: "assets/img/generos/Platygyrium.jpg"
    },
    {
      nombre: "Pleuridium",
      imagen: "assets/img/generos/Pleuridium.jpg"
    },
    {
      nombre: "Pleuridium aurantiacum",
      imagen: "assets/img/generos/"
    },
    {
      nombre: "Pleurochaete",
      imagen: "assets/img/generos/Pleurochaete.jpg"
    },
    {
      nombre: "Pogonatum",
      imagen: "assets/img/generos/Pogonatum.jpg"
    },
    {
      nombre: "Pohlia",
      imagen: "assets/img/generos/Pohlia.jpg"
    },
    {
      nombre: "Polytrichastrum",
      imagen: "assets/img/generos/Polytrichastrum.jpg"
    },
    {
      nombre: "Polytrichum",
      imagen: "assets/img/generos/Polytrichum.jpg"
    },
    {
      nombre: "Porotrichum",
      imagen: "assets/img/generos/Porotrichum.jpg"
    },
    {
      nombre: "Prionodon",
      imagen: "assets/img/generos/Prionodon.jpg"
    },
    {
      nombre: "Pseudephemerum",
      imagen: "assets/img/generos/pseudephemerum.jpg"
    },
    {
      nombre: "Pseudocrossidium",
      imagen: "assets/img/generos/Pseudocrossidium.jpg"
    },
    {
      nombre: "Pterobryopsis",
      imagen: "assets/img/generos/Pterobryopsis.jpg"
    },
    {
      nombre: "Ptrychomitrium",
      imagen: "assets/img/generos/Ptrychomitrium.jpg"
    },
    {
      nombre: "Pylaisia",
      imagen: "assets/img/generos/Pylaisia.jpg"
    },
    {
      nombre: "Pylaisiadelpha",
      imagen: "assets/img/generos/Pylaisiadelpha.jpg"
    },
    {
      nombre: "Racomitrium",
      imagen: "assets/img/generos/Racomitrium.jpg"
    },
    {
      nombre: "Racopilum",
      imagen: "assets/img/generos/Racopilum.jpg"
    },
    {
      nombre: "Rauiella",
      imagen: "assets/img/generos/Rauiella.jpg"
    },
    {
      nombre: "Rhabdoweisia",
      imagen: "assets/img/generos/Rhabdoweisia.jpg"
    },
    {
      nombre: "Rhexophyllum",
      imagen: "assets/img/generos/Rhexophyllum.jpg"
    },
    {
      nombre: "Rhodobryum",
      imagen: "assets/img/generos/Rhodobryum.jpg"
    },
    {
      nombre: "Rhynchostegium",
      imagen: "assets/img/generos/Rhynchostegium.jpg"
    },
    {
      nombre: "Rhytidium",
      imagen: "assets/img/generos/Rhytidium.jpg"
    },
    {
      nombre: "Rozea",
      imagen: "assets/img/generos/"
    },
    {
      nombre: "Sagenotortula",
      imagen: "assets/img/generos/Sagenotortula.jpg"
    },
    {
      nombre: "Saitobryum",
      imagen: "assets/img/generos/Saitobryum.jpg"
    },
    {
      nombre: "Schistidium",
      imagen: "assets/img/generos/Schistidium.jpg"
    },
    {
      nombre: "Schizymenium",
      imagen: "assets/img/generos/Schizymenium.jpg"
    },
    {
      nombre: "Sematophyllum",
      imagen: "assets/img/generos/Sematophyllum.jpg"
    },
    {
      nombre: "Symblepharis",
      imagen: "assets/img/generos/Symblepharis.jpg"
    },
    {
      nombre: "Synthetodontium",
      imagen: "assets/img/generos/Synthetodontium.jpg"
    },
    {
      nombre: "Syntrichia",
      imagen: "assets/img/generos/Syntrichia.jpg"
    },
    {
      nombre: "Taxiphyllum",
      imagen: "assets/img/generos/Taxiphyllum.jpg"
    },
    {
      nombre: "Thuidium",
      imagen: "assets/img/generos/Thuidium.jpg"
    },
    {
      nombre: "Timmia",
      imagen: "assets/img/generos/Timmia.jpg"
    },
    {
      nombre: "Timmiella",
      imagen: "assets/img/generos/Timmiella.jpg"
    },
    {
      nombre: "Tortella",
      imagen: "assets/img/generos/Tortella.jpg"
    },
    {
      nombre: "Tortella fruchartii",
      imagen: "assets/img/generos/"
    },
    {
      nombre: "Trichostomum",
      imagen: "assets/img/generos/Trichostomum.jpg"
    },
    {
      nombre: "Uleobryum",
      imagen: "assets/img/generos/Uleobryum.jpg"
    },
    {
      nombre: "Weissia",
      imagen: "assets/img/generos/Weissia.jpg"
    },
    {
      nombre: "Zygodon",
      imagen: "assets/img/generos/Zygodon.jpg"
    }

  ]
}

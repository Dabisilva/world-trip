import { ChakraProvider } from "@chakra-ui/react";
import { createServer } from "miragejs";
import { theme } from "../styles/theme";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { ContinentProvider } from "../context/continent";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/continentsList", () => {
      return [
        {
          id: 1,
          title: "América do Norte",
          subtitle: "O continente da nova era",
          resume:
            "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.",
          countries: 3,
          languages: 7,
          citys: [
            {
              name: "Nova York",
              country: "Estados Unidos",
            },
            {
              name: "Miami",
              country: "Estados Unidos",
            },
            {
              name: "Los Angeles",
              country: "Estados Unidos",
            },
            {
              name: "Las Vegas",
              country: "Estados Unidos",
            },
            {
              name: "Orlando",
              country: "Estados Unidos",
            },
            {
              name: "Toronto",
              country: "Canadá",
            },
            {
              name: "Vancouver",
              country: "Canadá",
            },
            {
              name: "São Francisco",
              country: "Estados Unidos",
            },
            {
              name: "Honolulu",
              country: "Estados Unidos",
            },
          ],
          image:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-nova-york-capa2019-06.jpg",
        },
        {
          id: 2,
          title: "América do Sul",
          subtitle: "O local das diversidades climáticas",
          countries: 12,
          languages: 10,
          citys: [
            {
              name: "Cancun",
              country: "México",
            },
            {
              name: "Punta Cana",
              country: "República Dominicana",
            },
            {
              name: "Cidade do México",
              country: "México",
            },
            {
              name: "Buenos Aires",
              country: "Argentina",
            },
            {
              name: "Lima",
              country: "Peru",
            },
            {
              name: "Santiago",
              country: "Chile",
            },
            {
              name: "Rio de Janeiro",
              country: "Brasil",
            },
          ],
          resume:
            "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.",
          image: "https://cdn.wallpapersafari.com/28/86/FxQ6Tf.jpg",
        },
        {
          id: 3,
          title: "Ásia",
          subtitle: "O local das diversidades culturais",
          resume:
            "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
          countries: 50,
          languages: 7,
          citys: [
            {
              name: "Bangcoc",
              country: "Tailândia",
            },
            {
              name: "Hong Kong",
              country: "China",
            },
            {
              name: "Singapura",
              country: "Singapura",
            },
            {
              name: "Macau",
              country: "Macau",
            },
            {
              name: "Dubai",
              country: "Emirados Árabes",
            },
            {
              name: "Kuala Lumpur",
              country: "Malásia",
            },
            {
              name: "Shenzhen",
              country: "China",
            },
            {
              name: "Phuket",
              country: "Tailândia",
            },
            {
              name: "Istambul",
              country: "Turquia",
            },
            {
              name: "Déli",
              country: "Índia",
            },
            {
              name: "Tóquio",
              country: "Japão",
            },
            {
              name: "Antália",
              country: "Turquia",
            },
            {
              name: "Taipei",
              country: "Taiwan",
            },
            {
              name: "Guangzhou",
              country: "China",
            },
            {
              name: "Mumbai",
              country: "Índia",
            },
            {
              name: "Meca",
              country: "Arabia Saudita",
            },
            {
              name: "Seul",
              country: "Coreia do Sul",
            },
            {
              name: "Pattaya",
              country: "Tailândia",
            },
            {
              name: "Shangai",
              country: "China",
            },
            {
              name: "Agra",
              country: "Índia",
            },
            {
              name: "Osaka",
              country: "Japão",
            },
            {
              name: "Dempassar",
              country: "Indonésia",
            },
            {
              name: "Johor Bahru",
              country: "Malásia",
            },
            {
              name: "Ho Chi Minh",
              country: "Vietnã",
            },
            {
              name: "Riade",
              country: "Arábia Saudita",
            },
            {
              name: "Jaipur",
              country: "Índia",
            },
            {
              name: "Chennai",
              country: "Índia",
            },
            {
              name: "Hanói",
              country: "Vietnã",
            },
            {
              name: "Ha Long",
              country: "Vietnã",
            },
            {
              name: "Pequim",
              country: "China",
            },
            {
              name: "Jakarta",
              country: "Indonésia",
            },
            {
              name: "Dammam",
              country: "Arábia Suadita",
            },
            {
              name: "Jerusalém",
              country: "Isreal",
            },
            {
              name: "Chiang Mai",
              country: "Tailândia",
            },
            {
              name: "Zhuhai",
              country: "China",
            },
            {
              name: "Ilha de Penang",
              country: "Malásia",
            },
            {
              name: "Kyoto",
              country: "Japão",
            },
            {
              name: "Phnom Penh",
              country: "Camboja",
            },
            {
              name: "Marraquexe",
              country: "Marrocos",
            },
            {
              name: "Tel Aviv",
              country: "Israel",
            },
            {
              name: "Calcutá",
              country: "Índia",
            },
            {
              name: "Guilin",
              country: "China",
            },
            {
              name: "Siem Reap",
              country: "Camboja",
            },
            {
              name: "Jeju",
              country: "Coréia do Sul",
            },
            {
              name: "Chiba",
              country: "Japão",
            },
            {
              name: "Abu Dhabi",
              country: "Emirados Árabes Unidos",
            },
            {
              name: "Batam",
              country: "Indonésia",
            },
            {
              name: "Doha",
              country: "Qatar",
            },
            {
              name: "Krabi",
              country: "Tailândia",
            },
          ],
          image:
            "https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2019/11/shutterstock_601341215.jpg",
        },
        {
          id: 4,
          title: "África",
          subtitle: "O berço da humaninade",
          resume:
            "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.",
          countries: 54,
          languages: 2000,
          citys: [
            {
              name: "Joanesburgo",
              country: "África do Sul",
            },
            {
              name: "Cairo",
              country: "Egito",
            },
          ],
          image:
            "https://i.pinimg.com/originals/74/4a/ec/744aecb80d73f7a67290538e350bd1b4.jpg",
        },
        {
          id: 5,
          title: "Europa",
          subtitle: "O continente mais antigo",
          resume:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          countries: 50,
          languages: 3,
          citys: [
            {
              name: "Londres",
              country: "Inglaterra",
            },
            {
              name: "Paris",
              country: "França",
            },
            {
              name: "Roma",
              country: "Itália",
            },
            {
              name: "Praga",
              country: "República Tcheca",
            },
            {
              name: "Amsterdã",
              country: "Holanda",
            },
            {
              name: "Barcelona",
              country: "Espanha",
            },
            {
              name: "Milão",
              country: "Itália",
            },
            {
              name: "Viena",
              country: "Ástria",
            },
            {
              name: "Berlim",
              country: "Alemanha",
            },
            {
              name: "Veneza",
              country: "Itália",
            },
            {
              name: "Madri",
              country: "Espanha",
            },
            {
              name: "Dublin",
              country: "Irlanda",
            },
            {
              name: "Florença",
              country: "Itália",
            },
            {
              name: "Moscou",
              country: "Rússia",
            },
            {
              name: "Atenas",
              country: "Grécia",
            },
            {
              name: "Munique",
              country: "Alemanha",
            },
            {
              name: "Budapeste",
              country: "Hungria",
            },
            {
              name: "São Pertersburgo",
              country: "Rússia",
            },
            {
              name: "Lisboa",
              country: "Portugal",
            },
            {
              name: "Heraclião",
              country: "Grécia",
            },
            {
              name: "Bruxélas",
              country: "Bélgica",
            },
            {
              name: "Copenhague",
              country: "Dinamarca",
            },
            {
              name: "Varsóvia",
              country: "Polônia",
            },
            {
              name: "Cracóvia",
              country: "Polônia",
            },
            {
              name: "Lviv",
              country: "Ucrânia",
            },
            {
              name: "Frankfurt",
              country: "Alemanha",
            },
            {
              name: "Estocolmo",
              country: "Suécia",
            },
            {
              name: "Nice",
              country: "França",
            },
            {
              name: "Porto",
              country: "Portugal",
            },
            {
              name: "Rodes",
              country: "Grécia",
            },
          ],
          image:
            "https://free4kwallpapers.com/uploads/originals/2015/10/29/historic-hotel-inglaterra-in-cuba-wallpaper.jpg",
        },
        {
          id: 6,
          title: "Oceania",
          subtitle: "O mais jovem de todos",
          resume:
            "Traduzido de inglês-Oceania é uma região geográfica que inclui a Australásia, Melanésia, Micronésia e Polinésia. Abrangendo os hemisférios oriental e ocidental, a Oceania tem uma área de 8.525.989 quilômetros quadrados e uma população de mais de 41 milhões.",
          countries: 16,
          languages: 18,
          citys: [
            {
              name: "Sydney",
              country: "Austrália",
            },
            {
              name: "Melbourne",
              country: "Austrália",
            },
            {
              name: "Auckland",
              country: "Nova Zelândia",
            },
          ],
          image: "https://cdn.wallpapersafari.com/7/42/daHlzI.jpg",
        },
      ];
    });
    this.passthrough((request) => {
      if (request.url === "/_next/static/development/_devPagesManifest.json") {
        return true;
      }
    });
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentProvider>
        <Component {...pageProps} />
      </ContinentProvider>
    </ChakraProvider>
  );
}

export default MyApp;

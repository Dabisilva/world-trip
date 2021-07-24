import { ChakraProvider } from "@chakra-ui/react";
import { createServer } from "miragejs";
import { theme } from "../styles/theme";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/continentsList", () => {
      return [
        {
          id: 1,
          title: "América do Norte",
          subtitle: "O continente da nova era",
          image:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-nova-york-capa2019-06.jpg",
        },
        {
          id: 2,
          title: "América do Sul",
          subtitle: "O local das diversidades climáticas",
          image: "https://cdn.wallpapersafari.com/28/86/FxQ6Tf.jpg",
        },
        {
          id: 3,
          title: "Ásia",
          subtitle: "O local das diversidades culturais",
          image:
            "https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2019/11/shutterstock_601341215.jpg",
        },
        {
          id: 4,
          title: "África",
          subtitle: "O berço da humaninade",
          image:
            "https://i.pinimg.com/originals/74/4a/ec/744aecb80d73f7a67290538e350bd1b4.jpg",
        },
        {
          id: 5,
          title: "Europa",
          subtitle: "O continente mais antigo",
          image:
            "https://free4kwallpapers.com/uploads/originals/2015/10/29/historic-hotel-inglaterra-in-cuba-wallpaper.jpg",
        },
        {
          id: 6,
          title: "Oceania",
          subtitle: "O mais jovem de todos",
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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

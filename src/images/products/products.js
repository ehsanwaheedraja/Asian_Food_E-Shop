import Biryani from "./Biryani-06.png";
import Falooda from "./Faloda-03.png";
import Gulab from "./Gulab-01.png";
import Ras from "./Ras-02.png";
import Tukra from "./Tukra-04.png";
import Sheer from "./Sheer-05.png";
import Tikka from "./Tikka-07.png";
import Seekh from "./Seekh-08.png";
import Fish from "./Fish-09.png";
import White from "./White-10.png";
import Broast from "./Broast-11.png";

import Basmati from "./Basmati-Rice.png";
import Coriander from "./Coriander-Powder.png";
import Cumin from "./Cumin-Powder.png";
import Kideny from "./Kideny-Beans.png";
import Red from "./Red-Chilli-Powder.png";
import Split from "./Split-Chick-Peas.png";
import Wheat from "./Wheat-Flour.png";
import Turmeric from "./Turmeric-Powder.png";

export const getImages = (image) =>
  ({
    Biryani,
    Basmati,
    Coriander,
    Cumin,
    Kideny,
    Turmeric,
    Wheat,
    Split,
    Red,
    Falooda,
    Gulab,
    Ras,
    Tukra,
    Sheer,
    Tikka,
    Seekh,
    Fish,
    White,
    Broast,
  }[image ?? Broast]);

import "./HomePage.css";
import { Button, ButtonGroup, colors, Menu, SvgIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import FeatureCard from "../FeatureCard/FeatureCard";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import AboutUs from "../AboutUs/AboutUs";
import FoodMenu from "../FoodMenu/FoodMenu";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import BookATable from "../BookATable/BookATable";
import ChefCard from "../ChefCard/ChefCard";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

export default function HomePage() {
  return (
    <div className="home-page-cntr">
      <div className="restaurant-cntr">
        <div className="restaurant-title-cntr">
          <NavBar current="home" />
          <div className="intro-cntr">
            <div className="intro-txt">
              <h1>Enjoy Our Delicious Meal!</h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FEA116",
                  "&:hover": {
                    backgroundColor: "#bd7200",
                  },
                }}
              >
                Book A Table
              </Button>
            </div>
            <img
              className="meal-img"
              src="https://s3-alpha-sig.figma.com/img/9bfd/833a/48bc3cf6c6c93520784775b7ac29d44f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XxDwD23fYDqT2Z4gW2YLAO7cvkn5o2oV3nGBtvx9PG945zS2wjcGLS9T0l9EgsGTV50ZOeeALnUHGBslEm-9UOa-~4fZfHI~UsmkSouy7aOggc9U8fhfEIjdOARcBiCU34aTuZ-fTSr1xJZAe8CW9NFzQ1recDjGFOtximuDpkM0-JGI4UoOCA2o3uyDnHIs9UMMfIcokf8uV8-o8GtJzyZUiJHfDkzMsP58ln3BRJmSMhHktPetaegq1cEDJyk1G6qGy0PUSKV~Ur7B4njzE16rDo1ojD4eha-W9vZgKAsylsu7OwYGBvKtG48PVJP0HA3~yZphd8tdCc-jw7xQFw__"
            />
          </div>
        </div>
      </div>
      <div className="feature-cntr">
        <FeatureCard
          icon={PersonIcon}
          title="Master Chefs"
          text="Diam elitr kasd sed at elitr
            sed ipsum justo dolor sed
            clita amet diam"
        />
        <FeatureCard
          icon={RestaurantIcon}
          title="Quality Food"
          text="Diam elitr kasd sed at elitr
            sed ipsum justo dolor sed
            clita amet diam"
        />
        <FeatureCard
          icon={ShoppingCartIcon}
          title="Online Order"
          text="Diam elitr kasd sed at elitr
            sed ipsum justo dolor sed
            clita amet diam"
        />
        <FeatureCard
          icon={HeadsetMicIcon}
          title="24/7 Service"
          text="Diam elitr kasd sed at elitr
            sed ipsum justo dolor sed
            clita amet diam"
        />
      </div>
      <AboutUs />
      <FoodMenu />
      <BookATable />
      <div className="team-members-cntr">
        <div className="team-members-title-cntr">
          <div className="team-members-horizontal-line"></div>
          <p className="team-members-stylized">Team Members</p>
          <div className="team-members-horizontal-line"></div>
        </div>
        <h1 style={{ marginTop: 0, marginBottom: "20px" }}>
          <b>Our Master Chefs</b>
        </h1>
        <div className="chefs-cntr">
          <ChefCard
            picture="https://s3-alpha-sig.figma.com/img/678e/bd51/2b1597ac257ef87a9ff59a8e245a60ab?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGzvcD~yArOhhoKeVgpTeX9aapU~rZAxfpxuYRFoYeBfeII7EpRtcWIXrYQqUiqGjnmmwSPJhVU9BAcTUZhFCZMuoHIfSdJctmeNP7HMAkROLTUx3WMFYZODwK6jfewHgvfGi2xAiDbSMbHIpbY~lzX5wMLa35bBNmK5h4eQ1zbGcw2GjSYXswrwSfDtC2UdMs9Ibukwe2VSkCyiL5KpQ6bSUm8-l1n-Ur7S1lsHWl2QzZRCrl~hzA4DVpn3MA6vkRi3eNPYQGVoo8DfC1eFzfNHlupkUKr0BLHhvdZxSBtHViKOkyjYJ-mfwSpXF4WF3k2MHfDq5pF9uuJUfoEFzQ__"
            name="Gordon Ramsay"
            designation="Chef de Cuisine"
          />
          <ChefCard
            picture="https://s3-alpha-sig.figma.com/img/fe89/01d1/3e4622dce03344871ef8b314e0403f90?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e5ScKQip002DIncTKd~62fzk3Firjw3UU6eqfjv4mauuNLLSgNaUUCGoycQ9BhKref7FVirSk8K4r57FsDmvNMJ3fJs4bBxKTEY1xwyb5MOaRjEFc08PBKUsGwndndwMJrzF06t5cLQloVrFSLij0o9U8bNJFNl~rFopDobQFQuoabiMIAjZ9znbcGPv9E0TmrbmZa9CPuDAHCf4MsS-H09Vld20q16uffCktcQuhmMvzg~3cR0X~oyG4-qepXGCuXSeK39bP35DyzXkK9-nPVkmN6OnAOz2CHV4HKnS6p3DgvKKwNmV3FIA4Uk3Mr~8b-hSdxtJAOqvdnGVlJxWfA__"
            name="Jaime Oliver"
            designation="Sous Chef"
          />
          <ChefCard
            picture="https://s3-alpha-sig.figma.com/img/bfc4/a288/accdb5af659fe394a008793b4ffbd4c7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSWdkW5~hu-T86mMxOZkWWPImEiG3csC-r8-skV3ZtBTmMc2KijtVeGBmj16QF9ljxo5qKjGY~UEv5Qe30S0~8imMAP9rHVizTL37gEsj5XsqazOrFvoZTjFH8RroEdGstzFYQklIJ7ejx9r35Nms~czofg3nQmTy7FJBt~-lNsZIxYcyeoOdM8W6mtZMJCUuEgc5SYYWrKQSQ6ciKRlsAD6-fUbglFwblP9mDQoBjqjufs3DVUGaWn9JEIzarsjDD-RAK6Bf2uuxs66vKdcYZdNoHigmdVzTV3NS7LpXNRXdAfqvNMZdDtt3XTQqMGZ4RdIGFOnkpVm~zgVtmN6lA__"
            name="Joushua Weismann"
            designation="Chef de Partie"
          />
          <ChefCard
            picture="https://s3-alpha-sig.figma.com/img/6cb3/bfe5/e397cf73bbd42c90b75b867ae7b57b96?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N0~TlwFPiwU-VusL8f2nvlykDiEtKl36I4Uhfs2On896KDeA3xRby-Tgc68zrwEnMk8ib5-Ga2fTG8g-4qrOL-lGzYCC8xIUXDKloCLSSVBprBbq8v9gMNYI~~b23X4Rum3qbdSuBIETKsa8h2nflsAjYDK~~9NDKMLbMhi0b8dxhHoU7NTr7amXhZCENQBWnYrQHBoKK5IDtsrtHz8-AnKzssacVnIakd5U5W22LtsRUUK6Aye5gX1ILvnrTX2KFfncgMh5llsVhnNHicxV8SOqUi5HN0uv23RaACs6pHyV-qz6ECK8UYbKWjOAXm0CXvDs5rWdVRKsJav4XRym-Q__"
            name="Ethan Cheblowski"
            designation="Commis Chef"
          />
        </div>
      </div>
      <div className="testimonial-cntr">
        <div className="testimonial-title-cntr">
          <div className="testimonial-horizontal-line"></div>
          <p className="testimonial-stylized">Testimonials</p>
          <div className="testimonial-horizontal-line"></div>
        </div>
        <h1 style={{ marginTop: 0, marginBottom: "20px" }}>
          Our Clients Say!!!
        </h1>
        <div className="reviews-cntr">
          <TestimonialCard
            picture="https://s3-alpha-sig.figma.com/img/611a/c053/d9c5a3c5ad29ba0a3d99cf1ec3ea9b03?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IUT75rmCtpFgtAiUHrVRhjn3JXuWFkHMaX4qUHibFh0HV~wVY73klyjZmmpM2f8eVickwLGjV5he5ZlDx8jHoxLe5xGCNwTEd1ZkhkDd13P0sesJRHxH~iWO-C9L9eTt~LT-DPlGxrcAQ2-hsJ6ZPpY2A63QTiq27yuJl1UF-cNK-0Dr-hSh8li71a3iX0rlElGJKdrPcnC0PrfBD36Hn5~y2NMjED~bBkd9n~pzX40MubKlQG14EJ79vZR9MIKHAwttXVaqW6tW7FBJ88e16SzHX9FFO~OqAeGhFZoHJ4un53Q~cbcQSQ8TBAF2ZgW5vQ3qj~TM~o0cqqLA-TinRg__"
            review="Great Food! The ambiance enhances the food greatly. It's clear that the owners really care about the overall dining experience."
            name="Salma Chishti"
            profession="Restauranteur"
          />
          <TestimonialCard
            picture="https://s3-alpha-sig.figma.com/img/e8b6/b7e8/c3183e10ba1352828e67611d641782da?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ll-Pl~QFoOmpqwt06A1K3LRFJrUV9L0nY1FRtTd8gkcgP48j9tL3PyrcWs5aM1DZWl-94P~N8Oa37U~Wddec~2wFXLsXqnD4WLIbryn7cGNwpDaI2RwutlvIYZnZuPlg-gwAZ4KESvQn87x2CqLb20~3cyQdvcVvw~x~jLlkg5NjMCdv1grdD9TqG9WE8m0vXAqAhBUCIUN2qTp3te7LAeNzWwDIARV6fPEcurQC1TcPBlg6kz5DVG~8dvADCp2Xc-6yK8HBFLA9~NH4VO2P1OYX1HsPOq~YPVJRvJvbxvai7FGs~jnfFOXml-okfl6oQcJ4~tQE3YHFdQBSW72JTg__"
            review="The food was enjoyable and the service was beyond reproach! Definitely patronizing this establishment in the future!"
            name="Chris Applebee"
            profession="Professor"
          />
          <TestimonialCard
            picture="https://s3-alpha-sig.figma.com/img/23a6/7cc1/fb792f7e7dbd5f0f89136f5b056976b3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hAo7uE~RJ5NKznJR91R1tnUNs9Lb-DgXuY9k7gNgWPmpe0LJJofegF7-5zb2AwMx6~YnBbKmAQ0fVZG34oHiWq0q8znyNZfPSe~5YebJFk4TsyyjfLK6jycQDVWg5RUhtLB9SPbpjj7OPjPIUdUXrkpNVm5zOO3Qoyd0mz~oWhooxNlBhdoTwoE7TlPAJXEg2mNHK8eFKqCCwqnCo7tywhJNlawmG4mEBO3RQI2gqc2PtrAfvbMQXV0mavlwYaENOaK53mFVqzFqNv7YZ1OZ-Xlers0U6m24qB~xoM8MJJYbdGmSslnZe6Y~KgbOwkk4CKAZMuf0Q1aRhsI6r8Acbg__"
            review="I don't think I've ever had such attentive and doting service before! Excellent staff at Restoran, though the name could use some work!"
            name="Kyle Lozenge"
            profession="Football Coach"
          />
        </div>
      </div>
      <div className="scroll-top-btn-cntr">
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}

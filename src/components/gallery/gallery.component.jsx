import React from "react";
import "./gallery.styles.scss";
import GalleryCard from "./galleryCard.component";
import Photos from "./photos.component";
import AllGallery from "./images/allgallery.component";

const Gallery = () => {
  return (
    <div className="main__gallery__container">
      <h1 className="main__gallery__container-heading">
        Welcome to kaya's Gallery.
      </h1>
      <div className="main__gallery__container-box">
        <GalleryCard
          current_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/9ygi6a3nynd4vw1fuwnfs/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-11.jpeg?rlkey=a693m3tzzcbsf8mww99dmqdow&dl=0"
          }
          current_project__name={"ATC Tires Pvt Ltd"}
          current_project__place={"Vikhroli, Mumbai"}
          current_project__description={
            "Welcome to ATG, located in Prestigious Mumbai"
          }
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/fo6meuf5qmbte502ubhw9/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-42.jpeg?rlkey=356amjiwuejnp19skc5x3aq4m&dl=0"
          }
          project__name={"Meeting Room"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/qolxveecv3dlvtyuyhnxd/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-44.jpeg?rlkey=f7764si52a55n159j7dr48j3z&dl=0"
          }
          project__name={"Lobby Area"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/tko7bsi3zftd0hsxxs9fc/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-46.jpeg?rlkey=ztgup2c1lkicymsnvzxdwaj4c&dl=0"
          }
          project__name={"Office Area 1"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/lfib8exgxv66kcs7uzkis/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-36.jpeg?rlkey=jjkswukq8n4s4c5pe350z1bcv&dl=0"
          }
          project__name={"Washroom Area"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/u4r76zvdc57zgldakc6av/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-40.jpeg?rlkey=yzbzyldfykjw1hs594949ows9&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/nef3czp8gzi8u3p4lyeqw/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-35.jpeg?rlkey=yoandfod6ru549e8dhvp140pi&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/8vk0c32lq4zu9lty5jnqz/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-15.jpeg?rlkey=fz3qc5z168bkcbnoxmokonsob&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/8yjuzi03ryjjxbaf2moua/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-12.jpeg?rlkey=f30iw44rfs9t5vvaufvvfb6j1&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
      </div>
      {/* ERFO WIP */}
      <div className="main__gallery__container-box">
        <GalleryCard
          current_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/tc2rmru9iop49e5uyxj7t/Ergo-WIP-21.jpeg?rlkey=umyjgv30uc7yc013d85v2rr70&dl=0"
          }
          current_project__name={"ERGO WIP."}
          current_project__place={"Vikhroli, Mumbai"}
          current_project__description={
            "Welcome to ATG, located in Prestigious Mumbai"
          }
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/8lnnzokpmli4qb0a60c52/Ergo-WIP-11.jpeg?rlkey=yrwpndlw4xyqjyu7hjmqvbnyr&dl=0"
          }
          project__name={"Meeting Room"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/8lnnzokpmli4qb0a60c52/Ergo-WIP-11.jpeg?rlkey=yrwpndlw4xyqjyu7hjmqvbnyr&dl=0"
          }
          project__name={"Lobby Area"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/6wgk1obu0h4hp0mgpbbte/Ergo-WIP-25.jpeg?rlkey=bm65o8gjjxb0yc0gvi29my8ku&dl=0"
          }
          project__name={"Office Area 1"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/wkeem177gwn0yfd9fulm0/Ergo-WIP-4.jpeg?rlkey=etpj7fpfqa1ttj41p81uztgau&dl=0"
          }
          project__name={"Washroom Area"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/6wgk1obu0h4hp0mgpbbte/Ergo-WIP-25.jpeg?rlkey=bm65o8gjjxb0yc0gvi29my8ku&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/loiv7f8ehb3hk2dihnlho/Ergo-WIP-37.jpeg?rlkey=5y4zn4jj0w7i4vysdj97vv8ts&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/i4iwwccsyjzwkx95ndzjj/Ergo-WIP-42.jpeg?rlkey=qdinc5mrvo5zdbvhkerflii4s&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
        <Photos
          sub_project__image={
            "https://dl.dropboxusercontent.com/scl/fi/dytti5qo8wgv7vk9xh3ox/Ergo-WIP-49.jpeg?rlkey=2ixb0u6stcjp285f02s041g03&dl=0"
          }
          project__name={"Office Area 2"}
          project__description={""}
        />
      </div>
    </div>
  );
};

export default Gallery;

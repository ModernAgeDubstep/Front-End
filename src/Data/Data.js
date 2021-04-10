// Artist Photos:
import rilla from "../assets/ArtistPhotos/rilla1.png";
import rilla2 from "../assets/ArtistPhotos/rilla2.jpg";
import rilla3 from "../assets/ArtistPhotos/rilla3.png";
import virtualRiot from "../assets/ArtistPhotos/vriot.jpg";
import tPlanet from "../assets/ArtistPhotos/12planet.jpg";
import fCarrot from "../assets/ArtistPhotos/50carrot.jpg";

// Release Photos:
import release1 from "../assets/ReleasePhotos/release1.jpeg";
import release2 from "../assets/ReleasePhotos/release2.png";
import release3 from "../assets/ReleasePhotos/release3.jpeg";

export const data = {
  madSocials: {
    id: 1,
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com/ModernAgeDubstep",
    spotify: "https://www.spotify.com",
    youtube: "https://www.youtube.com",
    twitter: "https://www.twitter.com",
  },
  artists: [
    { artist_name: "Rilla", artist_photo: rilla },
    { artist_name: "Virtual Riot", artist_photo: virtualRiot },
    { artist_name: "12th Planet", artist_photo: tPlanet },
    { artist_name: "50 Carrot", artist_photo: fCarrot },
    { artist_name: "Rilla Dubstep", artist_photo: rilla2 },
    { artist_name: "Rilladubz", artist_photo: rilla3 },
  ],
  releasePhotos: [release1, release2, release3],
};

// Array of tab names needed for the SiteNavBar tab elements.
// removing this array will cause SiteNavBar Tests to fail.
export const siteTabNames = ["Roster", "Shop", "Videos", "Contact"];

// Array of tab names needed for the ShopNavBar tab elements.
// removing this array will cause SiteNavBar Tests to fail.
export const shopTabNames = ["All Items", "Hats", "Shirts", "Accessories"];

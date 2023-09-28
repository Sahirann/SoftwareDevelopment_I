import React from "react";
import { useState, useCallback ,useEffect} from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import "./MainPage.scoped.css";
import Card from "../components/Card";
import Review from "../components/Review";
import WReview from "../components/wReview";
import "leaflet/dist/leaflet.css";
import "./MainPage.css"
import axios from "axios"
import { Icon, imageOverlay } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
////
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
///



const MainPage = () => {
  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const openMenu = useCallback(() => {
  //   setMenuOpen(true);
  // }, []);

  // const closeMenu = useCallback(() => {
  //   setMenuOpen(false);
  // }, []);

  const markerred = [
    {
      geocode: [13.822469, 100.511893],
      popUp: "pop up 1"
    },
    {
      geocode: [13.825662, 100.514739],
      popUp: "pop up 1"
    },
    {
      geocode: [13.824451, 100.513564],
      popUp: "pop up 1"
    }

  ]

  const markers = [
    {
      geocode: [13.821409, 100.513405],
      popUp: "pop up 1"
    },
    {
      geocode: [13.824774, 100.515854],
      popUp: "pop up 1"
    },
    {
      geocode: [13.824072, 100.516106],
      popUp: "pop up 1"
    }

  ]
  const markericon = new Icon({
    iconUrl: "/Pinorange.png",
    iconSize: [70, 38]
  })

  const markericonred = new Icon({
    iconUrl: "/Pinred.png",
    iconSize: [50, 50]
  })

  // const position = [51.505, -0.09]
  const [detail, setdetail] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setdetail(response.data);
      console.log("update");
    }).catch((err) => { console.log(err) });
  }, []);
  const detailcard = detail.map((data, index) => {
    return <Card key={index} data={data} ></Card>
  })

  return (
    <div>
      {/* <div className="navbarja">
        <Menu/>
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
      </div>
      <div className="mapja">
        <MapContainer center={[13.821813, 100.514062]} zoom={20}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map(marker => (
            <Marker position={marker.geocode} icon={markericon}>

            </Marker>
          ))
          }
        </MapContainer>

      </div> */}
      
      <div className="containermap">
        <MapContainer center={[13.821813, 100.514062]} zoom={20}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map(marker => (
            <Marker position={marker.geocode} icon={markericon}></Marker>
          ))
          }
          {markerred.map(marker => (
            <Marker position={marker.geocode} icon={markericonred}></Marker>
          ))
          }


        </MapContainer>
      </div>
      
      <div className="navbar">
        <Navbar />
      </div>
      

      {/* {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )} */}
    </div>
  );
};

export default MainPage;

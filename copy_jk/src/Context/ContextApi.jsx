import { createContext, useState } from "react";

export const ContextData = createContext(null);

const arrObj = [
  {
    id: 1,
    propertyImg: "https://ajproperty.in/uploads/house-malhaur1.jpg",
    imgName: "house-malhaur1.jpg",
    propertyType: "House",
    price: "80 Lakhs",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Malhaur,Lucknow-U.P",
    propertyLength: "1350/sqft Sqft",
    bedSize: "3 Bed",
    bathSize: "3 Bath",
  },
  {
    id: 2,
    propertyImg: "https://ajproperty.in/uploads/malhaur2.jpg",
    imgName: "malhaur2.jpg",
    propertyType: "House",
    price: "75 Lakhs",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Malhaur,Lucknow-U.P",
    propertyLength: "1150/sqft Sqft",
    bedSize: "3 Bed",
    bathSize: "3 Bath",
  },
  {
    id: 3,
    propertyImg: "https://ajproperty.in/uploads/plots3.jpg",
    imgName: "plots3.jpg",
    propertyType: "Plots",
    price: "80 Lakhs",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Farm House, Kissan Path, Lucknow - U.P",
    propertyLength: "1000-2000/sqft Sqft",
    bedSize: "0 Bed",
    bathSize: "0 Bath",
  },
  {
    id: 4,
    propertyImg: "https://ajproperty.in/uploads/plots4.jpg",
    imgName: "plots4.jpg",
    propertyType: "Plots",
    price: "80 Lakhs",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Farm House, Kissan Path, Lucknow - U.P",
    propertyLength: "1000-2000/sqft Sqft",
    bedSize: "0 Bed",
    bathSize: "0 Bath",
  },
  {
    id: 5,
    propertyImg: "https://ajproperty.in/uploads/plots5.jpg",
    imgName: "plots5.jpg",
    propertyType: "Plots",
    price: "80 Lakhs",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Farm House, Kissan Path, Lucknow - U.P",
    propertyLength: "1000-2000/sqft Sqft",
    bedSize: "0 Bed",
    bathSize: "0 Bath",
  },
  {
    id: 6,
    propertyImg: "https://ajproperty.in/uploads/plots6.jpg",
    imgName: "plots6.jpg",
    propertyType: "Plots",
    price: "8 Cr",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Farm House, Kissan Path, Lucknow - U.P",
    propertyLength: "1000-2000/sqft Sqft",
    bedSize: "0 Bed",
    bathSize: "0 Bath",
  },
  {
    id: 7,
    propertyImg: "https://ajproperty.in/uploads/home10.jpg",
    imgName: "home10.jpg",
    propertyType: "Home",
    price: "89 Lakhs",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Farm House, Kissan Path, Lucknow - U.P",
    propertyLength: "1000-2000/sqft Sqft",
    bedSize: "0 Bed",
    bathSize: "0 Bath",
  },
  {
    id: 8,
    propertyImg: "https://ajproperty.in/uploads/plot11.jpg",
    imgName: "plot11.jpg",
    propertyType: "Plots",
    price: "88 Lakhs",
    client: "A.J. PROPERTIES FOR SELL",
    propertyLocation: "Farm House, Kissan Path, Lucknow - U.P",
    propertyLength: "1000-2000/sqft Sqft",
    bedSize: "0 Bed",
    bathSize: "0 Bath",
  },
];

export const ContextProvider = (Props) => {
  const [myContextData] = useState(arrObj);

  return (
    <ContextData.Provider value={{ myContextData }}>
      {Props.children}
    </ContextData.Provider>
  );
};

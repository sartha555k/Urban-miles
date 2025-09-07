import React from "react";

function LocationSearchPanel(props) {
  const location = [
    "900/9 nanda nagar,lig squre,indore ..........................",
    "901/9 nanda nagar,lig squre,indore ..........................",
    "902/9 nanda nagar,lig squre,indore ..........................",
    "903/9 nanda nagar,lig squre,indore ..........................",
  ];
  return (
    <div>
      {location.map(function (element, id) {
        return (
          <div
          key = {id}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelopen(false);
            }}
            className="flex items-center border-2 p-3  my-4 mx-2 rounded-2xl justify-start "
          >
            <h2 className="bg-gray-300 h-10 w-10 flex justify-center rounded-full p-2 mr-4">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{element}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default LocationSearchPanel;

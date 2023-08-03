interface cameraDetails {
  name: string;
  code: string;
}

const fhaz: cameraDetails = {
  name: "Front Hazard Avoidance",
  code: "fhaz",
};

const rhaz: cameraDetails = {
  name: "Rear Hazard Avoidance",
  code: "rhaz",
};

const navcam: cameraDetails = {
  name: "Navigation",
  code: "navcam",
};

const mast: cameraDetails = {
  name: "Mast",
  code: "mast",
};

export const roverCameras = {
  Curiosity: [fhaz, rhaz, navcam, mast],
  Opportunity: [fhaz, rhaz, navcam],
  Spirit: [fhaz, navcam],
};

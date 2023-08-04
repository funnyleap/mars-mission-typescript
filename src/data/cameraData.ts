interface CameraDetails {
  name: string;
  code: string;
}

const fhaz: CameraDetails = {
  name: "Front Hazard Avoidance",
  code: "fhaz",
};

const rhaz: CameraDetails = {
  name: "Rear Hazard Avoidance",
  code: "rhaz",
};

const navcam: CameraDetails = {
  name: "Navigation",
  code: "navcam",
};

const mast: CameraDetails = {
  name: "Mast",
  code: "mast",
};

export const roverCameras = {
  Curiosity: [fhaz, rhaz, navcam, mast],
  Opportunity: [fhaz, rhaz, navcam],
  Spirit: [fhaz, navcam],
};

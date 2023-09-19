export type ResponseGeoipify = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: string;
    lng: string;
    postalCode: string;
    timezone: string;
    geonameId: string;
  };
  as: {
    asn: string;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};

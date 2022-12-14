import { LatLngBoundsExpression } from "leaflet";

interface Order {
  orderId: string;
  eventId: string;
  tickets: Ticket[];
  addOnProducts?: AddOnProduct[];
  totalPrice: number;
  paymentMethod: string;
  customerInfo: CustomerInfo;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
}

interface Event {
  id: string;
  name: string;
  description: string;
  image: string;
  logo?: string;
  dates: Dates;
  tickets: Ticket[];
  locationInfo?: EventLocationInfo;
  contactInfo?: EventContactInfo;
  program: Program;
  rules: { [key: string]: string };
  addOnProducts: AddOnProduct[];
}

interface Program {
  artists: Artist[];
  scenes: Scene[];
  happenings: Happening[];
}

interface Artist {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface Happening {
  id: string;
  name: string;
  description: string;
  artistId: string;
  sceneId: string;
  startDate: Date;
  endDate: Date;
}

interface Scene {
  id: string;
  name: string;
  description?: string;
  location?: string;
}

interface EventLocationInfo {
  address: string;
  zipCode: string;
  city: string;
  country?: string;
}

interface EventContactInfo {
  email: string;
  phoneNumber: number;
  website?: string;
}

interface Ticket {
  id: string;
  name: string;
  price: number;
  discountCode?: DiscountCode[];
  description: string;
  icon: string;
  createdDate?: string;
}

interface AddOnProduct {
  id: string;
  name: string;
  price: number;
  type: string;
  description: string;
  stock?: number;
  hotelRoom?: string;
  parkingSpot?: string;
  bounds?: LatLngBoundsExpression;
  startDate?: Date;
  endDate?: Date;
}

interface DiscountCode {
  id: string;
  name: string;
  description?: string;
  discount: number;
  code: string;
  type: string;
}

interface Dates {
  startDate: Date;
  endDate: Date;
}

export type {
  Event,
  Ticket,
  AddOnProduct,
  DiscountCode,
  Dates,
  Order,
  CustomerInfo,
  EventLocationInfo,
  Program,
  Artist,
  Happening,
  Scene,
  EventContactInfo,
};

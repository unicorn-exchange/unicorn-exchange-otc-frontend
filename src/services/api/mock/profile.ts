import {IProfile} from "../../../types/api/interfaces";
import {defaultResponse} from "./default_response";

export const profile: IProfile = {
  RUICode: 0,
  errors: [],
  ok: false,
  lastName: "Curts",
  name: "Cauzion",
  rating: 3,
  fiscalCode: 210,
  photo: "",
  location: "Russia",
  mail: "lpefoqo@gmail.com",
  card: 92388423774923,
  phone: 89478132218,
  ...defaultResponse
};

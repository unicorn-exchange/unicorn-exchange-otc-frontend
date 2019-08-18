import {IDefaultRes} from "./responses";

export interface IProfile extends IDefaultRes {
  name: string;
  lastName: string;
  rating: number;

  /**
   * The RUICode is a unique code to identify an insurance intermediaries,
   * consisting of a letter and 9 numbers for Italy (Ex. A798563187,B944238647,E786613671),
   * different composition in other country
   */
  RUICode: number;
  photo: string;
  fiscalCode: number;
  location: string;
  phone: number;
  mail: string;
  card: number;
}

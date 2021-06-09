import firebase from 'firebase/app';

export interface Card {
  image: string;
  description: string;
  efect: string|null;
}

export interface Character {
  _id: string;
  name: string;
  image: string;
  // attribute: string;
  // habilities: Habilities;
  // pasive: Card;
  // ultimate: Card;
}

export interface Hability {
  level1: Card;
  level2: Card;
  level3: Card;
}

export type Habilities = Hability[];

export type User = firebase.User;

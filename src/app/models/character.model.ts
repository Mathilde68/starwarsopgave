export interface Character {
  uid: string;
  name: string;
  url: string;
  details: CharacterDetails
}

export interface CharacterDetails {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
}
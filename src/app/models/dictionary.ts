export interface Distionary {
    currency : [String],
    users: [User],
}
export interface User {
  fullName:String,
  pesel:String,
  iban:String

}
export interface Register{
    money: number,
    name: String,
    pesel: String,
    surname: String
  }
export interface Created {
  created: boolean,
  message: String,
  name: String,
  surname: String
}
export interface Error {
  error:String,
  timesttmp: Date
}

export interface Account {
    accounts: [
      {
        currency: String,
        money: number
      }
    ],
    currency: String,
    iban: String,
    money: number,
    surname: String,
    user: String
}
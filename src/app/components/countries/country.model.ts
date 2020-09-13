export class Country {
  public name: string;
  public region: string;
  public flag: string;
  public capital: string;
  public population: number;
  public latitude: number;
  public longitude: number;
  public color: string;

  constructor(
    name: string,
    region: string,
    flag: string,
    capital: string,
    population: number,
    latitude: number,
    longitude: number,
    color: string
  ) {
    this.name = name;
    this.region = region;
    this.flag = flag;
    this.capital = capital;
    this.population = population;
    this.latitude = latitude;
    this.longitude = longitude;
    this.color = "#16a085";
  }
}

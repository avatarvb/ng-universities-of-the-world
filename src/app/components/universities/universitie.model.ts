export class Universitie {
  public country: string;
  public state_province: string;
  public web_pages: string;
  public domains: string;
  public alpha_two_code: number;

  constructor(
    country: string,
    state_province: string,
    web_pages: string,
    domains: string,
    alpha_two_code: number
  ) {
    this.country = country;
    this.state_province = state_province;
    this.web_pages = web_pages;
    this.domains = domains;
    this.alpha_two_code = alpha_two_code;
  }
}

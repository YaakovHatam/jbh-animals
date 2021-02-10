import { CountryModel } from "./country.model";

export interface AnimalModel {
    name: string;
    lifeTimeAverage: number;
    readMoreLink: URL;
    LivingCountries?: CountryModel[];
}

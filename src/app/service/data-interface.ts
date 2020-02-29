export class DataInterface {
    public name: string;
    public population: number;
    public climate: string;

    constructor(name: string, population: number, climate: string) {
        this.name = name;
        this.population = population;
        this.climate = climate;
    }
}
export class Pokemon{
    public id: number;
    public name: string;
    public sprite: string;
    public height: number;
    public weight: number;
    public types: string[];

    constructor(id: number, name: string, sprite: string, height: number, weight: number, types:string[]){
        this.id = id;
        this.name = name;
        this.sprite = sprite;
        this.height = height;
        this.weight = weight;
        this.types = types;
    }
}
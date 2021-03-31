export class Card {
    public name: string;
    public description: string;
    public imagePath: string;
    public cssClass: string;
    
    constructor(name: string, 
                description: string, 
                imagePath: string, 
                cssClass: string){
                    this.name = name;
                    this.description = description;
                    this.imagePath = imagePath;
                    this.cssClass = cssClass;
                }
}
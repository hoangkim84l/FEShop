export class MenuItem {
    name : String;
    path: String;
    icon : String;
    active : Boolean;

    constructor(name : String
        , path: String
        , icon : String
        , active : Boolean){
        this.name = name;
        this.path = path;
        this.icon = icon;
        this.active = active;        
    }
}
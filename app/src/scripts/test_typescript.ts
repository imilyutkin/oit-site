class Greeter {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return "Hello " + name + " !";
    }
}
/**
 * Created by olanpa on 25.11.2017.
 */
interface IEngine {
    start(): string;
    stop(): void;
}

class ElectricEngine implements IEngine {

    start(): string {
        return 'DRDRDR';
    }

    stop(): void {
    }
}

class OilEngine implements IEngine{

    start(): string {
        return 'GGGG';
    }

    stop(): void {
    }
}

interface IDrive {

}

interface ICar {
    ride(): void;
    park(): void;
    fillTheCar(): void;
    drive(): void;
}

abstract class ACar implements ICar {
    year: string;
    name: string;
    public engine: IEngine;
    //protected diam: number = 62;
    static nameStat: number = 56;

    constructor(year: string, name: string, engine: IEngine) {
        this.year = year;
        this.name = name;
        this.engine = engine;
    }

    ride(): void {
        console.log('I move');
    };

    park(): void {
        console.log('I park');
    };

    abstract fillTheCar(): void;

    abstract drive(): void;

    protected drdrdr(): void {
        console.log('Drdrdr!');
    };

    pp(): void {
        console.log('public abstract!');
    };
}

class Car extends ACar {
    private volume: number;
    //private drive: IDrive;

    constructor(year: string, name: string, volume: number) {
        super(year, name, new OilEngine());
        this.volume = volume;
    }

    fillTheCar(): void {
        console.log('fill the fuel');
    };

    pp(): void {
        super.drdrdr();
    }

    drive() {
        console.log(this.engine.start());
    }
}
class ElectricCar extends ACar {
    private charge: number;

    constructor(year: string, name: string, charge: number) {
        super(year, name, new ElectricEngine());
        this.charge = charge;
    };

    fillTheCar(): void {
        console.log('plug to power');
    };

    drive() {
        console.log(this.engine.start());
    }
}
// new Car("fuel", 'Kia', 1).pp();
// new ElectricCar("electricity", 'Tesla', 1).fillTheCar();
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
const val = getRandomArbitrary(0,1);
let car: ICar;
if(val> 0.5){
    car = new ElectricCar("electricity", 'Tesla', 1);
}else {
    car = new Car("fuel", 'Kia', 1);
}
car.drive();
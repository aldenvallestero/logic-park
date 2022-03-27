import { CronJob } from "cron";

class Vehicle {

    charge: number;
    hours:  number;
    bill:   number;

    constructor() {
        this.charge = 0;
        this.hours  = 0;
        this.bill   = 0;
    }

    park() {

        // runs hourly
        let hourly_cron = new CronJob('0 * * * * *', () => {
            this.hours++;
            this.hours > 3 ? this.bill = this.bill + this.charge : this.bill = this.bill + 40;
        });

        // runs daily
        let daily_cron = new CronJob('0 0 * * * *', () => {
            this.hours = this.hours + 5000;
        });
          
        hourly_cron.start();
        daily_cron.start();
        return;
    }
}

class SmallVehicle extends Vehicle {

    small_parking_slot:     boolean;
    medium_parking_slot:    boolean;
    large_parking_slot:     boolean;
    
    constructor() {
        super();
        this.charge = 20;
        this.small_parking_slot = true;
        this.medium_parking_slot = true;
        this.large_parking_slot = true;
    }

}

class MediumVehicle extends Vehicle {

    small_parking_slot:     boolean;
    medium_parking_slot:    boolean;
    large_parking_slot:     boolean;
    
    constructor() {
        super();
        this.charge = 60;
        this.small_parking_slot = false;
        this.medium_parking_slot = true;
        this.large_parking_slot = true;
    }

}

class LargeVehicle extends Vehicle {

    small_parking_slot:     boolean;
    medium_parking_slot:    boolean;
    large_parking_slot:     boolean;
    
    constructor() {
        super();
        this.charge = 100;
        this.small_parking_slot = false;
        this.medium_parking_slot = false;
        this.large_parking_slot = true;
    }

}

export default Vehicle;
export { SmallVehicle, MediumVehicle, LargeVehicle }
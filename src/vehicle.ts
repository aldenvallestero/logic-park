import { CronJob } from "cron";

class Vehicle {

    charge:         number;
    hours:          number;
    bill:           number;
    hourly_cron:    CronJob;
    daily_cron:     CronJob;
    out_cron:       CronJob;
    out_hours:      number;

    constructor() {

        this.charge     = 0;
        this.hours      = 0;
        this.bill       = 0;
        this.out_hours  = 0;

        // runs hourly
        this.hourly_cron = new CronJob('0 * * * * *', () => {
            this.hours++;
            this.hours >= 3 ? this.bill = this.bill + this.charge : this.bill = this.bill + 40;
        });

        // runs daily
        this.daily_cron = new CronJob('0 0 * * * *', () => {
            this.hours = this.hours + 5000;
        });

        // runs hourly
        this.out_cron = new CronJob('0 * * * * *', () => {
            this.out_hours++;
        });
    }

    park() {
        this.hourly_cron.start();
        this.daily_cron.start();
        this.out_cron.stop();

        if (this.hours <= 1) {
            this.bill = this.bill + this.charge;
        }

        this.out_hours = 0;
        return;
    }

    unpark() {
        this.hourly_cron.stop();
        this.daily_cron.stop();
        this.out_cron.start();
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
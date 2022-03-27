import ISlot from "./interfaces/slot.interface";

class Park {

    slot: ISlot[];

    constructor() {
        this.slot = [];
    }

    entry(vehicle: any) {

        let distance: number = 10; // 10 is max
        let index: number = 0;

        this.slot.forEach((i, j) => {
            
            // if space is available and nearest from the entry point
            if (!i.occupied && i.distance <= distance) {
                
                // if vehicle is fit to slot size

                if (i.size == 'small' && vehicle.small_parking_slot)        index = j;
                else if (i.size == 'medium' && vehicle.medium_parking_slot) index = j;
                else if (i.size == 'large' && vehicle.large_parking_slot)   index = j;
            }

        });

        this.occupy(vehicle, this.slot[index]);
    }

    occupy(vehicle: any, i: any) {
        vehicle.park();         // run the timer
        i.vehicle = vehicle;    // store the vehicle
        i.occupied = true;      // slot is no more available for occupancy
        return console.log('The vehicle has been parked to the nearest exit point.');
    }

    exit(vehicle: any) {
        console.log('====== PARKING RECEIPT ======');
        console.log('Bill: ', parseFloat(vehicle.bill));
        console.log('=============================');
    }

    create_slot(new_slot: ISlot) {
        this.slot.push(new_slot);
    }

    map() {
        console.table(this.slot);
    }
}

export default Park;
import { CronJob } from "cron";
import Park from "./park";

import { SmallVehicle, MediumVehicle, LargeVehicle } from "./vehicle";

// INTERFACES
import ISlot from "./interfaces/slot.interface";

// STEP 1: CREATE AN EMPTY PARK
const park = new Park();

// STEP 2: CREATE EMPTY PARKING SLOTS
let small_parking_slot_1: ISlot = { distance: [1, 2, 3], size: 'small', occupied: false, vehicle: null };
let small_parking_slot_2: ISlot = { distance: [1, 4, 5], size: 'small', occupied: false, vehicle: null };
let small_parking_slot_3: ISlot = { distance: [4, 3, 3], size: 'small', occupied: false, vehicle: null };

let medium_parking_slot_1: ISlot = { distance: [1, 5, 5], size: 'medium', occupied: false, vehicle: null };
let medium_parking_slot_2: ISlot = { distance: [5, 4, 3], size: 'medium', occupied: false, vehicle: null };
let medium_parking_slot_3: ISlot = { distance: [2, 3, 3], size: 'medium', occupied: false, vehicle: null };

let large_parking_slot_1: ISlot = { distance: [1, 3, 2], size: 'large', occupied: false, vehicle: null };
let large_parking_slot_2: ISlot = { distance: [3, 3, 4], size: 'large', occupied: false, vehicle: null };
let large_parking_slot_3: ISlot = { distance: [5, 4, 1], size: 'large', occupied: false, vehicle: null };

park.create_slot(small_parking_slot_1);
park.create_slot(small_parking_slot_2);
park.create_slot(small_parking_slot_3);

park.create_slot(medium_parking_slot_1);
park.create_slot(medium_parking_slot_2);
park.create_slot(medium_parking_slot_3);

park.create_slot(large_parking_slot_1);
park.create_slot(large_parking_slot_2);
park.create_slot(large_parking_slot_3);

// STEP 3: CREATE VEHICLES
const small_vehicle  = new SmallVehicle();
const medium_vehicle = new MediumVehicle();
const large_vehicle  = new LargeVehicle();

// STEP 4: PARK VEHICLES
park.entry(small_vehicle);
park.entry(medium_vehicle);
park.entry(large_vehicle);

// STEP 5: WAIT FOR 5 HOURS
let cronJob = new CronJob('* */5 * * *', () => {

    console.log('5 hours has passed!');

    // STEP 6: UNPARK VEHICLE
    park.exit(small_vehicle);
    
});

cronJob.start();

// OPTIONAL
park.map();
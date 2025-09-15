const rideService = require('../services/ride.service')
const { validationResult } = require('express-validator')
const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service')
const {sendMessageToSocketId} = require('../socket')


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userId, pickup, destination, vehicleType } = req.body

    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(200).json(ride);
        const pickupCoordinates = await mapService.getAddressCoordinate(pickup)
        const CaptainsInRadius = await mapService.getCaptainsInRadius(pickupCoordinates.ltd , pickupCoordinates.lng , 2)
        ride.otp = ""
        //console.log(CaptainsInRadius);
        // Promise.all(CaptainsInRadius.map(async captain =>{

        // }))

        CaptainsInRadius.map(captain =>{
            sendMessageToSocketId(captain.socketId, {
                event:"new-ride",
                data:ride
            })
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}


module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination } = req.query;
    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

}
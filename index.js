const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function calculateTotalBatteries(batches) {
    return batches.reduce(function(total, batch){
        return total + batch;
    }, 0);
}

const totalBatteries = calculateTotalBatteries(batteryBatches);


/*const totalBatteries = batteryBatches.reduce((total, batch) => total + batch);*/

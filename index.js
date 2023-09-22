function distanceFromHqInBlocks(pickupLocation){
    const hqLocation =42;
    return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickuplocation){
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}
function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // Calculate fare for distances between 400 and 2000 feet
      const fare = (distanceInFeet - 400) * 0.02;
      return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      // Flat fare for distances between 2000 and 2500 feet
      return 25;
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }
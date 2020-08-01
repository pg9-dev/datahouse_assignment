const scoreLogic = (attributes) => {
    if (parseInt(attributes.spicyFoodTolerance) < 3) return 0;
    let aggregate = Object.values(attributes).reduce(
        (acc, currentValue) => acc + currentValue
    );
    aggregate /= 100;
    return aggregate;
};

export default scoreLogic;

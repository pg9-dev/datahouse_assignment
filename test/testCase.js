import expect from 'expect';
import scoredApplicants from '../src/index';

const testFactoryCase = () => {
    const factoryCase = {
        team: [
            {
                name: 'Eddie',
                attributes: {
                    intelligence: 1,
                    strength: 5,
                    endurance: 3,
                    spicyFoodTolerance: 1,
                },
            },
            {
                name: 'Will',
                attributes: {
                    intelligence: 9,
                    strength: 4,
                    endurance: 1,
                    spicyFoodTolerance: 6,
                },
            },
            {
                name: 'Mike',
                attributes: {
                    intelligence: 3,
                    strength: 2,
                    endurance: 9,
                    spicyFoodTolerance: 5,
                },
            },
        ],
        applicants: [
            {
                name: 'John',
                attributes: {
                    intelligence: 4,
                    strength: 5,
                    endurance: 2,
                    spicyFoodTolerance: 1,
                },
            },
            {
                name: 'Jane',
                attributes: {
                    intelligence: 7,
                    strength: 4,
                    endurance: 3,
                    spicyFoodTolerance: 2,
                },
            },
            {
                name: 'Joe',
                attributes: {
                    intelligence: 1,
                    strength: 1,
                    endurance: 1,
                    spicyFoodTolerance: 10,
                },
            },
        ],
    };
    const expectedResponse = {
        scoredApplicants: [
            {
                name: 'John',
                score: 0,
            },
            {
                name: 'Jane',
                score: 0,
            },
            {
                name: 'Joe',
                score: .13,
            },
        ],
    };
    expect(scoredApplicants(factoryCase)).toStrictEqual(expectedResponse);
};

const allTests = () => {
    testFactoryCase();
};

export default allTests;

/**
 * 
 * @param {Object} objectRequest - a json-parsed object that represents the incoming request body. 
 * @return {Object} - represents the response generated by mapping the applicants over the scoring logic. 
 */
export const scoreApplicants = (objectRequest) => {
    const applicant = objectRequest['applicants'];
    const applicantResponse = applicant.map((item) => {
        const resultScore = scoreLogic(item.attributes);
        return {
            name: item.name,
            score: resultScore,
        };
    });
    const response = {
        scoredApplicants: applicantResponse,
    };
    return response;
};

/**
 * @param {Object} attributes - an object representing the attributes of one user
 * @return {Number} - a number between [0-1] generated by the scoring logic. 
 * Takes a list of attributes and generates a score based on the attributes. 
 */
const scoreLogic = (attributes) => {
    if (parseInt(attributes.spicyFoodTolerance) < 3) return 0;
    let aggregate = Object.values(attributes).reduce(
        (acc, currentValue) => acc + currentValue
    );
    aggregate /= 100;
    return aggregate;
};

/**
 * @param {Object} obj - an object that represents the request body
 * @return {Boolean} - representing if the request is healthy or not
 * @todo: a complex validation scheme that validates on the object level and returns
 * a illustrative error messages. */
export const validateBody = (obj) => {
    if (!obj.applicants) return false; 
    return true;  
}
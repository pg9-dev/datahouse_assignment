import scoreLogic from './scoreLogic.js';

/**
 * @param {Object} obj - an object that represents the request body
 * @return {Boolean} - representing if the request is healthy or not
 * @todo: a complex validation scheme that validates on the object level and returns
 * a illustrative error messages. */
export const validateBody = (obj) => {
    if (!obj.applicants) return false; 
    return true;  
}

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
import scoreLogic from './scoreLogic.js';

export const validateBody = (obj) => {
    if (!obj.applicants) return false; 
    return true;  
}

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
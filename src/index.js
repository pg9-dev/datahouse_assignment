import scoreLogic from './scoreLogic.js'

const scoreRequest = (jsonRequest) => {
    const objectRequest = JSON.parse(request); 
    const objectResponse = scoreApplicants(objectRequest);
    return JSON.stringify(objectResponse); 
}

const scoreApplicants = (objectRequest) => {
    const applicant = objectRequest['applicants']; 
    const applicantResponse = applicant.map((item) => {
        const resultScore = scoreLogic(item.attributes); 
        return {
            name: item.name, 
            score: resultScore
        }
    });
    const response = {
        "scoredApplicants": applicantResponse
    }
    return response;
};

export default scoreApplicants;

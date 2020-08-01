import scoreLogic from './scoreLogic.js';

const scoreApplicants = (objectRequest) => {
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

export default scoreApplicants;

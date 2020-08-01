const validateBody = (obj) => {
    if (!obj.applicants) return false; 
    return true;  
}

export default validateBody; 
const validateInputs = require("../utils/helper");

module.exports = (validationRules) => {
    return (req, res, next) => {
        const [isValid, errors] = validateInputs(validationRules, req.body);

        req.isValid = isValid;
        req.errors = errors;

        next()
    }
}

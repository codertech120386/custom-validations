module.exports = {
    required: (fieldName, value, args) => {
        if(value) {
            stringValue = value.toString();
            if(stringValue.trim().length > 0) {
                return [true, null]
            }
        }
        return [false, `${fieldName} is required`];
    },
    email: (fieldName, email, args) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return [true, null]
        }
        return [false, "Please enter a valid email address"]
    },
    minLength: (fieldName, value, args) => {
        const [_, length, unit] = args;

        if(value?.trim().length > length) {
            return [true, null]
        }
        return [false, `${fieldName} must be at least ${length} ${unit}`];
    },
    maxLength: (fieldName, value, args) => {
        const [_, length, unit] = args;

        if(value?.trim().length < length) {
            return [true, null]
        }
        return [false, `${fieldName} must be at the most ${length} ${unit}`];
    },
    exactLength: (fieldName, value, args) => {
        const [_, length, unit] = args;

        if(value) {
            stringValue = value.toString();
            if(stringValue.trim().length == length) {
                return [true, null]
            }
        }
        return [false, `${fieldName} must be exactly ${length} ${unit}`];
    }
}
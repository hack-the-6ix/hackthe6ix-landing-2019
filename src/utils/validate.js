const VALIDATORS = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export const validate = (value, type) => {
    const validator = VALIDATORS[type];
    if (validator) {
        return Boolean(value.match(validator));
    }
    return false;
};
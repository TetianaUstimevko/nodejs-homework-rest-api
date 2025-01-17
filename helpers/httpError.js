const errorMessageList = {
    400: 'Bad Request',
    401: 'Email or password is wrong',
    403: 'Forbiden',
    404: 'Not found',
    409: 'Conflict',
};

const httpError = (status, message = errorMessageList[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = httpError;
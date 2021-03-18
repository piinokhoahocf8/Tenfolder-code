class Response {
    static success({res, code = 200, data}) {
        return res.status(code).json(data)
    }

    static error({res, code = 400, message}) {
        return res.status(code).json({
            error: message
        })
    }
}

module.exports = Response;
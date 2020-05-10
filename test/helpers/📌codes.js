const { assert } = require('chai');

class Helper {
    assert422(checkResult, response) {
        assert.equal(response.code, 422)
        assert.equal(response.status, 'Error')
        assert.equal(response.message, 'Unprocessable Entity')
        checkResult.forEach((element, index) => {
            this.assertErrors(element.field, element.message, response.result[index])
        });
    }
    assertErrors(field, message, response) {
        assert.equal(field, response.field)
        assert.equal(message, response.message)
    }

    assert404(responseBody) {
        assert.equal(responseBody.code, 404)
        assert.equal(responseBody.status, 'Error')
        assert.equal(responseBody.message, 'Not Found')
    }

    assert401(a) {
        assert.equal(a.code, 401)
        assert.equal(a.status, 'Error')
        assert.equal(a.message, 'Unauthorized')
        assert.equal(a.result, 'Your request was made with invalid credentials.')
    }

    assert200(expectedValue, actualValue) {
        assert.equal(expectedValue.code, 200)
        assert.equal(expectedValue.status, 'Success')
        assert.equal(expectedValue.message, 'OK')
        if (Object.keys(expectedValue).length !== 0) {
            assert.ownInclude(expectedValue, actualValue.result)
        }
    }

    assertCheckObjectAllKeys(response, exapmle, model='Model') {
        assert.hasAllKeys(response, exapmle, `${model} response doesn\'t contains all keys`)
    }

    assertCheckObjectAnyKeys(response, exapmle, model='Model') {
        assert.hasAnyKeys(response, exapmle, `${model} response doesn\'t contains any keys`)
    }

    assertDeepInclude(response, exapmle) {
        assert.deepInclude(response, exapmle)
    }

    assert201(expectedValue, actualValue) {
        assert.equal(actualValue.code, 201)
        assert.equal(actualValue.status, 'Success')
        assert.equal(actualValue.message, 'Created')
        if (Object.keys(expectedValue).length !== 0) {
            assert.deepEqual(expectedValue, actualValue.result)
        }
    }

    assert204(expectedValue, actualValue) {
        if (Object.keys(expectedValue).length !== 0) {
            assert.ownInclude(expectedValue, actualValue.result)
        }
    }

}
module.exports = new Helper();

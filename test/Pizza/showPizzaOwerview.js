const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
const helper = require('../helpers/📌codes')


describe('Show pizza overview', () => {
    it('Show "Папероні Блюз" pizza', () => {
        chai.request(url)
            .get('/pizza/5e5559b2cb7b340024dd7649')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "Техас" pizza', () => {
        chai.request(url)
            .get('/pizza/5e555a25cb7b340024dd764a')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "Кантрі" pizza', () => {
        chai.request(url)
            .get('/pizza/5e555a99cb7b340024dd764b')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "Овочева феєрія" pizza', () => {
        chai.request(url)
            .get('/pizza/5e555b11cb7b340024dd764c')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "Тоскана" pizza', () => {
        chai.request(url)
            .get('/pizza/5e555b97cb7b340024dd764d')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "Спайсі" pizza', () => {
        chai.request(url)
            .get('/pizza/5e57ccaf79e59b00246ccb1c')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "Роял Чізбургер" pizza', () => {
        chai.request(url)
            .get('/pizza/5e5b713cd34eba00243f0c30')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "Прованс" pizza', () => {
        chai.request(url)
            .get('/pizza/5e664811936c6600245cfe4d')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
    it('Show "ПапараZZi" pizza', () => {
        chai.request(url)
            .get('/pizza/5e88d6471f425f0024defc00')
            .then((result) => {
                helper.assert200({}, result.body)
            });
    })
}); 

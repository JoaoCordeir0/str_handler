import Model from '@ember-data/model';

export default class StrcountModel extends Model {

    splitString(str) {
        let qtdChar = str.split('').length
        let qtdWord = str.split(' ').length

        return [qtdChar, qtdWord]
    }

}
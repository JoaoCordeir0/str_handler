import Controller from '@ember/controller';
import StrcountModel from '../models/strcount';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class StrcountController extends Controller {
    @tracked value;

    @action
    countString(event) {
        this.value = event.target.value;

        let result = (new StrcountModel()).splitString(this.value)

        document.getElementById("qtdChar").textContent = result[0]
        document.getElementById("qtdWord").textContent = result[1]
    }
}
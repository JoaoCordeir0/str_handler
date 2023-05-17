import Component from '@ember/component';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExampleComponent extends Component {
    @tracked value;

    @action
    countString(event) {
        this.value = event.target.value;
    }
}
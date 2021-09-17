import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective } from '@angular/forms';

import {
    AddEditCustomFieldsComponent as BaseAddEditCustomFieldsComponent
} from 'jslib-angular/components/add-edit-custom-fields.component';

import { I18nService } from 'jslib-common/abstractions';
import { EventService } from 'jslib-common/abstractions/event.service';

@Component({
    selector: 'app-vault-add-edit-custom-fields',
    templateUrl: 'add-edit-custom-fields.component.html',
})
export class AddEditCustomFieldsComponent extends BaseAddEditCustomFieldsComponent {
    constructor(i18nService: I18nService, eventService: EventService, fb: FormBuilder,
        formGroupDirective: FormGroupDirective) {
        super(i18nService, eventService, fb, formGroupDirective);
    }
}

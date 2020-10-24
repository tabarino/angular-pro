import { AbstractControl } from '@angular/forms';

export class StockInventoryValidator {
    static checkBranch(control: AbstractControl) {
        // A123 will pass this test - 1 letter, 3 numbers
        const regexp = /[a-z]\d{3}$/i;
        const valid = regexp.test(control.value);
        return valid ? null : { invalidBranch: true };
    }
}

import { TestBed } from "@angular/core/testing";
import { FormComponent } from "./components/form/form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

describe('FormComponent', () => {

    let component: FormComponent

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormComponent],
            imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatDialogModule,MatDialogModule],
            providers:[
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} }
            ]
        })
        component = TestBed.createComponent(FormComponent).componentInstance
    });

    it('the form of students should be invalid if the inputs are empty', ()=>{
        component.nameControl.setValue('')
        component.lastnameControl.setValue('')
        component.ageControl.setValue(null)
        component.emailControl.setValue('')
        component.passwordControl.setValue('')

        expect(component.formModel.invalid).toBeTrue()
    })

    it('should be invalid when input is a number', () => {
        const form = component.nameControl
        form.setValue('123')
        expect(component.formModel.valid).toBeFalsy();
    });


})
import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { HttpClientTestingModule } from "@angular/common/http/testing"

describe('LoginComponent', () => {

    let component: LoginComponent

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[LoginComponent],
            imports:[MatFormFieldModule,MatInputModule,HttpClientTestingModule]
        })
        component = TestBed.createComponent(LoginComponent).componentInstance
    })

    it('the form should be invalid if the input are empty', ()=>{
        component.emailControl.setValue('')
        component.passwordControl.setValue('')

        expect(component.loginForm.invalid).toBeTrue()
    })

    it('when login() is called and the form is invalid, the method markAllAsTouched of loginForm should be called', ()=>{
        component.emailControl.setValue('')
        component.passwordControl.setValue('')

        expect(component.loginForm.invalid).toBeTrue()

        const spy = spyOn(component.loginForm, 'markAllAsTouched')
        component.login()

        expect(spy).toHaveBeenCalled()
    })
})
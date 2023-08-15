import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { AuthService } from "./auth.service"
import { User } from "../dashboard/pages/models"
import {MockProvider} from 'ng-mocks'
import { Router } from "@angular/router"

describe('AuthService',()=>{

    let service: AuthService
    let httpControler: HttpTestingController

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule,RouterTestingModule],
            providers:[
                MockProvider(Router),
                
            ]
        });
        service = TestBed.inject(AuthService)
        httpControler = TestBed.inject(HttpTestingController)
    })

    it('if login is valid, the observable authStudent$ should emit a value', ()=>{
        const mokeUser:User = {
            id:1,
            email:'fake@gmail.com',
            name:'ggg',
            lastname:'ffff',
            age:15,
            password:'123',
            token:'d5f4d  '
        }

        const mockeResp: User[] = [mokeUser]

        service.login({
            email: mokeUser.email,
            password:mokeUser.password
        });

        httpControler.expectOne({
            method:'GET',
            url:`http://localhost:3000/students?email=${mokeUser.email}&password=${mokeUser.password}`
        }).flush(mockeResp)
    })
})
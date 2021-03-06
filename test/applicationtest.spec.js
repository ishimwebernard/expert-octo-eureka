/*eslint-disable */
import "core-js/stable";
import "regenerator-runtime/runtime";
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../src/index';
import User from '../src/validate_schema/applicationInfo';
import { exist } from 'joi';

chai.use(chaiHttp);
chai.should();
const today = new Date();
describe('User tests', ()=>{
    it('Should Send the application ', (done)=>{
        chai.request(app)
            .post('/application/sendapplication')
            .send({
                firstName: "Whatever",
                lastName: "Whatever",
                cell: "Whatever",
                user_Email: "isbernard2001@gmail.com",
                sector: "Whatever",
                city: "Whatever",
                district: "Whatever",
                province: "Whatever",
                phoneNumber: "Whatever",
                DateOfBirth: "Whatever",
                id: "Whatever",
                citizenship: "Whatever",
                architecture: "Whatever",
                engineeiring: "Whatever",
                construction: "Whatever",
                other: "Whatever",
                employed: "Whatever",
                company_name: "Raster",
                supervisor_address: "Whatever",
                supervisor_email: "isbernar345d2001@gmail.com",
                highschool: "Whatever",
                highschool_address: "Whatever",
                highschool_diploma: "Whatever",
                highschool_graduated: "Whatever",
                university: "Whatever",
                university_address: "Whatever",
                university_diploma: "Whatever",
                university_graduated: "Whatever",
                availability_time_from: "Whatever",
                availability_time_to: "Whatever",
                area_excel_1: "Whatever",
                area_excel_2: "Whatever",
                area_excel_3: "Whatever",
                area_improve_1: "Whatever",
                area_improve_2: "Whatever",
                area_improve_3: "Whatever",
                referal_1_company: "Whatever",
                referal_1_company_email: "Whatever",
                referal_1_company_phone: "Whatever",
                referal_1_company_relationship: "Whatever",
                referal_2_company: "Whatever",
                referal_2_company_email: "Whatever",
                referal_2_company_phone: "Whatever",
                referal_2_company_relationship: "Whatever",
                cv_link: "Whatever",
                application_letter_link: "Whatever",
                payment_receipt_link: "Whatever",
                user_Password: "jskfgnkjfs"
              


            })
            .end((error, response)=>{
                console.log(response.body)
                response.should.have.status(409);
                done();
            })
    });
 

});
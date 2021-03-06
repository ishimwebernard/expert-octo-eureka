import Joi from "joi"

const applicantInfo = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    cell: Joi.string().required(),
    user_Email: Joi.string().email().required(),
    user_Password: Joi.string().required(),
    sector: Joi.string().required(),
    city: Joi.string().required(),
    district: Joi.string().required(),
    province: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    DateOfBirth: Joi.string().required(),
    id: Joi.string().required(),
    citizenship: Joi.string().required(),
    architecture: Joi.string().required(),
    engineeiring: Joi.string().required(),
    construction: Joi.string().required(),
    other: Joi.string().required(),
    employed: Joi.string().required(),
    company_name: Joi.string(),
    supervisor_address: Joi.string().required(),
    supervisor_email: Joi.string().email().required(),
    highschool: Joi.string().required(),
    highschool_address: Joi.string().required(),
    highschool_diploma: Joi.string().required(),
    highschool_graduated: Joi.string().required(),
    university: Joi.string().required(),
    university_address: Joi.string().required(),
    university_diploma: Joi.string().required(),
    university_graduated: Joi.string().required(),
    availability_time_from: Joi.string().required(),
    availability_time_to: Joi.string().required(),
    area_excel_1: Joi.string().required(),
    area_excel_2: Joi.string().required(),
    area_excel_3: Joi.string().required(),
    area_improve_1: Joi.string().required(),
    area_improve_2: Joi.string().required(),
    area_improve_3: Joi.string().required(),
    referal_1_company: Joi.string().required(),
    referal_1_company_email: Joi.string().required(),
    referal_1_company_phone: Joi.string().required(),
    referal_1_company_relationship: Joi.string().required(),
    referal_2_company: Joi.string().required(),
    referal_2_company_email: Joi.string().required(),
    referal_2_company_phone: Joi.string().required(),
    referal_2_company_relationship: Joi.string().required(),
    cv_link: Joi.string().required(),
    application_letter_link: Joi.string().required(),
    payment_receipt_link: Joi.string().required()


});
export default applicantInfo;
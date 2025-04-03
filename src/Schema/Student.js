import * as yup from 'yup'

export const addStudent = yup.object().shape({
    firstName : yup.string().required(),
    lastName : yup.string().required(),
    Section : yup.string(),
    Class : yup.string(),
    gender : yup.string().required(),
    Fathername : yup.string().required(),
    building : yup.string().required(),
    Mobile : yup.number().min(1000000000,'mobile number should be 10 digits').max(9999999999 , "mobile number should be 10 digits").required(),
    City : yup.string().required(),
    Country : yup.string().required(),
    email : yup.string().email().required()
}) 
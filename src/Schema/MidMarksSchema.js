import * as yup from 'yup'

export const midMarksSchema = yup.object().shape({
    Telugu : yup.number().min(0).max(28),
    Hindi : yup.number().min(0).max(28),
    Math : yup.number().min(0).max(30),
    Biology : yup.number().min(0).max(30),
    Physics : yup.number().min(0).max(30),
    Social : yup.number().min(0).max(30),
})
export const semMarksSchema = yup.object().shape({
    Telugu : yup.number().min(0).max(58),
    Hindi : yup.number().min(0).max(58),
    Math : yup.number().min(0).max(60),
    Biology : yup.number().min(0).max(60),
    Physics : yup.number().min(0).max(60),
    Social : yup.number().min(0).max(60),
})
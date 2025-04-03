import { Box, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, MenuItem, InputLabel, Select, FormHelperText } from "@mui/material";
import TextField from '@mui/material/TextField';
import './AddStudent_form.css'
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {addStudent} from './Schema/Student.js'
import Axios from 'axios';


export function AddStudentForm() {
    const {register , handleSubmit , formState :{errors} , reset} = useForm({
        resolver : yupResolver(addStudent),
        mode : 'onChange'
    }) 
    const submit = (data)=>{
        Axios.post("https://67e9565cbdcaa2b7f5b92058.mockapi.io/StudentData/studenData",data).then((response) =>{
            Axios.post("https://67e9565cbdcaa2b7f5b92058.mockapi.io/StudentData/Marks",{
                "Mid1": {
                  "Math": 0,
                  "Physics": 0,
                  "Social": 0,
                  "Hindi": 0,
                  "Biology": 0,
                  "Telugu": 0
                },
                "Mid2": {
                  "Math": 0,
                  "Physics": 0,
                  "Social": 0,
                  "Hindi": 0,
                  "Biology": 0,
                  "Telugu": 0
                },
                "Sem1": {
                  "Math": 0,
                  "Physics": 0,
                  "Social": 0,
                  "Hindi": 0,
                  "Biology": 0,
                  "Telugu": 0
                },
                "Sem2": {
                  "Math": 0,
                  "Physics": 0,
                  "Social": 0,
                  "Hindi": 0,
                  "Biology": 0,
                  "Telugu": 0
                },
                "StudentId": response.data.StudentId
              }).then((response) =>{
                console.log(response.data)
            })
        })
        reset();
    }
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '150ch'} }}
      noValidate
      autoComplete="off"
      className="Form"
      onSubmit={handleSubmit(submit)}
    >
        <div className="AddStudent_form" sx={{width:'40ch'}}>
                <FormControl className="Student_form">
                    <FormLabel id="Student Data">Student Data</FormLabel>
                    <TextField id="outlined-first-name" label="First Name" variant="outlined" name ='firstName' {...register('firstName')} error ={!!errors.firstName} helperText={errors.firstName?.message}/>
                    <TextField id="outlined-last-name" label="Last Name" variant="outlined" name ='lastName' {...register('lastName')} error ={!!errors.lastName} helperText={errors.lastName?.message}/>
                    <TextField id="outlined-father-name" label="Email" variant="outlined" name ='email' {...register('email')} error ={!!errors.email} helperText={errors.email?.message}/>
                    <FormControl>
                    <FormLabel id="Gender">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="Gender"
                        defaultValue="male"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" name="gender"{...register('gender')}/>
                        <FormControlLabel value="male" control={<Radio />} label="Male" name="gender"{...register('gender')}/>
                        <FormControlLabel value="other" control={<Radio />} label="Other" name="gender"{...register('gender')}/>
                    </RadioGroup>
                    </FormControl>
                    <div className="section-class">
                        <FormControl sx={{ m: 1, minWidth: '20ch' }}>
                            <InputLabel id="demo-simple-select-label">Class</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Class"
                            defaultValue={'VI'}
                            name="Class"
                            {...register('Class')}
                            >
                            <MenuItem value={'I'}>I</MenuItem>
                            <MenuItem value={'II'}>II</MenuItem>
                            <MenuItem value={'III'}>III</MenuItem>
                            <MenuItem value={'IV'}>IV</MenuItem>
                            <MenuItem value={'V'}>V</MenuItem>
                            <MenuItem value={'VI'}>VI</MenuItem>
                            <MenuItem value={'VII'}>VII</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: '12ch' }}>
                            <InputLabel id="Section-select-label">Section</InputLabel>
                            <Select
                            labelId="Section-select-label"
                            id="Section-select-label"
                            label="Section"
                            defaultValue={'A'}
                            name = "Section"
                            {...register('Section')}
                            >
                            <MenuItem value={'A'}>A</MenuItem>
                            <MenuItem value={'B'}>B</MenuItem>
                            <MenuItem value={'C'}>C</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </FormControl>
                <FormControl className="Address_form" sx={{width:'40ch'}}>
                    <FormLabel id="Student Data">Address data</FormLabel>
                    <TextField id="outlined-father-name" label="Father's Name" variant="outlined" name="Fathername" {...register('Fathername')} error ={!!errors.Fathername} helperText={errors.Fathername?.message} />
                    <TextField id="outlined-mobile" label="Mobile" variant="outlined" name="Mobile" {...register('Mobile')} error ={!!errors.Mobile} helperText={errors.Mobile?.message}/>
                    <TextField id="outlined-building" label="Building" variant="outlined" name="building" {...register('building')} error ={!!errors.building} helperText={errors.building?.message}/>
                    <TextField id="outlined-city" label="City" variant="outlined" name="City"{...register('City')} error ={!!errors.City} helperText={errors.City?.message}/>
                    <TextField id="outlined-country" label="Country" variant="outlined" name="Country" {...register('Country')} error ={!!errors.Country} helperText={errors.Country?.message}/>
                </FormControl>
        </div>
        <FormControl sx ={{maxWidth:'30ch'}}>
        <Button variant="outlined" fullWidth type="submit" >Submit</Button>
        </FormControl>
    </Box>
  );
}

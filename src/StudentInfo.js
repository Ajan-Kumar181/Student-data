import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Box ,CircularProgress ,Button} from '@mui/material';
import Axios from 'axios';

export function StudentInfo () {
  // Access the student data passed via navigation
  const location = useLocation();
  const { student } = location.state;
  const [Marks , setMarks]  = useState();
  const [loading , setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    Axios.get(`https://67e9565cbdcaa2b7f5b92058.mockapi.io/StudentData/Marks/${student.StudentId}`)
      .then((response) => {
        setMarks(response.data); // Set the fetched data to state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data: ", error);
      });
  },[]);

    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      );
    }

  return (
    <>
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">{`${student.firstName}  ${student.lastName}`}</Typography>
      <Typography variant="h6"><b>Father Name:</b>{`${student.Fathername}  ${student.lastName}`}</Typography>
      <Typography variant="h4">Address</Typography>
    <Typography><b>Building:</b> {student.building}</Typography>
    <Typography><b>Mobile:</b> {student.Mobile}</Typography>
    <Typography><b>City:</b> {student.City}</Typography>
    <Typography><b>Country:</b> {student.Country}</Typography>
    </Box>
    <Box sx={{ padding: '20px' }}>
    <Typography variant="h4">Mid1</Typography>
    <Typography><b>Telugu:</b> {Marks.Mid1.Telugu}</Typography>
    <Typography><b>Hindi:</b> {Marks.Mid1.Hindi}</Typography>
    <Typography><b>Math:</b> {Marks.Mid1.Math}</Typography>
    <Typography><b>Physics:</b> {Marks.Mid1.Physics}</Typography>
    <Typography><b>Biology:</b> {Marks.Mid1.Biology}</Typography>
    <Typography><b>Social:</b> {Marks.Mid1.Social}</Typography>
    <Typography variant="h4">Mid2</Typography>
    <Typography><b>Telugu:</b> {Marks.Mid2.Telugu}</Typography>
    <Typography><b>Hindi:</b> {Marks.Mid2.Hindi}</Typography>
    <Typography><b>Math:</b> {Marks.Mid2.Math}</Typography>
    <Typography><b>Physics:</b> {Marks.Mid2.Physics}</Typography>
    <Typography><b>Biology:</b> {Marks.Mid2.Biology}</Typography>
    <Typography><b>Social:</b> {Marks.Mid2.Social}</Typography>
    <Typography variant="h4">Sem1</Typography>
    <Typography><b>Telugu:</b> {Marks.Sem1.Telugu}</Typography>
    <Typography><b>Hindi:</b> {Marks.Sem1.Hindi}</Typography>
    <Typography><b>Math:</b> {Marks.Sem1.Math}</Typography>
    <Typography><b>Physics:</b> {Marks.Sem1.Physics}</Typography>
    <Typography><b>Biology:</b> {Marks.Sem1.Biology}</Typography>
    <Typography><b>Social:</b> {Marks.Sem1.Social}</Typography>
    <Typography variant="h4">Sem2</Typography>
    <Typography><b>Telugu:</b> {Marks.Sem2.Telugu}</Typography>
    <Typography><b>Hindi:</b> {Marks.Sem2.Hindi}</Typography>
    <Typography><b>Math:</b> {Marks.Sem2.Math}</Typography>
    <Typography><b>Physics:</b> {Marks.Sem2.Physics}</Typography>
    <Typography><b>Biology:</b> {Marks.Sem2.Biology}</Typography>
    <Typography><b>Social:</b> {Marks.Sem2.Social}</Typography>
    </Box>
    <Button variant="outlined" onClick={()=>{
      navigate('/updateMarks' , {state : {Marks}})
    }}>Update marks Info</Button>
    </>
  );
}

 
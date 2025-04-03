import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CircularProgress } from '@mui/material';
import './StudentList.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export function StudentList() {
  // State to hold student data
  const [studentData, setStudentData] = useState([]);
  const marksinfo = useNavigate();
  const [loading ,setLoading] = useState(true);
  // Fetching student data using Axios
  useEffect(() => {
    Axios.get("https://67e9565cbdcaa2b7f5b92058.mockapi.io/StudentData/studenData")
      .then((response) => {
        setStudentData(response.data); // Set the fetched data to state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data: ", error);
      });
  }, []); // Empty dependency array to run only once after the initial render
  console.log(studentData);
  const displayMarks =(student) =>{
    marksinfo('/StudentInfo', { state: { student } });
  }
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
    <div className='Card-Group'>
      {studentData?.map((student) => {
        return (
          <Box key={student.StudentId} sx={{ minWidth: 275, maxWidth: 275, marginBottom: 2 , paddingInlineStart:'10px' ,}}>
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {`${student.firstName}  ${student.lastName}`}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Details:</Typography>
                  <Typography variant="body3">
                    Section <b>{`${student.Section}`}</b>
                    <br />
                    Class : {student.Class}
                    <br />
                    Student ID : {`25331A04${student.StudentId}`}
                    <br />
                    Gender : {student.gender}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>displayMarks(student)}>Marks Info</Button>
                </CardActions>
              </React.Fragment>
            </Card>
          </Box>
        );
      })}
    </div>
    </>
  );
}


import { Button, Box, FormControl, FormLabel, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { midMarksSchema, semMarksSchema } from "./Schema/MidMarksSchema";
import Axios from "axios";

export function Updatemarks() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("Mid1");
  let { Marks } = location.state;
  const [fullMarks, setFullMarks] = useState({});
  const [marks_section, setMarks_section] = useState({});
  const [schema, setSchema] = useState(midMarksSchema);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: marks_section
  });

  // Fetch marks on component mount and set initial form values
  useEffect(() => {
    console.log('I am UseEffect called called')
    Axios.get(
      `https://67e9565cbdcaa2b7f5b92058.mockapi.io/StudentData/Marks/${Marks.StudentId}`
    )
      .then((response) => {
        setFullMarks(response.data);
        setMarks_section(response.data[activeButton]); // Set initial marks for active button
        // Set form values to the marks section
        reset(response.data[activeButton]);
      })
      .catch((error) => {
        console.error("Error fetching marks:", error);
      });
  }, [Marks.StudentId, activeButton, reset]);

  // Update marks call
  const updateMarksCall = (data) => {
    Axios.put(
      `https://67e9565cbdcaa2b7f5b92058.mockapi.io/StudentData/Marks/${fullMarks.StudentId}`,
      { ...fullMarks, [activeButton]: data }
    )
      .then((response) => {
        setMarks_section({ [activeButton]: response.data });
        setFullMarks(response.data);
        alert("Marks updated successfully");
      })
      .catch((error) => {
        console.error("Error updating marks:", error);
      });
  };

  // Handle active button change
  const handleButtonClick = (button) => {
    setActiveButton(button);
    setMarks_section(fullMarks[button]); // Set section based on the active button
    setSchema(button === "Sem1" || button === "Sem2" ? semMarksSchema : midMarksSchema);
    reset(fullMarks[button]); // Reset form values to the selected section
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around", gap: "30px" }}>
        <Button
          variant="outlined"
          fullWidth
          sx={activeButton === "Mid1" ? { backgroundColor: "#3f51b5", color: "white" } : {}}
          onClick={() => handleButtonClick("Mid1")}
        >
          Mid1
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={activeButton === "Mid2" ? { backgroundColor: "#3f51b5", color: "white" } : {}}
          onClick={() => handleButtonClick("Mid2")}
        >
          Mid2
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={activeButton === "Sem1" ? { backgroundColor: "#3f51b5", color: "white" } : {}}
          onClick={() => handleButtonClick("Sem1")}
        >
          Sem1
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={activeButton === "Sem2" ? { backgroundColor: "#3f51b5", color: "white" } : {}}
          onClick={() => handleButtonClick("Sem2")}
        >
          Sem2
        </Button>
      </Box>

      <Box sx={{ margin: "5ch", maxWidth: "40ch" }} component="form" onSubmit={handleSubmit(updateMarksCall)}>
        <FormControl sx={{ display: "flex", gap: "10px" }}>
          <FormLabel>Update {activeButton} Marks</FormLabel>
          <TextField
            variant="outlined"
            label="Telugu"
            {...register("Telugu")}
            InputLabelProps={{ shrink: true }}
            error={!!errors.Telugu}
            helperText={errors?.Telugu?.message}
          />
          <TextField
            variant="outlined"
            label="Hindi"
            {...register("Hindi")}
            InputLabelProps={{ shrink: true }}
            error={!!errors.Hindi}
            helperText={errors?.Hindi?.message}
          />
          <TextField
            variant="outlined"
            label="Maths"
            {...register("Math")}
            InputLabelProps={{ shrink: true }}
            error={!!errors.Math}
            helperText={errors?.Math?.message}
          />
          <TextField
            variant="outlined"
            label="Physics"
            {...register("Physics")}
            InputLabelProps={{ shrink: true }}
            error={!!errors.Physics}
            helperText={errors?.Physics?.message}
          />
          <TextField
            variant="outlined"
            label="Biology"
            {...register("Biology")}
            InputLabelProps={{ shrink: true }}
            error={!!errors.Biology}
            helperText={errors?.Biology?.message}
          />
          <TextField
            variant="outlined"
            label="Social"
            {...register("Social")}
            InputLabelProps={{ shrink: true }}
            error={!!errors.Social}
            helperText={errors?.Social?.message}
          />
        </FormControl>
        <Button variant="outlined" type="submit">
          Update Marks Info
        </Button>
        <Button
          variant="outlined"
          type="button"
          onClick={() => reset(marks_section)} // Reset to current section values
        >
          Discard Changes
        </Button>
      </Box>
    </>
  );
}

import { useState } from 'react';
import { getAllStudents, getFreshies } from '../services/getGrades';
import { studentDeets } from '../utils/studentDeets';
import styles from '../containers/main.css';

const useMain = () => {
  const [students, setStudents] = useState([]);
  const [studentAsses, setStudentAsses] = useState({});
  const [studentsLoading, setStudentsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(false);
  const [err, setErr] = useState(false);
  const [tas, setTas] = useState(false);
  const [filterTa, setFilterTa] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(false);

  const changes = {
    filterTa: (value) => {
      removeSelectedStudent();
      setFilterTa(value);
    },
    apiKey: (value) => {setApiKey(value);}
  };

  const handleChange = ({ target }) => {
    changes[target.name](target.value);
  };

  const preFetchReset = () => {
    setStudents([]);
    setStudentsLoading(true);
    setErr(false);
    setTas(false);
    setFilterTa(false);
    setSelectedStudent(false);
  };

  const postFetchSetState = res => {
    const studentsDetails = studentDeets(res);
    setStudentsLoading(false);
    setStudents(studentsDetails.students);
    setStudentAsses(studentsDetails.studentPendingAsses);
    setTas([...new Set(studentsDetails.students.map(i => i.sectionNames).flat())]);
    setErr(false);
  };

  const callApi = apiCall => {
    preFetchReset();

    apiCall(apiKey)
      .then(postFetchSetState)
      .catch(setErr)
      .finally(() => setStudentsLoading(false));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    callApi(getAllStudents);
  };

  const getFreshData = (e) => {
    e.preventDefault();
    document.querySelector('#student-select').selectedIndex = 0;
    callApi(getFreshies);
  };

  const removeSelectedStudent = () => {
    setSelectedStudent(false);
    const selected = document.querySelector(`.${styles.selected}`);
    if(selected) selected.className = selected.className.replace(styles.selected, '').replace(' ', '');
  };

  const handleStudentSelect = (id, e) => {
    removeSelectedStudent();
    setSelectedStudent(id);
    e.currentTarget.className = `${e.currentTarget.className} ${styles.selected}`;
  };

  return {
    students,
    studentAsses,
    studentsLoading,
    err,
    tas,
    filterTa,
    selectedStudent,
    handleChange,
    handleFormSubmit,
    handleStudentSelect,
    getFreshData
  };
};

export default useMain;

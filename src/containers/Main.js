import React from 'react';
import useMain from '../hooks/useMain';
import ApiForm from '../components/form/ApiForm';
import Students from '../components/student/Students';
import Asses from '../components/asses/Asses';
import styles from './main.css';
import scorpion from '../../assets/scorpion.png';

const Main = () => {
  const {
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
  } = useMain();

  return (
    <>
      <ApiForm 
        tas={tas} 
        handleChange={handleChange} 
        handleFormSubmit={handleFormSubmit} 
        getFreshData={getFreshData} 
      />

      {err && <h2>Could not fetch</h2>}
      {studentsLoading && 
        <section className={styles.scorpLoader}>
          <img src={scorpion} />
        </section>
      }

      {!studentsLoading && 
        <section className={styles.bigGuy}>
          <Students 
            filterTa={filterTa} 
            students={students} 
            handleStudentSelect={handleStudentSelect}
          />

          {selectedStudent && 
            <Asses asses={studentAsses[selectedStudent]}
            />}
        </section>
      }
    </>
  );
};

export default Main;

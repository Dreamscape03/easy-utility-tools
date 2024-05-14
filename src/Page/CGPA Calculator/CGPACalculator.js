import React, { useState } from "react";
import { Navbar } from "../../partial/Navbar";
import Style from "./CGPACalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

export const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    {
      semester: 1,
      subjects: [
        { name: "", credit: 0, grade: "" },
        { name: "", credit: 0, grade: "" },
      ],
    },
  ]);

  const handleAddSemester = () => {
    const newSemester = {
      semester: semesters.length + 1,
      subjects: [
        { name: "", credit: 0, grade: "" },
        { name: "", credit: 0, grade: "" },
      ],
    };
    setSemesters([...semesters, newSemester]);
  };

  const handleAddSubject = (semesterIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects.push({
      name: "",
      credit: 0,
      grade: "",
    });
    setSemesters(updatedSemesters);
  };

  const handleRemoveSubject = (semesterIndex, subjectIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects.splice(subjectIndex, 1);
    setSemesters(updatedSemesters);
  };

  const handleRemoveAllSubjects = (semesterIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects = [];
    setSemesters(updatedSemesters);
  };

  const handleRemoveSemester = (semesterIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters.splice(semesterIndex, 1);
    setSemesters(updatedSemesters);
  };

  const handleSubjectChange = (semesterIndex, subjectIndex, key, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects[subjectIndex][key] = value;
    setSemesters(updatedSemesters);
  };

  const calculateGPA = (subjects) => {
    let totalCreditPoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const gradePoint = getGradePoint(subject.grade);
      totalCreditPoints += isNaN(gradePoint) ? 0 : gradePoint * subject.credit;
      totalCredits += parseInt(subject.credit);
    });

    return totalCredits === 0
      ? 0
      : (totalCreditPoints / totalCredits).toFixed(2);
  };

  const calculateCGPA = () => {
    let totalCreditPoints = 0;
    let totalCredits = 0;

    semesters.forEach((semester) => {
      semester.subjects.forEach((subject) => {
        const gradePoint = getGradePoint(subject.grade);
        totalCreditPoints += isNaN(gradePoint)
          ? 0
          : gradePoint * subject.credit;
        totalCredits += parseInt(subject.credit);
      });
    });

    return totalCredits === 0
      ? 0
      : (totalCreditPoints / totalCredits).toFixed(2);
  };

  const getGradePoint = (grade) => {
    switch (grade) {
      case "A+":
        return 10.0;
      case "A":
        return 9.0;
      case "B+":
        return 8.0;
      case "B":
        return 7.0;
      case "C+":
        return 6.0;
      case "C":
        return 5.0;
      case "D":
        return 4.0;
      case "E":
        return 0.0;
      case "F":
        return 0.0;
      case "I":
        return 0.0;
      default:
        return 0.0;
    }
  };

  return (
    <div>
      <Navbar />
      <div className={Style.homeContainer}>
        <div className={Style.headerContainer}>
          <div className={Style.headerText}>CGPA Calculator</div>
          <div className={Style.subHeaderText}>
            Calculate your CGPA with ease using our CGPA calculator tool. Simply
            enter your current CGPA, total credits, and target CGPA to get the
            required credits to achieve your target CGPA. Use this tool to plan
            your future semesters and set realistic goals. Easy to use and
            accurate, our CGPA calculator is the perfect tool for students
            looking to improve their academic performance.
          </div>
        </div>
        <div className={Style.calculatorContainer}>
          {semesters.map((semester, semesterIndex) => (
            <div key={semesterIndex} className={Style.semesterContainer}>
              <h5>Semester {semester.semester}</h5>
              <table>
                <thead>
                  <tr>
                    <th>Subject Name (optional)</th>
                    <th>Credit</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.subjects.map((subject, subjectIndex) => (
                    <tr key={subjectIndex}>
                      <td>
                        <input
                          type="text"
                          value={subject.name}
                          onChange={(e) =>
                            handleSubjectChange(
                              semesterIndex,
                              subjectIndex,
                              "name",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={subject.credit}
                          onChange={(e) =>
                            handleSubjectChange(
                              semesterIndex,
                              subjectIndex,
                              "credit",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <select
                          value={subject.grade}
                          onChange={(e) =>
                            handleSubjectChange(
                              semesterIndex,
                              subjectIndex,
                              "grade",
                              e.target.value
                            )
                          }
                        >
                          <option value=""> Select Grade</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="C+">C+</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="E">E</option>
                          <option value="F">F</option>
                          <option value="I">I</option>
                        </select>
                      </td>
                        <button
                          className={Style.removeButton}
                          onClick={() =>
                            handleRemoveSubject(semesterIndex, subjectIndex)
                          }
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => handleAddSubject(semesterIndex)}>
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Add Subject
              </button>
              <button
                className={Style.removeAllButton}
                onClick={() => handleRemoveAllSubjects(semesterIndex)}
              >
                Remove All Subjects
              </button>
              <div>
                <h5>Your GPA: {calculateGPA(semester.subjects)}</h5>
              </div>
            </div>
          ))}
          <div>
            <button onClick={handleAddSemester}>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp; Add Semester
            </button>
            {semesters.length > 0 && (
              <button
                className={Style.removeAllButton}
                onClick={() => handleRemoveSemester(semesters.length - 1)}
              >
                Remove Semester
              </button>
            )}
          </div>
          <div>
            <h5>Your CGPA: {calculateCGPA()}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

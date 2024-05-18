import React, { useState } from "react";
import { Navbar } from "../../partial/Navbar";
import Style from "./CGPACalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../partial/Footer";

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
        <div className={Style.gradeTable}>
          <div className={Style.headerText}>Grade Table</div>
          <div className={Style.subHeaderText}>
            The grade table shows the letter grade, performance, and grade point
            for each grade. Use this table to convert your grades to grade
            points and calculate your GPA. The grade table is based on the
            standard GPA scale used by most universities and colleges.
          </div>
          <div className={Style.gradeTableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Letter Grade</th>
                  <th>Performance</th>
                  <th>Grade Point</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A⁺</td>
                  <td>Outstanding</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>Excellent</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>B⁺</td>
                  <td>Very Good</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>Good</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>C⁺</td>
                  <td>Average</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>Below Average</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>Marginal</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>E</td>
                  <td>Exposed</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>F</td>
                  <td>Fail/Poor</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>Incomplete</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={Style.gpaExample}>
            <div className={Style.headerText}>How to Use CGPA Calculator</div>
            <div className={Style.subHeaderText}>
              Here is an example of how to calculate your CGPA using the CGPA
              calculator. In this example, we have provided the grades and
              credits for five subjects: Mathematics, Physics, Chemistry,
              Biology, and English. The grades and credits are entered into the
              GPA calculator, and the total credits and GPA are displayed.
            </div>
            <div className={Style.exampleTable}>
              {/* Semester 1 */}
              <div className={Style.semesterContainer}>
                <h5>Semester 1</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Subject Name</th>
                      <th>Credit</th>
                      <th>Grade</th>
                      <th>Grade Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mathematics</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>3 * 10 = 30</td>
                    </tr>
                    <tr>
                      <td>Physics</td>
                      <td>3</td>
                      <td>A</td>
                      <td>3 * 9 = 27</td>
                    </tr>
                    <tr>
                      <td>Chemistry</td>
                      <td>3</td>
                      <td>B+</td>
                      <td>3 * 8 = 24</td>
                    </tr>
                    <tr>
                      <td>Biology</td>
                      <td>3</td>
                      <td>B</td>
                      <td>3 * 7 = 21</td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>3</td>
                      <td>C+</td>
                      <td>3 * 6 = 18</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>15</td>
                      <td>NA</td>
                      <td>120</td>
                    </tr>
                    <tr>
                      <td colSpan="3">GPA</td>
                      <td>120 / 15 = 8.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={Style.semesterContainer}>
                <h5>Semester 2</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Subject Name</th>
                      <th>Credit</th>
                      <th>Grade</th>
                      <th>Grade Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cloud Computing</td>
                      <td>3</td>
                      <td>B+</td>
                      <td>3 * 8 = 24</td>
                    </tr>
                    <tr>
                      <td>Blockchain Technology</td>
                      <td>3</td>
                      <td>A</td>
                      <td>3 * 9 = 27</td>
                    </tr>
                    <tr>
                      <td>Business Intelligence</td>
                      <td>2</td>
                      <td>A</td>
                      <td>2 * 9 = 18</td>
                    </tr>
                    <tr>
                      <td>Environmental Science and Disaster Management</td>
                      <td>2</td>
                      <td>A</td>
                      <td>2 * 9 = 18</td>
                    </tr>
                    <tr>
                      <td>Electrical Energy Conservation & Auditing</td>
                      <td>3</td>
                      <td>B+</td>
                      <td>3 * 8 = 24</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>13</td>
                      <td>NA</td>
                      <td>111</td>
                    </tr>
                    <tr>
                      <td colSpan="3">GPA</td>
                      <td>111 / 13 = 8.54</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={Style.semesterContainer}>
                <h5>Semester 3</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Subject Name</th>
                      <th>Credit</th>
                      <th>Grade</th>
                      <th>Grade Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Discrete Mathematics and Graph Theory</td>
                      <td>4</td>
                      <td>A</td>
                      <td>4 * 9 = 36</td>
                    </tr>
                    <tr>
                      <td>Theory of Computation</td>
                      <td>3</td>
                      <td>B+</td>
                      <td>3 * 8 = 24</td>
                    </tr>
                    <tr>
                      <td>Information Security and Cryptography</td>
                      <td>3</td>
                      <td>B+</td>
                      <td>3 * 8 = 24</td>
                    </tr>
                    <tr>
                      <td>MOBILE APPLICATION DEVELOPMENT</td>
                      <td>2</td>
                      <td>B</td>
                      <td>2 * 7 = 14</td>
                    </tr>
                    <tr>
                      <td>Internet of Things</td>
                      <td>2</td>
                      <td>C+</td>
                      <td>2 * 6 = 18</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>14</td>
                      <td>NA</td>
                      <td>116</td>
                    </tr>
                    <tr>
                      <td colSpan="3">GPA</td>
                      <td>116 / 14 = 8.28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={Style.semesterContainer}>
                <h5>CGPA Calculation</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Semester</th>
                      <th>Total Credits</th>
                      <th>Total Grade Points</th>
                      <th>CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Semester 1</td>
                      <td>15</td>
                      <td>120</td>
                      <td>8.0</td>
                    </tr>
                    <tr>
                      <td>Semester 2</td>
                      <td>13</td>
                      <td>111</td>
                      <td>8.54</td>
                    </tr>
                    <tr>
                      <td>Semester 3</td>
                      <td>14</td>
                      <td>116</td>
                      <td>8.28</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>42</td>
                      <td>347</td>
                      <td>347 / 42 = 8.26</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={Style.subHeaderText}>
              To calculate the CGPA, add the total credits and grade points for
              each semester. Then divide the total grade points by the total
              credits to get the CGPA. In this example, the total credits are
              42, and the total grade points are 347. The CGPA is calculated as
              347 / 42 = 8.26. The CGPA is used to measure the overall academic
              performance of a student over multiple semesters.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

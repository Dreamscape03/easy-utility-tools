import React, { useState } from "react";
import { Navbar } from "../../partial/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Style from "./GPACalculator.module.css";
import { Footer } from "../../partial/Footer";

export const GPACalculator = () => {
  const [courses, setCourses] = useState([{ name: "", credit: 0, grade: "" }]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [gpa, setGPA] = useState(0);
  const [currentGPA, setCurrentGPA] = useState(0);
  const [currentTotalCredits, setCurrentTotalCredits] = useState(0);
  const [targetGPA, setTargetGPA] = useState(0);
  const [additionalCredits, setAdditionalCredits] = useState(0);
  const [requiredCredits, setRequiredCredits] = useState(0);

  const addCourse = () => {
    const newCourses = [...courses];
    newCourses.push({ name: "", credit: 0, grade: "" });
    setCourses(newCourses);
  };

  const removeCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const removeAllCourses = () => {
    setCourses([{ name: "", credit: 0, grade: "" }]);
  };

  const handleCourseChange = (index, event) => {
    const newCourses = [...courses];
    newCourses[index].name = event.target.value;
    setCourses(newCourses);
  };

  const handleCreditChange = (index, event) => {
    const newCourses = [...courses];
    newCourses[index].credit = parseFloat(event.target.value);
    setCourses(newCourses);
  };

  const handleGradeChange = (index, event) => {
    const newCourses = [...courses];
    newCourses[index].grade = event.target.value;
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < courses.length; i++) {
      totalCredits += courses[i].credit;
      totalPoints += convertGradeToPoint(courses[i].grade) * courses[i].credit;
    }

    const gpa = totalPoints / totalCredits;
    setTotalCredits(totalCredits);
    setGPA(gpa.toFixed(2));
  };

  const convertGradeToPoint = (grade) => {
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
      case "F":
        return 0.0;
      case "I":
        return 0.0;
      default:
        return 0.0;
    }
  };

  const calculateRequiredCredits = () => {
    const calculatedCredits =
      (targetGPA * (currentTotalCredits + additionalCredits) -
        currentGPA * currentTotalCredits) /
      targetGPA;
    setRequiredCredits(calculatedCredits.toFixed(2));
  };

  return (
    <div>
      <Navbar />
      <div className={Style.homeContainer}>
        <div className={Style.headerContainer}>
          <div className={Style.headerText}>GPA Calculator</div>
          <div className={Style.subHeaderText}>
            Calculate your GPA with ease using our GPA calculator tool. Simply
            input your grades and credit hours to get your GPA. Use this tool to
            plan your future semesters and set goals for your academic
            performance. If you use a different grading scale, you can adjust
            the scale accordingly to get an accurate GPA calculation. Also check
            out our GPA scale to see how your GPA compares to the standard GPA
            scale.
          </div>
        </div>
        <div className={Style.calculatorContainer}>
          <table>
            <thead>
              <tr>
                <th>Course (optional)</th>
                <th>Credits</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={course.name}
                      onChange={(e) => handleCourseChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={course.credit}
                      onChange={(e) => handleCreditChange(index, e)}
                    />
                  </td>
                  <td>
                    <select
                      value={course.grade}
                      onChange={(e) => handleGradeChange(index, e)}
                    >
                      <option value="">Select Grade</option>
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
                    onClick={() => removeCourse(index)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={addCourse}>
            <FontAwesomeIcon icon={faPlus} />
            &nbsp; Add Course
          </button>
          <button onClick={calculateGPA}>Calculate GPA</button>
          <div className={Style.result}>
            <h5>Total Credits: {totalCredits}</h5>
            <h5>Your GPA: {gpa}</h5>
          </div>
          {/* Remove All Button */}
          <button className={Style.removeAllButton} onClick={removeAllCourses}>
            Remove All
          </button>
        </div>
        {/* GPA Planning Calculator */}
        <div className={Style.gpaPlanningContainer}>
          <div className={Style.headerText}>GPA Planning Calculator</div>
          <div className={Style.subHeaderText}>
            Use the GPA planning calculator to calculate the GPA you need to
            achieve your desired GPA. Input your current GPA, total credits, and
            desired GPA to get the GPA you need to achieve. Use this tool to set
            goals for your academic performance and plan your future semesters.
          </div>
          <div className={Style.gpaPlanningTable}>
            <table>
              <thead>
                <tr>
                  <th>Current GPA</th>
                  <th>Target GPA</th>
                  <th>Current Credits</th>
                  <th>Additional Credits</th>
                  <th>Required Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="number"
                      value={currentGPA}
                      onChange={(e) =>
                        setCurrentGPA(parseFloat(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={targetGPA}
                      onChange={(e) => setTargetGPA(parseFloat(e.target.value))}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={currentTotalCredits}
                      onChange={(e) =>
                        setCurrentTotalCredits(parseFloat(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={additionalCredits}
                      onChange={(e) =>
                        setAdditionalCredits(parseFloat(e.target.value))
                      }
                    />
                  </td>
                  <td>{requiredCredits}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={calculateRequiredCredits}>
            Calculate Required Credits
          </button>
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
            <div className={Style.headerText}>How to Use GPA Calculator</div>
            <div className={Style.subHeaderText}>
              Here is an example of how to calculate your GPA using the GPA
              calculator. Let's say you have taken 5 courses with the following
              grades and credits:
            </div>
            <div className={Style.exampleTable}>
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Credits</th>
                    <th>Grade</th>
                    <th>Grade Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Course 1</td>
                    <td>3</td>
                    <td>A</td>
                    <td>3 * 9 = 27</td>
                  </tr>
                  <tr>
                    <td>Course 2</td>
                    <td>4</td>
                    <td>B+</td>
                    <td>4 * 8 = 32</td>
                  </tr>
                  <tr>
                    <td>Course 3</td>
                    <td>3</td>
                    <td>C</td>
                    <td>3 * 5 = 15</td>
                  </tr>
                  <tr>
                    <td>Course 4</td>
                    <td>2</td>
                    <td>D</td>
                    <td>2 * 4 = 8</td>
                  </tr>
                  <tr>
                    <td>Course 5</td>
                    <td>3</td>
                    <td>A+</td>
                    <td>3 * 10 = 30</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>15</td>
                    <td>NA</td>
                    <td>112</td>
                  </tr>
                  <tr>
                    <td colSpan="3">GPA</td>
                    <td>112 / 15 = 7.47</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={Style.subHeaderText}>
              To calculate your GPA, input the grades and credits into the GPA
              calculator and click "Calculate GPA". The GPA calculator will
              display your total credits and GPA. In this example, the total
              credits are 15, and the GPA is 7.47. You can use the GPA planning
              calculator to calculate the required credits to achieve your
              desired GPA.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

import { useState } from 'react'
import { AgeCalculator } from "./Components/Calculator"

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState({});
  const [age, setAge] = useState({ years: null, months: null, days: null});


  const handleDayChange = (e) => {
    setDay(e.target.value);
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);

  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
  }


  const ageCal = (birthDay, birthMonth, birthYear) => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    let days = currentDay - birthDay;
    let months = currentMonth - birthMonth;
    let years = currentYear - birthYear;

    if (days < 0) {
      months -= 1;
      const lastMonthDate = new Date(currentYear, currentMonth - 1, 0).getDate();
      days += lastMonthDate;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  };

  const validateInput = () => {
    const newError = {};

    if (!day || day <=0 || day > 31) newError.day = `Must be a valid day`;
    if (!month || month <=0 || month > 12) newError.month = `Must be a valid month`;
    if (!year || year >= new Date().getFullYear()) newError.year = `Must be in the past`;

    return newError;

  }

  const submitDetails = (e) => {
    e.preventDefault();
    const newError = validateInput();

    
    setError(newError);
    if (Object.keys(newError).length === 0) {
      const { years, months, days } = ageCal(
        parseInt(day),
        parseInt(month),
        parseInt(year),
      );
      setAge({ years, months, days });
      
    }
  };
  


  return (
    <>
    <AgeCalculator
      day={day} 
      month={month} 
      year={year} 
      onChangeDay={handleDayChange}
      onChangeMonth={handleMonthChange}
      onChangeYear={handleYearChange}
      onSubmitDetails={submitDetails}
      age={age}
      error={error}
    />
    
      
    </>
  )
}

export default App

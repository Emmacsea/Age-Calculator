// import { useState } from "react";
import arrow from "../assets/assets/images/icon-arrow.svg";
import PropTypes from "prop-types";

export const AgeCalculator = ({
  day,
  onChangeDay,
  month,
  onChangeMonth,
  year,
  onChangeYear,
  onSubmitDetails,
  age,
  error
}) => {
  

  return (
    <div className="flex justify-center items-center h-screen w-full py-14 bg-neutral-lightgrey">
      <div className="flex flex-col rounded-s-lg rounded-tr-lg rounded-br-3xl py-5 px-9 bg-neutral-white">
        <form onSubmit={onSubmitDetails} action="" method="get">
          <div className="flex space-x-3 items-center">
            <div className=" flex flex-col ">
              <label
                className={`label ${
                  error.day ? "text-primary-lightred" : "text-neutral-lightgrey"
                }`}
                htmlFor=""
              >
                Day
              </label>
              <input
                className={`inp ${
                  error.day
                    ? "border-primary-lightred"
                    : "border-neutral-lightgrey"
                }`}
                type="text"
                placeholder="dd"
                value={day}
                onChange={onChangeDay}
              />
              {error.day && <p className="error">{error.day}</p>}
            </div>

            <div className=" flex flex-col ">
              <label
                className={`label ${
                  error.month
                    ? "text-primary-lightred"
                    : "text-neutral-lightgrey"
                }`}
                htmlFor=""
              >
                Month
              </label>
              <input
                className={`inp ${
                  error.month
                    ? "border-primary-lightred"
                    : "border-neutral-lightgrey"
                }`}
                type="text"
                placeholder="dd"
                value={month}
                onChange={onChangeMonth}
                />
                {error.month && <p className="error">{error.month}</p>}
            </div>

            <div className=" flex flex-col ">
              <label
                className={`label ${
                  error.year
                    ? "text-primary-lightred"
                    : "text-neutral-lightgrey"
                }`}
                htmlFor=""
              >
                Year
              </label>
              <input
                className={`inp ${
                  error.year
                    ? "border-primary-lightred"
                    : "border-neutral-lightgrey"
                }`}
                type="text"
                placeholder="yy"
                value={year}
                onChange={onChangeYear}
              />
              {error.year && ( <p className="error">{error.year}</p>)}
            </div>
          </div>


          <div className="flex items-center w-full mt-5"> 
            <p className="flex-grow h-0 border-2 border-neutral-lightgrey">

            </p>
            <button className="bg-primary-purple rounded-full p-4" type="submit">
              <img className="w-7" src={arrow} alt="" />
            </button>
          </div>
        </form>

        <div className=" flex flex-col space-y-1 mb-4">
          
            <div>
              <div className="flex items-center">
                <p className="inpdet">{age.years !== null ? age.years : "- -"}</p>
                <p className="inpcal">years</p>
              </div>

              <div className="flex items-center">
                <p className="inpdet">{age.months !== null ? age.months : "- -"} </p>
                <p className="inpcal">months</p>
              </div>

              <div className="flex items-center">
                <p className="inpdet">{age.days !== null ? age.days : "- -"}</p>
                <p className="inpcal">days</p>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

AgeCalculator.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onChangeDay: PropTypes.func.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
  onChangeYear: PropTypes.func.isRequired,
  onSubmitDetails: PropTypes.func.isRequired,
  age: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

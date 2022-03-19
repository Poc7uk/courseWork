import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const randerPhrase = (number) => {
    const lastNumber = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "людей тусане";
    if ([2, 3, 4].indexOf(lastNumber) >= 0) return "людини тусане";
    if (lastNumber === 1) return "людина тусане";
    return "людей тусане";
  };

  return (
    <h2>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0
          ? `${length} ${randerPhrase(length)} з тобою сьогодні`
          : "Ніхто не тусане сьогодні з тобою"}
      </span>
    </h2>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;

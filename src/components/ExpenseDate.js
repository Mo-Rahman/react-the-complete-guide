import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-GB", { month: "long" }); //
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  // const year = props.date.toLocaleString("en-GB", { year: "numeric" });
  const year = props.date.getFullYear();
  const weekday = props.date.toLocaleString("en-GB", { weekday: "long" });

  return (
    <div className="expense-date">
      <div className=
    "expense-date__weekday">{weekday}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      {/* <h2>{props.date.toLocaleString("en-GB", { month: "long" })}</h2> */}
    </div>
  );
}

export default ExpenseDate;

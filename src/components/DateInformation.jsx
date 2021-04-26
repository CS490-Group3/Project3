import React from 'react';

function DateInformation(prop) {
  const { date } = prop;
  const [dateInfo, setInfo] = useState(null);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    
  }, []);

  return (
    <div className="item border">
      <h3>Click on a date to view information</h3>
      <p className="lead">
        {date.getDate()} - {months[date.getMonth()]} - {date.getFullYear()}
      </p>
    </div>
  );
}

export default DateInformation;

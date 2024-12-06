function convertToIST(utcDate) {
    const date = new Date(utcDate);
    
    // Get date in DD/MM/YYYY format
    const dateStr = date.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  
    // Get time in 12-hour format with AM/PM
    const timeStr = date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit', 
      hour12: true
    });
  
    return (dateStr+
      " " + timeStr );
}

export default convertToIST;
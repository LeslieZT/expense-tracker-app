export const formatCustomDate = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHour = hours % 12 || 12;
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // FEB, MAR, etc.
    const year = date.getFullYear();
    return `${formattedHour}:${minutes} ${period} - ${day} ${month} ${year}`;
  }
  
//   // Ejemplo de uso
//   const date = new Date('2024-02-22T10:00:00'); // Crear una fecha de ejemplo
//   const formattedDate = formatCustomDate(date);
//   console.log(formattedDate); // 10:00 AM - 22 FEB 2024
  
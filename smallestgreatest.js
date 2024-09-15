const dates = ["13-12-2019", "10-08-2019", "06-01-2020", "06-11-2019", "01-02-2020"];

function convertToDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); 
}
function classifyDate(dateStr) {
    const [day, month, year] = dateStr.split('-');
    let classification = '';

    if (month === "01" || month === "02") {
        classification = "Year’s Start month";
    } else if (month === "11" || month === "12") {
        classification = "Year’s End month";
    } else {
        classification = "Year’s Mid month";
    }

    return `${day} ${getMonthName(month)} ${year} - ${classification}`;
}

// Function to get month name from month number
function getMonthName(month) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[parseInt(month, 10) - 1];
}

const dateObjects = dates.map(convertToDate);

const smallestDate = new Date(Math.min(...dateObjects));
const greatestDate = new Date(Math.max(...dateObjects));

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const smallestDateStr = formatDate(smallestDate);
const greatestDateStr = formatDate(greatestDate);

console.log("Greatest date:", classifyDate(greatestDateStr));
console.log("Smallest date:", classifyDate(smallestDateStr));

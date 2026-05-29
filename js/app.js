import { data } from './data.js';
import { getRandomItem, flipCoin, ucFirst, removeDiacritics } from './utils.js';

const complaintElement = document.getElementById('complaint');

let lastComplaint = '';

function generateComplaint() {
    const pick = (key) => getRandomItem(data[key]);

    const opening = pick('openings');
    const employee = pick('employees');
    const employeeTrait = pick('employeeTraits');
    const discourseMarker = pick('discourseMarkers');
    const negativeQualifier = pick('negativeQualifiers');
    const workplaceSituation = pick('workplaceSituations');
    const actionVerb = pick('actionVerbs');
    const incapacityReason = pick('incapacityReasons');
    const responsibility = pick('responsibilities');
    const closure = pick('closures');

    const templates = [
        `${employee}'s ${employeeTrait} is ${negativeQualifier} ${discourseMarker}!`,
        `${discourseMarker}, ${employee}'s ${actionVerb} ${workplaceSituation} is ${negativeQualifier}!`,
        `${employee} ${incapacityReason} ${responsibility}!`,
    ];

    const sentence =
        (flipCoin() ? (opening + ' ') : '') +
        getRandomItem(templates) +
        (flipCoin() ? (' ' + closure) : '');

    return ucFirst(sentence);
}

function setComplaint() {
    lastComplaint = generateComplaint();
    complaintElement.textContent = lastComplaint;
}

function sendComplaint() {
    const text = encodeURIComponent(removeDiacritics(lastComplaint));

    window.location.href = `https://cowsay.morecode.org/say?message=${text}&format=html`;
}

document.getElementById('complain-btn').addEventListener('click', setComplaint);
document.getElementById('send-btn').addEventListener('click', sendComplaint);

setComplaint();

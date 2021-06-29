export function getAppointments(demographic_no) {
  var appointments = [];

  const apptNodes = document.querySelectorAll("td.appt");

  apptNodes.forEach(function (node) {
    var apptLink = getAppointmentLink(node);
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);
    var _demographic_no = getDemographicNo(apptUrl);

    if (demographic_no === _demographic_no) {
      appointments.push(node);
    }
  });
  return appointments;
}

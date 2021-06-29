export function getAppointments(demographic_no = null) {
  var appointments = [];

  const apptNodes = document.querySelectorAll("td.appt");

  apptNodes.forEach(function (node) {
    var apptLink = getAppointmentLink(node);
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);

    if (demographic_no) {
      var _demographic_no = getDemographicNo(apptUrl);
      if (demographic_no === _demographic_no) {
        appointments.push(node);
      }
    } else {
      appointments.push(node);
    }
  });
  return appointments;
}

export function getAppointmentLink(apptTdElement) {
  var apptLink = apptTdElement.querySelector("a.apptLink");

  if (apptLink) {
    return apptLink;
  }

  // If doctor isn't set, the anchor element has no class called apptLink, so we traverse through all anchor elements
  if (!apptLink) {
    var anchors = apptTdElement.querySelectorAll("a");
    anchors.forEach((anchor) => {
      var temp = anchor.attributes.onclick.nodeValue;
      if (
        temp.includes("popupPage") &&
        temp.includes("appointmentcontrol.jsp")
      ) {
        if (!apptLink) {
          apptLink = anchor;
        }
      }
    });
  }

  return apptLink;
}

export function extractApptUrl(s) {
  return s.match(/'([^']+)'/)[1].substring(2);
}

export function getDemographicNo(apptUrl) {
  var searchParams = new URLSearchParams(apptUrl);
  return searchParams.get("demographic_no");
}

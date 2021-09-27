import { getDemographicNo, getAppointmentNo, addToCache } from "../../Utils/Utils";

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
      var temp =
        anchor &&
        anchor.attributes &&
        anchor.attributes.onclick &&
        anchor.attributes.onclick.nodeValue;
      if (
        temp &&
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

export function getAppointmentInfo(apptNodes) {
  var appointmentInfo = [];
  apptNodes.forEach(function (node) {
    var temp = {};
    var apptLink = getAppointmentLink(node);
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);
    var demographicNo = getDemographicNo(apptUrl);

    // No Appointment link
    if (!apptLink) {
      return null;
    }

    // Already verified
    if (apptLink.textContent.includes("+")) {
      addToCache(demographicNo, true)
    }

    var apptNo = getAppointmentNo(apptUrl);

    temp.demographic_no = demographicNo;
    temp.appointment_no = apptNo;
    temp.info = apptLink.attributes.title.nodeValue;
    appointmentInfo.push(temp);
  });

  //Remove duplicates and return
  return appointmentInfo.filter(
    (v, i, a) => a.findIndex((t) => t.demographic_no === v.demographic_no) === i
  );
}


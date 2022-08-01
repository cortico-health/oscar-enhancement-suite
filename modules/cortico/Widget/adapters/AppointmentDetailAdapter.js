import { create, isEmpty } from "lodash";
import { createPortal } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import {
  extractApptUrl,
  getAppointmentLink,
  getAppointments,
} from "../../Appointments/Appointments";
import AppointmentDetails from "../features/AppointmentDetails/AppointmentDetails";
import { getDemographicNo } from "../../../Utils/Utils";

const getAppointmentDemographicNo = (apptTd) => {
  const apptLink = getAppointmentLink(apptTd);
  const apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);
  const demographicNo = getDemographicNo(apptUrl);
  return demographicNo;
};

const getAppointmentCache = () => {
  return JSON.parse(localStorage.getItem("checkCache") || null);
};

const getPharmacyCache = () => {
  const pharmaciesCache = JSON.parse(
    localStorage.getItem("pharmaciesCache") || '{"demographics":[]}'
  );
  return pharmaciesCache;
};

const isPharmacyCached = (cachedDemographics) => {
  let demographics = Array.isArray(cachedDemographics)
    ? cachedDemographics
    : JSON.parse(cachedDemographics);
  demographics = demographics
    .filter((x) => x.hasPharmacy)
    .map((x) => x.demographicNo);

  return demographics.includes(apptInfoItem.demographic_no);
};

const getPatientStatus = (apptTd) => {
  const demographicNo = getAppointmentDemographicNo(apptTd);
  const cache = getAppointmentCache();
  if (demographicNo && cache) {
    return cache[demographicNo] && cache[demographicNo].verified;
  } else {
    return "unverified";
  }
};

const getAppointmentType = (apptTd) => {
  const anchor = apptTd.querySelector("a.apptStatus");
  const appStatus = anchor ? anchor.querySelector("img").title : "";

  if (appStatus) {
    return appStatus.toLowerCase();
  } else {
    return null;
  }
};

export default function AppointmentDetailAdapter() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(getAppointments());
  }, []);

  if (!isEmpty(appointments)) {
    console.log("Appointments is not empty", appointments);

    return (
      <>
        {appointments.map((appointment) => {
          return createPortal(
            <>
              <div className="tw-inline-block tw-relative">
                <AppointmentDetails
                  apptTd={appointment}
                  patientStatus={getPatientStatus(appointment)}
                  type={getAppointmentType(appointment)}
                ></AppointmentDetails>
              </div>
              <div className="tw-inline-block tw-ml-5">Test</div>
            </>,
            appointment
          );
        })}
      </>
    );
  }

  return <div>Hello</div>;
}

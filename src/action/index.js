export const GET_DETAILS = "GET_DETAILS";
export const CLEAR_DETAILS = "CLEAR_DETAILS";

export const getDetails = details => {
  return {
    type: GET_DETAILS,
    details
  };
};

export const clearDetails = () => {
  return {
    type: CLEAR_DETAILS
  };
};

import checkPropsTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attritube.
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * @params {object} - React component
 * @params {object} - object containing expectedProps
 * @returns {string} - notifies you whether the expected proptype value is what is present.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

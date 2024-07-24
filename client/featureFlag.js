// Checks if a feature flag is present in the localStorage
export const setAlternateFeatureFlag = (featureName) => {
  const counter = localStorage.getItem("counter");
  const count = counter ? parseInt(counter, 10) : 0;

  // set feature flag on whether count is odd or even
  const value = count % 2 === 0 ? "true" : "false";
  localStorage.setItem(featureName, value);

  // Store count and increment
  localStorage.setItem("counter", count + 1);
};

// If extraFeature is found in localStorage it will be the value, else null
export const hasFeatureFlag = (featureName) => {
  return localStorage.getItem(featureName);
};

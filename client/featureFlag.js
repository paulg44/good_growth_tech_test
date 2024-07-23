const hasFeatureFlag = (featureName) => {
  return localStorage.getItem(featureName);
};

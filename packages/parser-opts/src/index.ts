export default {
  // Test URL: https://regex101.com/r/gYkG99/1
  headerPattern:
    /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))(?:\s\(?(?<ticket>#\d*)\)?)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};

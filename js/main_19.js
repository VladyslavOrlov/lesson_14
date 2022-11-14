console.log('Sample JavaScript #7 HW #19');

/*
 * #1
 */
function replaceCSSComments(str) {
  return str.replace(/\/\*.*?\*\/\s?/g, '');
}

/*
 * #2
 */

function replaceHTMLComments(str) {
  return str.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '').trim();
}

/*
 * #3
 */
function validateFileType(str) {
  return /.+(\.jpg|\.jpeg|\.png)$/.test(str);
}

/*
 * #4
 */
function checkYear(str) {
  return /^(19\d\d|20\d\d|2100)$/.test(str);
}

/*
 * #5
 */
function checkEmail(str) {
  return /^[a-zA-z]+\W?[a-zA-z]+@[a-zA-z\.]+\.[a-z]{2,3}$/.test(str);
}

/*
 * #6
 */
function checkDomainUrl(str) {
  return /^(http:|https:)\/\/(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,5}?$/.test(
    str
  );
}

/*
 * #7
 */
function createLinksFromDomains(str) {
  let reg = new RegExp(
    '(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}',
    'gi'
  );

  str
    .match(reg)
    .forEach(
      (item) =>
        (str = str.replace(
          item,
          `<a href="${item}" target="_blank">${item.replace(
            /^(http:|https:)\/\//gi,
            ''
          )}</a>`
        ))
    );

  return str;
}

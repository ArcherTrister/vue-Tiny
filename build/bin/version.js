var version = process.env.VERSION || require('../../package.json').version;
var content = {
  '1.0.0': '1.0',
  '1.0.1': '1.0',
  '1.0.2': '1.0',
  '1.0.3': '1.0',
  '1.0.4': '1.0',
  '1.0.5': '1.0',
  '1.0.6': '1.0',
  '1.0.7': '1.0',
  '1.0.8': '1.0'
};
if (!content[version]) content[version] = '1.0';

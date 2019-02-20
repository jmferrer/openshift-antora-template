//var repo = "github.com/elmanytas/openshift-antora-template.git"
//var newBranches = "newbranches"
repo = process.argv[2];
newBranches = process.argv[3];

const yaml = require('js-yaml');
const fs = require('fs');

try {
    const config = yaml.safeLoad(fs.readFileSync('/antora/site.yml', 'utf8'));

    var arrayLength = config.content.sources.length;
    for (var i = 0; i < arrayLength; i++) {
        var re = new RegExp(repo);
        if (re.test(config.content.sources[i].url)) {
            config.content.sources[i].branches=newBranches
        }
    }

    var outputConfig = yaml.safeDump(config)

    fs.writeFileSync('/antora/site.yml', outputConfig);
} catch (e) {
    console.log(e);
}

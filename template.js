'use strict';

exports.description = 'Create a basic html/css/js project.';

exports.notes = 'Yeah, html!';

exports.after = 'Your template has been created :)';

exports.warnOn = '*';

exports.template = function(grunt, init, done){
  init.process({ type: 'sjo'}, [
    init.prompt('title'),
    init.prompt('description')
  ], function(err, props){
    var files = init.filesToCopy(props);

    init.copyAndProcess(files, props);

    done();
  });
};

// svFuncs.js

module.exports = {
  updateSrc: function ( cmd )
  {
    try{
      cmd.run('chmod 777 git.sh'); /* :/ Fix no perms after updating */
      cmd.run('./git.sh');
      // cmd.get('git.sh', (err, data) => {  // Run our script
      //   if (data) console.log(data);
      //   if (err) console.log(err);
      // });


      cmd.run('refresh');  // Refresh project

      console.log("> [GIT] Updated with origin/master");
    } catch (error)
    {
      console.error("Error on 'updateSrc()'" + error);
    }
  }
}

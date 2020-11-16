// svFuncs.js

// DO NOT CHANGE ANYTHING HERE!

module.exports = {
  updateSrc: function ( cmd )
  {
    try{
      cmd.run('chmod 777 git.sh'); /* :/ Fix no perms after updating */
      cmd.run('git fetch');
      cmd.run('git reset --hard');
      cmd.run('git pull --force');
      console.log("> [GIT] Updated with origin/master");
      cmd.run('sudo node --experimental-worker main.js > stdout.txt 2> stderr.txt &')
    } catch (error)
    {
      console.error("Error on 'updateSrc()'" + error);
    }
  }
}

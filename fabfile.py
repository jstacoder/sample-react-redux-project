import os
from fabric import api, colors

@api.task
def deploy():
    print colors.yellow("pushing to github")
    api.local('git push origin master')
    print colors.green("done")
    print colors.blue("pushing to heroku")
    api.local('git push heroku master')
    print colors.green("done")



@api.task
@api.parallel
def run_webpack():
    print colors.green("building webpack with --watch")
    api.local('webpack --watch')

@api.task
@api.parallel
def run_python():
    print colors.red('now running app')
    api.local('python {}'.format(os.path.join('PROJECT','app.py')))
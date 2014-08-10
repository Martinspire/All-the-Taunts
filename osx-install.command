#!/bin/bash
echo "Before installing, make sure you have Ruby, NodeJS and Git installed. Ruby comes preinstalled on OSX and git will probably work too."
echo "If not, use installers from http://rubyinstaller.org and http://nodejs.org. When installing make sure that 'add ruby to PATH' and 'add NodeJS to PATH' are selected. You can check if they are installed by running 'ruby' or 'node' or 'git' in your terminal"
sudo gem install sass --no-ri --no-rdoc
sudo npm install -g supervisor
sudo npm install -g bower
sudo npm install -g grunt-cli
here="`dirname \"$0\"`"
echo "cd-ing to $here"
cd "$here" || exit 1
sudo npm install
echo "bower install"
node_modules/.bin/bower install
echo "All done!"
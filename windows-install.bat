@echo off
@echo Before installing, make sure you have Ruby, NodeJS and Git installed. 
@echo If not, use installers from http://rubyinstaller.org for ruby, http://nodejs.org for node and http://msysgit.github.io for git.
@echo  
@echo When installing Git, make sure you select "Run Git from Windows Command Prompt" when asked for "Adjusting your PATH enviroment"
@echo When installing Ruby make sure that 'add ruby to PATH' is selected.
@echo When installing NodeJS make sure that 'add NodeJS to PATH' is selected.
@echo  
@echo You can check if they are installed by running 'ruby' or 'node' in your console. Be sure to restart your computer after installing Ruby, Node and Git.
@echo 
pause
call gem install sass --no-ri --no-rdoc
call npm install -g grunt-cli
call npm install -g bower
call npm install -g supervisor
call npm update
set here=%cd%
@echo cd-ing to %here%
cd %here%
call npm install
call bower install
@echo All done!
pause
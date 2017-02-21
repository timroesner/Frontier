@ECHO OFF
IF NOT "%~f0" == "~f0" GOTO :WinNT
@"C:\Ruby23-x64\bin\ruby.exe" "C:/Users/Kyle/Dropbox/Frontier/vendor/bundle/ruby/2.3.0/bin/sass-convert" %1 %2 %3 %4 %5 %6 %7 %8 %9
GOTO :EOF
:WinNT
@"C:\Ruby23-x64\bin\ruby.exe" "%~dpn0" %*

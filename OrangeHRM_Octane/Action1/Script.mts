'Open Application
'systemutil.CloseProcessByName "chrome.exe"
'SystemUtil.Run "chrome.exe","https://opensource-demo.orangehrmlive.com/index.php/auth/login"
'Browser("Browser").Sync

'systemutil.CloseProcessByName "iexplore.exe"

SystemUtil.Run"iexplore.exe","https://opensource-demo.orangehrmlive.com/index.php/auth/login"
Browser("Browser").Sync


Wait 1,1
'Login
Browser("Browser").Page("Page").WebEdit("txtUsername").Set "admin"
Browser("Browser").Page("Page").WebEdit("txtPassword").Set "admin123"
Browser("Browser").Page("Page").WebButton("LOGIN").Click

Wait 1,1



Browser("OrangeHRM").Page("OrangeHRM").Link("PIM").Click

Browser("OrangeHRM").Page("OrangeHRM").Link("Employee List").Click

Browser("OrangeHRM").Page("OrangeHRM").WebEdit("empsearch[id]").Set "0001"
Browser("OrangeHRM").Page("OrangeHRM").WebButton("Search").Click

Browser("OrangeHRM").Page("OrangeHRM").Link("Welcome Admin").Click



Browser("OrangeHRM").Page("OrangeHRM").Link("Logout").Click
browser("Browser").CloseAllTabs @@ hightlight id_;_131102_;_script infofile_;_ZIP::ssf5.xml_;_

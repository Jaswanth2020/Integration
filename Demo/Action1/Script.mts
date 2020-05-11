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

Wait 1,5



Browser("OrangeHRM").Page("OrangeHRM").Link("PIM").Click
Wait 1,5
Browser("OrangeHRM").Page("OrangeHRM").Link("Employee List").Click
Wait 1,5

Browser("OrangeHRM").Page("OrangeHRM").WebEdit("empsearch[id]").Set "0001"
Wait 1,5
Browser("OrangeHRM").Page("OrangeHRM").WebButton("Search").Click
Wait 1,5
Browser("OrangeHRM").Page("OrangeHRM").Link("Welcome Admin").Click
Wait 1,5


Browser("OrangeHRM").Page("OrangeHRM").Link("Logout").Click
Wait 1,5
browser("Browser").CloseAllTabs @@ hightlight id_;_131102_;_script infofile_;_ZIP::ssf5.xml_;_


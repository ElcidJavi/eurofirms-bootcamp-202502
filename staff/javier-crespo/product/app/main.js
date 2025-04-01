var body = document.querySelector('body')
 
 //metemos el contenido de cada pagina en una funcion y despues la invocamos
 function buildLandingView() {
     //crear un div para la pagina de landing view
     var landingView = document.createElement('div')
 
     //crear el logo: 1. crear etiqueta html, 2. crear texto, 3. poner texto dentro de etiqueta
     var logoHeading = document.createElement('h1')
     var logoText = document.createTextNode('Logo')
     logoHeading.appendChild(logoText)
     //ensamblar logoHeading dentro de landingView
     landingView.appendChild(logoHeading) 
 
     //crear "Register": 1. etiqueta html (con attr), 2. texto, 3. poner texto en etiqueta
     var registerLink = document.createElement('a')
     registerLink.href = "#"
     var registerText = document.createTextNode('Register')
     registerLink.appendChild(registerText)
     //ensamblar Register en div landingView
     landingView.appendChild(registerLink)
 
     //crear "or" y ensamblar en div landingView ya que es hijo directo de este elemento
     var orText = document.createTextNode(' or ')
     landingView.appendChild(orText)
 
     //crear "Login": 1. etiqueta html (con attr), 2.texto link, 3. texto dentro de etiqueta
     var loginLink = document.createElement('a')
     loginLink.href = '#'
     var loginText = document.createTextNode('Login')
     loginLink.appendChild(loginText)
     //ensamblar Login en div landingView
     landingView.appendChild(loginLink)
 
     return landingView
 }
 
  function buildRegisterView() {
     var registerView = document.createElement('div')
 
    
     var logoHeading = document.createElement('h1')
     var logoText = document.createTextNode('Logo')
     logoHeading.appendChild(logoText)
     registerView.appendChild(logoHeading) 
 
    
     var registerForm = document.createElement('form')
 
     
     var nameLabel = document.createElement('label')
     nameLabel.htmlFor = 'name'
     var nameText = document.createTextNode('Name')
     nameLabel.appendChild(nameText)
     
     var nameInput = document.createElement('input')
     nameInput.type = 'text'
     nameInput.name = 'name'
    
     var nameField = document.createElement('div')
     nameField.appendChild(nameLabel)
     nameField.appendChild(nameInput)
     
     registerForm.appendChild(nameField)
 
     
     var emailLabel = document.createElement('label')
     emailLabel.htmlFor = 'email'
     var emailText = document.createTextNode('E-mail')
     emailLabel.appendChild(emailText)
     var emailInput = document.createElement('input')
     emailInput.type = 'text'
     emailInput.name = 'email'
     var emailField = document.createElement('div')
     emailField.appendChild(emailLabel)
     emailField.appendChild(emailInput)
     registerForm.appendChild(emailField)
 

     var usernameLabel = document.createElement('label')
     usernameLabel.htmlFor = 'username'
     var usernameText = document.createTextNode('Username')
     usernameLabel.appendChild(usernameText)
     var usernameInput = document.createElement('input')
     usernameInput.type = 'text'
     usernameInput.name = 'username'
     var usernameField = document.createElement('div')
     usernameField.appendChild(usernameLabel)
     usernameField.appendChild(usernameInput)
     registerForm.appendChild(usernameField)
 
     
     var passwordLabel = document.createElement('label')
     passwordLabel.htmlFor = 'password'
     var passwordText = document.createTextNode('Password')
     passwordLabel.appendChild(passwordText)
     var passwordInput = document.createElement('input')
     passwordInput.type = 'text'
     passwordInput.name = 'password'
     var passwordField = document.createElement('div')
     passwordField.appendChild(passwordLabel)
     passwordField.appendChild(passwordInput)
     registerForm.appendChild(passwordField)
 
     
     var button = document.createElement('button')
     var buttonText = document.createTextNode('Register')
     button.appendChild(buttonText)
     button.type = 'submit'
     registerForm.appendChild(button)
 
     
     var loginLink = document.createElement('a')
     loginLink.href = '#'
     var loginLinkText = document.createTextNode('Login')
     loginLink.appendChild(loginLinkText)
     registerForm.appendChild(loginLink)
 
     registerView.appendChild(registerForm)
 
     return registerView
 }
 
 function buildLoginView() {
     var loginView = document.createElement('div')
 
     var logoHeading = document.createElement('h1')
     var logoText = document.createTextNode('Logo')
     logoHeading.appendChild(logoText)
     loginView.appendChild(logoHeading)
 
     var loginForm = document.createElement('form')
 
     var usernameLabel = document.createElement('label')
     usernameLabel.htmlFor = 'username'
     var usernameText = document.createTextNode('Username')
     usernameLabel.appendChild(usernameText)
     var usernameInput = document.createElement('input')
     usernameInput.type = 'text'
     usernameInput.name = 'username'
     var usernameField = document.createElement('div')
     usernameField.appendChild(usernameLabel)
     usernameField.appendChild(usernameInput)
     loginForm.appendChild(usernameField)
 
     var passwordLabel = document.createElement('label')
     passwordLabel.htmlFor = 'password'
     var passwordText = document.createTextNode('Password')
     passwordLabel.appendChild(passwordText)
     var passwordInput = document.createElement('input')
     passwordInput.type = 'text'
     passwordInput.name = 'password'
     var passwordField = document.createElement('div')
     passwordField.appendChild(passwordLabel)
     passwordField.appendChild(passwordInput)
     loginForm.appendChild(passwordField)
 
     var button = document.createElement('button')
     var buttonText = document.createTextNode('Login')
     button.appendChild(buttonText)
     button.type = 'submit'
     loginForm.appendChild(button)
 
     var registerLink = document.createElement('a')
     registerLink.href = '#'
     var registerLinkText = document.createTextNode('Register')
     registerLink.appendChild(registerLinkText)
     loginForm.appendChild(registerLink)
 
     
     loginView.appendChild(loginForm)
 
     return loginView
 }
 
 function buildHomeView() {
     var homeView = document.createElement('div')
 
     var logoHeading = document.createElement('h1')
     var logoText = document.createTextNode('Logo')
     logoHeading.appendChild(logoText)
     homeView.appendChild(logoHeading)
 
     var headingHome = document.createElement('h2')
     var headingHomeText = document.createTextNode('Hello, Home!')
     headingHome.appendChild(headingHomeText)
     homeView.appendChild(headingHome)
 
     return homeView
 }
 

 var landingView = buildLandingView()
 body.appendChild(landingView)
 
 var registerView = buildRegisterView()
 body.appendChild(registerView)
 
 var loginView = buildLoginView()
 body.appendChild(loginView)
 
 var homeView = buildHomeView()
 body.appendChild(homeView) 
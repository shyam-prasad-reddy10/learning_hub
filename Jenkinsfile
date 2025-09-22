pipeline {
    agent any

    tools {
        jdk 'JDK_HOME'
        maven 'MAVEN_HOME'
    }

    environment {
        BACKEND_DIR = 'LearningHub_back'
        FRONTEND_DIR = 'LearningHub_front'

        TOMCAT_HOME = 'C:\\apache-tomcat-9.0.96'
        BACKEND_WAR = 'lhubback.war'
        FRONTEND_WAR = 'lhubfront.war'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/shyam-prasad-reddy10/learning_hub.git', branch: 'main'
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    script {
                        def nodeHome = tool name: 'NODE_HOME', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                        env.PATH = "${nodeHome}\\;${nodeHome}\\bin;${env.PATH}"
                    }
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Package Frontend as WAR') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    bat '''
                        if not exist lhubfront_war mkdir lhubfront_war
                        xcopy build\\* lhubfront_war\\ /E /I /Y
                        jar -cvf ..\\..\\%FRONTEND_WAR% -C lhubfront_war .
                    '''
                }
            }
        }

        stage('Build Backend (Spring Boot WAR)') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    bat 'mvn clean package -DskipTests'
                    bat "copy target\\*.war ..\\..\\%BACKEND_WAR% /Y"
                }
            }
        }

        stage('Deploy Backend to Tomcat (/lhubback)') {
            steps {
                bat "copy %BACKEND_WAR% %TOMCAT_HOME%\\webapps\\%BACKEND_WAR% /Y"
            }
        }

        stage('Deploy Frontend to Tomcat (/lhubfront)') {
            steps {
                bat "copy %FRONTEND_WAR% %TOMCAT_HOME%\\webapps\\%FRONTEND_WAR% /Y"
            }
        }
    }

    post {
        success {
            echo "✅ Backend deployed: http://localhost:9090/lhubback"
            echo "✅ Frontend deployed: http://localhost:9090/lhubfront"
        }
        failure {
            echo "❌ Build or deployment failed"
        }
    }
}

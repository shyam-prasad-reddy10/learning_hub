pipeline {
    agent any

    tools {
        jdk 'JDK_HOME'
        maven 'MAVEN_HOME'
    }

    environment {
        BACKEND_DIR = 'LearningHub_back'
        FRONTEND_DIR = 'LearningHub_front'

        TOMCAT_URL = 'http://localhost:9090/manager/text'
        TOMCAT_USER = 'admin'
        TOMCAT_PASS = 'admin'

        BACKEND_WAR = "${WORKSPACE}\\lhubback.war"
        FRONTEND_WAR = "${WORKSPACE}\\lhubfront.war"
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
                    bat 'npm install'
                    // prevent ESLint warnings from breaking build
                    bat 'set "CI=false" && npm run build'
                }
            }
        }

        stage('Package Frontend as WAR') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    bat """
                        mkdir lhubfront_war
                        mkdir lhubfront_war\\WEB-INF
                        xcopy /E /I /Y build lhubfront_war
                        jar -cvf ${FRONTEND_WAR} -C lhubfront_war .
                    """
                }
            }
        }

        stage('Build Backend (Spring Boot WAR)') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    bat 'mvn clean package -DskipTests'
                    bat "copy target\\*.war ${BACKEND_WAR}"
                }
            }
        }

        stage('Deploy Backend to Tomcat (/lhubback)') {
            steps {
                bat """
                    curl -u %TOMCAT_USER%:%TOMCAT_PASS% ^
                      --upload-file "%BACKEND_WAR%" ^
                      "%TOMCAT_URL%/deploy?path=/lhubback&update=true"
                """
            }
        }

        stage('Deploy Frontend to Tomcat (/lhubfront)') {
            steps {
                bat """
                    curl -u %TOMCAT_USER%:%TOMCAT_PASS% ^
                      --upload-file "%FRONTEND_WAR%" ^
                      "%TOMCAT_URL%/deploy?path=/lhubfront&update=true"
                """
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

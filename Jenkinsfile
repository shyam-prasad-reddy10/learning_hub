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

        stage('Clean Backend Build') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    bat 'if exist target rmdir /S /Q target'
                    bat "if exist ${BACKEND_WAR} del /F /Q ${BACKEND_WAR}"
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    bat 'npm ci'
                    bat 'set "CI=false" && npm run build'
                }
            }
        }

        stage('Clean Frontend WAR Folder') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    bat 'if exist lhubfront_war rmdir /S /Q lhubfront_war'
                }
            }
        }

        stage('Package Frontend as WAR') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    bat """
                        mkdir lhubfront_war
                        mkdir lhubfront_war\\WEB-INF

                        REM Copy build files
                        xcopy /E /I /Y build lhubfront_war

                        REM Check if web.xml exists and copy
                        if exist web.xml (
                            echo web.xml found — copying to WEB-INF
                            copy web.xml lhubfront_war\\WEB-INF\\web.xml
                        ) else (
                            echo ERROR: web.xml not found in ${env.FRONTEND_DIR}
                            exit /b 1
                        )

                        REM Create WAR
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
                    curl -u %TOMCAT_USER%:%TOMCAT_PASS% --upload-file "%BACKEND_WAR%" "%TOMCAT_URL%/deploy?path=/lhubback&update=true"
                """
            }
        }

        stage('Deploy Frontend to Tomcat (/lhubfront)') {
            steps {
                bat """
                    curl -u %TOMCAT_USER%:%TOMCAT_PASS% --upload-file "%FRONTEND_WAR%" "%TOMCAT_URL%/deploy?path=/lhubfront&update=true"
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

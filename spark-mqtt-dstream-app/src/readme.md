mvn archetype:generate -DgroupId=com.iot.streaming -DartifactId=spark-mqtt-dstream-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

mvn package

java -cp target/spark-mqtt-dstream-app-1.0-SNAPSHOT.jar com.iot.streaming.App

https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html

https://maven.apache.org/guides/getting-started/index.html
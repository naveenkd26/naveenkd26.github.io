package com.iot.streaming;
import java.util.Arrays;
import java.util.Iterator;

import org.apache.spark.*;
import org.apache.spark.api.java.function.*;
import org.apache.spark.streaming.*;
import org.apache.spark.streaming.api.java.*;
import scala.Tuple2;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        SparkConf conf = new SparkConf().setMaster("local[2]").setAppName("NetworkWordCount");
        JavaStreamingContext jssc = new JavaStreamingContext(conf, Durations.seconds(1));
        
        // Create a DStream that will connect to hostname:port, like localhost:9999
        JavaReceiverInputDStream<String> lines = jssc.socketTextStream("localhost", 9999);
        
        // Split each line into words
        JavaDStream<String> words = lines.flatMap(
          new FlatMapFunction<String, String>() {
            public Iterator<String> call(String x) {
              return Arrays.asList(x.split(" ")).iterator();
            }
          });
        
        // Count each word in each batch
        JavaPairDStream<String, Integer> pairs = words.mapToPair(
          new PairFunction<String, String, Integer>() {
            public Tuple2<String, Integer> call(String s) {
              return new Tuple2<>(s, 1);
            }
          });
        JavaPairDStream<String, Integer> wordCounts = pairs.reduceByKey(
          new Function2<Integer, Integer, Integer>() {
            public Integer call(Integer i1, Integer i2) {
              return i1 + i2;
            }
          });
        
        // Print the first ten elements of each RDD generated in this DStream to the console
        wordCounts.print();
        
        try {
            jssc.start();              // Start the computation
			jssc.awaitTermination();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}   // Wait for the computation to terminate
        
    }
}

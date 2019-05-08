package com.capgemini.moviecatlogeurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class MovieCatlogEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieCatlogEurekaServerApplication.class, args);
	}

}

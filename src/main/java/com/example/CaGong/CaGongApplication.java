package com.example.CaGong;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CaGongApplication {

	public static void main(String[] args) {
		SpringApplication.run(CaGongApplication.class, args);
	}

}

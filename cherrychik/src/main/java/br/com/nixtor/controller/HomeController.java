package br.com.nixtor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	//@RequestMapping("/")
	public String getHome() {
		System.out.println("vsfffff");
		return "home";
	}
	
}
